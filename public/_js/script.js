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

// Estados para colocar no Select
var especialidade = document.getElementById("especialidade"),
                     especialidades = [
                        "Direito penal",
                        "Direito de propriedade intelectual",
                        "Direito do consumidor",
                        "Direito ambiental",
                        "Direito internacional",
                        "Direito empresarial",
                        "Direito trabalhista",
                        "Direito tributário",
                        "Direito desportivo",
                        "Direito aeronáutico",
                        "Direito agrário",
                        "Direito eleitoral",
                        "Direito previdenciário",
                        "Direito de Família",
                        "Lei de Trânsito",
                        "Direito Bancário",
                        "Direito administrativo",
                        "Direito médico",
                        "Direito de sucessão",
                        "Direito digital",
                        "Direito contratual",
                     ];
             
             for(var i = 0; i < especialidades.length; i++)
             {
                 var option = document.createElement("option"),
                     txt = document.createTextNode(especialidades[i]);
                 option.appendChild(txt);
                 option.setAttribute("value",especialidades[i]);
                 especialidade.insertBefore(option,especialidade.lastChild);
             }

//Função de Redirecionamento
function btnBusca(){
    var link =  document.getElementById("busca").value;
    var url = "/pesquisa=" + link;
    location.href = url;
}