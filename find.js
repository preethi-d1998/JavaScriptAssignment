function search_word(data,word){
    let x=0,y=0;
    for(i=0;i<data.length;i++){
        if(data[i]==word[0]){
            for(j=i;j<i+word.length;j++){
                if(data[j]==word[j-i]){
                    y++;
                }
                if(y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
    return ('"'+"'"+word+"' was found "+x+" times."+'"');

        
        
}


console.log(search_word("The quick brown fox","fox"));
console.log(search_word('aa,bb,cc,dd,aa','aa'));