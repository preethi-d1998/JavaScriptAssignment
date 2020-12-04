capitatize_Words=function(data){
    let newdata=data.toLowerCase().split(' ');
    for(i=0;i<newdata.length;i++){
        newdata[i]=newdata[i].charAt(0).toUpperCase()+newdata[i].substring(1);
        
    }
    return('"'+newdata.join(' ')+'"');
}
console.log(capitatize_Words("hi from skillsanta"));