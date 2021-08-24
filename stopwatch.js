//For now there is only one state class.
//But in the future sub-states can extend State class.
//Sub states are StartState, StopState, CollapseState .... etc.
StartState = State;
StopState = State;
ResetState = State;
DeleteState = State;
CollapseState = State;
ExpandedState = State;

function Stopwatch( stwContainer ) {
    this.startState = new StartState( this );
    this.stopState = new StopState( this );
    this.resetState = new ResetState( this );
    this.deleteState = new DeleteState( this );
    this.collapseState = new CollapseState( this );;
    this.expandedState = new ExpandedState( this );;

    this.state = this.resetState;

    this.stwContainer = stwContainer;
    this.divRef;
    this.totalSec = 0;
    this.displaySecond = 0;
    this.minute = 0;
    this.hour = 0;
    this.time = false;
    this.speed = 1000;    


    this.start = function(){
        this.state.start();
    }

    this.stop = function(){
        this.state.stop();
    }

    this.reset = function(){
        this.state.reset();
    }
    
    this.delete = function(){
        this.state.delete();
    }

    this.collapse = function(){
        
        this.state.collapse();
    }

    this.expand = function(){
        this.state.expand();
    }

    this.setHtml = function( htmlObject ){
        this.divRef.innerHTML = "";
        this.divRef.appendChild( htmlObject );
    }

    this.addButttonFunctions = function ( htmlObject, JSObject ) {
        var startButton = htmlObject.getElementsByClassName("stwStartButton")[0];
        startButton.onclick = function(){
            JSObject.start();
        };

        var stopButton = htmlObject.getElementsByClassName("stwStopButton")[0];
        stopButton.onclick = function(){
            JSObject.stop();
        };
        
        var resetButton = htmlObject.getElementsByClassName("stwResetButton")[0];
        resetButton.onclick = function(){
            JSObject.reset();
        };

        var deleteButton = htmlObject.getElementsByClassName("stwDeleteButton")[0];
        deleteButton.onclick = function(){
            JSObject.delete();
        };
    
        var collapseButton = htmlObject.getElementsByClassName("collapseBtn")[0];
        collapseButton.onclick = function(){
            JSObject.collapse();
        };    
    }

    this.addExpandBtn = function ( htmlObject, JSObject ) {
        var expandBtn = htmlObject.getElementsByClassName("expandBtn")[0];
        expandBtn.onclick = function(){
            JSObject.expand();
        };
    
    }

    this.createExpandedStopwatch = function () {
        expandedHtml = document.createElement("DIV");
        expandedHtml.innerHTML = "";
        expandedHtml.classList.add("stopwatch");
        expandedHtml.innerHTML += `<div class="stwTop">
                                        <img src="collapse.PNG" class="collapseBtn">	
                                </div>`;
        
        expandedHtml.innerHTML += `<div class=stwBottom>
                                        <div>
                                            <h1 class="stwHour" style="display: inline;">00</h3>
                                            <h1 class="stwColon" style="display: inline;">:</h3>
                                            <h1 class="stwMinute" style="display: inline;">00</h3>
                                            <h1 class="stwColon" style="display: inline;">:</h3>
                                            <h1 class="stwSecond" style="display: inline;">00</h3>
                                        </div>
                                        <div>
                                            <button type="button" class="stwStartButton">Start</button>
                                            <button type="button" class="stwStopButton">Stop</button>
                                            <button type="button" class="stwResetButton">Reset</button>
                                            <button type="button" class="stwDeleteButton">Delete</button>                                  
                                        </div>
                                    </div>`;
        this.addButttonFunctions( expandedHtml, this );
        return expandedHtml;
    };

    this.createCollapsedStopwach = function(){
        collapsedHtml = document.createElement("DIV");
        collapsedHtml.innerHTML = "";
        collapsedHtml.classList.add("stopwatch");
        collapsedHtml.innerHTML = `<div class="stwCollapsed" >
                                    <img src="expand.PNG" class="expandBtn" onclick="createHtml()">	
                                    
                                    <div style="display: inline;">
                                        <h1 class="stwHour" >00</h3>
                                            <h1 class="stwColon" >:</h3>
                                            <h1 class="stwMinute" >00</h3>
                                            <h1 class="stwColon" >:</h3>
                                            <h1 class="stwSecond" >00</h3>
                                    </div>
                                </div>`;
        this.addExpandBtn( collapsedHtml, this );
        return collapsedHtml;
    }

    this.incrementSecond = 	async function () {
        while ( this.time ) {
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

    this.startTime = function() {
        this.time = true;
        this.incrementSecond();
        this.divRef.getElementsByClassName("stwStartButton")[0].style.display = "none";
        this.divRef.getElementsByClassName("stwStopButton")[0].style.display = "inline";
    }

    this.stoptTime = function() {
        this.time = false;
        this.divRef.getElementsByClassName("stwStartButton")[0].style.display = "inline";
        this.divRef.getElementsByClassName("stwStopButton")[0].style.display = "none";
    }    

	this.constructor = (function ( t ) {
        t.divRef = t.createExpandedStopwatch();
        t.stwContainer.appendChild( t.divRef );
	})( this );
}


Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

