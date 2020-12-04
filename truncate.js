function truncate(str,num){
    return('"'+str.split(" ").splice(0,num).join(" ")+'"');  

   
}
console.log(truncate("The quick brown fox jumps over the lazy dog",4));