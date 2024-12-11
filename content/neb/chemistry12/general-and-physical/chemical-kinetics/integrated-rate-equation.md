---
title: "Integrated Rate Equation for Zero and First Order Reactions"
author: "Roman Thapa"
date: "2024-11-14"
description: "Derivation and explanation of the integrated rate equations for zero and first order reactions."
keywords:
  [
"Zero-order reaction",
"First-order reaction",
"Integrated rate equation",
"Chemical kinetics",
"Rate law"
  ]
layout: "math_mode"
---

# Integrated Rate Equation for Zero and First Order Reactions

In chemical kinetics, the **integrated rate equations** provide a mathematical description of how the concentration of reactants changes over time for different types of reactions. These equations are essential in determining the concentration of reactants at any given time during the reaction.

### Zero-Order Reaction

For a **zero-order reaction**, the rate of the reaction is constant and independent of the concentration of reactants. The rate law for a zero-order reaction is:

$$ \text{Rate} = k $$

where $k$ is the rate constant. For a reaction:

$$ A \rightarrow B $$

The integrated rate law for a zero-order reaction is derived by separating the variables and integrating:

$$ \frac{d[A]}{dt} = -k $$

Integrating both sides with respect to time gives:

$$ [A] = [A]_0 - kt $$

where:
- $[A]_0$ is the initial concentration of A,
- $[A]$ is the concentration of A at time $t$,
- $k$ is the rate constant,
- $t$ is the time elapsed.

This equation shows that the concentration of the reactant decreases linearly over time for a zero-order reaction.

#### Half-life for Zero-Order Reaction

The half-life ($t_{1/2}$) for a zero-order reaction is the time required for half of the reactant to be consumed. Using the integrated rate law, the half-life can be calculated as:

$$ t_{1/2} = \frac{[A]_0}{2k} $$

This shows that for a zero-order reaction, the half-life is directly proportional to the initial concentration of the reactant.

### First-Order Reaction

For a **first-order reaction**, the rate of the reaction is directly proportional to the concentration of the reactant. The rate law for a first-order reaction is:

$$ \text{Rate} = k[A] $$

For a reaction:

$$ A \rightarrow B $$

The integrated rate law for a first-order reaction is derived by separating the variables and integrating:

$$ \frac{d[A]}{dt} = -k[A] $$

Integrating both sides gives:

$$ \ln[A] = \ln[A]_0 - kt $$

where:
- $[A]_0$ is the initial concentration of A,
- $[A]$ is the concentration of A at time $t$,
- $k$ is the rate constant,
- $t$ is the time elapsed.

This equation shows that the natural logarithm of the concentration of A decreases linearly with time.

#### Half-life for First-Order Reaction

The half-life ($t_{1/2}$) for a first-order reaction is constant and independent of the initial concentration. Using the integrated rate law, the half-life can be calculated as:

$$ t_{1/2} = \frac{0.693}{k} $$

For a first-order reaction, the half-life is constant and does not depend on the initial concentration.

---

### Comparison of Zero-Order and First-Order Reactions

| **Feature**                    | **Zero-Order Reaction**                             | **First-Order Reaction**                              |
|---------------------------------|-----------------------------------------------------|-------------------------------------------------------|
| **Rate Law**                    | Rate = $k$                                          | Rate = $k[A]$                                         |
| **Integrated Rate Equation**    | $[A] = [A]_0 - kt$                                  | $\ln[A] = \ln[A]_0 - kt$                              |
| **Half-life**                    | $t_{1/2} = \frac{[A]_0}{2k}$                        | $t_{1/2} = \frac{0.693}{k}$                           |
| **Dependence on Initial Concentration** | Directly proportional to $[A]_0$                    | Independent of $[A]_0$                                |
| **Concentration vs Time**       | Decreases linearly                                  | Decreases exponentially                               |
| **Type of Reaction**            | Used for reactions with constant rate of reaction   | Used for reactions where rate depends on concentration of reactant |

---

## Summary

The integrated rate equations for zero and first-order reactions allow us to determine the concentration of reactants at any given time. For a zero-order reaction, the concentration decreases linearly with time, and the half-life is inversely proportional to the rate constant and initial concentration. For a first-order reaction, the concentration decreases exponentially, and the half-life is constant and independent of the initial concentration.

---

