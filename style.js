(function ( $ ) {
 
    $.fn.setBackGround = function() {
        this.css( "width", "200px" );
        this.css( "padding", "30px" );
        this.css( "background-color", "grey" );
        this.css( "margin", "20 auto" );
        return this;
    };

    $.fn.setStopBtnStyle = function() {
        this.css( "display", "none" );
        return this;
    };    

    $.fn.setDisplayStyle = function() {
        this.css( "color", "blue" );
        this.css( "display", "inline-block" );
        return this;
    };

    $.fn.setNewStwBtnStyle = function() {
        this.css( "display", "block" );
        this.css( "margin-left", "auto" );
        this.css( "margin-right", "auto" );
        this.css( "pargin-top", "20px" );
        return this;
    };  
 
}( jQuery ));
