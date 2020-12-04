protect_email=function(useremail){
    let data1,data2,splitted,avg;
    splitted=useremail.split("@");
    data1=splitted[0];
    avg=data1.length/2;
    data1=data1.substring(0,(data1.length-avg));
    data2=splitted[1];
    return(data1+"....@"+data2);

}
console.log(protect_email("eddygrant@example.com"));