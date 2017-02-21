function runSprinklers(currentDayOfWeek, currentHour) {
    allowed = null;
    if ((currentDayOfWeek === "Saturday" || currentDayOfWeek === "Sunday") && currentHour <= 11 && currentHour >= 9) {
        allowed = true;
    } else if (currentDayOfWeek === "Thursday" || (currentHour <= 6 && currentHour >= 8)) {
        allowed = false;
    } else {
        allowed = true;
    }
    
console.log(allowed);
    
}

runSprinklers("Monday", 8);
runSprinklers("Tuesday", 7);
runSprinklers("Wednesday", 3);
runSprinklers("Thursday", 7);
runSprinklers("Friday", 10);
runSprinklers("Saturday", 10);
runSprinklers("Sunday", 8);
runSprinklers("Monday", 6);
runSprinklers("Tuesday", 7);
runSprinklers("Wednesday", 8);
runSprinklers("Thursday", 9);
runSprinklers("Friday", 10);
runSprinklers("Saturday", 11);
runSprinklers("Sunday", 12);







