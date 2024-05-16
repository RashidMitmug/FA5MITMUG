var num;
var num1;
var num2;
var num3;
var remainder;
while(num1!=1){
    num = prompt('Please enter a number: ');
    num1 = num/num;
    if(num1!=1){
        alert('You did not enter a number.');
    }
}
document.write('Number Inputted: '+ num + "</br></br>");
remainder=num%2;
if(remainder==0){
    num1=num;
    for(num2=0;num2<num1;num2++){
        num3=0;
        while(num3<num){
            document.write(num + " ");
            num3++;
        }
        num--;
        document.write("</br>");
    }
}else{
    num1=num;
    for(num2=0;num2<num1;num2++){
        num3=0;
        while(num3<num1){
            document.write(num + " ");
            num3++;
        }
        num--;
        document.write("</br>");
    }
}
