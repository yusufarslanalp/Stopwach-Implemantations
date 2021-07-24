function Stopwatch( scp ) {
    this.scp = scp;

    this.totalSec = 0;
    this.displaySecond = 0;
    this.minute = 0;
    this.hour = 0;
    this.startTime = false;

    this.show = true;
    this.startBtnShow = true;
    this.stopBtnShow = false;

    this.incrementSecond = 	async function () {
        while ( true ) {
            await new Promise(r => setTimeout(r, 1000 ));
            //to remove if statement this.scp.$apply(); shold be at the beginning
            //of the loop. But this.scp.$apply(); gives error at the beginning of the loop.
            //If you don't know how to fix this, don't remove if statement.
            if( this.startTime === false )
            {
                break;
            }
            this.totalSec += 1;
            this.updateTime();
            this.scp.$apply(); //if you put this line to the beginning of the loop it gives an error.
        }
    };

    this.updateTime = function(  ){
        this.displaySecond = this.totalSec % 60 ;
        this.minute = parseInt( ( this.totalSec % 3600) / 60, 10 ); 
        this.hour = parseInt( this.totalSec / 3600, 10 );
    }

    this.start = function() {
        this.startTime = true;
        this.startBtnShow = false;
        this.stopBtnShow = true;
        this.incrementSecond();
    }

    this.stop = function() {
        this.startTime = false;
        this.startBtnShow = true;
        this.stopBtnShow = false;
    }

    this.reset = function(){
        this.totalSec = 0;
        this.stop();
        this.updateTime();
    }

    this.delete = function(){
        this.stop();
        this.show = false;
    }

    this.incrementSecond();
}