---
title: "pH value: pH of strong and weak acids, pH of strong and weak bases"
author: "Roman Thapa"
date: "2024-11-14"
description: "This topic explains the concept of pH, how to calculate the pH of strong and weak acids, and how to calculate the pH of strong and weak bases."
keywords:
  [
    "pH",
    "Strong acid",
    "Weak acid",
    "Strong base",
    "Weak base",
    "Hydrogen ion concentration",
    "Hydronium ion concentration"
  ]
layout: "math_mode"
---

# pH value: pH of strong and weak acids, pH of strong and weak bases
The pH value of a solution is a measure of its acidity or alkalinity. It is based on the concentration of hydrogen ions ($\mathrm{H^+}$) or hydronium ions ($\mathrm{H_3O^+}$) in a solution.

---

### pH of Strong Acids
Strong acids, like hydrochloric acid ($\mathrm{HCl}$) or sulfuric acid ($\mathrm{H_2SO_4}$), completely dissociate in water, meaning they release all their $\mathrm{H^+}$ ions into the solution. The pH of a strong acid can be calculated using the following formula:

$$
\text{pH} = -\log[\mathrm{H^+}]
$$

For example, for a 0.1 M solution of $\mathrm{HCl}$, which dissociates completely, the $\mathrm{[H^+]}$ concentration is 0.1 M:

$$
\text{pH} = -\log(0.1) = 1
$$

Thus, the pH of a 0.1 M strong acid solution is 1.

---

### pH of Weak Acids
Weak acids, like acetic acid ($\mathrm{CH_3COOH}$) or formic acid ($\mathrm{HCOOH}$), do not dissociate completely in water. Only a fraction of the acid molecules release $\mathrm{H^+}$ ions. To calculate the pH of a weak acid, we first need to know its acid dissociation constant ($K_a$) and use the following steps:

1. Set up an equilibrium expression for the dissociation of the acid:

$$
\mathrm{HA} \rightleftharpoons \mathrm{H^+} + \mathrm{A^-}
$$

2. Use the equilibrium concentrations of $\mathrm{H^+}$, $\mathrm{A^-}$, and $\mathrm{HA}$, and apply the $K_a$ expression:

$$
K_a = \frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]}
$$

For example, for a 0.1 M solution of acetic acid with a $K_a$ of $1.8 \times 10^{-5}$, the pH can be approximated using the ICE (Initial, Change, Equilibrium) method, where the concentration of $\mathrm{H^+}$ ions is determined from the dissociation equilibrium.

---

### pH of Strong Bases
Strong bases, like sodium hydroxide ($\mathrm{NaOH}$) or potassium hydroxide ($\mathrm{KOH}$), also dissociate completely in water. The pH of a strong base can be calculated in a similar way to that of a strong acid. First, calculate the $\mathrm{[OH^-]}$ concentration, then use the relation between $\mathrm{[H^+]}$ and $\mathrm{[OH^-]}$:

$$
\mathrm{[H^+]} \times \mathrm{[OH^-]} = 1 \times 10^{-14} \, \text{(at 25°C)}
$$

For example, for a 0.1 M solution of $\mathrm{NaOH}$, the $\mathrm{[OH^-]}$ concentration is 0.1 M. Using the formula above, we can find $\mathrm{[H^+]}$:

$$
\mathrm{[H^+]} = \frac{1 \times 10^{-14}}{0.1} = 1 \times 10^{-13} \, \text{M}
$$

Now, calculate the pH:

$$
\text{pH} = -\log[\mathrm{H^+}] = -\log(1 \times 10^{-13}) = 13
$$

Thus, the pH of a 0.1 M strong base solution is 13.

---

### pH of Weak Bases
Weak bases, like ammonia ($\mathrm{NH_3}$), do not dissociate completely in water. Similar to weak acids, we need to calculate the pH of weak bases using their base dissociation constant ($K_b$). The steps are as follows:

1. Set up an equilibrium expression for the dissociation of the base:

$$
\mathrm{B} + \mathrm{H_2O} \rightleftharpoons \mathrm{BH^+} + \mathrm{OH^-}
$$

2. Use the equilibrium concentrations of $\mathrm{OH^-}$, $\mathrm{BH^+}$, and $\mathrm{B}$, and apply the $K_b$ expression:

$$
K_b = \frac{[\mathrm{BH^+}][\mathrm{OH^-}]}{[\mathrm{B}]}
$$

For example, for a 0.1 M solution of ammonia with a $K_b$ of $1.8 \times 10^{-5}$, the pH can be calculated using the equilibrium concentrations of $\mathrm{OH^-}$ and $\mathrm{BH^+}$.

---

## Comparison Table

| Property                          | Strong Acid                | Weak Acid                  | Strong Base                | Weak Base                  |
|------------------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| **Dissociation in water**          | Complete                   | Partial                    | Complete                   | Partial                    |
| **Example**                        | $\mathrm{HCl}$, $\mathrm{H_2SO_4}$ | $\mathrm{CH_3COOH}$, $\mathrm{HCOOH}$ | $\mathrm{NaOH}$, $\mathrm{KOH}$ | $\mathrm{NH_3}$            |
| **pH range**                       | 0-7                        | 4-7                        | 7-14                       | 8-12                       |
| **pH Calculation Method**          | Direct from concentration | Using $K_a$ and equilibrium | Direct from $\mathrm{[OH^-]}$ | Using $K_b$ and equilibrium |
| **Effect on pH**                   | Low pH (<7)                | Moderate pH (>7)           | High pH (>7)               | Moderate pH (<7)           |
| **Concentration of $\mathrm{H^+}$ or $\mathrm{OH^-}$** | High                       | Low                        | High                       | Low                        |
| **Examples of typical pH**         | 1 for 0.1 M $\mathrm{HCl}$ | 3-5 for 0.1 M acetic acid  | 13 for 0.1 M $\mathrm{NaOH}$ | 11 for 0.1 M ammonia       |

