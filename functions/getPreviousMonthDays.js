function getPreviousMonthDays(monthNumber, year){
    let previousMonthIndex;
    if(isLeapYear(year) && monthNumber == 3){
        previousMonthIndex = 1;
        return Months[previousMonthIndex]["daysInMonth"] + 1;
    }
    if(monthNumber == 1){
        previousMonthIndex = 11;
    }else{
        previousMonthIndex = monthNumber - 2;
    }
    return Months[previousMonthIndex]["daysInMonth"];
}