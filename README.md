# Projeto: Construção de Interfaces 

## Telas 
- `editor.html` — Escolhas do Editor
- `usuarios.html` — Usuários
- `comentarios.html` — Fila de comentários

## Descrição Geral
Este projeto tem como objetivo a criação de um painel administrativo simples e responsivo utilizando apenas HTML5 e CSS, reproduzindo as telas do exercício proposto.

O painel foi desenvolvido para o site fictício, contendo páginas de gerenciamento de conteúdo e usuários.  

## Telas Implementadas

1. **Escolhas do Editor (`editor.html`)**  
   - Exibe uma lista de posts com botões para Agendar ou Remover.  
   - Inclui campo de busca e estatísticas no topo.  

2. **Usuários (`usuarios.html`)**  
   - Mostra uma tabela com colunas Usuário, E-mail*, Status e Ações.  
   - Permite ações de Bloquear ou Desbloquear.  

3. **Fila de Comentários (`comentarios.html`)**  
   - Lista de comentários com botões Aprovar e Reprovar.  
   - Cada item mostra o autor, o status e os botões organizados à direita.  

Todas as telas possuem:
- Cabeçalho com logotipo, menu e campo de busca;
- Menu lateral de navegação;
- Cards de estatísticas;
- Área principal para exibição dos dados;
- Rodapé com seções e direitos autorais.


## Decisões de Layout

- O layout base foi construído utilizando CSS Grid para dividir a tela entre o menu lateral e o conteúdo principal.  
- Dentro de cada seção cards, tabelas e listas, utilizou-se Flexbox para alinhar elementos horizontalmente e posicionar os botões à direita.  
- As cores e espaçamentos foram definidos com variáveis CSS no `:root`, facilitando a padronização.   

## Breakpoints Utilizados

## Contribuição
- Criação da estrutura HTML das páginas: comentarios, editor e usuarios


## Contribuidores
Cinthia Chambilla Tito




