document.getElementById("time").innerHTML = " changed!";


var i = 0;

	(async function () {
        while ( true ) {
            await new Promise(r => setTimeout(r, 1000));
            i += 1;
            console.log( i );
            document.getElementById("time").innerHTML = i;
        }
    })();

    


