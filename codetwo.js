var y;
var x;
var names = [];
for(let x=1;x<=7;x++){
    names[x]="";
}

var counter = 0;
var countertwo;
function adding(){
    
    
    if(counter==7){
        for(x=1; x<=6;x++){
            y=x+1;
            names[x]=names[y];
            names[7]=document.getElementById("boxtext").value;
            document.getElementById("names").innerText=(names[1]+ " " + names[2] + " " + names[3] + " " + names[4] + " " + names[5] + " " + names[6] + " " + names[7])
        }
        document.getElementById("names");
    }else{
        names[counter]=document.getElementById("boxtext").value;
        document.getElementById("names").innerText=(names[1]+ " " + names[2] + " " + names[3] + " " + names[4] + " " + names[5] + " " + names[6] + " " + names[7]);
    }
    if(counter!=7){
        counter++;
    }
    

}
function removing(){
    names[counter]="";
}