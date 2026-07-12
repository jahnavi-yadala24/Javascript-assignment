const data = require("./taxdata");

function calculateSalary(details) {

    let taxableIncome = details.annualSalary - details.standardDeduction;

    let tax = 0;
    let remainingIncome = taxableIncome;

    for (let i = 0; i < details.slabs.length; i++) {

        let slab = details.slabs[i];

        if (remainingIncome <= 0) {
            break;
        }

        if (remainingIncome > slab.limit) {
            tax += slab.limit * slab.rate;
            remainingIncome -= slab.limit;
        } else {
            tax += remainingIncome * slab.rate;
            remainingIncome = 0;
        }
    }

    let cess = tax * details.cessRate;
    let totalTax = tax + cess;

    let monthlyTax = totalTax / 12;
    let monthlyGrossSalary = details.annualSalary / 12;

    let monthlyNetSalary =
        monthlyGrossSalary -
        monthlyTax -
        details.pfDeduction -
        details.ptDeduction;

    let totalMonthlyHours =
        details.workingDaysPerMonth * details.hoursPerDay;

    let hourlySalary = monthlyNetSalary / totalMonthlyHours;

    console.log("========== Salary Breakdown ==========");
    console.log("Annual Salary        : ₹" + details.annualSalary.toFixed(2));
    console.log("Taxable Income       : ₹" + taxableIncome.toFixed(2));
    console.log("Annual Tax (+ Cess)  : ₹" + totalTax.toFixed(2));
    console.log("Monthly Gross Salary : ₹" + monthlyGrossSalary.toFixed(2));
    console.log("Monthly Tax          : ₹" + monthlyTax.toFixed(2));
    console.log("PF Deduction         : ₹" + details.pfDeduction.toFixed(2));
    console.log("PT Deduction         : ₹" + details.ptDeduction.toFixed(2));
    console.log("Monthly Net Salary   : ₹" + monthlyNetSalary.toFixed(2));
    console.log("Monthly Hours        : " + totalMonthlyHours);
    console.log("Hourly Salary        : ₹" + hourlySalary.toFixed(2));
    console.log("======================================");
}

calculateSalary(data);
