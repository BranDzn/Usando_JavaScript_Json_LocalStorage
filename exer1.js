window.addEventListener("load",function(){
    document.getElementById("btn").addEventListener("click",CadastrarNoLocalStorage);
    document.getElementById("btn2").addEventListener("click",DadosNaTabela);

    mostrar = document.getElementById("mostrar");//pegamos o id da DIV, e atribuimos a uma variavel

/**<form>
        Digite seu nome:<input type="text" id="txtnome"><br>
        Digite sua idade:<input type="text" id="txtidade"><br>
        Digite seu endereço:<input type="text" id="txtendereco"><br>
        Digite seu RGM:<input type="text" id="txtrgm"><br>
        <button type="button" id="btn">Guardar dados no localStorage</button>
    </form> */
    
function CadastrarNoLocalStorage(){
    //1º passo pegar os dados que o usuario digitou no formulário e jogar no localStorage
    localStorage.setItem("nome:", document.getElementById("txtnome").value);
    localStorage.setItem("idade: ", document.getElementById("txtidade").value);
    localStorage.setItem("endereço: ", document.getElementById("txtendereco").value);
    localStorage.setItem("rgm: ", document.getElementById("txtrgm").value);
}



//Formato jquery

/*$(function(){//Quando a página carregar ... 
    $("#btn").click(CadastrarNoLocalStorage);//pegamos o btn e atribuimos o evento click, e a funçâo será CadastrarNoLocalStorage;

function CadastrarNoLocalStorage(){
    //Como iremos colocar no localStorage? -> Atribuindo o item, entâo (localStorage.setItem("..", ...value));
    //Nâo esquecer: de colocar o (# quando for id), pois $(#...), jquery exige (# ou .)
    localStorage.setItem("nome: ", $("#txtnome").val());//atribuindo nome = "nome",  e o valor que será o que o usúario digitar
    localStorage.setItem("idade: ", $("#txtidade").val());
    localStorage.setItem("endereço: ", $("#txtendereco").val());
    localStorage.setItem("rgm: ", $("#txtrgm").val());
}

})*/


//criaremos uma tabela para mostrar os dados cadastrados, e exibiremos esses dados na DIV
//OBS:
//<tr> //linha;
//<th> //titulo da tabela;
//<td> //conteudo, pode ser os dados que cadastramos, ou uma média;

function DadosNaTabela(){

//Criaçâo da tabela com os dados cadastrados
var tabela = "";
tabela += "<table border='1'>"
tabela += "<tr>";//criando uma linha 
tabela += "<th>" + "Dados do usuário" + "</th>" 
tabela += "</tr>";//Nâo esquecer de fechar a linha do titulo;
tabela += "<tr>";
tabela += "<td>" + "Nome: " + document.getElementById("txtnome").value + "<br>Idade: " + document.getElementById("txtidade").value + "<br>Endereço: " + document.getElementById("txtendereco").value + "<br>RGM: " + document.getElementById("txtrgm").value + "</td>";//todos estes dados ficaram dentro da tabela na coluna "Dados do usúario"
tabela += "</tr>";
tabela += "</table>";

//Duas maneiras de mostrar a tabela...
//document.getElementById("mostrar").innerHTML = tabela;
mostrar.innerHTML = tabela;

//Obs: para mostrar a tabela está certo, más devemos ter um botâo que ao clicar mostre está tabela, e ter a tabela dentro do escopo de uma funçâo
    }



})
