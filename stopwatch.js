function Stopwatch( stwContainer ) {
    this.stwContainer = stwContainer;
    this.divRef;

    this.totalSec = 0;
    this.displaySecond = 0;
    this.minute = 0;
    this.hour = 0;
    this.startTime = false;

    this.addButttonFunctions = function ( obj ) {
        var startButton = obj.divRef.getElementsByClassName("stwStartButton")[0];
        startButton.onclick = function(){
            obj.start();
        };

        var stopButton = obj.divRef.getElementsByClassName("stwStopButton")[0];
        stopButton.onclick = function(){
            obj.stop();
        };
        
        var resetButton = obj.divRef.getElementsByClassName("stwResetButton")[0];
        resetButton.onclick = function(){
            obj.reset();
        };

        var deleteButton = obj.divRef.getElementsByClassName("stwDeleteButton")[0];
        deleteButton.onclick = function(){
            obj.delete();
        };
    }

    this.createHtml = function () {
        this.divRef = document.createElement("DIV");
        this.divRef.classList.add("stopwatch");
        this.divRef.innerHTML += `  <div class="stwDisplay">
                                        <h1 class="stwHour">00</h3>
                                        <h1 class="stwColon">:</h3>
                                        <h1 class="stwMinute">00</h3>
                                        <h1 class="stwColon">:</h3>
                                        <h1 class="stwSecond">00</h3>
                                    </div>`;
        this.divRef.innerHTML += ` <div class="StopwachButtons">
                                       <button type="button" class="stwStartButton">Start</button>
                                       <button type="button" class="stwStopButton">Stop</button>
                                       <button type="button" class="stwResetButton">Reset</button>
                                       <button type="button" class="stwDeleteButton">Delete</button>                                  
                                    </div>`;
        stwContainer.appendChild( this.divRef );
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
        this.minute = parseInt( ( this.totalSec % 3600) / 60 ); 
        this.hour = parseInt( this.totalSec / 3600 );

        var secondRef =  this.divRef.getElementsByClassName("stwSecond")[0]; 
        secondRef.innerHTML = (this.displaySecond).pad(2);

        var minuteRef = this.divRef.getElementsByClassName("stwMinute")[0];
        minuteRef.innerHTML = (this.minute).pad(2);

        var hourRef = this.divRef.getElementsByClassName("stwHour")[0];
        hourRef.innerHTML = (this.hour).pad(2);
    }

    this.start = function() {
        this.startTime = true;
        this.incrementSecond();
        this.divRef.getElementsByClassName("stwStartButton")[0].style.display = "none";
        this.divRef.getElementsByClassName("stwStopButton")[0].style.display = "inline";
    }

    this.stop = function() {
        this.startTime = false;
        this.divRef.getElementsByClassName("stwStartButton")[0].style.display = "inline";
        this.divRef.getElementsByClassName("stwStopButton")[0].style.display = "none";       
    }

    this.reset = function(){
        this.totalSec = 0;
        this.stop();
        this.displayTime();
    }

    this.delete = function(){
        this.stop();
        this.divRef.style.display = "none"; 
    }    

	this.constructor = (function ( t ) {
        t.createHtml();
        t.addButttonFunctions( t );
	})( this );
}


Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

