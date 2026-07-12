const { employees, salaryRange } = require("./employeesdata");

let trueCount = 0;
let falseCount = 0;

for (let i = 0; i < employees.length; i++) {

    if (
        employees[i].salary >= salaryRange.minSalary &&
        employees[i].salary <= salaryRange.maxSalary
    ) {

        if (employees[i].projectAllocated) {
            trueCount++;
        } else {
            falseCount++;
        }
    }
}

console.log("Project Allocated (true):", trueCount);
console.log("Project Allocated (false):", falseCount);
