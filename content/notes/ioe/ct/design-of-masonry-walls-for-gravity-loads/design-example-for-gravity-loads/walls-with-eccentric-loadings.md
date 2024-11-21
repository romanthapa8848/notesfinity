---
title: "Design Example for Walls with Eccentric Loadings under Gravity Loads"
author: "Roman Thapa"
date: "2024-11-21"
description: "A design example demonstrating how to calculate the effect of eccentric loading on masonry walls subjected to gravity loads, using proper design and codal provisions."
keywords:
  [
    "Eccentric Loading",
    "Masonry Wall Design",
    "Gravity Loads",
    "Structural Design",
    "Codal Provisions"
  ]
layout: "math_mode"
---

# Design Example for Walls with Eccentric Loadings under Gravity Loads

In this design example, we will calculate the effect of **eccentric loading** on a **masonry wall** subjected to **gravity loads**. An eccentric load refers to a load that is applied at a distance from the center of mass or centroid of the wall, causing bending in addition to axial compression.

---

## Problem Statement

Consider a **masonry wall** subjected to **eccentric loading** from a **roof load** and its own self-weight. The load is not applied centrally, resulting in an eccentric moment.

- **Height of the wall**: 4.5 m
- **Length of the wall**: 6 m
- **Thickness of the wall**: 250 mm
- **Compressive strength of masonry**: 7 MPa (7000 kN/m²)
- **Density of masonry**: 20 kN/m³
- **Imposed load from roof**: 30 kN/m² (uniformly distributed load)
- **Eccentricity of the load**: 1 m (distance from the centroid of the wall)

---

## Step 1: Calculate the Self-weight of the Wall

The self-weight of the wall is calculated using the unit weight of masonry, the thickness of the wall, and the length of the wall. The total weight of the wall is:

$$
W_{\text{self}} = \text{Unit weight of masonry} \times \text{Wall thickness} \times \text{Length of the wall}
$$

$$
W_{\text{self}} = 20 \, \text{kN/m}^3 \times 0.25 \, \text{m} \times 6 \, \text{m} = 30 \, \text{kN/m}
$$

So, the **self-weight of the wall** is **30 kN/m**.

---

## Step 2: Calculate the Area of the Wall

The area of the wall is calculated as:

$$
A_{\text{wall}} = \text{Height of the wall} \times \text{Length of the wall}
$$

$$
A_{\text{wall}} = 4.5 \, \text{m} \times 6 \, \text{m} = 27 \, \text{m}^2
$$

So, the **area of the wall** is **27 m²**.

---

## Step 3: Calculate the Imposed Load

The imposed load is distributed uniformly over the entire length of the wall. The total imposed load on the wall is:

$$
W_{\text{imposed}} = \text{Imposed load} \times \text{Length of the wall}
$$

$$
W_{\text{imposed}} = 30 \, \text{kN/m}^2 \times 6 \, \text{m} = 180 \, \text{kN/m}
$$

So, the **imposed load** on the wall is **180 kN/m**.

---

## Step 4: Calculate the Total Gravity Load on the Wall

The total gravity load on the wall consists of the self-weight of the wall and the imposed load. The total load is:

$$
W_{\text{total}} = W_{\text{self}} + W_{\text{imposed}} = 30 \, \text{kN/m} + 180 \, \text{kN/m} = 210 \, \text{kN/m}
$$

So, the **total gravity load** on the wall is **210 kN/m**.

---

## Step 5: Calculate the Eccentric Moment

Since the load is applied eccentrically, it generates a bending moment in addition to the axial compression. The eccentric moment is calculated as:

$$
M_{\text{ecc}} = W_{\text{total}} \times e
$$

Where:
- $e$ is the **eccentricity** of the applied load (1 m).

$$
M_{\text{ecc}} = 210 \, \text{kN/m} \times 1 \, \text{m} = 210 \, \text{kN·m/m}
$$

So, the **eccentric moment** is **210 kN·m/m**.

---

## Step 6: Design for Axial Load and Bending

The wall is subjected to both **axial compression** and **bending**. To calculate the design stress, we need to combine the axial load and the moment. The axial load is calculated as:

$$
N = W_{\text{total}} = 210 \, \text{kN/m}
$$

For the bending stress, we use the **flexural formula**:

