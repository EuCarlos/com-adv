// Estados para colocar no Select
var select = document.getElementById("select"),
                     arr = ["Acre", "Alagoas", "Amazonia", "Amapá", "Bahia", "Ceará", "Distrito Federal", 
                     "Espírito Santo", "Goiás", "Maranhão", "Minas Gerais", "Mato Grosso do Sul", "Mato Grosso", 
                     "Pará", "Paraíba", "Pernambuco", "Piauí", "Paraná", "Rio de Janeiro", "Rio Grande do Norte", 
                     "Rondônia", "Roraima", "Rio Grande do Sul", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"];
             
             for(var i = 0; i < arr.length; i++)
             {
                 var option = document.createElement("option"),
                     txt = document.createTextNode(arr[i]);
                 option.appendChild(txt);
                 option.setAttribute("value",arr[i]);
                 select.insertBefore(option,select.lastChild);
             }

//Função de Redirecionamento
function btnBusca(){
    var link =  document.getElementById("busca").value;
    var url = "/pesquisa=" + link;
    location.href = url;
}