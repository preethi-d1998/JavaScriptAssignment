function ctof(temp){
   let celsius=temp;
   let fahrenheit=celsius*9/5+32;
   document.write('"'+temp+'\xB0C is '+fahrenheit+'\xB0F."<br>');
}

function ftoc(temp2){
    let fah=temp2;
    let cel=(fah-32)/5*9;
    document.write('"'+temp2+'\xB0F is '+cel+'\xB0C."');

 }

 ctof(32);
 ftoc(48);