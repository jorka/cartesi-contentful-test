---
question: Could you clarify whether we should be worried about the huge attack vectors surrounding traditional a Linux development environment running on Cartesi Nodes?
section: Technical Questions
---

We will ensure a high level of security in Cartesi due to the following:

1. The nodes cannot talk to each other at the current stage, however, they can do this through the blockchain. Later on, we will implement a verified networking port in the Nodes which allows for secure timely data.  
2. The native DApp components run inside individual containers.
3. The reproducible DApp components run inside an emulator within these containers.