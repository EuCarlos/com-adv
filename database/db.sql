CREATE TABLE 'registros' (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome VARCHAR,
    identificador VARCHAR, -- Número de identificação profissional 213066/RJ
    tel VARCHAR,
    email VARCHAR,
    estado VARCHAR,
    especialidade VARCHAR,
    biografia VARCHAR,
    website VARCHAR
)

/**
Direito penal
Direito de propriedade intelectual
Direito do consumidor
Direito ambiental
Direito internacional
Direito empresarial
Direito trabalhista
Direito tributário
Direito desportivo
Direito aeronáutico
Direito agrário
Direito eleitorial
Direito previdenciario
Direito de Família
Lei de Trânsito
Direito Bancário
Direito administrativo
Direito médico
Direito de sucessão
Direito digital
Direito contratual
**/
INSERT INTO registros (nome, identificador, especialidade, tel, email, estado, biografia, website) VALUES
('Lucas Silva', '123456/SP', 'Direito penal', '11912345678', 'contato@lucassilva.adv', 'São Paulo', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://lucassilva.com.br/'),
('Ana Gonçalves', '987654/RJ', 'Direito de propriedade intelectual', '11912345678', 'contato@anagoncalves.adv', 'Rio de Janeiro', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://anagoncalves.com.br/'),
('Gabriel Santos', '234567/MG', 'Direito do consumidor', '11912345678', 'contato@gabrielsantos.adv', 'Minas Gerais', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://gabrielsantos.com.br/'),
('Isabela Oliveira', '876543/RS', 'Direito ambiental', '11912345678', 'contato@isabelaoliveira.adv', 'Rio Grande do Sul', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://isabelaoliveira.com.br/'),
('Carolina Ribeiro', '345678/BA', 'Direito internacional', '11912345678', 'contato@rafaelacosta.adv', 'Bahia', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://carolinaribeiro.com.br/');

INSERT INTO registros (nome, identificador, especialidade, tel, email, estado, biografia, website) VALUES
('Rafaela Costa', '765432/PR', 'Direito empresarial', '11912345678', 'contato@pedromendes.adv', 'Paraná', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://rafaelacosta.com.br/'),
('Bruno Cardoso', '456789/SC', 'Direito trabalhista', '11912345678', 'contato@camilaalmeida.adv', 'Santa Catarina', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://brunocardoso.com.br/'),
('Pedro Mendes', '654321/GO', 'Direito tributário', '11912345678', 'contato@thiagoferreira.adv', 'Goiás', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://pedromendes.com.br/'),
('Juliana Garcia', '567890/AL', 'Direito desportivo', '11912345678', 'contato@marinarocha.adv', 'Alagoas', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://julianagarcia.com.br/'),
('Camila Almeida', '432109/MT', 'Direito aeronáutico', '11912345678', 'contato@gustavolima.adv', 'Mato Grosso', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://camilaalmeida.com.br/');

INSERT INTO registros (nome, identificador, especialidade, tel, email, estado, biografia, website) VALUES
('André Medeiros', '789012/PE', 'Direito agrário', '11912345678', 'contato@carolinaribeiro.adv', 'Pernambuco', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://andremedeiros.com.br/'),
('Thiago Ferreira', '210987/CE', 'Direito eleitorial', '11912345678', 'contato@brunocardoso.adv', 'Ceará', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://thiagoferreira.com.br/'),
('Marina Rocha', '890123/AM', 'Direito previdenciario', '11912345678', 'contato@julianagarcia.adv', 'Amazonas', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://marinarocha.com.br/'),
('Maria Fernandes', '109876/DF', 'Direito de Família', '11912345678', 'contato@andremedeiros.adv', 'Distrito Federal', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://mariafernandes.com.br/'),
('Gustavo Lima', '901234/ES', 'Lei de Trânsito', '11912345678', 'contato@mariafernandes.adv', 'Espírito Santo', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://gustavolima.com.br/');

INSERT INTO registros (nome, identificador, especialidade, tel, email, estado, biografia, website) VALUES
('Marcelo Barbosa', '321098/PB', 'Direito Bancário', '11912345678', 'contato@marcelobarbosa.adv', 'Paraíba', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://marcelobarbosa.com.br/'),
('Renata Torres', '678901/MA', 'Direito administrativo', '11912345678', 'contato@renatatorres.adv', 'Maranhão', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://renatatorres.com.br/'),
('Alexandre Sousa', '765432/SE', 'Direito médico', '11912345678', 'contato@alexandresousa.adv', 'Sergipe', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://alexandresousa.com.br/'),
('Vanessa Costa', '234567/PI', 'Direito de sucessão', '11912345678', 'contato@vanessacosta.adv', 'Piauí', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://vanessacosta.com.br/'),
('Felipe Alves', '543210/AP', 'Direito digital', '11912345678', 'contato@felipealves.adv', 'Amapá', 'O Escritório de Advocacia se notabiliza pela coesão dos valores tradicionais da advocacia com as tendências modernas dos serviços jurídicos garantindo a qualidade na formulação da estratégia jurídica.', 'https://felipealves.com.br/');