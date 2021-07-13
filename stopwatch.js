

function Stopwatch() {
    this.totalSec = 0;
    this.displaySecond = 0;
    this.minute = 0;
    this.hour = 0;
    this.startTime = false;
    
    this.incrementSecond = 	async function () {
        while ( this.startTime ) {
            this.displayTime();
            await new Promise(r => setTimeout(r, 100));
            this.totalSec += 1;
        }
    };

    this.displayTime = function(){
        this.displaySecond = this.totalSec % 60 ;
        this.minute = parseInt( ( this.totalSec % 3600) / 60 ); 
        this.hour = parseInt( this.totalSec / 3600 ); 
        document.getElementsByClassName("second")[0].innerHTML = this.displaySecond;
        document.getElementsByClassName("minute")[0].innerHTML = this.minute;
        document.getElementsByClassName("hour")[0].innerHTML = this.hour;
    }

    this.start = function() {
        this.startTime = true;
        this.incrementSecond();
    }

    this.stop = function() {
        this.startTime = false;
    }

    this.reset = function(){
        this.totalSec = 0;
        this.stop();
        this.displayTime();
    }
}

var stw = new Stopwatch();
console.log( "minute: " + stw.minute );

stw.incrementSecond();


    


