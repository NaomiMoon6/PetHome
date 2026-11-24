# 🐾 Pet Home

> Um lar para cada patinha!

O **Pet Home** é um sistema web simples e acessível para organizar resgates, cuidados de saúde e processos de adoção de animais em cidades pequenas. A ideia é centralizar em um só lugar o que hoje costuma ficar espalhado em grupos de WhatsApp, fotos soltas e anotações à mão: cadastro dos animais, acompanhamento de cada etapa, mural público de adoção e um painel de controle para abrigos e protetores.

Este repositório contém o **protótipo front-end** do projeto (HTML + CSS puros), com todas as telas públicas e administrativas.

## ✨ Funcionalidades (telas)

### Área pública

| Página | Arquivo | Descrição |
|---|---|---|
| Início | `index.html` | Landing page com a missão do projeto e seção "Sobre Nós" |
| Adotar | `adotar.html` | Mural público com os animais, status, abrigo responsável e botão de contato |
| Abrigos | `abrigos.html` | Mapa e lista de abrigos próximos, com vagas abertas, direções e contato |
| Cadastrar | `cadastro.html` | Formulário de cadastro de abrigo/protetor (com envio de imagens) |
| Login | `login.html` | Acesso ao painel do abrigo |

### Área do abrigo (admin)

| Página | Arquivo | Descrição |
|---|---|---|
| Dashboard | `dashboard.html` | Visão geral: contatos recebidos, status dos pets e vagas disponíveis |
| Pets | `pets.html` | Cards dos animais com barra de progresso (Tratamento → Disponível → Adotado) |
| Contatos | `contatos.html` | Lista de pedidos de adoção/abrigo e caixa de chat |

## 🧱 Tecnologias

- **HTML5** semântico
- **CSS3** (Grid, Flexbox, media queries, `@import` modular)
- Metodologia **BEM** para nomenclatura de classes
- Fonte **Poppins** (carregada localmente via `@font-face`)
- Design responsivo (desktop, tablet e mobile)

Não há dependências, build ou framework: basta abrir o projeto no navegador.


## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/NaomiMoon6/PetHome.git
   ```
2. Entre na pasta:
   ```bash
   cd PetHome
   ```
3. Abra o `index.html` no navegador (ou use uma extensão como o *Live Server* do VS Code).

## 📁 Estrutura do projeto

```
PetHome/
├── assets/
│   ├── fonts/poppins/     # Arquivos da fonte Poppins
│   ├── icons/             # Ícones e logo (SVG)
│   └── images/            # Imagens dos pets, mapa e landing
├── styles/
│   ├── base/              # reset.css, fonts.css, page.css
│   ├── blocks/            # Um arquivo CSS por bloco (header, footer, card-grid, dashboard...)
│   └── main.css           # Importa todos os estilos
├── index.html
├── adotar.html
├── abrigos.html
├── cadastro.html
├── login.html
├── dashboard.html
├── pets.html
└── contatos.html
```

## 📌 Status do projeto

Este é um **protótipo visual**. No momento:

- Os dados exibidos (pets, abrigos, contatos) são **exemplos estáticos**.
- O login apenas redireciona para o dashboard, sem autenticação real.
- O formulário de cadastro e o chat ainda não estão conectados a um back-end.
- O mapa é uma imagem ilustrativa.

### Próximos passos

- Back-end e banco de dados
- Autenticação real de abrigos
- Cadastro de pets com fotos e histórico médico (vacinas, vermífugos)
- Link direto para o WhatsApp do protetor responsável
- Registro de doações de ração e insumos
- Mapa interativo de abrigos
- Chat funcional entre adotantes e abrigos

## 🎓 Sobre

Projeto desenvolvido no **Centro Universitário São Lourenço**, em 2026.

**Autora:** Naomi Marra Marcondes
