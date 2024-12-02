---
title: "Parallelogram Law of Vectors"
author: "Roman Thapa"
date: "2024-12-02"
description: "An explanation of the Parallelogram Law of Vectors, including its statement, graphical representation, and applications."
keywords:
  [
    "Parallelogram Law of Vectors",
    "Vector Addition",
    "Physics Class 11",
    "Resultant Vector",
    "Graphical Method"
  ]
layout: "math_mode"
---

# Parallelogram Law of Vectors

The **Parallelogram Law of Vectors** is another method for adding two vectors graphically. It states that if two vectors are represented by two adjacent sides of a parallelogram, the diagonal of the parallelogram gives the resultant vector.

---

## Statement

> If two vectors are represented by two adjacent sides of a parallelogram, then the diagonal of the parallelogram passing through the common point of the two vectors gives the resultant vector.

---

## Representation

Consider two vectors, **$\vec{A}$** and **$\vec{B}$**:
1. Draw the two vectors **$\vec{A}$** and **$\vec{B}$** starting from a common point.
2. Complete the parallelogram by drawing two more vectors parallel to **$\vec{A}$** and **$\vec{B}$**.
3. The diagonal of the parallelogram, drawn from the common point, represents the resultant vector **$\vec{R}$**.

### Mathematical Representation

The magnitude of the resultant vector **$\vec{R}$** is given by:  
$$
|\vec{R}| = \sqrt{A^2 + B^2 + 2AB \cos \theta}
$$  
where:
- $A$ and $B$ are the magnitudes of **$\vec{A}$** and **$\vec{B}$**.
- $\theta$ is the angle between **$\vec{A}$** and **$\vec{B}$**.

The direction of **$\vec{R}$** can be determined using the formula:  
$$
\tan \phi = \frac{B \sin \theta}{A + B \cos \theta}
$$  
where $\phi$ is the angle of the resultant vector with respect to **$\vec{A}$**.

---

## Parallelogram Law of Vector Addition

The parallelogram law of vector addition is a method used to find the sum of two vectors in vector theory. It states that two vectors can be arranged as adjacent sides of a parallelogram such that their tails are joined, and the sum of the vectors is represented by the diagonal of the parallelogram passing through their common tail.

### Steps to Apply the Parallelogram Law:
1. Draw the vectors **P** and **Q** such that their tails touch each other.
2. Complete the parallelogram by drawing the other two sides.
3. The diagonal of the parallelogram, which has the same tail as **P** and **Q**, represents the sum of the two vectors, i.e., **P + Q = R**.

Here, **R** is the resultant vector.

---

## Parallelogram Law of Vectors Formula

Consider two vectors **P** and **Q** with an angle **$\theta$** between them. The sum of these vectors is the resultant vector **R**. The formulas for its magnitude and direction are:

- Magnitude:
  $$ |R| = \sqrt{P^2 + Q^2 + 2PQ \cos \theta} $$
- Direction:
  $$ \beta = \tan^{-1}\left(\frac{Q \sin \theta}{P + Q \cos \theta}\right) $$

---

## Parallelogram Law of Vector Addition Proof

Let vectors **P** and **Q** represent the adjacent sides of the parallelogram, with the angle between them being **$\theta$**. The sum of these vectors is represented by the diagonal of the parallelogram, which is the resultant vector **R**.

### Proof for Magnitude:
In the right-angled triangle formed by the vectors, applying the Pythagorean theorem gives:
$$
R^2 = P^2 + 2PQ \cos \theta + Q^2
$$
Thus, the magnitude of the resultant is:
$$
R = \sqrt{P^2 + 2PQ \cos \theta + Q^2}
$$

### Proof for Direction:
From the right triangle, the direction of the resultant vector **R** is determined as:
$$
\tan \beta = \frac{Q \sin \theta}{P + Q \cos \theta}
$$
Thus, the angle **$\beta$** is:
$$
\beta = \tan^{-1}\left(\frac{Q \sin \theta}{P + Q \cos \theta}\right)
$$

---

## Special Cases of the Parallelogram Law

### 1. **When the Two Vectors are Parallel (Same Direction)**:
If **$\theta = 0^\circ$**, then:
$$
|R| = P + Q
$$
and
$$
\beta = 0^\circ
$$

### 2. **When the Two Vectors are Acting in Opposite Directions**:
If **$\theta = 180^\circ$**, then:
$$
|R| = |P - Q|
$$
and
$$
\beta = 180^\circ \text{ or } 0^\circ
$$

### 3. **When the Two Vectors are Perpendicular**:
If **$\theta = 90^\circ$**, then:
$$
|R| = \sqrt{P^2 + Q^2}
$$
and
$$
\beta = \tan^{-1}\left(\frac{Q}{P}\right)
$$

---

## Applications

### 1. **Force Addition**
   - The Parallelogram Law is often used to determine the net force when two forces act at an angle to each other.

