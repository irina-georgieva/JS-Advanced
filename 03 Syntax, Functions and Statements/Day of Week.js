function day(day){

    let weekDay; 
    
        switch(day){
            case 'Monday': weekDay = 1; break;
            case 'Tuesday': weekDay = 2; break;
            case 'Wednesday': weekDay = 3; break;
            case 'Thursday': weekDay = 4; break;
            case 'Friday': weekDay = 5; break;
            case 'Saturday': weekDay = 6; break;
            case 'Sunday': weekDay = 7; break;
            default : weekDay = 'error'; break;        
        }

        return weekDay;
}