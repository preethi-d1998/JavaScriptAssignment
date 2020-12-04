let n=[0,1,2,3,4];
let i;

for(i=0;i<=n[n.length-1]; i++){
    if(i%2===0){
        if(i===2){document.write(i+" is even and prime<br>");
    }
    else{
        document.write(i+" is even<br>");
    }
        
    }
    else if(i%2===1){
        if(i===3){
            document.write(i+" is odd and prime<br>");
        }
        else{
            document.write(i+" is odd<br>");
        }

    }
}
