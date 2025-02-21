var cnvaan = document.getElementById("blcani");
    var j = document.getElementById("j");
    
    
    
    
    
    j.innerHTML = "<h1>About today cats</h1>";
    var animation = function() {
        var newwdt = "10";
        
        
        
        j.style.width = newwdt + "px"
        
    }
    window.requestAnimationFrame(animation);
    animation();
