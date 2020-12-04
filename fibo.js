function fibonacci(num) {


    let n1 = 0;
    let n2 = 1;
    let sum;
    
    for (i = 0; i < num; i++) {
        
        document.write(n1+" ");
        sum = n1 + n2;
        n1=n2;
        n2=sum;
    }
}

fibonacci(10);