function Stopwatch( stwContainer ) {
    this.stwContainer = stwContainer;
    this.divRef;

    this.totalSec = 0;
    this.displaySecond = 0;
    this.minute = 0;
    this.hour = 0;
    this.startTime = false;


    this.addButttonFunctions = function ( obj ) {
        var ref = $( obj.divRef );
        ref.find( ".stwStartButton" ).click(function(){
            obj.start();
        });

        ref.find( ".stwStopButton" ).click(function(){
            obj.stop();
        });

        ref.find( ".stwResetButton" ).click(function(){
            obj.reset();
        });

        ref.find( ".stwDeleteButton" ).click(function(){
            obj.delete();
        });
    }

    
    this.createHtml = function () {
        this.divRef = document.createElement("DIV");
        var ref = $( this.divRef );
        ref.addClass("stopwatch");
        var displayHtml = `  <div class="stwDisplay">
                                <h1 class="stwHour">00</h3>
                                <h1 class="stwColon">:</h3>
                                <h1 class="stwMinute">00</h3>
                                <h1 class="stwColon">:</h3>
                                <h1 class="stwSecond">00</h3>
                            </div>`;
        ref.append( displayHtml );
        var buttonsHtml = ` <div class="StopwachButtons">
                                       <button type="button" class="stwStartButton">Start</button>
                                       <button type="button" class="stwStopButton">Stop</button>
                                       <button type="button" class="stwResetButton">Reset</button>
                                       <button type="button" class="stwDeleteButton">Delete</button>                                  
                                    </div>`;
        ref.append( buttonsHtml );
        $( stwContainer ).append( this.divRef );
    };

    
    this.incrementSecond = 	async function () {
        while ( this.startTime ) {
            this.displayTime();
            await new Promise(r => setTimeout(r, 1000 ));
            this.totalSec += 1;
        }
    };

    this.displayTime = function(  ){
        this.displaySecond = this.totalSec % 60 ;
        this.minute = parseInt( ( this.totalSec % 3600) / 60, 10 ); 
        this.hour = parseInt( this.totalSec / 3600, 10 );

        var ref = $( this.divRef );
        ref.find( ".stwSecond" ).text( (this.displaySecond).pad(2) );
        ref.find( ".stwMinute" ).text( (this.minute).pad(2) );
        ref.find( ".stwHour" ).text( (this.hour).pad(2) );
    }

    this.start = function() {
        this.startTime = true;
        this.incrementSecond();
        var ref = $( this.divRef );
        ref.find( ".stwStartButton" ).hide();
        ref.find( ".stwStopButton" ).show();

    }

    this.stop = function() {
        this.startTime = false;
        var ref = $( this.divRef );
        ref.find( ".stwStartButton" ).show();
        ref.find( ".stwStopButton" ).hide();      
    }

    this.reset = function(){
        this.totalSec = 0;
        this.stop();
        this.displayTime();
    }

    this.delete = function(){
        this.stop();
        $( this.divRef ).hide()
    }    

    this.createHtml();
    this.addButttonFunctions( this );
}


Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}