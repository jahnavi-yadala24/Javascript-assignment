let employees = [
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

let trueCount = 0;
let falseCount = 0;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary >= 1500000 && employees[i].salary <= 1800000) {

        if (employees[i].projectAllocated === true) {
            trueCount++;
        } else {
            falseCount++;
        }

    }
}

console.log("Project Allocated (true):", trueCount);
console.log("Project Allocated (false):", falseCount);
