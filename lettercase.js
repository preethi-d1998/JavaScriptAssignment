 function caseconvert(data){
     let newdata="";
     for(i=0;i<data.length;i++){
         if(data.charCodeAt(i)>=65 && data.charCodeAt(i)<=90){
             newdata=newdata+data.charAt(i).toLowerCase();
         }
         else{
            newdata=newdata+data.charAt(i).toUpperCase();
         }
     }
        
     
     document.write('"'+newdata+'."');
 }
 caseconvert("hELLO sKILLsANTA TeAm");

