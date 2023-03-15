//the valueOfSalary varible includes the employeess's full name :
let fullName = new String;
//the valueOfSalary varible includes the amount of hourly wages :
const valueOfSalary = 20 //$

// the workingTime varible is showing the Amount of working time :
let workingTime = new Number;
// the salaryCalculation function is Calculating an employee's salary
//Wages are calculated so that if the number of working hours exceeds 40, one and a half times the hourly wage is calculated for each hour.

function salaryCalculation(timeValue, salaryValue){
    timeValue = workingTime;
    salaryValue = valueOfSalary;

    if (timeValue < 40){
        let salary = timeValue * salaryValue;
    }
    else { 
        let salary = timeValue * salaryValue + (timeValue - 40) * 20 * (3/2);
    }
    return salary;
}

