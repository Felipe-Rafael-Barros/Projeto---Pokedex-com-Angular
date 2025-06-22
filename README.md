# 📱 Projeto PokeAPI – Ionic + Angular

Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Desenvolvedor Full Stack Júnior. O objetivo principal foi criar uma aplicação que consumisse dados da [PokeAPI](https://pokeapi.co/) e apresentasse os Pokémons de forma interativa, responsiva e organizada.

---

## 🚀 Tecnologias Utilizadas

- [Ionic Framework](https://ionicframework.com/)  
- [Angular](https://angular.io/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [PokeAPI RESTful](https://pokeapi.co/)  
- HTML5 + CSS3  
- Git e GitHub

---

## 🎯 Funcionalidades Implementadas

- Listagem paginada de Pokémons com nome e imagem;
- Navegação para tela de detalhes com no mínimo 6 informações adicionais e imagens;
- Marcar Pokémons como favoritos e exibir em lista separada;
- Responsividade para modo retrato e paisagem em dispositivos móveis;
- Injeção de dependência com services Angular para separar lógica de negócios;
- Interface limpa, objetiva e adaptada para usuários de dispositivos mobile;
- README explicativo com visão geral da arquitetura e processo de desenvolvimento;
- Versionamento com Git seguindo boas práticas (commits frequentes e descritivos).

---

## 🧠 Abordagem e Estilo de Codificação

Foi proposto Ionic com Angular por ser uma stack moderna para aplicações híbridas com foco em performance mobile. Estruturei o projeto usando **componentes reutilizáveis**, **injeção de dependência** e **serviços separados**, mantendo o código limpo e com responsabilidade única.

Implementei a **listagem paginada de Pokémons** na tela inicial para garantir boa performance e uma experiência de navegação fluida. O redirecionamento para a tela de detalhes foi feito com roteamento Angular, mantendo os parâmetros da API bem organizados.

A funcionalidade de **favoritar Pokémons** foi implementada com controle de estado simples, permitindo ao usuário acessar seus favoritos sem recarregar dados da API.

Me preocupei em seguir **boas práticas de versionamento**, com commits claros e organizados que documentam todo o processo de desenvolvimento.

A interface foi desenhada com foco na simplicidade e na usabilidade, adaptando bem ao uso em smartphones em diferentes orientações de tela (paisagem/retrato).

Comentei trechos relevantes do código para facilitar a leitura e deixei a estrutura preparada para expansão ou inclusão de testes automatizados no futuro.

---

## 🛠️ Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Felipe-Rafael-Barros/Projeto---Pokedex-com-Angular
# Acesse a pasta do projeto
cd pokeapp

# Instale as dependências
npm install

# Execute a aplicação
ionic serve
