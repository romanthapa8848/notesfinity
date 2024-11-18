---
title: "Present Value of Ordinary Annuity and Annuity Due"
author: "Roman Thapa"
date: "2024-11-18"
description: "This topic explains the concept and formulas for the present value of ordinary annuities and annuities due."
keywords:
  [
    "Present Value of Annuity",
    "Ordinary Annuity",
    "Annuity Due",
    "Financial Concepts",
  ]
layout: "math_mode"
---

# Present Value of Ordinary Annuity and Annuity Due

An annuity is a series of equal payments made at regular intervals. The **present value** of an annuity refers to the current value of those future payments, discounted to the present time.

## 1. Present Value of Ordinary Annuity (PVOA)

In an **ordinary annuity**, payments are made at the **end** of each period. The formula to calculate the present value of an ordinary annuity is:

$$
PV_{OA} = P \times \frac{1 - (1 + r)^{-n}}{r}
$$

Where:

- $PV_{OA}$ = Present value of the ordinary annuity
- $P$ = Payment amount per period
- $r$ = Interest rate per period
- $n$ = Number of periods

## 2. Present Value of Annuity Due (PVAD)

In an **annuity due**, payments are made at the **beginning** of each period. The formula to calculate the present value of an annuity due is:

$$
PV_{AD} = P \times \frac{1 - (1 + r)^{-n}}{r} \times (1 + r)
$$

Where:

- $PV_{AD}$ = Present value of the annuity due
- $P$ = Payment amount per period
- $r$ = Interest rate per period
- $n$ = Number of periods

The key difference between the two is that for an annuity due, each payment is discounted for one less period compared to an ordinary annuity.

---

## Example:

Let's assume:

- Payment ($P$) = $1,000
- Interest rate ($r$) = 5% per period (or 0.05)
- Number of periods ($n$) = 10 years

### Present Value of Ordinary Annuity (PVOA):

$$
PV_{OA} = 1000 \times \frac{1 - (1 + 0.05)^{-10}}{0.05}
$$

$$
PV_{OA} = 1000 \times \frac{1 - (1.62889)^{-1}}{0.05}
$$

$$
PV_{OA} = 1000 \times \frac{1 - 0.61391}{0.05} = 1000 \times \frac{0.38609}{0.05} = 1000 \times 7.7218 = 7,721.8
$$

### Present Value of Annuity Due (PVAD):

$$
PV_{AD} = 1000 \times \frac{1 - (1 + 0.05)^{-10}}{0.05} \times (1 + 0.05)
$$

$$
PV_{AD} = 1000 \times \frac{1 - (1.62889)^{-1}}{0.05} \times 1.05
$$

$$
PV_{AD} = 1000 \times \frac{0.38609}{0.05} \times 1.05 = 1000 \times 7.7218 \times 1.05 = 8,107.9
$$

---

## Summary

- The **Present Value of an Ordinary Annuity (PVOA)** is calculated using the formula $PV_{OA} = P \times \frac{1 - (1 + r)^{-n}}{r}$ and assumes payments are made at the end of each period.
- The **Present Value of an Annuity Due (PVAD)** is calculated using the formula $PV_{AD} = P \times \frac{1 - (1 + r)^{-n}}{r} \times (1 + r)$ and assumes payments are made at the beginning of each period, making the present value higher than the ordinary annuity.

---

## FAQs

### 1. What is the present value of an annuity?

The present value of an annuity refers to the current value of a series of future payments, discounted to the present using an interest rate.

### 2. How does the present value of an annuity due differ from an ordinary annuity?

In an annuity due, payments are made at the beginning of each period, which results in a higher present value compared to an ordinary annuity, where payments are made at the end of each period.

### 3. How do I calculate the present value of an annuity due?

The formula for the present value of an annuity due is $PV_{AD} = P \times \frac{1 - (1 + r)^{-n}}{r} \times (1 + r)$.

### 4. What is the difference between an ordinary annuity and an annuity due in terms of payment timing?

In an ordinary annuity, payments are made at the end of each period, while in an annuity due, payments are made at the beginning of each period.

### 5. What factors affect the present value of an annuity?

The present value of an annuity is affected by the amount of the periodic payment ($P$), the interest rate ($r$), and the number of periods ($n$).

### 6. Can I calculate the present value of an annuity if the interest rate is zero?

Yes, if the interest rate is zero, the present value of both ordinary annuity and annuity due would simply be the sum of the periodic payments.

### 7. What happens if I increase the number of periods for the annuity?

Increasing the number of periods will decrease the present value of the annuity, as the future payments are discounted more heavily.

### 8. How does the interest rate impact the present value of an annuity?

A higher interest rate results in a lower present value of the annuity, as future payments are discounted more.

### 9. Is the present value of an annuity due always higher than that of an ordinary annuity?

Yes, the present value of an annuity due is always higher than that of an ordinary annuity because each payment in an annuity due is discounted for one less period.

### 10. Can the present value of an annuity be negative?

The present value of an annuity is generally positive, as it represents the value of future payments. However, if the interest rate is negative or the payments are negative, the present value can be negative.

---

## MCQs

### 1. What is the formula for the present value of an ordinary annuity?

- A) $PV = P \times \frac{1 - (1 + r)^{-n}}{r}$
- B) **$PV_{OA} = P \times \frac{1 - (1 + r)^{-n}}{r}$ (✓)**
- C) $PV = P \times \frac{r}{(1 + r)^{-n} - 1}$
- D) $PV = P \times \frac{r}{(1 + r)^{-n}}$

### 2. How does the present value of an annuity due compare to an ordinary annuity?

- A) **The present value of an annuity due is always higher than that of an ordinary annuity (✓)**
- B) The present value of an annuity due is always lower than that of an ordinary annuity
- C) The present value of both annuities is the same
- D) The present value of an annuity due depends on the interest rate

### 3. In an ordinary annuity, when are the payments made?

- A) At the beginning of each period
- B) **At the end of each period (✓)**
- C) After the first period
- D) Payments are made irregularly

### 4. In an annuity due, when are the payments made?

- A) At the end of each period
- B) **At the beginning of each period (✓)**
- C) After the first period
- D) Payments are delayed

### 5. Which formula should be used to calculate the present value of an annuity due?

- A) $PV_{AD} = P \times \frac{1 - (1 + r)^{-n}}{r}$
- B) **$PV_{AD} = P \times \frac{1 - (1 + r)^{-n}}{r} \times (1 + r)$ (✓)**
- C) $PV = P \times (1 + r)^n$
- D) $PV = P \times \frac{r}{(1 + r)^{-n}}$

### 6. If the interest rate is 0%, what is the present value of an annuity?

- A) 0
- B) **Equal to the sum of the periodic payments (✓)**
- C) Depends on the number of periods
- D) Cannot be calculated

### 7. What happens to the present value if the number of periods is increased?

- A) It decreases
- B) **It decreases (✓)**
- C) It stays the same
- D) It increases

### 8. What is the effect of an increasing interest rate on the present value of an annuity?

- A) It increases the present value
- B) It decreases the present value
- C) **It decreases the present value (✓)**
- D) It has no effect

### 9. Which of the following is true for an ordinary annuity?

- A) **Payments are made at the end of each period (✓)**
- B) Payments are made at the beginning of each period
- C) Payments are made irregularly
- D) The number of payments is fixed

### 10. Which of the following is true for an annuity due?

- A) Payments are made at the end of each period
- B) **Payments are made at the beginning of each period (✓)**
- C) Payments are made irregularly
- D) The number of payments is fixed
