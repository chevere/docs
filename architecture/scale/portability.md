# Portability

Everything in Chevere is made to be portable, to rely in _compiled_ PHP variables at production runtime. This not only saves the processing time of creating these resources, it also allows to spawn the application across multiple different optimized machines.

There are advantages and caveats that must be addressed around this concept.

## Why it matters?

Being portable is the ability to run a software under different environments. For example, you could have a high intensive CPU task running in a machine specially made for that requirement rather than all together in the same machine.

> 🧔🏾 Your application and states are the same, what changes is the base stack. With Chevere you crate _distributed_ applications that can run in several places.

### We have been there!

It happens that in systems with a trend to large client usage (like happens to [Chevereto](https://chevereto.com/)), you really want to squeeze every machine resource because it will make the difference on the monthly hosting bill. In most cases, that bill will limit the grow of your application.

## Caveats

Although all the code is made to be portable, at the end it will depend on your concrete implementation how portable it will be.

This is a list with the caveats of creating a portable application.

* Requires synchronization among machines
* Can't cache type `resource`
* Needs a shared layer for `DB` and `sessions`
* Implies the use of `RPC`, `sockets`, `queues`, etc
* Your stuff should be immutable

> 🧔🏾 Don't panic! I will create Chevereto V4 and document how to achieve all the above.
