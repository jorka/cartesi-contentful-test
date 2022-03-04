---
question: What differences does Cartesi have with other Layer-1 solutions and layer 2 solutions? Why do you design this way?
section: General Questions
---

Some examples of Layer-1 solutions existing are:

- **DPoS:** Allows a small range of super nodes to verify all transactions, and these nodes are selected through democratic voting.
- **Sharding:** Sharing groups accounts as different “shards”, these independent shards will then be linked to the main chain for cross-shard settlement.
- **Varieties of BFT, PBFT:** Results in faster consensus compared to PoW, but with limited participants.

All of these innovations intent to boost transaction processing power of the blockchain, but inevitably, finalizations of these transactions will still require global consensus, and when the computational demands of smart contracts or the number of accounts interacting grow beyond a certain threshold, the cost to reach global consensus will grow in a super-linear way, even in sharding technology, making it severely restrictive or infeasible.

On the other hand, Cartesi only tries to reach local consensus for the computation itself. Only the users who are interested in a particular computation are responsible for performing the off-chain computation and for the on-chain settlement, thus solving these issues.

Nonetheless, these new layer-1 solutions can be integrated with Cartesi in order to combine the advantages of both.

**Comparison with Layer-2 solutions and Integrations:**  
A variety of Layer-2 solutions have also been proposed in order to improve the performance of blockchains, such as Plasma and State Channels. These allow a large number of transactions to be performed off-chain and then the proof of the transaction is submitted on-chain for settlement. Generally, these solutions require the blockchain to be able to resolve any possible disputes when Plasma exits, or when the state channel closes. In the worst case, heavy computations will be replayed on-chain, from the moment of channel opening. Obviously, this mechanism limits the maximum transaction volume or computational complexity that can happen off-chain, since the mainchain is unable to settle them efficiently.

Integrating Cartesi can greatly improve these types of technologies, as it allows both a Plasma or a State Channel to exploit full computational power from the Cartesi Machine, and in case any divergence arises, the mainchain is able to settle any disputes through Cartesi’s verification game, no matter how complicated the contract was.