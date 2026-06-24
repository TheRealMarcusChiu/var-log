---
title: "Mellanox ConnectX Series"
created: 2026-06-01T02:09:32.634-05:00
modified: 2026-06-10T00:39:05.200-05:00
parent: "[[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Generation</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>PCIe Support</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Key Focus</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Common Max Speed</strong>",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "ConnectX-3/Pro",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 3",
      "Foundational RDMA",
      "40/56 GbE"
    ],
    [
      {
        "content": "ConnectX-4",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 3",
      "25/50/100G Intro",
      "100 GbE"
    ],
    [
      {
        "content": "ConnectX-5",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 3/4",
      "Advanced Offloads",
      "100 GbE"
    ],
    [
      {
        "content": "ConnectX-6",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 4",
      "Security & Crypto",
      "200 GbE"
    ],
    [
      {
        "content": "ConnectX-7",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 5",
      "Extreme Scale",
      "400 GbE"
    ],
    [
      {
        "content": "ConnectX-8",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 6",
      "AI Factory Scale",
      "800 GbE (Aggregate)"
    ],
    [
      {
        "content": "ConnectX-9",
        "bg": "#F4F5F7"
      },
      "PCIe Gen 6",
      "Gigascale AI Fabric",
      "800 GbE (Per Port)"
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```
# Key Architectural Shifts in Recent Generations
- <strong>ConnectX-8:</strong> Introduced 800Gb/s aggregate bandwidth. Utilizes [[Peripheral Component Interconnect Express (PCIe - PCI-e) Specification／Interface|PCIe Gen 6]], typically presented as dual 400G ports in Ethernet deployments
- <strong>ConnectX-9:</strong> Represents the next evolution in networking for "gigascale" AI factories. The most significant technological leap is the ability to achieve <strong>800Gb/s of throughput on a single port</strong>. This simplifies network fabric design by removing the need for load-balancing or link-aggregation (bonding) to achieve full bandwidth, ensuring more predictable performance for massive GPU-to-GPU data transfers. It also introduces hardware support for post-quantum cryptography to secure firmware in future computing environments.
