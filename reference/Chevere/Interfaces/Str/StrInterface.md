# StrInterface

`Chevere\Interfaces\Str\StrInterface`

[view source](https://github.com/chevere/chevere/blob/master/interfaces/Str/StrInterface.php)

## Methods

### __construct()

**Parameters**

1. string `$string`

---

### toString()

::: tip RETURN
string
:::


---

### lowercase()

Lowercase string UTF-8

::: tip RETURN
StrInterface
:::


---

### uppercase()

Uppercase string UTF-8

::: tip RETURN
StrInterface
:::


---

### stripWhitespace()

Strip whitespaces from string.

::: tip RETURN
StrInterface
:::


---

### stripExtraWhitespace()

Strip extra whitespace from string.

::: tip RETURN
StrInterface
:::


---

### stripNonAlphanumerics()

Strip non-alphanumeric chars from string.

::: tip RETURN
StrInterface
:::


---

### forwardSlashes()

Converts backslash into forward slashes.

::: tip RETURN
StrInterface
:::


---

### leftTail()

Prepends a string with a tail string, without repeats.

**Parameters**

1. string `$tail`

::: tip RETURN
StrInterface
:::


---

### rightTail()

Appends a tail to string, without repeats.

**Parameters**

1. string `$tail`

::: tip RETURN
StrInterface
:::


---

### replaceFirst()

Replace the first occurrence of the search string with the replacement
string.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
StrInterface
:::


---

### replaceLast()

Replace the last occurrence of the search string with the replacement string.

**Parameters**

1. string `$search`
2. string `$replace`

::: tip RETURN
StrInterface
:::


---

### stripANSIColors()

Removes CLI color format.

::: tip RETURN
StrInterface
:::


---

