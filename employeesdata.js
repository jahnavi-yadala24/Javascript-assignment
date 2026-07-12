const employees = [
    {
        name: "Harshitha",
        salary: 1500000,
        experience: 4,
        track: 'engineering',
        projectAllocated: false,
        projectCompletionDate: null
    },
    {
        name: "Mokshitha",
        salary: 1800000,
        experience: 3,
        track: 'engineering',
        projectAllocated: false,
        projectCompletionDate: "2026/06/21"
    },
    {
        name: "Nikitha",
        salary: 1800000,
        experience: 5,
        track: 'engineering',
        projectAllocated: true,
        projectCompletionDate: "2026/05/26"
    },
    {
        name: "Jahnavi",
        salary: 1700000,
        experience: 4,
        track: 'engineering',
        projectAllocated: true,
        projectCompletionDate: "2026/03/12"
    },
    {
        name: "Sushma",
        salary: 1200000,
        experience: 3,
        track: 'engineering',
        projectAllocated: false,
        projectCompletionDate: null
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
