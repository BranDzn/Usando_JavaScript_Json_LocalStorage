window.addEventListener("load",function(){

    var tituloleve = "";//Aki iniciará vazio
    var mostra = document.getElementById("mostra");//Estamos vinculando a div "mostra" a variavel (mostra)
    var titulomedia = "";
    var titulograve = "";
    var titulogravissima = "";
    var medialeve = document.getElementById("medialeve");//Estamos vinculando o "mediav", lá do HTML, com a variavel (mediavalores)
    var mediamedia = document.getElementById("mediamedia");
    var mediagrave = document.getElementById("mediagrave");
    var mediagravissima = document.getElementById("mediagravissima");
    var fundo = document.getElementById("fundo");
    //Dica: no HTML criamos "DIV's", aki no JS, criamos variaveis pra vincularmos com os "id's' dessas "DIVS"
    //E posteriormente mostrarmos dados com essas variaveis usando tanto medialeve.innerHTML
    //medialeve.style.background = "", etc... 


    for(let i = 0; i < detran.length; i++){
        if(detran[i].gravidade == "Leve"){
            tituloleve += "<table id='tabelaleve'>";
            tituloleve += "<tr>";
            tituloleve += "<th colspan='2'>" + detran[i].proprietario + "</th>";
            tituloleve += "</tr>";
            tituloleve += "<tr>";
            tituloleve += "<td><img src=" + detran[i].foto + "</td>"
            tituloleve += "<td id='conteudo'><b>CNH: </b>" + detran[i].cnh + "<br><b>Placa: </b>" + detran[i].placa + "<br><b>Gravidade: </b>" + detran[i].gravidade + "</td>";
            tituloleve += "</tr>"
            tituloleve += "<tr>"
            tituloleve += "<td id='content' colspan='1'><b>Pontos: </b>" + detran[i].pontos + "<br></td>";
            tituloleve += "<td id='conteudo'><b>Data: </b>" + detran[i].data_infracao + "<br><b>Valor: </b>" + detran[i].valor + "</td>"
            tituloleve += "</tr>"
            tituloleve += "</table>"; //o fechamento da tabela tem que ser dentro do FOR
        }
    }

    for(let i = 0; i < detran.length; i++){
        if(detran[i].gravidade == "Média"){
            titulomedia += "<table id='tabelamedia'>";
            titulomedia += "<tr>";
            titulomedia += "<th colspan='2'>" + detran[i].proprietario + "</th>";
            titulomedia += "</tr>";
            titulomedia += "<tr>";
            titulomedia += "<td><img src=" + detran[i].foto + "</td>"
            titulomedia += "<td id='conteudo'><b>CNH: </b>" + detran[i].cnh + "<br><b>Placa: </b>" + detran[i].placa + "<br><b>Gravidade: </b>" + detran[i].gravidade + "</td>"
            titulomedia += "</tr>"
            titulomedia += "<tr>"
            titulomedia += "<td id='content' ><b>Pontos: </b>" + detran[i].pontos + "</td>";
            titulomedia += "<td id='conteudo' colspan='1'><b>Data: </b>" + detran[i].data_infracao + "<br><b>Valor: </b>" + detran[i].valor + "</td>"
            titulomedia += "</tr>"
            titulomedia += "</table>"; //o fechamento da tabela tem que ser dentro do FOR
        }
    }


    for(let i = 0; i < detran.length; i++){
        if(detran[i].gravidade == "Grave"){
            titulograve += "<table id='tabelagrave'>";
            titulograve += "<tr>";
            titulograve += "<th colspan='2'>" + detran[i].proprietario + "</th>";
            titulograve += "</tr>";
            titulograve += "<tr>";
            titulograve += "<td><img src=" + detran[i].foto + "</td>"
            titulograve += "<td id='conteudo'><b>CNH: </b>" + detran[i].cnh + "<br><b>Placa: </b>" + detran[i].placa + "<br><b>Gravidade: </b>" + detran[i].gravidade + "</td>"
            titulograve += "<tr>"
            titulograve += "<td id='content' ><b>Pontos: </b>" + detran[i].pontos + "</td>";
            titulograve += "<td id='conteudo' colspan='1'><b>Data: </b>" + detran[i].data_infracao + "<br><b>Valor: </b>" + detran[i].valor + "</td>"
            titulograve += "</table>"; //o fechamento da tabela tem que ser dentro do FOR
        }
    }


    for(let i = 0; i < detran.length; i++){
        if(detran[i].gravidade == "Gravíssima"){
            titulogravissima += "<table id='tabelagravissima'>";
            titulogravissima += "<tr>";
            titulogravissima += "<th id='titulo2' colspan='2'>" + detran[i].proprietario + "</th>";
            titulogravissima += "</tr>";
            titulogravissima += "<tr>";
            titulogravissima += "<td id='img2' ><img src=" + detran[i].foto + "</td>"
            titulogravissima += "<td id='conteudo2'><b>CNH: </b>" + detran[i].cnh + "<br><b>Placa: </b>" + detran[i].placa + "<br><b>Gravidade: </b>" + detran[i].gravidade + "</td>"
            titulogravissima += "<tr>"
            titulogravissima += "<td id='content2'><b>Pontos: </b>" + detran[i].pontos + "</td>";
            titulogravissima += "<td id='conteudo2' colspan='1'><b>Data: </b>" + detran[i].data_infracao + "<br><b>Valor: </b>" + detran[i].valor + "</td>"
            titulogravissima += "</table>"; //o fechamento da tabela tem que ser dentro do FOR
        }
    }

    mostra.innerHTML += tituloleve;
    mostra.innerHTML += titulomedia;
    mostra.innerHTML += titulograve;
    mostra.innerHTML += titulogravissima;


    mostra.style.float = "left";


    var somaleve = 0;
    var contaleve = 0;

    var somamedia = 0;
    var contamedia = 0;

    var somagrave = 0;
    var contagrave = 0;

    var somagravissima = 0;
    var contagravissima = 0;

    for(let j = 0; j < detran.length; j++){
        if(detran[j].gravidade == "Leve"){
            somaleve += parseFloat(detran[j].valor.substr(1));
            contaleve++;
        }

        if(detran[j].gravidade == "Média"){
            somamedia += parseFloat(detran[j].valor.substr(1));//Convertendo de STRING para NUMBER, com o substr(1)
            contamedia++;
        }

        if(detran[j].gravidade == "Grave"){
            somagrave += parseFloat(detran[j].valor.substr(1));
            contagrave++;
        }

        if(detran[j].gravidade == "Gravíssima"){
            somagravissima += parseFloat(detran[j].valor.substr(1));
            contagravissima++;
        }
    }

    var mediamultasleves = somaleve/contaleve;
    medialeve.innerHTML += mediamultasleves;//Aki o medialeve(variavel) só irá receber a mediamultasleves, se estiver concatenado +=

    var mediamultasmedias = somamedia/contamedia;
    mediamedia.innerHTML += mediamultasmedias;

    var mediamultasgraves = somagrave/contagrave;
    mediagrave.innerHTML += mediamultasgraves;

    var mediamultasgravissimas = somagravissima/contagravissima;
    mediagravissima.innerHTML += mediamultasgravissimas;

    //Manipulando CSS com JS

    fundo.style.background = "#ccc";//Alterando o fundo da página(body)

    medialeve.style.background = "#000";
    medialeve.style.color = "rgb(20, 163, 75)";
    medialeve.style.fontSize = "20pt"; //Obs: Nâo fazemos font-size, aki usamos o (fontSize)

    mediamedia.style.background = "#000";
    mediamedia.style.color = "rgb(212, 233, 28)";
    mediamedia.style.fontSize = "20pt";

    mediagrave.style.background = "#000";
    mediagrave.style.color = "rgba(112, 87, 87, 0.877)";
    mediagrave.style.fontSize = "20pt";

    mediagravissima.style.background = "#000";
    mediagravissima.style.color = "#fff";
    mediagravissima.style.fontSize = "20pt";


})
