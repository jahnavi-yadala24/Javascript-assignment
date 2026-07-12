const employees = [
    {
        name: "Harshitha",
        salary: 1500000,
        projectAllocated: false
    },
    {
        name: "Mokshitha",
        salary: 1800000,
        projectAllocated: false
    },
    {
        name: "Nikitha",
        salary: 1800000,
        projectAllocated: true
    },
    {
        name: "Jahnavi",
        salary: 1700000,
        projectAllocated: true
    },
    {
        name: "Sushma",
        salary: 1200000,
        projectAllocated: false
    }
];

const salaryRange = {
    minSalary: 1500000,
    maxSalary: 1800000
};

module.exports = {
    employees,
    salaryRange
};