# Authorization

## Summary

Authorization is a PHP library for defining permissions and granting them through roles. You define **permissions**, group them into **roles**, and assign roles to participants through a bit mask. Each role gets a unique bit (a power of two), and participant's roles are combined into a single integer. Checking whether a participant is allowed to do something then becomes a fast bitwise operation instead of a database lookup or a loop over role names.

The core building blocks are:

- **Permission**: a single allowed action, such as `post.edit`.
- **Role**: a named bit that grants one or more permissions, and can inherit permissions from other roles.
- **Roles**: a collection of Role objects.
- **RolesMask**: builds the mapping between permissions and role bit masks, and performs the actual checks.

## Installing

Authorization is available through [Packagist](https://packagist.org/packages/chevere/authorization) and the repository source is at [chevere/authorization](https://github.com/chevere/authorization).

```sh
composer require chevere/authorization
```

## Quick Start

```php
use Chevere\Authorization\Role;
use Chevere\Authorization\Roles;
use Chevere\Authorization\RolesMask;

$userRole = new Role(
    4, // bit power of two: 1, 2, 4, 8...
    'user', // name
    'post.draft', // permission granted as a string
    PostPermission::View // permission granted via enum
);

$editorRole = new Role(
    2,
    'editor',
    $userRole, // inherits all permissions from $userRole
    PostPermission::Edit,
    PostPermission::Create
);

$adminRole = new Role(
    1,
    'admin',
    ...PostPermission::permissions(),
    ...UserPermission::permissions(),
    ...EditorPermission::permissions()
);

$roles = new Roles($adminRole, $editorRole, $userRole);
$rolesMask = new RolesMask($roles);

// Assert a bit mask has a given permission (throws if not)
$rolesMask->__invoke($bitmask, ...$permission);

// Or check without throwing
$bool = $rolesMask->contains($bitmask, ...$permission);
```

## Permission

Permission argument allows for a string, a `PermissionInterface` instance, or a backed enum representing the permission. The `PermissionInterface` adds the methods `value()` and `permissions(): PermissionsInterface`, can be implemented with `PermissionTrait`.

```php
use Chevere\Authorization\Interfaces\PermissionInterface;
use Chevere\Authorization\Traits\PermissionTrait;

enum PostPermission: string implements PermissionInterface
{
    use PermissionTrait;

    case Create = 'post.create';
    case Delete = 'post.delete';
    case Edit = 'post.edit';
    case View = 'post.view';
}
```

## Role

A `Role` is defined by three components:

1. A **bit**, which must be a power of two.
2. A **name**.
3. One or more **permissions**, and/or other **roles** to inherit from.

If a role inherits from another role, it gains all of that role's permissions on top of its own.

```php
use Chevere\Authorization\Role;

$userRole = new Role(
    4,
    'user',
    'post.draft',
    PostPermission::View
);

$editorRole = new Role(
    2,
    'editor',
    $userRole, // inherits everything $userRole can do
    PostPermission::Edit,
    PostPermission::Create
);
```

### Role bit

Use method `bit()` to get the role's own bit value.

```php
$userRole->bit(); // 4
$editorRole->bit(); // 2
```

### Role name

Use method `name()` to get the role's name.

```php
$userRole->name(); // 'user'
$editorRole->name(); // 'editor'
```

### Role mask

Use method `mask()` to get the role's own bit combined with the bits of any inherited role(s).

```php
$userRole->mask(); // 4
$editorRole->mask(); // 6 (2 | 4, since $editor inherits from $userRole)
```

### Role inherits

Use method `inherits()` to get the list of roles this role inherits from.

```php
$userRole->inherits(); // []
$editorRole->inherits(); // [$userRole]
```

### Role permissions

Use method `permissions()` to get every permission the role has, including inherited ones.

```php
$userRole->permissions(); // ['post.draft', PostPermission::View]
$editorRole->permissions(); // ['post.draft', PostPermission::View, PostPermission::Edit, PostPermission::Create]
```

### Role grants

Use method `grants()` to get only the permissions the role adds itself, excluding anything inherited.

```php
$userRole->grants(); // ['post.draft', PostPermission::View]
$editorRole->grants(); // [PostPermission::Edit, PostPermission::Create]
```

## Assigning Role(s) to an user

To assign one or more roles to an user, sum up the bits of the roles they belong to. This sum is the user's bit mask.

```php
$marketingRole = new Role(16, 'marketing', ...);
$staffRole = new Role(8, 'staff', ...);

// An user with just the "staff" role
$staffUser = $user->setBitmask($staffRole->bit());

// An user with both "staff" and "marketing" roles
$comboUser = $user->setBitmask(
    $staffRole->bit() | $marketingRole->bit()
);
```

## Roles

`Roles` is a collection of `Role` objects. It checks for duplicate bits or names when created, and computes the combined mask of every role it holds.

```php
use Chevere\Authorization\Roles;

$roles = new Roles($userRole, $adminRole, $editorRole);
```

### Roles mask

Use method `mask()` to get the sum of every role's bit in the collection.

```php
$roles->mask(); // 7 (1 | 2 | 4)
```

### Roles find

Use method `find()` to look up a role by its name.

```php
$roles->find('admin'); // $adminRole
```

### Roles has

Use method `has()` to check whether the collection contains role(s) matching the given mask(s) or bit(s).

```php
$roles->has(2); // true, because $adminRole has bit 2
$roles->has(1, 2); // true, both bits are present
$roles->has(3); // true, 3 = 1 | 2
```

### Roles get

Use method `get()` to retrieve a role by its bit value.

```php
$roles->get(2); // $adminRole
```

### Roles forMask

Use method `forMask()` to get every role that is part of a given bit mask.

```php
$roles->forMask(1 | 2); // Roles containing $userRole (bit 1) and $adminRole (bit 2)
$roles->forMask(3); // Same result, since 3 = 1 | 2
```

### Roles permissions

Use method `permissions()` to get every permission granted across all roles in the collection.

```php
$roles->permissions();
```

This returns a `Permissions` object that can be used to check for specific permissions across all roles.

```php
$roles->permissions()->contains('post.draft'); // true
$roles->permissions()->contains('not.exists'); // false
```

## RolesMask

`RolesMask` builds a lookup table that maps each permission to the combination of role bits that grant it. Once built, checking whether a participant's bit mask satisfies a permission is a simple bitwise comparison.

```php
use Chevere\Authorization\RolesMask;

$rolesMask = new RolesMask($roles);
```

### Assert permission

Use method `__invoke()` to assert a permission. Throws an exception if the given mask does not have the required permission(s).

```php
$rolesMask($mask, ...$permission);
$rolesMask->__invoke(1, PostPermission::Create); // pass
$rolesMask->__invoke(2, PostPermission::Delete); // throws
```

### Contains permission

Use method `contains()` to get a boolean indicating whether the given mask has the required permission(s).

```php
$bool = $rolesMask->contains($mask, ...$permission);
```

## Limitations

Role bits are stored in as a unique integer power of two, which caps this system at **63 combinable roles** (2<sup>63</sup> − 1).
