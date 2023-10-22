const Registro =  require('../../models/Registros')

const dados = [
    {
        "nome": "Lucas Silva",
        "identificador": "123456/SP",
        "especialidade": "Direito penal",
        "tel": "11912345678",
        "email": "contato@lucassilva.adv",
        "estado": "São Paulo",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://lucassilva.com.br/"
    },
    {
        "nome": "Ana Gonçalves",
        "identificador": "987654/RJ",
        "especialidade": "Direito de propriedade intelectual",
        "tel": "11912345678",
        "email": "contato@anagoncalves.adv",
        "estado": "Rio de Janeiro",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://anagoncalves.com.br/"
    },
    {
        "nome": "Gabriel Santos",
        "identificador": "234567/MG",
        "especialidade": "Direito do consumidor",
        "tel": "11912345678",
        "email": "contato@gabrielsantos.adv",
        "estado": "Minas Gerais",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://gabrielsantos.com.br/"
    },
    {
        "nome": "Isabela Oliveira",
        "identificador": "876543/RS",
        "especialidade": "Direito ambiental",
        "tel": "11912345678",
        "email": "contato@isabelaoliveira.adv",
        "estado": "Rio Grande do Sul",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://isabelaoliveira.com.br/"
    },
    {
        "nome": "Carolina Ribeiro",
        "identificador": "345678/BA",
        "especialidade": "Direito internacional",
        "tel": "11912345678",
        "email": "contato@rafaelacosta.adv",
        "estado": "Bahia",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://carolinaribeiro.com.br/"
    },
    {
        "nome": "Rafaela Costa",
        "identificador": "765432/PR",
        "especialidade": "Direito empresarial",
        "tel": "11912345678",
        "email": "contato@pedromendes.adv",
        "estado": "Paraná",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://rafaelacosta.com.br/"
    },
    {
        "nome": "Bruno Cardoso",
        "identificador": "456789/SC",
        "especialidade": "Direito trabalhista",
        "tel": "11912345678",
        "email": "contato@camilaalmeida.adv",
        "estado": "Santa Catarina",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://brunocardoso.com.br/"
    },
    {
        "nome": "Pedro Mendes",
        "identificador": "654321/GO",
        "especialidade": "Direito tributário",
        "tel": "11912345678",
        "email": "contato@thiagoferreira.adv",
        "estado": "Goiás",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://pedromendes.com.br/"
    },
    {
        "nome": "Juliana Garcia",
        "identificador": "567890/AL",
        "especialidade": "Direito desportivo",
        "tel": "11912345678",
        "email": "contato@marinarocha.adv",
        "estado": "Alagoas",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://julianagarcia.com.br/"
    },
    {
        "nome": "Camila Almeida",
        "identificador": "432109/MT",
        "especialidade": "Direito aeronáutico",
        "tel": "11912345678",
        "email": "contato@gustavolima.adv",
        "estado": "Mato Grosso",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://camilaalmeida.com.br/"
    },
    {
        "nome": "André Medeiros",
        "identificador": "789012/PE",
        "especialidade": "Direito agrário",
        "tel": "11912345678",
        "email": "contato@carolinaribeiro.adv",
        "estado": "Pernambuco",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://andremedeiros.com.br/"
    },
    {
        "nome": "Thiago Ferreira",
        "identificador": "210987/CE",
        "especialidade": "Direito eleitorial",
        "tel": "11912345678",
        "email": "contato@brunocardoso.adv",
        "estado": "Ceará",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://thiagoferreira.com.br/"
    },
    {
        "nome": "Marina Rocha",
        "identificador": "890123/AM",
        "especialidade": "Direito previdenciario",
        "tel": "11912345678",
        "email": "contato@julianagarcia.adv",
        "estado": "Amazonas",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://marinarocha.com.br/"
    },
    {
        "nome": "Maria Fernandes",
        "identificador": "109876/DF",
        "especialidade": "Direito de Família",
        "tel": "11912345678",
        "email": "contato@andremedeiros.adv",
        "estado": "Distrito Federal",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://mariafernandes.com.br/"
    },
    {
        "nome": "Gustavo Lima",
        "identificador": "901234/ES",
        "especialidade": "Lei de Trânsito",
        "tel": "11912345678",
        "email": "contato@mariafernandes.adv",
        "estado": "Espírito Santo",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://gustavolima.com.br/"
    },
    {
        "nome": "Marcelo Barbosa",
        "identificador": "321098/PB",
        "especialidade": "Direito Bancário",
        "tel": "11912345678",
        "email": "contato@marcelobarbosa.adv",
        "estado": "Paraíba",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://marcelobarbosa.com.br/"
    },
    {
        "nome": "Renata Torres",
        "identificador": "678901/MA",
        "especialidade": "Direito administrativo",
        "tel": "11912345678",
        "email": "contato@renatatorres.adv",
        "estado": "Maranhão",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://renatatorres.com.br/"
    },
    {
        "nome": "Alexandre Sousa",
        "identificador": "765432/SE",
        "especialidade": "Direito médico",
        "tel": "11912345678",
        "email": "contato@alexandresousa.adv",
        "estado": "Sergipe",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://alexandresousa.com.br/"
    },
    {
        "nome": "Vanessa Costa",
        "identificador": "234567/PI",
        "especialidade": "Direito de sucessão",
        "tel": "11912345678",
        "email": "contato@vanessacosta.adv",
        "estado": "Piauí",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://vanessacosta.com.br/"
    },
    {
        "nome": "Felipe Alves",
        "identificador": "543210/AP",
        "especialidade": "Direito digital",
        "tel": "11912345678",
        "email": "contato@felipealves.adv",
        "estado": "Amapá",
        "biografia": "O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.",
        "website": "https://felipealves.com.br/"
    }
]

dados.map(({ 
    nome,
    identificador,
    especialidade,
    tel,
    email,
    estado,
    biografia,
    website
}) => {
    Registro.create({
        nome,
        identificador,
        especialidade,
        tel,
        email,
        estado,
        biografia,
        website
    }).then(function(){
        console.log(`OK: ${nome}`)
    }).catch(function(erro){
        console.log(`ERRO: ${nome}`)
    })
})