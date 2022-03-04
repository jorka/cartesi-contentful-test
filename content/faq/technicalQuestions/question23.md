---
question: What is "Reproducibility" in Cartesi, does it really work for reproducibility within a Linux OS and VM?
section: Technical Questions
---

Cartesi implements a self-contained and deterministic VM that emulates a RISC-V architecture. That means that given a specification of the initial state of the VM (e.g. input data and program to run) and considering a given number of steps of processing, the VM state advances precisely in the same way, regardless of the system hosting the VM.

RISC-V is an open instruction set architecture that was designed from the ground up to support a modern operating system. It is not much more complex than a smart-contract VM. It's just better suited for the purpose of running real-world programs on top of an OS. The Linux kernel and several Linux distributions (and other OSes!) have already been ported to it. There are mature compilers. It is a much better match for the problem that Cartesi is trying to solve: bringing real-world computations to the blockchain.

A little primer about RISC-V: RISC-V (pronounced "risk-five") is an open-source hardware instruction set architecture (ISA) based on established reduced instruction set computer (RISC) principles. The project began in 2010 at the University of California, Berkeley, but many contributors are volunteers not affiliated with the university.