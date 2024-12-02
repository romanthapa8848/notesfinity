---
title: "Triangle Law of Vectors"
author: "Roman Thapa"
date: "2024-12-02"
description: "An explanation of the Triangle Law of Vectors, including its statement, graphical representation, proof, and applications."
keywords:
  [
    "Triangle Law of Vectors",
    "Vector Addition",
    "Physics Class 11",
    "Graphical Method",
    "Resultant Vector"
  ]
layout: "math_mode"
---

# Triangle Law of Vectors

The **Triangle Law of Vectors** is a graphical method for adding two vectors. It states that if two vectors are represented as two sides of a triangle in sequence, their resultant is given by the closing side of the triangle taken in the opposite direction.

---

## Statement

> If two vectors are represented in magnitude and direction by two sides of a triangle taken in sequence, their resultant is represented by the third side of the triangle taken in the reverse order.

---

## Representation

Consider two vectors, **$\vec{A}$** and **$\vec{B}$**:

1. Draw **$\vec{A}$** using its magnitude and direction.
2. From the tip of **$\vec{A}$**, draw **$\vec{B}$** using its magnitude and direction.
3. The resultant vector **$\vec{R}$** is the vector joining the tail of **$\vec{A}$** to the tip of **$\vec{B}$**.

### Mathematical Representation

If **$\vec{A}$** and **$\vec{B}$** are two vectors, their resultant **$\vec{R}$** is:  
$$
\vec{R} = \vec{A} + \vec{B}
$$

The magnitude of the resultant is given by:  
$$
|\vec{R}| = \sqrt{A^2 + B^2 + 2AB \cos \theta}
$$  
where:
- $A$ and $B$ are the magnitudes of **$\vec{A}$** and **$\vec{B}$**.
- $\theta$ is the angle between **$\vec{A}$** and **$\vec{B}$**.

---

## Proof of the Triangle Law of Vector Addition

### Statement
If two vectors acting simultaneously on a body are represented both in magnitude and direction by two sides of a triangle taken in order, their resultant vector (in both magnitude and direction) is represented by the third side of the triangle taken in the opposite order.

---

## Proof of the Triangle Law of Vector Addition

Let us consider two vectors **$\vec{P}$** and **$\vec{Q}$** represented by the sides **OA** and **AB** of a triangle respectively. The vectors are directed such that their tail-to-head arrangement forms the triangle. The resultant vector **$\vec{R}$** is represented by the side **OB** of the triangle.

### Step-by-step proof:

1. **Constructing the triangle:**
   The vectors **$\vec{P}$** and **$\vec{Q}$** are joined tail-to-head as per the triangle law. The angle between the vectors is **$\theta$**.

2. **Extending the side OA:**
   Extend side **OA** to a point **C** such that **BC** is perpendicular to **OC**, forming a right triangle **OBC**.

3. **Using trigonometry:**
   In the right triangle **ABC**, we can express the components of vector **$\vec{Q}$** in terms of trigonometric functions:
   - $$ \text{AC} = AB \cos \theta = Q \cos \theta $$
   - $$ \text{BC} = AB \sin \theta = Q \sin \theta $$

4. **Applying Pythagoras' theorem:**
   Using the right triangle **OBC**, apply the Pythagorean theorem to find the magnitude of the resultant vector **$\vec{R}$**:
   $$
   OB^2 = OC^2 + BC^2
   $$
   Substituting the expressions for **OC** and **BC**, we have:
   $$
   OB^2 = (OA + AC)^2 + BC^2
   $$
   Expanding the terms:
   $$
   OB^2 = (P + Q \cos \theta)^2 + (Q \sin \theta)^2
   $$

5. **Simplifying the equation:**
   Expanding the squares:
   $$
   OB^2 = P^2 + 2PQ \cos \theta + Q^2 \cos^2 \theta + Q^2 \sin^2 \theta
   $$
   Using the trigonometric identity **$\cos^2 \theta + \sin^2 \theta = 1$**, we get:
   $$
   OB^2 = P^2 + 2PQ \cos \theta + Q^2
   $$

   Therefore, the magnitude of the resultant vector is:
   $$
   |\vec{R}| = \sqrt{P^2 + 2PQ \cos \theta + Q^2}
   $$

6. **Finding the direction of the resultant vector:**
   To determine the direction **$\phi$** of the resultant vector **$\vec{R}$**, consider the right triangle **OBC**. The tangent of the angle **$\phi$** is:
   $$
   \tan \phi = \frac{\text{BC}}{\text{OC}} = \frac{Q \sin \theta}{P + Q \cos \theta}
   $$

   Therefore, the direction of the resultant vector is:
   $$
   \phi = \tan^{-1}\left( \frac{Q \sin \theta}{P + Q \cos \theta} \right)
   $$

Thus, we have proved both the magnitude and direction of the resultant vector **$\vec{R}$** using the triangle law of vector addition.

---

## Applications

