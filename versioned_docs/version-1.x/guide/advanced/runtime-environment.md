---
description: Introduction to the runtime environment of the plugin in the ONES system.
---

# Runtime Environment

This section will introduce the runtime environment of the plugin in the ONES system. You can read this section to know the actual runtime environment of the plugin so that you can know the boundaries of how the plugin is written.

## Backend

ONES Open Platform Node.js HOST provides a sandbox environment for plugin backends based on [VM2](https://github.com/patriksimek/vm2), where plugin lifecycle methods and any ability methods are called up and executed by the HOST after receiving messages from the Open Platform.

:::caution
We **strongly discourage you from using in-memory operations** (global variables, etc.). The Open Platform provides a backend plugin system based on method-level calls (class [FaaS](https://en.wikipedia.org/wiki/Function_as_a_service) mode), and the Open Platform internal scheduling may perform restarts and other operations on the plugin, so memory operations are very unreliable.
:::

Node.js Host provides a relatively loose sandbox environment, and does not restrict the use of Node.js native modules much, but supports plugins in full with `builtin: ['*']`.

:::caution
The native modules that the plugin can get are still a subset of those provided by Node.js, because [VM2](https://github.com/patriksimek/vm2) will automatically get rid of unsafe modules or methods, such as the `process.exit` method.
:::

We configured the [TypeScript](https://www.typescriptlang.org/) template with [ESM](https://tc39.es/ecma262/#sec-modules) writing in the plugin template, but this does not mean that the final runtime environment of the plugin supports [ESM](https://tc39.es/ecma262/#sec-modules).

The plugin backend builder will [Tree Shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) and package your code and the code from the [ESM](https://tc39.es/ecma262/#sec-modules) library referenced by `import` into the `/backend/dist` directory to eliminate any [ESM](https://tc39.es/ecma262/#sec-modules) syntax from your code. Thus.

:::caution
For pure [ESM](https://tc39.es/ecma262/#sec-modules) exported libraries, `require` references are **not supported**.
:::

:::caution
For libraries exported by default [ESM](https://tc39.es/ecma262/#sec-modules) (package.json `main` field entry file is in [ESM](https://tc39.es/ecma262/#sec-modules) format), `require` references are also **not supported** for now.
:::
