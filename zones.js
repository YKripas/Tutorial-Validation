/*
   New Perspectives on HTML, XHTML, and DHTML
   Tutorial 11
   Case Problem 3

   Author: Juozas Kripas
   Date:   4/7/2016

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/

function addTime(oldTime, milliSeconds){
    var newTime = new Date();
    var newValue= oldTime.getTime + milliSeconds;
    var newTime=newValue.setTime;
    return newTime;
}

function showTime(time){
    thisMinute = time.getMinutes;
    thisHour = time.getHours;
    //IF THE HOUR IS < 12 SET THE VAR AMPM=AM OTHERWISE SET IT TO PM
    var ampm=(thisHour < 12) ? "AM" : "PM";
    //MAKE IT A 12 HOUR FORMAT NOT 24HR
    thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
    //12 HOUR FORMAT
    thisHour = (thisHour == 0) ? 12 : thisHour;
    //IF MINUTES <10 ADD LEADING 0
    thisMinute = (thisMinute < 10) ? "0" + thisMinute: thisMinute;
        return thisHour + ":" + thisMinute + ":" + ampm;
    
}



