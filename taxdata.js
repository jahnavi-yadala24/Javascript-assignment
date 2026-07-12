const salaryData = {
    annualSalary: 1500000,
    standardDeduction: 50000,
    pfDeduction: 1800,
    ptDeduction: 200,
    workingDaysPerMonth: 22,
    hoursPerDay: 8,

    slabs: [
        { limit: 300000, rate: 0.00 },
        { limit: 300000, rate: 0.05 },
        { limit: 300000, rate: 0.10 },
        { limit: 300000, rate: 0.15 },
        { limit: 300000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 }
    ],

    cessRate: 0.04
};

module.exports = salaryData;