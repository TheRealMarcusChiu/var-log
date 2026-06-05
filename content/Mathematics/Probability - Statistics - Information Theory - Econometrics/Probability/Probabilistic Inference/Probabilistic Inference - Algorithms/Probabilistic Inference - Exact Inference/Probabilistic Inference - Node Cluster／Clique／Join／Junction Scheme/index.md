---
publish: true
title: Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme
created: 2021-09-13T05:28:27.601-05:00
modified: 2021-12-11T05:24:07.292-06:00
---

###### Node Clustering Scheme

- is an extension of the [[Probabilistic Inference - Exact Inference|exact inference algorithm]]
- idea: joins nodes together before feeding them to an [[Probabilistic Inference - Exact Inference|exact inference algorithm]]
- lays the foundation to more generalized methods:
  - [[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation|Cluster/Clique/Join/Junction Graph Belief Propagation]]
  - [[Probabilistic Inference - Cluster／Clique／Join／Junction Tree Belief Propagation|Cluster/Clique/Join/Junction Tree Belief Propagation]]

# Node Clustering - Examples

> [!expand]- Click here to expand...
>
> ###### Example 1
>
> ![[Mathematics/Probability - Statistics - Information Theory - Econometrics/Probability/Probabilistic Inference/Probabilistic Inference - Algorithms/Probabilistic Inference - Exact Inference/Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme/node-clustering-example-1.png|400]]
>
> ###### Example 2
>
> ![[Mathematics/Probability - Statistics - Information Theory - Econometrics/Probability/Probabilistic Inference/Probabilistic Inference - Algorithms/Probabilistic Inference - Exact Inference/Probabilistic Inference - Node Cluster／Clique／Join／Junction Scheme/node-clustering-example-2.png|301]]

# Node Clustering - Limitations

- if two variables are to be joined, 𝐶 having |𝐶| states and 𝐷 having |𝐷| states the new variable 𝐶𝐷 will have |𝐶|\*|𝐷| states
- the number of states in joined variables goes up exponentially

# Node Clustering - Generalized Approaches

- [[Probabilistic Inference - Iterative／Loopy／Cluster／Clique／Join／Junction Graph Belief Propagation|Cluster/Clique/Join/Junction Graph Belief Propagation]]
- [[Probabilistic Inference - Cluster／Clique／Join／Junction Tree Belief Propagation|Cluster/Clique/Join/Junction Tree Belief Propagation]]
