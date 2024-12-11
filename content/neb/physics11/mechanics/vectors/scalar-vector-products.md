---
title: "Scalar and Vector Products" 
author: "Roman Thapa" 
date: "2024-12-02"
description: "A comprehensive explanation of the scalar (dot) product and vector (cross) product in vector algebra, with examples and applications." 
keywords:
  [
    "Scalar Product",
    "Vector Product",
    "Dot Product",
    "Cross Product",
    "Physics Class 11",
    "Vector Algebra"
  ]
layout: "math_mode"
---

# Scalar and Vector Products

In vector algebra, **scalar product** (or dot product) and **vector product** (or cross product) are two important operations that involve vectors. These products have distinct properties and applications in physics, especially in mechanics and electromagnetism.

---

## Scalar (Dot) Product

The **scalar product** of two vectors **$\vec{A}$** and **$\vec{B}$** is defined as the product of their magnitudes and the cosine of the angle between them. The result of the scalar product is a **scalar** (a quantity with only magnitude, not direction).

### Formula for Scalar Product

$$
\vec{A} \cdot \vec{B} = A B \cos \theta
$$

where:
- **$A$** and **$B$** are the magnitudes of vectors **$\vec{A}$** and **$\vec{B}$**.
- **$\theta$** is the angle between the two vectors.

### Properties of Scalar Product

1. **Commutative**:  
   $$ \vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A} $$

2. **Distributive over addition**:  
   $$ \vec{A} \cdot (\vec{B} + \vec{C}) = \vec{A} \cdot \vec{B} + \vec{A} \cdot \vec{C} $$

3. **Associative with scalar multiplication**:  
   $$ (k \vec{A}) \cdot \vec{B} = k (\vec{A} \cdot \vec{B}) $$

### Example of Scalar Product

For two vectors **$\vec{A} = 3 \hat{i} + 4 \hat{j}$** and **$\vec{B} = 5 \hat{i} + 12 \hat{j}$**:

- Magnitudes of vectors:  
  $$ A = \sqrt{3^2 + 4^2} = 5, \quad B = \sqrt{5^2 + 12^2} = 13 $$

- The angle **$\theta$** between the vectors can be calculated using the formula:  
  $$ \cos \theta = \frac{\vec{A} \cdot \vec{B}}{A B} $$

  Substituting the values:  
  $$ \vec{A} \cdot \vec{B} = (3 \times 5) + (4 \times 12) = 15 + 48 = 63 $$

  $$ \cos \theta = \frac{63}{5 \times 13} = \frac{63}{65} $$

---

## Vector (Cross) Product

The **vector product** of two vectors **$\vec{A}$** and **$\vec{B}$** is defined as a vector whose magnitude is the product of the magnitudes of the two vectors and the sine of the angle between them. The direction of the resultant vector is perpendicular to the plane formed by **$\vec{A}$** and **$\vec{B}$**, following the right-hand rule.

### Formula for Vector Product

$$
\vec{A} \times \vec{B} = AB \sin \theta \hat{n}
$$

where:
- **$A$** and **$B$** are the magnitudes of vectors **$\vec{A}$** and **$\vec{B}$**.
- **$\theta$** is the angle between the vectors.
- **$\hat{n}$** is the unit vector perpendicular to the plane formed by **$\vec{A}$** and **$\vec{B}$** (determined by the right-hand rule).

### Properties of Vector Product

1. **Non-Commutative**:  
   $$ \vec{A} \times \vec{B} = - \vec{B} \times \vec{A} $$

2. **Distributive over addition**:  
   $$ \vec{A} \times (\vec{B} + \vec{C}) = \vec{A} \times \vec{B} + \vec{A} \times \vec{C} $$

3. **Associative with scalar multiplication**:  
   $$ (k \vec{A}) \times \vec{B} = k (\vec{A} \times \vec{B}) $$

### Example of Vector Product

For two vectors **$\vec{A} = 2 \hat{i} + 3 \hat{j} + \hat{k}$** and **$\vec{B} = \hat{i} - 4 \hat{j} + 2 \hat{k}$**, the cross product is calculated using the determinant method:

$$
\vec{A} \times \vec{B} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
2 & 3 & 1 \\
1 & -4 & 2
\end{vmatrix}
$$

Expanding the determinant:

$$
\vec{A} \times \vec{B} = \hat{i} \begin{vmatrix} 3 & 1 \\ -4 & 2 \end{vmatrix} - \hat{j} \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} + \hat{k} \begin{vmatrix} 2 & 3 \\ 1 & -4 \end{vmatrix}
$$

Calculating the individual 2x2 determinants:

- For **$\hat{i}$**:  
  $$ \begin{vmatrix} 3 & 1 \\ -4 & 2 \end{vmatrix} = (3 \times 2) - (1 \times -4) = 6 + 4 = 10 $$

- For **$\hat{j}$**:  
  $$ \begin{vmatrix} 2 & 1 \\ 1 & 2 \end{vmatrix} = (2 \times 2) - (1 \times 1) = 4 - 1 = 3 $$

