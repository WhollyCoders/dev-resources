function getFirstDayIndex(monthNumber, year){
    if((monthNumber >= 1) && (monthNumber <= 12)){
        monthNumber--;
        let selectedDate = new Date(year, monthNumber);
        return selectedDate.getDay();
    }
    console.log("Please enter a Month Number between 1 - 12...");
}