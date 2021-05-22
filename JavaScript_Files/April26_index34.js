var income=1000, revenue=600, taxes=500;
let incomeThisMonth=800, revenueThisMonth=600;

let thisMonthTarget = (income >= incomeThisMonth); // True
let taxesTarget = (taxes < 400); // Comparison without storing value in a variable - Output = False
let revenueTarget = (revenue == revenueThisMonth); // True

console.log("Income Objective: " + thisMonthTarget);
console.log(`Taxes Objective: ${taxesTarget}`);
console.log("Bonus Objective: " + revenueTarget);