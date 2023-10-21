function genCalendar() {

    let calendar = [];

    let nDaysYr = 365;
    let nWeekYr = nDaysYr / 7;
    let ctDaysYr = 0;

    const nDaysWk = 7;
    let iDayWk = 6; // 0 for sunday;

    let daysPerMo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let ctDaysMo = 0;
    let iMo = 0;

    for(let w = 0; w <= nWeekYr; w++){
        calendar[w] = [];
        
        for (let d = 0; d < nDaysWk; d++){

            if(d < iDayWk && w === 0){
                calendar[w][d] = 0;

            } else if (ctDaysYr < nDaysYr){
                ctDaysYr++
                
                if( ctDaysMo < daysPerMo[iMo] ) {
                    ctDaysMo++;
                    calendar[w][d] = ctDaysMo;

                } else {
                    iMo++;

                    ctDaysMo = 0;
                    ctDaysMo++;
                    
                    calendar[w][d] = ctDaysMo;
                }
            }  
        }
    }

    return calendar;
}

console.log(genCalendar());