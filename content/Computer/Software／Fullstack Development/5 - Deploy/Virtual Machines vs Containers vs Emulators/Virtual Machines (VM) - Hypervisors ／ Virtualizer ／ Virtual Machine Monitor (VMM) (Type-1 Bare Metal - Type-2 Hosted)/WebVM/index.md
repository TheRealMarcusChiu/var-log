---
title: "WebVM"
created: 2026-06-13T12:09:58.188-05:00
modified: 2026-06-13T12:16:41.975-05:00
parent: "[[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)]]"
children: []
---
###### WebVM
````excerpt
- a [[Linux]] [[Virtual Machines (VM) - Hypervisors ／ Virtualizer ／ Virtual Machine Monitor (VMM) (Type-1 Bare Metal - Type-2 Hosted)|virtual machine]] that runs in your [[Web (HTTP) Clients／Browsers|browser]]
- is a server-less virtual environment running fully client-side in HTML5/[[WebAssembly (WASM)|WebAssembly]]
- it's designed to be Linux ABI-compatible and runs an unmodified [[Debian]] distribution including many native development toolchains
- is powered by the CheerpX virtualization engine, which provides:
	- [[x86-64 - x64 - AMD64 - Intel 64|x86]]-to-WebAssembly JIT [[Translator - Transcompiler／Transpiler - (Ahead-of-Time AOT - Just-in-Time JIT) Compiler - Interpreter - Assembler - Linker - Loader|compiler]]
	- Virtual block-based [[Disk (Format - Filesystems／File-Systems (FS))|file system]]
	- Linux syscall emulator
	- Safe, sandboxed client-side execution
````
^excerpt

# Resources
- [https://github.com/leaningtech/webvm](https://github.com/leaningtech/webvm)
- headless linux -[https://webvm.io/](https://webvm.io/)
- [[Alpine]] - [https://webvm.io/alpine.html](https://webvm.io/alpine.html)
