---
title: Overview
---

Cartesi's reference off-chain implementation of Cartesi Machines is based on software emulation.
The emulator is written in C/C++ with POSIX dependencies restricted to the terminal, process, and memory-mapping facilities.
It is written as a C++ library, but can be accessed in a variety of different ways.

When linked to a C++ application, the emulator can be controlled directly via the interface of the `cartesi::machine` class.
The emulator can also be accessed from the Lua programming language, via a `cartesi` module that exposes a `cartesi.machine` interface to Lua programs, mirroring the C++ interface.
Additionally, Cartesi provides a gRPC server that can be run to control a Cartesi Machine instance remotely.
This server exposes a higher-level interface better suited for the verification process, including the ability to create in-memory snapshots of the current machine state so that later modifications can be rolled back.
Finally, there is a command-line utility (written in Lua) that can configure and run Cartesi Machines for rapid prototyping.
The `emulator/` directory in the [Emulator SDK](https://github.com/cartesi/machine-emulator-sdk) can be used to build and install the Cartesi Machine emulator.
The emulator can then be used via any of these methods.

The documentation starts from the command-line utility, `cartesi-machine`.
This utility is used for most prototyping tasks.
The documentation then covers the Lua interface of `cartesi.machine`.
The C++ interface is very similar, and is covered only within its reference manual.
The same is true of the gRPC interface, used to control an emulator remotely.

## What's in a machine

Cartesi Machines are separated into a processor and a board.
The processor performs the computations, executing the traditional fetch-execute loop while maintaining a variety of registers.
The board defines the surrounding environment with an assortment of memories (ROM, RAM, flash drives) and a number of devices.
Memories and devices are mapped to the 64-bit physical address space of the Cartesi Machine.
The amount of RAM, as well as the number, length, and position of the flash drives in the address space can be chosen according to the needs of each particular application.

In a typical scenario, a Cartesi Machine is initialized and then run until it halts.
At a minimum, the initialization process loads a ROM image, a RAM image, and a root file-system (as a flash drive) from regular files in the host file-system.
Execution starts from the ROM image, which contains a simple program that creates a description of the machine organization for the Linux kernel.
The ROM image `rom.bin` can be built in the `rom/` directory in the Emulator SDK.
The Linux kernel itself resides in the RAM image `linux.bin`, built in the `kernel/` directory in the Emulator SDK.
After it is done with its own initialization, the Linux kernel cedes control to the `/sbin/init` program in the root file-system.
The root file-system `rootfs.ext2` contains all the data files and programs that make up an embedded Linux distribution.
It can be built in the `fs/` directory in the Emulator SDK.
The DApp components can reside in the root file-system itself, or in their own, separate file-system.
Additional flash drives can be used as the DApp input and output, either containing file-systems or containing raw data.
The emulator can be instructed to execute whatever computation the DApp wishes to perform inside the Cartesi Machine.
For a complete description of the Cartesi Machine architecture and the boot process, see the documentation for [the target perspective](../../target/overview/).

## Machine playground

The setup of a new development environment is often a time-consuming task.
This is particularly true in case of cross-development environments (i.e., when the development happens in a host platform but software runs in a different target platform).
With this in mind, the Cartesi team provides the `cartesi/playground` Docker image, which enables immediate experimentation with Cartesi Machines.
This comes with a pre-built emulator and Lua interpreter accessible within the command-line, as well as a pre-built ROM image, RAM image, and root file-system.
It also comes with the cross-compiler for the RISC-V architecture on which the Cartesi Machine is based.

To enter the playground, open a terminal, download the Docker image from Cartesi's repository, and run it adequately mapping the current user and group information, as well as making the host's current directory available inside the container:
```bash
$ docker pull cartesi/playground:0.3.0
$ docker run -it --rm -h playground \
    -e USER=$(id -u -n) \
    -e GROUP=$(id -g -n) \
    -e UID=$(id -u) \
    -e GID=$(id -g) \
    -v `pwd`:/home/$(id -u -n) \
    -w /home/$(id -u -n) \
    cartesi/playground:0.3.0 /bin/bash
```

Once inside, you can execute the `cartesi-machine` utility as follows:
```
playground:~$ cartesi-machine --help
%machine.host.overview.help
```

A final check can also be performed to verify if the contents inside the container are as expected:
```
playground:~$ md5sum /opt/cartesi/share/images/linux.bin
%machine.host.overview.md5-linux
playground:~$ md5sum /opt/cartesi/share/images/rom.bin
%machine.host.overview.md5-rom
playground:~$ md5sum /opt/cartesi/share/images/rootfs.ext2
%machine.host.overview.md5-rootfs
```
