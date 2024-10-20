---
title: "Theory of Structures II"
author: "Roman Thapa"
date: "2024-10-20"
description: "An advanced course focusing on indeterminate structures, exploring force and displacement methods, plastic analysis, and matrix formulations."
keywords:
  [
    "Theory of Structures",
    "Structural Mechanics",
    "Indeterminate Systems",
    "Force Method",
    "Displacement Method",
    "Matrix Analysis",
  ]
layout: "non_math_mode"
---

# Theory of Structures II

---

| Course Code | CE 601                                                        |
| ----------- | ------------------------------------------------------------- |
| Theory      | Assessment Mark: 20; Final Exam: 80 Marks (Duration: 3 Hours) |
| Practical   | Assessment Mark: 25                                           |
| Total Marks | 125 Marks                                                     |

---

## Course Objectives

The threefold objective of the course is to:

- Familiarize the terminologies and concepts of displacements, stresses, strains, stiffness, etc., and their parameters in the context of indeterminate systems.
- Practice in examples the basic concepts and theorems on static (equilibrium), geometrical (compatibility), and physical (force, stiffness, and displacements) conditions in the context of indeterminate systems.
- Prepare the candidates for advanced courses in structural mechanics by introducing necessary tools like matrix method, force method, displacement method, and plastic analysis.

---

## 1. Introduction (8 hours)

- [1.1 Formulation of problems in theory of structure](/path/to/formulation/)
  - Functions of the structural systems and the corresponding requirements/conditions to be fulfilled, including strength, stiffness, and stability of a system.
- [1.2 Conditions and equations](/path/to/conditions/)
  - Static, compatibility, and physical conditions.
- [1.3 Satisfaction of conditions](/path/to/satisfaction/)
- [1.4 Boundary conditions and partial restraints](/path/to/boundary-conditions/)
- [1.5 Solutions of equations](/path/to/solutions/)

- [1.6 Structure idealization](/path/to/structure-idealization/)
  - Local and global coordinate systems and static and deformation conventions of signs.
- [1.7 Indeterminacy of structural systems](/path/to/indeterminacy/)
  - Physical meanings and types of indeterminacy.
- [1.8 Degree of static indeterminacy](/path/to/static-indeterminacy/)
  - Determination/calculation using formulas and visual checking for plane systems (truss, frame, and arch).
- [1.9 Degree of kinematic indeterminacy](/path/to/kinematic-indeterminacy/)
  - Determination/calculation using formulas and visual checking for plane systems (truss, frame, and arch).
- [1.10 Force and displacement definitions](/path/to/force-displacement/)

  - Operational parameters compared with systemic parameters (e.g., dimensions and material properties).

- [1.11 Cause and effect: Force and displacement](/path/to/cause-effect/)
  - Betti's law and Maxwell's reciprocal theorem, their uses, and limitations.