$$
M = \frac{\sigma_b \times I}{y}
$$

Where:
- $M$ is the bending moment,
- $\sigma_b$ is the bending stress,
- $I$ is the **second moment of area** (also called the **moment of inertia**) of the wall section,
- $y$ is the distance from the neutral axis to the extreme fiber.

For a rectangular section, the moment of inertia is:

$$
I = \frac{b \times h^3}{12}
$$

Where:
- $b$ is the thickness of the wall (0.25 m),
- $h$ is the height of the wall (4.5 m).

Substituting values:

$$
I = \frac{0.25 \times (4.5)^3}{12} = 0.759 \, \text{m}^4
$$

Now, calculate the bending stress for the applied moment. The maximum bending stress occurs at the extreme fiber, which is at the top or bottom of the wall. The distance $y$ is half the height of the wall:

$$
y = \frac{h}{2} = \frac{4.5}{2} = 2.25 \, \text{m}
$$

Now, using the formula for bending stress:

$$
\sigma_b = \frac{M_{\text{ecc}} \times y}{I} = \frac{210 \times 2.25}{0.759} = 625.49 \, \text{kN/m}^2
$$

So, the **bending stress** is **625.49 kN/m²**.

---

## Step 7: Check the Combined Stress

The combined stress due to axial load and bending can be calculated using the **interaction equation**:

$$
\sigma_{\text{combined}} = \sigma_{\text{axial}} + \sigma_b
$$

Where:
- $\sigma_{\text{axial}}$ is the axial stress due to the vertical load (compressive stress).

The axial stress is:

$$
\sigma_{\text{axial}} = \frac{N}{A_{\text{wall}}} = \frac{210}{27} = 7.78 \, \text{kN/m}^2
$$

So, the **combined stress** is:

$$
\sigma_{\text{combined}} = 7.78 + 625.49 = 633.27 \, \text{kN/m}^2
$$

This combined stress must be checked against the design strength of the masonry.

---

## Step 8: Final Design

After performing the above calculations, we ensure that the combined stresses are within permissible limits as per the relevant codal provisions (e.g., IS 1905:1987 for India). If the stresses are too high, the thickness of the wall must be increased, or additional reinforcement may be required.

---

## Summary

In this design example, we considered the effect of **eccentric loading** on a **masonry wall** subjected to **gravity loads**. We calculated the self-weight, imposed loads, eccentric moment, and combined stress. The final design must ensure that the stresses are within permissible limits as per the codal provisions.

---

## FAQs

### 1. What is eccentric loading on a wall?
Eccentric loading occurs when a load is applied at a distance from the center of mass of the wall, causing bending in addition to axial compression.

### 2. How is the eccentric moment calculated?
The eccentric moment is calculated as the total load multiplied by the eccentricity distance: $M_{\text{ecc}} = W_{\text{total}} \times e$.

### 3. How do you calculate bending stress in a wall?
Bending stress is calculated using the formula: $\sigma_b = \frac{M \times y}{I}$, where $M$ is the moment, $y$ is the distance from the neutral axis, and $I$ is the moment of inertia.

### 4. How does eccentric loading affect the design of masonry walls?
Eccentric loading increases the stress on the wall by introducing bending in addition to axial compression, which requires careful design considerations for both bending and axial load.

### 5. What is the interaction equation used in masonry design?
The interaction equation combines axial stress and bending stress: $\sigma_{\text{combined}} = \sigma_{\text{axial}} + \sigma_b$.

### 6. What is the moment of inertia for a masonry wall?
The moment of inertia for a rectangular masonry wall is calculated as $I = \frac{b \times h^3}{12}$, where $b$ is the thickness and $h$ is the height of the wall.

### 7. How do you determine the combined stress?
The combined stress is the sum of the axial stress and the bending stress in the wall.

### 8. Can eccentric loading cause failure in masonry walls?
Yes, if the combined stress exceeds the allowable limits of the masonry, eccentric loading can cause failure due to over-stressing.

### 9. How do you check the design against codal provisions?
The combined stresses and bending stresses should be compared with the permissible limits specified in the relevant codes (e.g., IS 1905:1987).

### 10. What happens if the combined stress is too high?
If the combined stress is too high, the wall’s thickness may need to be increased, or reinforcement may be added to ensure structural safety.