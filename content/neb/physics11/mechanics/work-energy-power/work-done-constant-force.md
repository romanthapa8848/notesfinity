---
title: "Work Done by a Constant Force and a Variable Force" 
author: "Roman Thapa" 
date: "2024-12-03"
description: "An explanation of work done by constant and variable forces, including the formulae and practical examples." 
keywords:
  [
    "Work Done",
    "Constant Force",
    "Variable Force",
    "Energy",
    "Physics Class 11",
    "Work-Energy Theorem",
    "Power",
  ]
layout: "math_mode"
---

# Work Done by a Constant Force and a Variable Force

In physics, **work** is done when a force is applied to an object, and the object moves in the direction of the applied force. The work-energy principle states that work done is related to the change in energy of an object. The calculation of work varies depending on whether the force applied is constant or variable.

---

## Work Done by a Constant Force

When a constant force is applied to an object, the work done is calculated using the following formula:

$$
W = F \cdot d \cdot \cos \theta
$$

Where:  
- $W$ is the work done (in joules, J).  
- $F$ is the constant force applied (in newtons, N).  
- $d$ is the displacement of the object (in meters, m).  
- $\theta$ is the angle between the direction of force and the direction of displacement.

### Key Points:
- **Positive Work**: If the force and displacement are in the same direction ($\theta = 0^\circ$), the work done is positive.
- **Negative Work**: If the force is in the opposite direction of displacement ($\theta = 180^\circ$), the work done is negative.
- **Zero Work**: If the force is perpendicular to the displacement ($\theta = 90^\circ$), no work is done.

**Example**:  
Consider a person pushing a box with a constant force of 10 N over a distance of 5 meters in the direction of the force. The work done by the person is:

$$
W = 10 \, \text{N} \times 5 \, \text{m} \times \cos(0^\circ) = 10 \times 5 \times 1 = 50 \, \text{J}
$$

Thus, 50 joules of work is done by the force.

---

## Work Done by a Variable Force

When the force applied to an object is variable (i.e., it changes with displacement), the work done cannot be calculated directly using a simple formula. In this case, the work done is the integral of the force with respect to displacement:

$$
W = \int F(x) \, dx
$$

Where:  
- $W$ is the work done.  
- $F(x)$ is the variable force as a function of displacement $x$.  
- $dx$ is an infinitesimally small displacement.

### Example of Work Done by a Variable Force:

If the force acting on an object changes with position, say $F(x) = kx$, where $k$ is a constant, the work done in moving the object from position $x_1$ to position $x_2$ is:

$$
W = \int_{x_1}^{x_2} kx \, dx = \frac{k}{2} \left( x_2^2 - x_1^2 \right)
$$

This formula represents the work done by a force that increases linearly with displacement. In many physical situations, force may vary with position in more complex ways.

---

## Work-Energy Theorem

> The **work-energy theorem** states that the work done on an object is equal to the change in its kinetic energy:

$$
W = \Delta K = K_f - K_i
$$

Where:  
- $W$ is the work done on the object.  
- $K_f$ is the final kinetic energy.  
- $K_i$ is the initial kinetic energy.

This theorem is useful when calculating the work done in changing an object's speed or velocity.

---

## Power

**Power** is the rate at which work is done or energy is transferred. It is defined as the work done per unit time:

$$
P = \frac{W}{t}
$$

Where:  
- $P$ is the power (in watts, W).  
- $W$ is the work done (in joules, J).  
- $t$ is the time taken (in seconds, s).

**Example**:  
If 100 joules of work is done in 10 seconds, the power exerted is:

$$
P = \frac{100 \, \text{J}}{10 \, \text{s}} = 10 \, \text{W}
$$

Thus, the power is 10 watts.

---

## Summary

- The work done by a constant force is given by $W = F \cdot d \cdot \cos \theta$.
- For variable forces, the work done is calculated by integrating the force over displacement.
- The **work-energy theorem** relates the work done to the change in kinetic energy of an object.
- **Power** is the rate of doing work and is given by $P = \frac{W}{t}$.

