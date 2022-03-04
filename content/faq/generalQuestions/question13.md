---
question: Are there any other important design distinctions with Truebit?
section: General Questions
---

Yes. One of the differences of greatest consequence is in how Cartesi aligns the interest in off-chain computations with the responsibility for their execution. In TrueBit, there is no such alignment. A smart contract posts the computation to a pool of untrusted parties and waits for one of them to perform it off-chain and post the result back. In this sense, TrueBit can be seen as a means for increasing the computational power of individual smart contracts. Cheating is prevented with a complex incentive layer that rewards pool members for successively disputing incorrect results. To keep the members engaged, computations with incorrect results must be artificially injected by the incentive layer. This inefficiency is a fundamental part of the design of TrueBit.

Conversely, Cartesi can be seen as a way for off-chain computations to be endorsed by a smart contract. All parties that could be affected by this endorsement are responsible for performing the computation off-chain and, if needed, starting a dispute. Although the ensuing verification can be outsourced to a dispute resolution market, there is no built-in inefficiency and no need for an incentive layer.