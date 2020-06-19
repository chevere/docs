# Recommendations

- [Recommendations](#recommendations)
    - [🔌 Pluggable](#-pluggable)
    - [🎠 Stay in memory](#-stay-in-memory)
    - [📥 Message queues](#-message-queues)
    - [🤖 Headless](#-headless)
    - [🗿 Static generator](#-static-generator)

This specification should be considered as a **base recommendation** on how applications **could be** developed on top of Chevere. The following recommendations have been crafted taking in consideration the scope of the PHP programing language and availability of software assets.

> 👍🏾 As a rule of thumb, Chevere suits better this way because it was crafted for being used this way

### 🔌 Pluggable 

Chevere was made for creating pluggable applications, it is encouraged to _abuse_ it under that requirement. Pluggable is what defines Chevere in one sentence, don't hesitate to plug-in.

### 🎠 Stay in memory 

Prefer a stay in memory between requests, under a long-running daemonized process approach. This accounts for the application bootstrapping, dramatically increasing PHP performance.

Software like [Swoole](https://www.swoole.co.uk/), [ReactPHP](https://reactphp.org/), [RoadRunner](https://roadrunner.dev/), [Workerman](https://www.workerman.net/) and many others can be used to keep a base application state that is re-used among many requests.

> 🚧 I owe you examples. ―_Rodolfo_

### 📥 Message queues

Time expensive processes should be implemented under a queueing system, which notifies back once the process is completed. 

Software like [Bernard](https://bernard.readthedocs.io/index.html) can be used to interact with a [message broker](https://en.wikipedia.org/wiki/Message_broker).

> 🚧 I owe you the example. ―_Rodolfo_

### 🤖 Headless

Decouple the user interface by creating [headless software](https://en.wikipedia.org/wiki/Headless_software). The user interface should be considered _another_ application.

> 👍🏾 Chevere includes support for automatically generating headless REST APIs and its spec, which exposes the API interaction for consumers

### 🗿 Static generator

In cases where you need to present HTML it is encouraged to generate these files rather than have PHP serving every request. There is a large collection of static generators at [StaticGen](https://www.staticgen.com/).

> 🤔 Someone could also build a Chevere based static generator and became rich and famous