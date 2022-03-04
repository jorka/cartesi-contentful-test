---
question: What is the difference between Cartesi and Truebit?
section: General Questions
---

Cartesi is quite similar to TrueBit at first glance, but they differ vastly in their design decisions. The first major difference between TrueBit and Cartesi concerns the virtual machine itself; TrueBit’s virtual machine is based on WebAssembly (WASM). WASM is the W3C Community Group’s Instruction Set Architecture (ISA) for efficient web applications, while Cartesi’s virtual machine implements the RISC-V ISA.

TrueBit’s technology focuses on boosting the computational power for smart contracts, which operate under a bare-bones runtime environment. However, as we said earlier, the applications that we use on the Web or our devices don't exist in isolation. Instead, they stand on top of an operating system and depend on numerous software components that evolved throughout decades. Our architectural choice enables Cartesi computations to run on a proper operating system. In this environment, DApps are built with mainstream software stacks, which allows for vast new possibilities, besides being easier to code and with much lower entry barrier for professionals.