---

## FAQs

**1. What is work in physics?**  
Work is done when a force causes an object to move in the direction of the force. The amount of work depends on the force applied, the displacement of the object, and the angle between the force and displacement.

**2. How do you calculate work done by a variable force?**  
For a variable force, the work done is the integral of the force with respect to displacement: $W = \int F(x) \, dx$.

**3. What is the work-energy theorem?**  
The work-energy theorem states that the work done on an object is equal to the change in its kinetic energy: $W = \Delta K$.

**4. How is power related to work?**  
Power is the rate at which work is done, given by $P = \frac{W}{t}$.

**5. What is the difference between constant and variable force in terms of work?**  
For a constant force, work is simply the force times displacement, while for a variable force, the work involves integrating the force over the displacement.

**6. What is the unit of power?**  
The unit of power is the watt (W), which is equal to one joule per second (J/s).

**7. Can work be zero if there’s force applied?**  
Yes, work can be zero if the force is applied perpendicular to the direction of displacement, i.e., if $\theta = 90^\circ$.

**8. How do you calculate work done by a constant force?**  
Work done by a constant force is calculated using the formula $W = F \cdot d \cdot \cos \theta$.

**9. Can work done be negative?**  
Yes, work done is negative when the force applied to an object is in the opposite direction of its displacement (i.e., $\theta = 180^\circ$).

**10. How do you calculate power when work is done over time?**  
Power is calculated as the work done divided by the time taken, i.e., $P = \frac{W}{t}$.

---

## MCQs

**1. The work done by a constant force is given by which formula?**  
- A) $W = F \cdot d$  
- B) **$W = F \cdot d \cdot \cos \theta$ (✓)**  
- C) $W = F \cdot d^2$  
- D) $W = F \cdot t$  

**2. If the force applied to an object is constant and the angle between the force and displacement is $90^\circ$, what is the work done?**  
- A) Positive  
- B) Negative  
- C) **Zero (✓)**  
- D) Infinite  

**3. What is the unit of power?**  
- A) Joule  
- B) Newton  
- C) **Watt (✓)**  
- D) Meter  

**4. The work-energy theorem states that work is equal to the change in which quantity?**  
- A) Force  
- B) **Kinetic energy (✓)**  
- C) Potential energy  
- D) Speed  

**5. What is the formula for power?**  
- A) $P = F \cdot d$  
- B) **$P = \frac{W}{t}$ (✓)**  
- C) $P = \frac{d}{t}$  
- D) $P = W \cdot t$  

**6. When a force is applied at an angle to the direction of motion, the work done is given by?**  
- A) $W = F \cdot d$  
- B) **$W = F \cdot d \cdot \cos \theta$ (✓)**  
- C) $W = F \cdot d \cdot \sin \theta$  
- D) $W = F \cdot d \cdot \tan \theta$  

**7. How do you calculate the work done by a variable force?**  
- A) $W = F \cdot d$  
- B) **$W = \int F(x) \, dx$ (✓)**  
- C) $W = \frac{F \cdot d}{2}$  
- D) $W = F \cdot t$  

**8. What happens to the work done if the displacement is zero?**  
- A) It becomes negative.  
- B) It becomes infinite.  
- C) **It becomes zero (✓)**  
- D) It becomes constant.  

**9. What is the formula for work done by a constant force?**  
- A) $W = F \cdot d$  
- B) **$W = F \cdot d \cdot \cos \theta$ (✓)**  
- C) $W = F \cdot d \cdot \sin \theta$  
- D) $W = F \cdot d^2$  

**10. If the force applied to an object changes with displacement, how is the work done calculated?**  
- A) $W = F \cdot d$  
- B) **$W = \int F(x) \, dx$ (✓)**  
- C) $W = F \cdot d \cdot \sin \theta$  
- D) $W = F \cdot d^2$  
