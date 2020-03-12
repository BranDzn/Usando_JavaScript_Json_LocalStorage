window.addEventListener("load",function(){
    document.getElementById("btn1").addEventListener("click",Cadastrar);
    document.getElementById("btn2").addEventListener("click",Exibir);
    document.getElementById("btn3").addEventListener("click",CadastrarNoVetor);

    var mostra = document.getElementById("mostra");
    var mostratabela = document.getElementById("mostratabela");

function Cadastrar(){//Cadastramos tudo e jogamos no localStorage, setItem = adicionarItem, ler o "setItem", como: cadastrar item
    localStorage.setItem("NOME:", document.getElementById("txtnome").value);//adicionando no localStorage, texto "NOME:" e o valor que o usuario digitar 
    localStorage.setItem("RGM:", document.getElementById("txtrgm").value);
    localStorage.setItem("Nota da avaliaçâo parcial:", document.getElementById("txtnotaparcial").value);
    localStorage.setItem("Nota do projeto:", document.getElementById("txtnotaprojeto").value);
    localStorage.setItem("Nota da avaliaçâo regimental", document.getElementById("txtnotaregimental").value);
    limpar();//depois dos campos serem preenchidos e clicado no botâo "cadastrar", está funçâo irá limpar todos os campos, assim podendo o usuario cadastrar outros dados no localStorage
    foco();
}

function limpar(){//criando funçâo que irá limpar os campos
    document.getElementById("txtnome").value = "";//limpando o campo do nome;
    document.getElementById("txtrgm").value = "";//limpando o campo do rgm;
    document.getElementById("txtnotaparcial").value = "";//limpando o campo da nota parcial;
    document.getElementById("txtnotaprojeto").value = "";//limpando o campo da nota do projeto;
    document.getElementById("txtnotaregimental").value = "";//limpando o campo da nota regimental;
}

function foco(){
    document.getElementById("txtnome").focus();//quando usamos o focus(), temos que usa-lo com parenteses(), pois focus é uma funçâo, e necessita de parenteses = focus()
}


function Exibir(){//Nâo podemos esquecer da verificaçâo IF/ELSE
    if(localStorage.length > 0){//Se tiver algo no localStorage, entâo .. "Dá para exibir em uma DIV"
        document.getElementById("mostra").innerHTML = ("<h1>Dados do usúario: </h1>") + "<br>" + ("<b>Nome: </b>" + document.getElementById("txtnome").value) + ("<br>" + "<b>Rgm: </b>" + document.getElementById("txtrgm").value) + ("<br>" + "<b>Nota da avaliaçâo parcial: </b>" + document.getElementById("txtnotaparcial").value) + ("<br>" + "<b>Nota do projeto: </b>" + document.getElementById("txtnotaprojeto").value) + ("<br>" + "<b>Nota da avaliaçâo regimental: </b>" + document.getElementById("txtnotaregimental").value); 
        //Conseguimos exibir os dados em um DIV
        //porém tivemos que concatenar todos os dados para que sejam exibidos na div, usamos <br>, para a quebra de linha
        //mostra.innerHTML = "nome" + document.getElementById("txtnome");
    }else{
        alert("Nâo foi possivel exibir os dados!")
    }

    //Média da nota da avaliaçâo parcial, nota do projeto, nota da avaliaçâo regimental
    var n1 = parseInt(document.getElementById("txtnotaparcial").value);
    var n2 = parseInt(document.getElementById("txtnotaprojeto").value);
    var n3 = parseInt(document.getElementById("txtnotaregimental").value);
    var media = (n1 + n2 + n3) / 3;



    var tabela = "";
    tabela += "<table border='1'>";
    tabela += "<tr>";
    tabela += "<th>" + "Dados do usúario" + "</th>" + "<th>" + "Média do aluno" + "</th>" + "<th>" + "Conceito final" + "</th>";
    tabela += "</tr>";
    tabela += "<td>" + "Nome: " + document.getElementById("txtnome").value + "<br>" + "Rgm: " + document.getElementById("txtrgm").value + "<br>" + "Nota da avaliaçâo parcial: " + document.getElementById("txtnotaparcial").value + "<br>" + "Nota do projeto: " + document.getElementById("txtnotaprojeto").value + "<br>" + "Nota da avaliaçâo regimental: " + document.getElementById("txtnotaregimental").value + "</td>";
    tabela += "<td id='media'>" + media + "</td>";
    tabela += "<td id='resultado'>" + "Conceito final" + "</td>";//Iremos usar o id-'resultado', para mudar o background fontSize etc ...
    //Precisamos converter o número, pois o número está em forma de String e precisamos converter para número.
    tabela += "</table>";
    document.getElementById("mostratabela").innerHTML = tabela;


    if(media > 6){
        document.getElementById("resultado").innerHTML = "Aprovado";//Aki estamos pegando o "ID" do <td id='resultado'> dai de cima da <table> 
        document.getElementById("resultado").style.background = "#1e90ff";
        document.getElementById("resultado").style.textAlign = "center";
    }else if(media < 2){
        document.getElementById("resultado").innerHTML = "Reprovado";
        document.getElementById("resultado").style.background = "#b22222";
        document.getElementById("resultado").style.textAlign = "center";
    }else if(media < 6){
        document.getElementById("resultado").innerHTML = "Exame";
        document.getElementById("resultado").style.background = "#ff8c00";
        document.getElementById("resultado").style.textAlign = "center";
    }



    mostra.style.transition = "0.6s"//Transition top
    mostra.style.background = "green";//agora o "mostra", funciona pois está dentro do escopo
    mostra.style.width = "350px";
    mostra.style.height = "300px";
    mostra.style.fontSize = "15pt";
    mostra.style.borderRadius = "30px";
    mostra.style.padding = "30px";
    mostra.style.marginTop = "10px";

    mostratabela.style.color = "white";
    mostratabela.style.marginTop = "20px";


    }



function CadastrarNoVetor(){
    var cadastro = [];//declarando meu array
    var i = 0; //variavel de controle;
    var nome = "";//variavel nome iniciando vazia

    while(true){//Colocamos TRUE, enquanto for verdadeiro, faça ...
        nome = prompt("Digite um nome: ");
        if(nome != null){
            cadastro[i] = nome; //while é uma estrutura de repetiçâo, portanto devemos iniciar a variavel de controle "i = 0", para podermos guardar nas posiçôes do vetor (cadastro[i]);
            i++;//depois de ter colocado o nome na posiçâo 0, soma +1 e vai pra posiçâo 1, que será atribuido outro nome..
        }else{//senâo tiver adicionado nenhum nome entâo, BREAK(PARE)
            break;
        }
    }

    //Aki a tabela irá aparecer depois de 1 segundo
    setInterval(function(){

    var conteudo = "<table id='tabelavetor' border='1'>";
    conteudo += "<tr>";
    conteudo += "<th>" + "Nomes: " + "</th>";
    for(var j = 0; j < cadastro.length; j++){
    conteudo += "</tr>";
    conteudo += "<td>" + (j + 1) + "</td>"
    conteudo += "<td>" + cadastro[j] + "</td>";
    conteudo += "</tr>"
    }
    
    //Quando guardamos dados em um vetor e mostramos em uma tabela, temos que usar essa estrutura "fechando a </table>", fora do "FOR"
    conteudo += "</table>"

    document.getElementById("dadosvetor").innerHTML = conteudo;

    document.getElementById("tabelavetor").style.background = "green";
    document.getElementById("tabelavetor").style.color = "#fff";
    //Obs: caso algum código nâo funcionar pode ser que esse código nâo esteja dentro do escopo da funçâo
    },1000);
}


})

