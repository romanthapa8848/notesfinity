---
title: "Design of Masonry Walls Acting as Columns under Gravity Loads"
author: "Roman Thapa"
date: "2024-11-21"
description: "A design example of masonry walls acting as columns under gravity loads, including steps for calculating axial stress, slenderness ratio, and buckling considerations."
keywords:
  [
    "Masonry Wall",
    "Gravity Loads",
    "Column",
    "Axial Stress",
    "Slenderness Ratio",
    "Compressive Strength"
  ]
layout: "math_mode"
---

# Design Example for Walls Acting as Columns under Gravity Loads

In this example, we will design a masonry wall acting as a column under vertical gravity loads. This will include calculations for axial stress, slenderness ratio, and the risk of buckling.

---

## Problem Statement

Consider a masonry wall of height 5 meters and thickness 300 mm, subjected to axial compression. The wall acts as a column under vertical load.

- **Height of the wall**: 5 m
- **Thickness of the wall**: 300 mm
- **Length of the wall**: 6 m
- **Compressive strength of masonry**: 7 MPa (7000 kN/m²)
- **Density of masonry**: 20 kN/m³
- **Imposed load from roof**: 40 kN/m² (uniformly distributed load)

---

## Step 1: Calculate the Self-weight of the Wall

The self-weight of the wall is calculated as:

$$
W_{\text{self}} = \text{Unit weight of masonry} \times \text{Wall thickness} \times \text{Length of the wall}
$$

$$
W_{\text{self}} = 20 \, \text{kN/m}^3 \times 0.30 \, \text{m} \times 6 \, \text{m} = 36 \, \text{kN/m}
$$

So, the **self-weight of the wall** is **36 kN/m**.

---

## Step 2: Calculate the Area of the Wall

The area of the wall is calculated as:

$$
A_{\text{wall}} = \text{Height of the wall} \times \text{Length of the wall}
$$

$$
A_{\text{wall}} = 5 \, \text{m} \times 6 \, \text{m} = 30 \, \text{m}^2
$$

So, the **area of the wall** is **30 m²**.

---

## Step 3: Calculate the Imposed Load

The imposed load is distributed uniformly over the entire length of the wall. The total imposed load on the wall is:

$$
W_{\text{imposed}} = \text{Imposed load} \times \text{Length of the wall}
$$

$$
W_{\text{imposed}} = 40 \, \text{kN/m}^2 \times 6 \, \text{m} = 240 \, \text{kN/m}
$$

So, the **imposed load** on the wall is **240 kN/m**.

---

## Step 4: Calculate the Total Gravity Load on the Wall

The total gravity load on the wall consists of the self-weight of the wall and the imposed load. The total load is:

$$
W_{\text{total}} = W_{\text{self}} + W_{\text{imposed}} = 36 \, \text{kN/m} + 240 \, \text{kN/m} = 276 \, \text{kN/m}
$$

So, the **total gravity load** on the wall is **276 kN/m**.

---

## Step 5: Calculate the Axial Stress on the Wall

The axial stress is the compressive stress acting on the cross-sectional area of the wall due to the applied load. This is calculated as:

$$
\sigma_{\text{axial}} = \frac{W_{\text{total}}}{A_{\text{wall}}}
$$

$$
\sigma_{\text{axial}} = \frac{276 \, \text{kN/m}}{30 \, \text{m}^2} = 9.2 \, \text{kN/m}^2
$$

So, the **axial stress** on the wall is **9.2 kN/m²**.

---

## Step 6: Buckling Considerations

Since the wall is acting as a column, we need to check for **buckling** due to axial compression. The **slenderness ratio** for the wall is an important factor in determining its susceptibility to buckling.

The slenderness ratio is given by:

$$
\lambda = \frac{L}{r}
$$

Where:
- $L$ is the height of the wall (5 m),
- $r$ is the radius of gyration of the wall, calculated as:

$$
r = \sqrt{\frac{I}{A}}
$$

Where $I$ is the **second moment of area** (also called the **moment of inertia**) of the wall section, and $A$ is the cross-sectional area.

For a rectangular section, the moment of inertia is:

$$
I = \frac{b \times h^3}{12}
$$

Where:
- $b$ is the thickness of the wall (0.30 m),
- $h$ is the height of the wall (5 m).

Substituting the values:

$$
I = \frac{0.30 \times (5)^3}{12} = 18.75 \, \text{m}^4
$$

Now, calculate the radius of gyration:

$$
r = \sqrt{\frac{18.75}{30}} = 0.79 \, \text{m}
$$

Now calculate the slenderness ratio:

$$
\lambda = \frac{5}{0.79} = 6.33
$$

The slenderness ratio is **6.33**, indicating that the wall is not susceptible to buckling under the given load.

---

## Step 7: Check the Strength of the Wall

Finally, check whether the axial compressive stress is within the permissible limit for masonry. The permissible stress is determined from the **compressive strength** of the masonry, which is provided in the problem as 7 MPa (7000 kN/m²).

Since the **axial stress** ($\sigma_{\text{axial}}$) is much lower than the **compressive strength** of the masonry, the wall is safe from compressive failure.

---

## Step 8: Final Design

After performing the above calculations, we conclude that the wall is capable of carrying the total load without any risk of buckling or failure, as the axial stress is within the permissible limit.

---

## Summary

In this design example, we considered a masonry wall acting as a column under gravity loads. We calculated the self-weight, imposed load, axial stress, slenderness ratio, and checked the design against buckling and compressive failure. The wall was found to be structurally safe.

---

## FAQs

### 1. What is a masonry wall acting as a column?
A masonry wall acting as a column is a vertical structural element that resists axial compression due to vertical loads.

### 2. How is the axial stress on a masonry wall calculated?
Axial stress is calculated by dividing the total axial load by the cross-sectional area of the wall: $\sigma_{\text{axial}} = \frac{W_{\text{total}}}{A_{\text{wall}}}$.

### 3. What is the slenderness ratio for a masonry wall?
The slenderness ratio is the ratio of the height of the wall to the radius of gyration: $\lambda = \frac{L}{r}$.

### 4. How does the slenderness ratio affect the design of masonry walls?
A higher slenderness ratio indicates a greater risk of buckling under axial load. Walls with a low slenderness ratio are more stable and less likely to buckle.

### 5. How do you check for buckling in masonry walls?
Buckling is checked by calculating the slenderness ratio and ensuring that it does not exceed certain limits set by design codes.

### 6. How do you calculate the moment of inertia for a masonry wall?
The moment of inertia for a rectangular section is given by: $I = \frac{b \times h^3}{12}$, where $b$ is the thickness and $h$ is the height of the wall.

### 7. What is the importance of the compressive strength of masonry in the design of walls acting as columns?
The compressive strength determines the maximum permissible axial stress that the masonry can withstand before failure. The axial stress must be lower than this value for safety.

### 8. Can eccentric loads be applied to masonry walls acting as columns?
Yes, eccentric loads can be applied, but the wall must be designed to resist both axial compression and bending.

### 9. What happens if the axial stress exceeds the permissible limit for masonry?
If the axial stress exceeds the permissible limit, the wall may fail due to crushing or other forms of structural failure.

### 10. How do you increase the stability of a masonry wall acting as a column?
Increasing the thickness of the wall, reducing the height, or adding reinforcement can improve the stability and load-bearing capacity of a masonry wall.