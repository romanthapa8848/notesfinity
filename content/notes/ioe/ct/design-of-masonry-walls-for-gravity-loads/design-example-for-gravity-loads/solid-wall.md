---
title: "Design Example for Gravity Loads on Solid Wall"
author: "Roman Thapa"
date: "2024-11-21"
description: "A step-by-step example of designing a solid masonry wall under gravity loads, considering material properties, load distribution, and codal provisions."
keywords:
  [
    "Design Example",
    "Masonry Wall",
    "Gravity Loads",
    "Solid Wall",
    "Structural Design"
  ]
layout: "math_mode"
---

# Design Example for Gravity Loads on Solid Wall

In this design example, we will calculate the design of a **solid masonry wall** subjected to **gravity loads** using codal provisions. We will follow the **IS 1905:1987** for unreinforced masonry design. This example includes calculations for determining the wall thickness, material strength, and safety factors.

---

## Problem Statement

Consider a **solid masonry wall** in a building subjected to gravity loads. The wall is part of a load-bearing structure, supporting the **roof load** and its own **self-weight**.

- **Height of the wall**: 4.5 m
- **Length of the wall**: 6 m
- **Thickness of the wall (initial guess)**: 250 mm
- **Compressive strength of masonry**: 7 MPa (7000 kN/m²)
- **Density of masonry (bricks)**: 20 kN/m³
- **Unit weight of the wall**: 20 kN/m³
- **Total imposed load on the wall (roof load)**: 30 kN/m² (uniformly distributed load)

---

## Step 1: Calculate the Self-weight of the Wall

The self-weight of the wall is the weight per unit area, which depends on the thickness of the wall and the unit weight of the masonry.

$$
W_{\text{self}} = \text{Unit weight of masonry} \times \text{Wall thickness} \times \text{Length of the wall}
$$

$$
W_{\text{self}} = 20 \, \text{kN/m}^3 \times 0.25 \, \text{m} \times 6 \, \text{m} = 30 \, \text{kN/m}
$$

So, the **self-weight of the wall** is **30 kN/m**.

---

## Step 2: Calculate the Total Gravity Load on the Wall

The total gravity load on the wall includes both the self-weight of the wall and the roof load imposed on it.

$$
W_{\text{total}} = W_{\text{self}} + \text{Imposed load}
$$

$$
W_{\text{total}} = 30 \, \text{kN/m} + 30 \, \text{kN/m}^2 \times 6 \, \text{m} = 30 \, \text{kN/m} + 180 \, \text{kN/m}
$$

Thus, the **total gravity load** is **210 kN/m**.

---

## Step 3: Check the Wall Thickness Using IS 1905:1987

From the codal provisions, the minimum thickness of a wall under gravity loads is influenced by the material strength and the type of load. We will assume that the wall is unreinforced and calculate the minimum thickness using a basic formula provided in **IS 1905:1987** for **unreinforced masonry**.

$$
t_{\text{min}} = \frac{W_{\text{total}}}{f_{\text{m}}}
$$

Where:
- $f_{\text{m}}$ is the compressive strength of masonry (7 MPa or 7000 kN/m²).

$$
t_{\text{min}} = \frac{210}{7000} = 0.03 \, \text{m} \quad (\text{30 mm})
$$

This is just the minimum thickness. The actual thickness of the wall would be higher depending on additional design requirements, such as safety factors and wall stability, but this gives a baseline.

---

## Step 4: Check the Slenderness Ratio

According to codal provisions, the slenderness ratio (the ratio of the height of the wall to its thickness) should not exceed a specific limit to prevent instability and buckling.

The **slenderness ratio** is given by:

$$
\text{Slenderness ratio} = \frac{\text{Height of the wall}}{\text{Thickness of the wall}}
$$

Assuming a wall thickness of 250 mm (0.25 m), the slenderness ratio is:

$$
\text{Slenderness ratio} = \frac{4.5}{0.25} = 18
$$

According to **IS 1905**, the slenderness ratio should typically not exceed **20** for masonry walls. Since the ratio is below the limit, the wall is safe in terms of slenderness.

---

## Step 5: Check for Stability

To ensure the stability of the wall under gravity loads, we also need to check for lateral stability, taking into account factors like lateral support, wind loads, and other lateral forces. In this case, we are primarily concerned with vertical gravity loads, and the wall is stable based on the slenderness ratio and other provisions.

---

## Step 6: Final Design and Wall Thickness

After considering all factors (self-weight, imposed loads, material strength, slenderness ratio), we conclude that a **wall thickness of 250 mm** is adequate for this design under the given gravity loads.

---

## Summary

In this design example, we calculated the gravity loads acting on a solid masonry wall, checked the wall thickness based on codal provisions, and verified the slenderness ratio and overall stability. The wall thickness required for the given loads is **250 mm**, which ensures that the wall is stable and can safely carry the gravity loads.

---

## FAQs

### 1. How is the self-weight of the wall calculated?
The self-weight is calculated by multiplying the unit weight of the masonry material, the thickness of the wall, and the length of the wall.

### 2. What is the slenderness ratio in masonry design?
The slenderness ratio is the ratio of the height of the wall to its thickness. A higher ratio indicates a taller and thinner wall, which may be more susceptible to buckling.

### 3. What does IS 1905:1987 provide for masonry design?
IS 1905:1987 provides guidelines for designing unreinforced masonry, including material properties, load considerations, and safety factors for wall thickness and stability.

### 4. Why is a minimum wall thickness necessary?
The minimum wall thickness ensures that the wall can safely carry vertical loads without failure due to insufficient material strength.

### 5. How do you calculate the total gravity load on the wall?
The total gravity load is the sum of the self-weight of the wall and the imposed loads from floors or roofs.

### 6. What factors influence the wall thickness design?
Wall thickness is influenced by material strength, gravity loads, safety factors, and the required stability of the wall under vertical and lateral forces.

### 7. Can the slenderness ratio exceed the specified limit in masonry design?
No, the slenderness ratio should not exceed the codal limit to prevent instability and ensure the wall does not buckle under vertical loads.

### 8. How does material strength affect the masonry wall design?
Material strength affects the load-carrying capacity and the minimum required thickness of the wall to ensure safety and stability.

### 9. What is the role of safety factors in wall design?
Safety factors account for uncertainties in material properties, construction quality, and other factors, ensuring that the wall is designed with an adequate margin of safety.

### 10. Is the thickness of the wall the only consideration in design?
No, other factors such as the wall's slenderness ratio, reinforcement (if applicable), and lateral stability also need to be considered in the design.
