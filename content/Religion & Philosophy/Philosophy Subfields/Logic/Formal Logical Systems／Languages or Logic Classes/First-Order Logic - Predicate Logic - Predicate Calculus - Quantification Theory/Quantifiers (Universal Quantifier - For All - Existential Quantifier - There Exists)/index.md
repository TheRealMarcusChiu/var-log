---
publish: true
title: Quantifiers (Universal Quantifier - For All - Existential Quantifier - There Exists)
created: 2023-07-08T23:34:33.558-05:00
modified: 2023-07-08T23:40:17.333-05:00
---

###### Universal Quantifier (∀·) - For All

- ∀𝑥Predicate(𝑥) means that Predicate holds for ALL values of 𝑥 in the domain associated with that variable
- e.g. ∀𝑥 dolphin(𝑥) → mammal(𝑥)

###### Existential Quantifier (∃·) - There Exists

- ∃𝑥Predicate(𝑥) means that Predicate holds for SOME value of 𝑥 in the domain associated with that variable
- e.g. ∃𝑥 mammal(𝑥) → lays-eggs(𝑥)

# Quantifiers - Example Sentences

```merge-table
{
  "rows": [
    [
      {
        "content": "English",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Syntax",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "all professors are brilliant",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "∀𝑥 (professor(𝑥) → brilliant(𝑥))",
        "align": "left"
      }
    ],
    [
      {
        "content": "the income of any banker is greater than the income of any bedder",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "∀𝑥𝑦 (banker(𝑥) ∧ bedder(𝑦) → income(𝑥) > income(𝑦))",
        "align": "left"
      }
    ],
    [
      {
        "content": "every student has a supervisor",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "∀𝑥 (student(𝑥) → ∃𝑦 supervises(𝑦, 𝑥))",
        "align": "left"
      }
    ],
    [
      {
        "content": "every student's tutor is a member of the same college",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "∀𝑥𝑦 (student(𝑥) ∧ college(𝑦) ∧ member(𝑥, 𝑦) → member(tutor(𝑥), 𝑦))",
        "align": "left"
      }
    ],
    [
      {
        "content": "there exist infinitely many Pythagorean triples",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "∀𝑥 ∃𝑖𝑗𝑘 (𝑖 > n ∧ 𝑖² + 𝑗² = 𝑘²)",
        "align": "left"
      }
    ]
  ],
  "tableStyle": "width: 83.8893%;"
}
```

# Quantifiers - Equivalences

```merge-table
{
  "rows": [
    [
      {
        "content": "infinitary de Morgan laws",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- ¬(∀𝑥 𝐴) ≃ ∃𝑥 ¬𝐴\n- ¬(∃𝑥 𝐴) ≃ ∀𝑥 ¬𝐴",
        "align": "left"
      }
    ],
    [
      {
        "content": "pulling quantifiers through conjunction and disjunction (provided 𝑥 is not free in 𝐵)",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- (∀𝑥 𝐴) ∧ 𝐵 ≃ ∀𝑥 (𝐴 ∧ 𝐵)\n- (∀𝑥 𝐴) ∨ 𝐵 ≃ ∀𝑥 (𝐴 ∨ 𝐵)\n- (∃𝑥 𝐴) ∧ 𝐵 ≃ ∃𝑥 (𝐴 ∧ 𝐵)\n- (∃𝑥 𝐴) ∨ 𝐵 ≃ ∃𝑥 (𝐴 ∨ 𝐵)",
        "align": "left"
      }
    ],
    [
      {
        "content": "distributive laws:",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- (∀𝑥 𝐴) ∧ (∀𝑥 𝐵) ≃ ∀𝑥 (𝐴 ∧ 𝐵)\n- (∃𝑥 𝐴) ∨ (∃𝑥 𝐵) ≃ ∃𝑥 (𝐴 ∨ 𝐵)",
        "align": "left"
      }
    ],
    [
      {
        "content": "implication 𝐴 → 𝐵 as ¬𝐴 ∨ 𝐵 (provided 𝑥 is not free in 𝐵):",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- (∀𝑥 𝐴) → 𝐵 ≃ ∃𝑥 (𝐴 → 𝐵)\n- (∃𝑥 𝐴) → 𝐵 ≃ ∀𝑥 (𝐴 → 𝐵)",
        "align": "left"
      }
    ],
    [
      {
        "content": "expansion: ∀ and ∃ as infinitary conjunction and disjunction:",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "- ∀𝑥 𝐴 ≃ (∀𝑥 𝐴) ∧ 𝐴\\[t/𝑥\\]\n- ∃𝑥 𝐴 ≃ (∃𝑥 𝐴) ∨ 𝐴\\[t/𝑥\\]",
        "align": "left"
      }
    ]
  ],
  "tableStyle": "width: 67.86%;"
}
```

# Quantifiers - Proving Statements

![](https://www.youtube.com/watch?v=4UwhnYJVi0o)
