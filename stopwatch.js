document.getElementById("time").innerHTML = "0";



var total_sec = 0;
var display_second = 0;
var minute = 0;
var hour = 0;

	(async function () {
        while ( true ) {
            await new Promise(r => setTimeout(r, 1));
            total_sec += 1;
            display_second = total_sec % 60;
            console.log( total_sec );
            if( total_sec % 60 == 0 )
            {
                minute += 1;
                minute = minute % 60;
            }
            if( total_sec % 3600 == 0 ) hour += 1; 
            document.getElementsByClassName("second")[0].innerHTML = display_second;
            document.getElementsByClassName("minute")[0].innerHTML = minute;
            document.getElementsByClassName("hour")[0].innerHTML = hour;
        }
    })();

    


