window.addEventListener("load",function(){
    document.getElementById("btn").addEventListener("click",Calcular);
})

function Calcular(){

    var a = parseInt(document.getElementById("txta").value);//Pegando o valor do campo txta (usuario irá digitar um valor nesse campo), e será atribuido na variavel (a)
    var b = parseInt(document.getElementById("txtb").value);
    var c = parseInt(document.getElementById("txtc").value);

    var delta = b*b - 4 * a * c;//Estamos atribuindo o valor de delta na variavel (delta)
    if(delta < 0){
        document.getElementById("txtdelta").value = delta;
        document.getElementById("txtx1").value = "Nâo é possivel calcular x1";
        document.getElementById("txtx2").value = "Nâo é possivel calcular x2";
    }else if(delta == 0){
        document.getElementById("txtdelta").value = delta;
        document.getElementById("txtx1").value = "As duas raizes sâo iguais a -1";
        document.getElementById("txtx2").value = "As duas raizes sâo iguais a -1";
    }else if(delta > 0){
    var x1 = -b + Math.sqrt(delta, 2.0) / (2 * a);
    var x2 = -b - Math.sqrt(delta, 2.0) / (2 * a);

    document.getElementById("txtdelta").value = delta;
    document.getElementById("txtx1").value = x1;
    document.getElementById("txtx2").value = x2;
    }
}