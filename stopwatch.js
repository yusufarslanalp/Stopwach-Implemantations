function Stopwatch( scp ) {
    this.scp = scp;
    this.divRef;

    this.totalSec = 0;
    this.displaySecond = 0;
    this.minute = 0;
    this.hour = 0;
    this.startTime = true;

    this.incrementSecond = 	async function () {
        while ( this.startTime ) {
            await new Promise(r => setTimeout(r, 1000 ));
            this.totalSec += 1;
            this.updateTime();
            this.scp.$apply(); //if you put this line begining of the loop it gives an error.
        }
    };

    this.updateTime = function(  ){
        this.displaySecond = this.totalSec % 60 ;
        this.minute = parseInt( ( this.totalSec % 3600) / 60, 10 ); 
        this.hour = parseInt( this.totalSec / 3600, 10 );

        //$( this.divRef ).find( ".stwSecond" ).text( (this.displaySecond).pad(2) );
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
        this.updateTime();
    }

    this.delete = function(){
        this.stop();
    }

    //this.start();
    this.incrementSecond();
}


Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}