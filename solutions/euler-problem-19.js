/* ----------- Problem 19 ----------- */

/*

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

*/

{
    
    let resultCounter, weekDayCounter;
    
    resultCounter = 0;
    weekDayCounter = 0;
    
    for (let years = 1900; years <= 2000; years++) {	
    
        for (let monthCounter = 0; monthCounter <= 11; monthCounter++) {
            let daysPerMonth;
            
            // monthCounter: 3 = april, 5 = june etc.
            if(monthCounter === (3 || 5 || 8 || 10)) {
    
                daysPerMonth = 30;
    
            } else if (monthCounter === 1 && ((years%4 !== 0) || ((years%100 === 0) && (years%400 !== 0)))) {
    
                daysPerMonth = 28;
    
            } else if (monthCounter === 1 && ((years%4 === 0) || (years%400 === 0)))  { 
    
                daysPerMonth = 29;
    
            } else {
    
                daysPerMonth = 31;
    
            }
        
            for (let i=1; i <= daysPerMonth; i++) {
                
                day = i;
                
                // counting starts at monday: weekDayCounter = 0, so day 6 = sunday
                if (weekDayCounter === 6) {
    
                    if(day === 1) {
    
                        if(years >= 1901 && years <= 2000) {
    
                            resultCounter++;
                        }
                        
                    }
    
                    // new week starts, reset counter
                    weekDayCounter = -1;
                } 
    
                // weekDayCounter = 1 (monday)
                weekDayCounter++;
            }
        }
        
    }
    
    console.log('Problem 19: ' + resultCounter);

}