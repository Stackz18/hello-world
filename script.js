        // this is a function that generates a random colour code from splitting an array
        function getRandomColor() {
           
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            var start = new Date().getTime();
    
            for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
    }
            return color;
}
        // The below function is used to create a square or a circle depending on the random number that has been generated
        function makeShapeAppear() {
            
            var top = Math.random() * 400;
            var left = Math.random() * 400;
            var width = Math.random() * 200 + 100;
            var height = Math.random() * 200 + 100;
                        
            if (Math.random() > 0.5) {
                
                document.getElementById("shape").style.borderRadius = "50%";
                
            }  else {
                
            document.getElementById("shape").style.borderRadius = "0";
                
            }
            
            document.getElementById("shape").style.top = top + "px";
            document.getElementById("shape").style.left = left + "px";
            document.getElementById("shape").style.width = width + "px";           
            document.getElementById("shape").style.height = height + "px";        
            document.getElementById("shape").style.display = "block";        
            document.getElementById("shape").style.backgroundColor = getRandomColor();            
            start = new Date().getTime();
        
        }
            
        function appearAfterDelay() {
            
            setTimeout(makeShapeAppear, Math.random() * 2000);
        }
        
        appearAfterDelay();
        
        document.getElementById("shape").onclick = function() {
            
            document.getElementById("shape").style.display = "none";
            
            var end = new Date().getTime();
            var timeTaken = (end - start) / 1000;

            document.getElementById("timeTaken").innerHTML = timeTaken + "s";
            
            appearAfterDelay();
         
        }