var annualSalary = 1500000;      // Annual Salary
var standardDeduction = 50000;   // Standard Deduction
var pfDeduction = 1800;          // Monthly PF
var ptDeduction = 200;           // Monthly PT

var workingDaysPerMonth = 22;
var hoursPerDay = 8;

// ---------- Step 1: Taxable Income ----------
var taxableIncome = annualSalary - standardDeduction;

// ---------- Step 2: Calculate Income Tax ----------
var tax = 0;
var remainingIncome = taxableIncome;

// Slab 1: 0 - 3,00,000 (0%)
if (remainingIncome > 300000) {
    remainingIncome -= 300000;
} else {
    remainingIncome = 0;
}

// Slab 2: 3,00,001 - 6,00,000 (5%)
if (remainingIncome > 0) {
    if (remainingIncome > 300000) {
        tax += 300000 * 0.05;
        remainingIncome -= 300000;
    } else {
        tax += remainingIncome * 0.05;
        remainingIncome = 0;
    }
}

// Slab 3: 6,00,001 - 9,00,000 (10%)
if (remainingIncome > 0) {
    if (remainingIncome > 300000) {
        tax += 300000 * 0.10;
        remainingIncome -= 300000;
    } else {
        tax += remainingIncome * 0.10;
        remainingIncome = 0;
    }
}

// Slab 4: 9,00,001 - 12,00,000 (15%)
if (remainingIncome > 0) {
    if (remainingIncome > 300000) {
        tax += 300000 * 0.15;
        remainingIncome -= 300000;
    } else {
        tax += remainingIncome * 0.15;
        remainingIncome = 0;
    }
}

// Slab 5: 12,00,001 - 15,00,000 (20%)
if (remainingIncome > 0) {
    if (remainingIncome > 300000) {
        tax += 300000 * 0.20;
        remainingIncome -= 300000;
    } else {
        tax += remainingIncome * 0.20;
        remainingIncome = 0;
    }
}

// Slab 6: Above 15,00,000 (30%)
if (remainingIncome > 0) {
    tax += remainingIncome * 0.30;
}

// ---------- Step 3: Add 4% Cess ----------
var cess = tax * 0.04;
var totalTax = tax + cess;

// ---------- Step 4: Monthly Calculations ----------
var monthlyTax = totalTax / 12;
var monthlyGrossSalary = annualSalary / 12;
var monthlyNetSalary = monthlyGrossSalary - monthlyTax - pfDeduction - ptDeduction;

// ---------- Step 5: Hourly Salary ----------
var totalMonthlyHours = workingDaysPerMonth * hoursPerDay;
var hourlySalary = monthlyNetSalary / totalMonthlyHours;

// ---------- Output ----------
console.log("========== Salary Breakdown ==========");
console.log("Annual Salary        : ₹" + annualSalary.toFixed(2));
console.log("Taxable Income       : ₹" + taxableIncome.toFixed(2));
console.log("Annual Tax (+ Cess)  : ₹" + totalTax.toFixed(2));
console.log("Monthly Gross Salary : ₹" + monthlyGrossSalary.toFixed(2));
console.log("Monthly Tax          : ₹" + monthlyTax.toFixed(2));
console.log("PF Deduction         : ₹" + pfDeduction.toFixed(2));
console.log("PT Deduction         : ₹" + ptDeduction.toFixed(2));
console.log("Monthly Net Salary   : ₹" + monthlyNetSalary.toFixed(2));
console.log("Monthly Hours        : " + totalMonthlyHours);
console.log("Hourly Salary        : ₹" + hourlySalary.toFixed(2));
console.log("======================================");