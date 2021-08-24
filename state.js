function State( stopwatch ){
    this.stopwatch = stopwatch;

	this.notValidFunction = function(){
        console.log( "Invalid function for the current state" );
    }

    this.start = function(){
		this.stopwatch.state = this.stopwatch.startState;
        htmlObject = this.stopwatch.createExpandedStopwatch();
        this.stopwatch.setHtml( htmlObject );
        this.stopwatch.startTime();
		this.stopwatch.displayTime();
    }

    this.stop = function(){
        this.stopwatch.state = this.stopwatch.stopState;
        this.stopwatch.stoptTime();
    }

    this.reset = function(){
		this.stopwatch.state = this.stopwatch.resetState;
		this.stopwatch.stoptTime();
		this.stopwatch.totalSec = 0; 
        htmlObject = this.stopwatch.createExpandedStopwatch();
        this.stopwatch.setHtml( htmlObject );
        this.stopwatch.displayTime();
    }

    this.delete = function(){
		this.stopwatch.state = this.stopwatch.deleteState;
        htmlObject = document.createElement( "DIV" );
        this.stopwatch.setHtml( htmlObject );
        this.stopwatch.stoptTime();
    }

    this.collapse = function(){
		this.stopwatch.state = this.stopwatch.collapseState;
        htmlObject = this.stopwatch.createCollapsedStopwach();
        this.stopwatch.setHtml( htmlObject );
        this.stopwatch.displayTime();        
    }

    this.expand = function(){
		this.stopwatch.state = this.stopwatch.expandedState;
        htmlObject = this.stopwatch.createExpandedStopwatch();
        this.stopwatch.setHtml( htmlObject );
        this.stopwatch.displayTime();        
    }
}