---

## Summary
- **Strong acids** dissociate completely in water, and their pH is determined directly from their concentration.
- **Weak acids** only partially dissociate, and their pH is calculated using the acid dissociation constant ($K_a$).
- **Strong bases** dissociate completely, and their pH is determined by calculating the $\mathrm{[OH^-]}$ and using the relation between $\mathrm{[H^+]}$ and $\mathrm{[OH^-]}$.
- **Weak bases** only partially dissociate, and their pH is calculated using the base dissociation constant ($K_b$).

---

## FAQs

### 1. How do you calculate pH of a strong acid?
For a strong acid, the pH is calculated using the formula $\text{pH} = -\log[\mathrm{H^+}]$, where $[\mathrm{H^+}]$ is the concentration of the acid.

### 2. How do you calculate pH of a weak acid?
For a weak acid, you need to use the acid dissociation constant ($K_a$) and solve for the $\mathrm{H^+}$ concentration using an equilibrium expression.

### 3. What is the pH of a strong base?
The pH of a strong base can be calculated by first finding the $\mathrm{[OH^-]}$ concentration, then using the formula $\text{pH} = 14 - \text{pOH}$, where $\text{pOH} = -\log[\mathrm{OH^-}]$.

### 4. How do you calculate pH of a weak base?
To calculate the pH of a weak base, you need to know the base dissociation constant ($K_b$) and use an equilibrium expression to find the $\mathrm{OH^-}$ concentration. Then use $\text{pOH} = -\log[\mathrm{OH^-}]$ and $\text{pH} = 14 - \text{pOH}$.

### 5. Why do weak acids and bases have higher pH values?
Weak acids and bases do not dissociate completely in solution, so the concentration of $\mathrm{H^+}$ or $\mathrm{OH^-}$ ions is lower, leading to higher pH values for weak acids and lower pH values for weak bases compared to their strong counterparts.

### 6. What is the pH of a neutral solution?
At 25°C, the pH of a neutral solution is 7, because the concentration of $\mathrm{H^+}$ and $\mathrm{OH^-}$ ions is equal.

### 7. Can the pH of a solution be negative?
Yes, the pH can be negative if the concentration of $\mathrm{H^+}$ ions is greater than 1 M (extremely acidic solutions).

### 8. What is the pH of a 0.1 M $\mathrm{HCl}$ solution?
The pH of a 0.1 M $\mathrm{HCl}$ solution is 1 because $\mathrm{HCl}$ is a strong acid and dissociates completely.

### 9. How does pH affect the strength of acids and bases?
Lower pH values indicate stronger acids, while higher pH values indicate stronger bases.

### 10. Can pH be used to determine the concentration of an acid or base?
Yes, by measuring the pH and using the appropriate dissociation constant ($K_a$ or $K_b$), the concentration of an acid or base can be determined.

---

## MCQs

### 1. What is the pH of a 0.1 M $\mathrm{HCl}$ solution?
- A) 0
- B) **1 (✓)**
- C) 10
- D) 14

### 2. How is the pH of a weak acid determined?
- A) Using the concentration of $\mathrm{OH^-}$ ions
- B) **Using the acid dissociation constant ($K_a$) (✓)**
- C) By calculating the $\mathrm{H_2O}$ concentration
- D) By using the $\mathrm{H^+}$ ion concentration only

### 3. What is the pH of a strong base like $\mathrm{NaOH}$?
- A) **Above 7 (✓)**
- B) 0
- C) 7
- D) Below 7

### 4. What happens to the pH of a solution of weak acid as it dissociates?
- A) The pH decreases rapidly
- B) **The pH increases gradually (✓)**
- C) The pH remains constant
- D) The pH decreases instantly

### 5. The pH of a 0.1 M $\mathrm{NaOH}$ solution is:
- A) 0
- B) 7
- C) **13 (✓)**
- D) 14

### 6. How is pH related to $\mathrm{[OH^-]}$ concentration?
- A) pH = -$\log[\mathrm{OH^-}]$
- B) pH = $\text{pOH} + 14$
- C) **pH = 14 - \text{pOH} (✓)**
- D) pH = $\log[\mathrm{OH^-}]$

### 7. What is the pH of pure water at 25°C?
- A) 1
- B) **7 (✓)**
- C) 14
- D) 0

### 8. The pH of a 0.1 M solution of acetic acid is:
- A) 1
- B) **Greater than 7 (✓)**
- C) 7
- D) 0

### 9. What is the pH of a solution of ammonia ($\mathrm{NH_3}$)?
- A) 1
- B) **Above 7 (✓)**
- C) 7
- D) Below 7

### 10. The pH of a solution depends on the concentration of which ions?
- A) $\mathrm{OH^-}$ ions
- B) **$\mathrm{H^+}$ ions (✓)**
- C) $\mathrm{Na^+}$ ions
- D) $\mathrm{Cl^-}$ ions
