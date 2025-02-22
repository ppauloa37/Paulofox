   var buttonseach = document.getElementById("seachbutton");
    
    
    var onSeachClick = function() {
        var seaname = document.getElementById("seaname").value;
        var seaathor = document.getElementById("seaauthor").value;
        
        document.getElementById("esp").textContent += "Pesquisando  por " +seaname + " de " + seaathor;
        
        
        
        
    }
    
    buttonseach.addEventListener("click",onSeachClick);
    
    
    
    
    
    
    
