# Plugs

Plugs are classes defining extra functionality, requiring to comply with the pluggable anchor where it applies, the class name which accepts to plug and the priority in which it must run.

> 🧔🏾 Plugs are designed to be short sets of instructions that should be executed without persistent memory and decoupled as possible from the application.

## Event Listener

An Event Listener implements [EventListenerInterface](../reference/Chevere/Interfaces/Plugin/Plugs/EventListener/EventListenerInterface.md) and is a type of plug that fires when something took place.

::: tip Learn by Example
Check the Event [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#03eventphp) to learn directly playing with code.
:::

## Hook

A hook implements [HookInterface](../reference/Chevere/Interfaces/Plugin/Plugs/Hooks/HookInterface.md) and is a type of plug that alters a variable.

::: tip Learn by Example
Check the Hook [example](https://github.com/chevere/examples/tree/master/00.HelloWorld#02hookphp) to learn directly playing with code.
:::