### 2. **Velocity and Displacement**
   - It helps to find the resultant velocity or displacement when two components act simultaneously at different directions.

### 3. **Physics and Engineering**
   - This law is used in various fields, including engineering and mechanics, to analyze forces, velocities, and other vector quantities.

---

## Summary

- The Parallelogram Law of Vectors is used to add two vectors graphically.
- The resultant vector is represented by the diagonal of the parallelogram formed by the two vectors.
- The magnitude and direction of the resultant can be calculated using trigonometric formulas.

---

## FAQs

**1. What is the Parallelogram Law of Vectors?**  
The Parallelogram Law of Vectors states that the resultant of two vectors is given by the diagonal of the parallelogram formed by these vectors.

**2. How is the resultant vector represented in the parallelogram law?**  
The resultant vector is represented by the diagonal of the parallelogram drawn from the common point of the two vectors.

**3. Can the Parallelogram Law of Vectors be used for more than two vectors?**  
No, the Parallelogram Law is applicable for adding only two vectors at a time. For more than two vectors, the method of successive addition is used.

**4. What is the formula for the magnitude of the resultant vector?**  
The magnitude of the resultant is:  
$$
|\vec{R}| = \sqrt{A^2 + B^2 + 2AB \cos \theta}
$$  

**5. What happens when the angle between the two vectors is $90^\circ$?**  
If $\theta = 90^\circ$:  
$$
|\vec{R}| = \sqrt{A^2 + B^2}
$$  

**6. How does the angle between vectors affect the resultant?**  
- If $\theta = 0^\circ$, the vectors add directly, and the resultant is $|\vec{R}| = A + B$.  
- If $\theta = 180^\circ$, the vectors subtract, and the resultant is $|\vec{R}| = |A - B|$.  
- For other angles, the resultant depends on the cosine of $\theta$.

**7. Can vectors be subtracted using the parallelogram law?**  
Yes, vector subtraction can be done by reversing the direction of one vector and then applying the parallelogram law.

**8. How is the direction of the resultant vector determined?**  
The direction can be calculated using the formula:  
$$
\tan \phi = \frac{B \sin \theta}{A + B \cos \theta}
$$  
where $\phi$ is the angle of the resultant vector with respect to **$\vec{A}$**.

**9. Why is the parallelogram law called a graphical method?**  
Because it uses geometric representation (parallelogram) to add vectors visually.

**10. How is the parallelogram law useful in physics?**  
It is used to find the net force or displacement when two vectors act at an angle to each other.

---

## MCQs

**1. The Parallelogram Law of Vectors is used to add:**  
- A) Scalars  
- B) **Two vectors (✓)**  
- C) Three vectors  
- D) Forces only  

**2. When the two vectors are at a right angle to each other, the magnitude of the resultant vector is:**  
- A) $|\vec{R}| = A + B$  
- B) **$|\vec{R}| = \sqrt{A^2 + B^2}$ (✓)**  
- C) $|\vec{R}| = A - B$  
- D) None of the above  

**3. The formula for the magnitude of the resultant vector of two vectors **$\vec{A}$** and **$\vec{B}$** is:**  
- A) $|\vec{R}| = A + B$  
- B) $|\vec{R}| = \sqrt{A^2 - B^2}$  
- C) **$|\vec{R}| = \sqrt{A^2 + B^2 + 2AB \cos \theta}$ (✓)**  
- D) None of the above  

**4. The direction of the resultant vector is determined using:**  
- A) Pythagoras theorem  
- B) **Trigonometric ratios (✓)**  
- C) Sine rule  
- D) Cosine rule  

**5. The resultant of two vectors in opposite directions is:**  
- A) The sum of their magnitudes  
- B) **The difference of their magnitudes (✓)**  
- C) Zero  
- D) None of the above  

**6. The resultant of two vectors acting at a right angle is:**  
- A) $|\vec{R}| = A + B$  
- B) **$|\vec{R}| = \sqrt{A^2 + B^2}$ (✓)**  
- C) $|\vec{R}| = A - B$  
- D) None of the above  

**7. When the angle between the two vectors is $0^\circ$, the magnitude of the resultant is:**  
- A) $|\vec{R}| = |A - B|$  
- B) $|\vec{R}| = \sqrt{A^2 + B^2}$  
- C) **$|\vec{R}| = A + B$ (✓)**  
- D) None of the above  

**8. In the case of two vectors acting in opposite directions, the resultant is:**  
- A) The sum of the vectors  
- B) **The difference of the vectors (✓)**  
- C) Zero  
- D) None of the above  

**9. The direction of the resultant vector can be determined using:**  
- A) Angle of the first vector  
- B) **Trigonometric ratios (✓)**  
- C) The direction of the larger vector  
- D) None of the above  

**10. If two vectors are acting at an angle of $90^\circ$ to each other, the direction of the resultant vector is:**  
- A) 0°  
- B) **$\tan^{-1} \left( \frac{B}{A} \right)$ (✓)**  
- C) 180°  
- D) 90°