### 1. **Force Addition**
   - Used to find the net force acting on a body when two forces act simultaneously.

### 2. **Velocity and Displacement**
   - Helps calculate resultant velocity or displacement when two components are involved.

### 3. **Physics and Engineering**
   - Widely applied in mechanics, kinematics, and vector-based calculations.

---

## Summary

- The Triangle Law of Vectors allows us to add two vectors graphically.
- The resultant vector is represented by the third side of the triangle in the opposite direction.
- The magnitude and direction of the resultant can be calculated using trigonometry.

---

## FAQs

**1. What is the Triangle Law of Vectors?**  
The Triangle Law of Vectors states that if two vectors are represented by two sides of a triangle taken in sequence, their resultant is the third side of the triangle in the opposite direction.

**2. How is the resultant vector represented in the triangle law?**  
The resultant vector is represented by the third side of the triangle taken in the reverse order.

**3. Can the Triangle Law of Vectors be used for more than two vectors?**  
No, it is only applicable to two vectors at a time. For multiple vectors, the Polygon Law of Vectors is used.

**4. What is the formula for the magnitude of the resultant vector?**  
The magnitude is given by:  
$$
|\vec{R}| = \sqrt{A^2 + B^2 + 2AB \cos \theta}
$$  

**5. What happens when the two vectors are perpendicular?**  
If $\theta = 90^\circ$:  
$$
|\vec{R}| = \sqrt{A^2 + B^2}
$$  

**6. Can vectors be subtracted using the triangle law?**  
Yes, vector subtraction can be done by reversing the direction of one vector and then applying the triangle law.

**7. How is the direction of the resultant vector determined?**  
The direction can be calculated using the formula:  
$$
\tan \phi = \frac{B \sin \theta}{A + B \cos \theta}
$$  
where $\phi$ is the angle of the resultant vector.

**8. What is the significance of the triangle law in physics?**  
It is essential for solving problems involving forces, motion, and other vector-based quantities.

**9. Why is the triangle law called a graphical method?**  
Because it uses geometric representation (a triangle) to add vectors visually.

**10. How does the angle between vectors affect the resultant?**  
- If $\theta = 0^\circ$, the vectors add directly: $|\vec{R}| = A + B$.  
- If $\theta = 180^\circ$, they subtract: $|\vec{R}| = |A - B|$.  
- For other angles, the resultant depends on $\cos \theta$.

---

## MCQs

**1. What does the Triangle Law of Vectors determine?**  
- A) Vector subtraction  
- B) Scalar addition  
- C) **Vector addition (✓)**  
- D) Multiplication of vectors  

**2. If two vectors are perpendicular, their resultant is calculated as:**  
- A) $|\vec{R}| = A + B$  
- B) $|\vec{R}| = A - B$  
- C) **$|\vec{R}| = \sqrt{A^2 + B^2}$ (✓)**  
- D) $|\vec{R}| = AB \cos \theta$  

**3. The magnitude of the resultant vector is maximum when the angle between vectors is:**  
- A) $0^\circ$ (✓)  
- B) $90^\circ$  
- C) $180^\circ$  
- D) $45^\circ$  

**4. What is the formula for the direction of the resultant vector?**  
- A) $\tan \phi = \frac{A}{B}$  
- B) **$\tan \phi = \frac{B \sin \theta}{A + B \cos \theta}$ (✓)**  
- C) $\tan \phi = \frac{A \cos \theta}{B \sin \theta}$  
- D) $\tan \phi = A + B$  

**5. When two vectors are added using the triangle law, the resultant vector:**  
- A) Lies along one of the vectors  
- B) Is perpendicular to both vectors  
- C) **Is represented by the third side of the triangle (✓)**  
- D) Is equal to the sum of the vectors  

**6. The magnitude of the resultant vector when the angle between vectors is $180^\circ$ is:**  
- A) $|\vec{R}| = A + B$  
- B) $|\vec{R}| = |A - B|$ (✓)  
- C) $|\vec{R}| = \sqrt{A^2 + B^2}$  
- D) $|\vec{R}| = AB$  

**7. The Triangle Law of Vectors is applicable to:**  
- A) Only scalar quantities  
- B) Only vector subtraction  
- C) **Only two vectors at a time (✓)**  
- D) More than two vectors  

**8. The direction of the resultant vector in the triangle law is found using:**  
- A) Pythagorean theorem  
- B) **Trigonometry (✓)**  
- C) Scalar multiplication  
- D) Vector projection  

**9. In the case of two vectors with an angle of $90^\circ$, the resultant is:**  
- A) Equal to $A + B$  
- B) Equal to $A - B$  
- C) **Equal to $\sqrt{A^2 + B^2}$ (✓)**  
- D) Zero  

**10. What happens when the angle between the two vectors is $0^\circ$?**  
- A) The vectors subtract  
- B) The vectors cancel each other  
- C) **The vectors add directly (✓)**  
- D) The magnitude is zero