## FAQs

### 1. What is the integrated rate equation for a zero-order reaction?

The integrated rate equation for a zero-order reaction is:

$$ [A] = [A]_0 - kt $$

where $[A]_0$ is the initial concentration of A, $k$ is the rate constant, and $t$ is the time elapsed.

### 2. How is the half-life for a zero-order reaction calculated?

The half-life for a zero-order reaction is given by:

$$ t_{1/2} = \frac{[A]_0}{2k} $$

### 3. What is the integrated rate equation for a first-order reaction?

The integrated rate equation for a first-order reaction is:

$$ \ln[A] = \ln[A]_0 - kt $$

### 4. How is the half-life for a first-order reaction calculated?

The half-life for a first-order reaction is given by:

$$ t_{1/2} = \frac{0.693}{k} $$

### 5. Does the half-life for a zero-order reaction depend on the initial concentration?

Yes, the half-life for a zero-order reaction is directly proportional to the initial concentration of the reactant.

### 6. Does the half-life for a first-order reaction depend on the initial concentration?

No, the half-life for a first-order reaction is constant and independent of the initial concentration.

### 7. What is the rate law for a first-order reaction?

The rate law for a first-order reaction is:

$$ \text{Rate} = k[A] $$

### 8. How does the concentration of a reactant change in a zero-order reaction?

For a zero-order reaction, the concentration of the reactant decreases linearly over time.

### 9. How does the concentration of a reactant change in a first-order reaction?

For a first-order reaction, the concentration of the reactant decreases exponentially over time.

### 10. What does the integrated rate equation tell us?

The integrated rate equation gives the relationship between the concentration of reactants and time for a given order of reaction, helping us to determine the concentration of reactants at any time.

---

## MCQs

### 1. The integrated rate equation for a zero-order reaction is:
- A) $[A] = [A]_0 + kt$
- B) **$[A] = [A]_0 - kt$ (✓)**
- C) $\ln[A] = \ln[A]_0 + kt$
- D) $\ln[A] = \ln[A]_0 - kt$

### 2. The half-life for a zero-order reaction is:
- A) **$\frac{[A]_0}{2k}$ (✓)**
- B) $\frac{0.693}{k}$
- C) Independent of initial concentration
- D) Inversely proportional to $[A]_0$

### 3. The integrated rate equation for a first-order reaction is:
- A) $[A] = [A]_0 - kt$
- B) **$\ln[A] = \ln[A]_0 - kt$ (✓)**
- C) $\frac{d[A]}{dt} = -k[A]$
- D) $[A] = k$

### 4. The half-life for a first-order reaction is:
- A) $\frac{[A]_0}{2k}$
- B) **$\frac{0.693}{k}$ (✓)**
- C) Directly proportional to $[A]_0$
- D) Inversely proportional to $[A]_0$

### 5. For a zero-order reaction, the concentration of the reactant decreases:
- A) Exponentially
- B) **Linearly (✓)**
- C) Logarithmically
- D) Quadratically

### 6. For a first-order reaction, the concentration of the reactant decreases:
- A) **Exponentially (✓)**
- B) Linearly
- C) Logarithmically
- D) Quadratically

### 7. Which of the following is true about the half-life of a first-order reaction?
- A) It depends on the initial concentration
- B) **It is constant and independent of initial concentration (✓)**
- C) It increases with time
- D) It decreases with time

### 8. For a first-order reaction, the rate law is:
- A) **$\text{Rate} = k[A]$ (✓)**
- B) $\text{Rate} = k[A]^2$
- C) $\text{Rate} = k$
- D) $\text{Rate} = k[A]^0$

### 9. The rate constant for a zero-order reaction has units of:
- A) $\text{mol}^{-1} \text{L} \text{s}^{-1}$
- B) **$\text{mol} \text{L}^{-1} \text{s}^{-1}$ (✓)**
- C) $\text{L} \text{mol}^{-1} \text{s}^{-1}$
- D) $\text{mol}^2 \text{L}^{-2} \text{s}^{-1}$

### 10. Which of the following is the integrated rate equation for a zero-order reaction?
- A) $[A] = [A]_0 + kt$
- B) **$[A] = [A]_0 - kt$ (✓)**
- C) $\ln[A] = \ln[A]_0 - kt$
- D) $[A] = k$
