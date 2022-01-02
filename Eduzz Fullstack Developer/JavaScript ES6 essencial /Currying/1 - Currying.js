function soma(a){
    return function(b){
        return a * b;
    }
    
}

const soma2 = soma(5);
    
for(i = 1; i <= 10; i++){
    console.log(soma2(i));
}