- For **$\hat{k}$**:  
  $$ \begin{vmatrix} 2 & 3 \\ 1 & -4 \end{vmatrix} = (2 \times -4) - (3 \times 1) = -8 - 3 = -11 $$

Thus,  
$$
\vec{A} \times \vec{B} = 10 \hat{i} - 3 \hat{j} - 11 \hat{k}
$$

---

## Comparison Table: Scalar Product vs. Vector Product

| Property               | Scalar (Dot) Product                          | Vector (Cross) Product                        |
|------------------------|-----------------------------------------------|-----------------------------------------------|
| **Result**             | Scalar (a quantity with only magnitude)       | Vector (a quantity with magnitude and direction) |
| **Formula**            | $\vec{A} \cdot \vec{B} = A B \cos \theta$     | $\vec{A} \times \vec{B} = AB \sin \theta \hat{n}$ |
| **Commutative**        | Yes                                           | No                                            |
| **Magnitude**          | $A B \cos \theta$                             | $A B \sin \theta$                             |
| **Direction**          | Does not have direction                       | Perpendicular to the plane of the vectors (determined by right-hand rule) |
| **Resultant**          | Scalar                                        | Vector                                        |
| **Example Use**        | Work done by a force, angle between vectors   | Torque, angular momentum, area of parallelogram formed by vectors |
| **Property with Addition** | Distributive                               | Distributive                                  |

---

## Summary

- The **scalar product** (dot product) results in a scalar and is used to calculate the angle between two vectors and work done by a force.
- The **vector product** (cross product) results in a vector and is used to find torque and angular momentum, among other applications.

---

## FAQs

**1. What is the scalar product of two vectors?**  
The scalar product is the product of the magnitudes of two vectors and the cosine of the angle between them.

**2. What is the vector product of two vectors?**  
The vector product is a vector whose magnitude is the product of the magnitudes of the two vectors and the sine of the angle between them. Its direction is perpendicular to the plane containing the vectors.

**3. What is the result of a scalar product?**  
The result of a scalar product is a scalar (a quantity with only magnitude).

**4. What is the result of a vector product?**  
The result of a vector product is a vector.

**5. Is the scalar product commutative?**  
Yes, the scalar product is commutative, i.e., **$\vec{A} \cdot \vec{B} = \vec{B} \cdot \vec{A}$**.

**6. Is the vector product commutative?**  
No, the vector product is not commutative. It follows the rule: **$\vec{A} \times \vec{B} = - \vec{B} \times \vec{A}$**.

**7. Can the scalar product be used to find the angle between two vectors?**  
Yes, the scalar product can be used to find the angle between two vectors using the formula:  
$$ \cos \theta = \frac{\vec{A} \cdot \vec{B}}{A B} $$

**8. What is the direction of the vector product?**  
The direction of the vector product is perpendicular to the plane formed by the two vectors, determined by the right-hand rule.

**9. How do you calculate the cross product of two vectors?**  
The cross product is calculated using the determinant of a matrix that includes the unit vectors **$\hat{i}$**, **$\hat{j}$**, and **$\hat{k}$**.

**10. Can the scalar product be used to find the work done by a force?**  
Yes, the work done by a force is the scalar product of the force vector and the displacement vector.

---

## MCQs

**1. The scalar product of two vectors is a:**  
- A) Vector  
- B) **Scalar (✓)**  
- C) Matrix  
- D) Complex Number  

**2. The formula for the scalar product is:**  
- A) **$\vec{A} \cdot \vec{B} = AB \cos \theta$ (✓)**  
- B) $\vec{A} \times \vec{B} = AB \cos \theta$  
- C) $\vec{A} \times \vec{B} = AB \sin \theta$  
- D) $\vec{A} \cdot \vec{B} = AB \sin \theta$  

**3. The result of the vector product is:**  
- A) Scalar  
- B) **Vector (✓)**  
- C) Matrix  
- D) Complex Number  

**4. The vector product of two parallel vectors is:**  
- A) **Zero (✓)**  
- B) A scalar  
- C) A non-zero vector  
- D) Undefined  

**5. The magnitude of the vector product is given by:**  
- A) $AB \cos \theta$  
- B) **$AB \sin \theta$ (✓)**  
- C) $A + B$  
- D) $A - B$  

**6. The direction of the vector product is determined by:**  
- A) Angle between vectors  
- B) **Right-hand rule (✓)**  
- C) Magnitudes of the vectors  
- D) None of the above  

**7. The vector product is commutative:**  
- A) True  
- B) **False (✓)**  

**8. The scalar product of perpendicular vectors is:**  
- A) One  
- B) **Zero (✓)**  
- C) Infinity  
- D) Undefined  

**9. The unit of the scalar product in SI is:**  
- A) **Joule (✓)**  
- B) Newton  
- C) Meter  
- D) Watt  

**10. The vector product of two vectors is zero when:**  
- A) **They are parallel (✓)**  
- B) They are perpendicular  
- C) They are of equal magnitude  
- D) They form a right angle
