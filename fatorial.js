window.addEventListener("load",function(){
    document.getElementById("btn").addEventListener("click",fatorial);


function fatorial(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c
    }
    
    return fat;

    }

    console.log(fatorial(5));
})