- [1.12 Castigliano's theorems](/path/to/castigliano-theorems/)

  - Application of the second theorem for determining displacements in statically determinate systems and solving simple statically indeterminate systems (beam and truss).

- [1.13 Flexibility and stiffness](/path/to/flexibility-stiffness/)
- [1.14 Flexibility matrix](/path/to/flexibility-matrix/)
- [1.15 Stiffness matrix](/path/to/stiffness-matrix/)
- [1.16 Relationship between flexibility and stiffness matrices](/path/to/matrix-relationship/)
- [1.17 Force and displacement methods](/path/to/force-displacement-methods/)

---

## 2. Force Method (12 hours)

- [2.1 Definitions and Explanations](/force-method/2.1-definitions/)

  - Specialties of the force method and its limitations.

- [2.2 Primary Systems with Static Indeterminacies](/force-method/2.2-primary-systems/)

  - Primary systems with replacements of static indeterminacies, choice of unknowns for force quantities, and its limitations. Use of unit forces for static indeterminacies and unit force diagrams.

- [2.3 Compatibility Conditions and Matrix Formulation](/force-method/2.3-compatibility-conditions/)

  - Formulation of compatibility conditions in matrix form, with dependency on system-specific matrices and the choice of unknowns.

- [2.4 Flexibility Matrix: Generation and Calculations](/force-method/2.4-flexibility-matrix/)

- [2.5 Graphical Method for Coefficient Calculation](/force-method/2.5-graphical-method/)

  - Calculation of flexibility matrix coefficients using graphical methods. Derivation of the formula for the standard case involving a parabola and straight line, and extension to cases with two straight lines.

- [2.6 Applications to Beams and Frames](/force-method/2.6-applications-beams-frames/)

  - Use of the three-moment theorem, handling temperature variance, and settlement of supports. Determination of redundant reactions or member forces in beams (two to three spans) and frames (one-story two-bay or two-story one-bay). Consideration of settlement of support and internal/external temperature changes for beams (up to two spans) and portal frames (involving no more than four unknowns).

- [2.7 Applications to Trusses](/force-method/2.7-applications-trusses/)

  - Effects of temperature variance and misfits on trusses.

- [2.8 Applications to Arches](/force-method/2.8-applications-arches/)

  - Analysis of parabolic and circular arches: simple cases of two-hinged and hinge-less arches. Includes cases of yielding of supports and temperature effects, as well as influence line diagrams for two-hinged arches.

- [2.9 Bending Moment, Shear Force, and Normal Thrust Diagrams](/force-method/2.9-bending-moment/)
  - Bending moment, shear force, and normal thrust diagrams for the aforementioned systems (beams, frames, and arches).

---

## 3. Displacement Method (15 hours)

- [3.1 Definitions and Explanations](/displacement-method/3.1-definitions/)

  - Specialties of the displacement method and its limitations.

- [3.2 Primary System: Kinematic Indeterminacy](/displacement-method/3.2-primary-system/)

  - Kinematic indeterminacy and unit displacement system, including unit displacement diagrams and their applications.

- [3.3 Choice of Unknowns](/displacement-method/3.3-choice-of-unknowns/)

  - Uniqueness of choice of unknowns in comparison with the force method.

- [3.4 Equilibrium Conditions and Matrix Formulation](/displacement-method/3.4-equilibrium-conditions/)

  - Formulation of equilibrium conditions and equations in matrix form.

- [3.5 Stiffness Matrix](/displacement-method/3.5-stiffness-matrix/)

  - Formation, properties, and application of the stiffness matrix as system-specific.

- [3.6 Applications to Beams and Frames](/displacement-method/3.6-applications-beams-frames/)

  - Effects of support settlement and temperature on beams and frames.

- [3.7 Applications to Trusses](/displacement-method/3.7-applications-trusses/)
  - Effects of temperature change on trusses.

---

- [3.8 Bending Moment, Shear Force, and Normal Thrust Diagrams](/displacement-method/3.8-bending-shear-normal/)

  - Diagrams for the systems.

- [3.9 Fixed End Moment, Slope, and Deflection](/displacement-method/3.9-fixed-end-moment/)

  - Their uses in beam systems.

- [3.10 Equilibrium Conditions of the Joints](/displacement-method/3.10-equilibrium-joints/)

  - Equilibrium conditions in beams and frames.

- [3.11 Slope Deflection Equations](/displacement-method/3.11-slope-deflection/)

  - Applications of slope deflection equations in beam systems.

- [3.12 Stiffness of a Member in a Rigid Joint](/displacement-method/3.12-member-stiffness/)

  - Considerations for stiffness in rigid joints.

- [3.13 Boundary Conditions](/displacement-method/3.13-boundary-conditions/)

  - Overview of boundary conditions in structural systems.

- [3.14 Distribution of Unbalanced Moment in a Rigid Joint](/displacement-method/3.14-unbalanced-moment/)

  - Distribution of unbalanced moments.

- [3.15 Principle of Moment Distribution](/displacement-method/3.15-moment-distribution/)

  - Consideration of cross-sectional stiffness, member stiffness (considering length), and boundary conditions.

- [3.16 Application of Moment Distribution Method](/displacement-method/3.16-moment-distribution-application/)

  - Application to solve beams and frames (simple cases with one bay and two storeys or two bays and one storey).

- [3.17 Consideration of Sway Conditions](/displacement-method/3.17-sway-conditions/)
  - Simple cases with one bay and two storeys or two bays and one storey.

---

## 4. Influence Line (IL) for Continuous Beams (4 hours)

- [4.1 Definitions and Explanations](/influence-line/4.1-definitions/)

  - Basic elements of IL: given section, structural quantity (support reaction, bending moment, shear force), and the given structural system. IL diagrams as system-specific diagrams independent of operational parameters like loads.

- [4.2 Neutral Points in Continuous Beams](/influence-line/4.2-neutral-points/)

  - Fixed points with respect to loads on the left or right of the span. Determination of left or right focal point ratios and focal point ratios for extreme spans.

- [4.3 Use of Three Moment Equations](/influence-line/4.3-three-moment-equations/)

  - Application of focal point ratios to determine support moments in a continuous beam.

- [4.4 Numerical Method for Drawing IL Diagrams](/influence-line/4.4-numerical-method/)

  - Drawing IL diagrams of support moments using focal point ratios.

- [4.5 Use of IL Diagrams for Structural Quantities](/influence-line/4.5-structural-quantities/)

  - Drawing IL diagrams for other structural quantities like support reactions, bending moments, and shear forces in a given section.

- [4.6 Mueller Breslau Principle](/influence-line/4.6-mueller-breslau/)

  - Physical meaning and use of the Mueller Breslau principle.

- [4.7 IL Diagrams for Various Sections of Continuous Beams](/influence-line/4.7-diagrams-sections/)

  - IL diagrams for reaction, bending moment, and shear force in various sections of continuous beams (two to three spans only).

- [4.8 Loading of IL Diagrams](/influence-line/4.8-loading-diagrams/)
  - Determination of reaction, bending moment, and shear force at a section of a continuous beam for given loads in the form of concentrated forces, couples, and distributed loads.

---

## 5. Introduction to Plastic Analysis

_(6 hours)_

- [5.1 Definitions and Explanations](/plastic-analysis/5.1-definitions/)

  - Key concepts and terminologies in plastic analysis.

- [5.2 Plastic Analysis of Bending Members](/plastic-analysis/5.2-bending-members/)

  - Overview of plastic analysis techniques applied to bending members.

- [5.3 Plastic Bending](/plastic-analysis/5.3-plastic-bending/)

  - Exploration of the mechanics and implications of plastic bending.

- [5.4 Plastic Hinge and Its Length](/plastic-analysis/5.4-plastic-hinge/)

  - Definition and significance of plastic hinges in structural analysis.

- [5.5 Load Factor and Shape Factor](/plastic-analysis/5.5-load-shape-factors/)

  - Examination of load factors and shape factors in the context of plastic analysis.

- [5.6 Basic Theorems on Methods of Limit Analysis](/plastic-analysis/5.6-limit-analysis-theorems/)

  - Fundamental theorems that guide methods of limit analysis.

- [5.7 Collapse Loads: Partial and Complete Collapse](/plastic-analysis/5.7-collapse-loads/)

  - Discussion on collapse loads, including scenarios of partial and complete collapse.

- [5.8 Collapse with Tied Loads](/plastic-analysis/5.8-collapse-tied-loads/)
  - Analysis of collapse conditions for simple cases of statically indeterminate beams (up to three spans) and portal frames.

---

## Practical (8 hours)

- [Determination of Redundant Reaction Components](/practical/redudant-reaction/)

  - Comparative studies in the following four experiments:
  - [1. Continuous Beams](/practical/1-continuous-beams/)

    - Experiments on propped cantilever beams and two-spanned beams with various end conditions.

  - [2. Two Hinged Arch](/practical/2-two-hinged-arch/)

    - Analysis and testing of two-hinged arch structures.

  - [3. Symmetrical Portal Frame](/practical/3-symmetrical-portal-frame/)

    - Investigating the behavior and reactions of symmetrical portal frames.

  - [4. Unsymmetrical Portal Frame](/practical/4-unsymmetrical-portal-frame/)
    - Study of unsymmetrical portal frames and their reactions.

---

## References

1. Darkov A. et al., _Structural Mechanics_, Mir Publishers, Moscow.
2. Chali A. & Neville A. M., _Structural Analysis: A Unified Classical and Matrix Approach_, Chapman and Hall.
3. Joshi H. R., _Theory of Structures II - Course Manual_, Institute of Engineering, Tribhuvan University, Kathmandu.
4. Norris C. H., Wilbur J. B., & Utku S., _Elementary Structural Analysis_, McGraw-Hill International Editions, Civil Engineering Series.
5. Pandit C. S. & Gupta S. P., _Structural Analysis: A Matrix Approach_, Tata McGraw-Hill Publishing Company, New Delhi.
6. Reddy C. S., _Basic Structural Analysis_, Tata McGraw-Hill Publishing Company, New Delhi.
7. Wang C. K., _Intermediate Structural Analysis_, McGraw-Hill International Editions, Civil Engineering Series.
