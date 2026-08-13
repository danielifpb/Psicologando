<div align="center">

  <div>
    <img
      src="assets/logo.png"
      alt="Logo Psicologando"
      width="360"
    />
  </div>

  <br>

  Aplicativo mobile de apoio à saúde emocional, autocuidado e organização da rotina.


## Sobre o projeto

O Psicologando é um aplicativo mobile que reúne ferramentas de registro emocional, lembretes de medicamentos e conteúdos de apoio em uma experiência simples e acolhedora.

O trabalho partiu de um projeto acadêmico legado e envolveu sua recuperação, modernização e evolução funcional. A base foi migrada para o Expo SDK 54, as bibliotecas de interface e navegação foram atualizadas e áreas que antes funcionavam apenas como demonstração passaram a oferecer fluxos reais com persistência local.

> O aplicativo oferece recursos de apoio e organização pessoal, mas não substitui acompanhamento profissional, diagnóstico ou tratamento em saúde mental.

## Funcionalidades implementadas

### Início e navegação

- Tela inicial com acesso às principais áreas do aplicativo.
- Menu lateral personalizado com identidade visual amarela do Psicologando.
- Navegação organizada entre telas e formulários com React Navigation.
- Cabeçalho próprio integrado à área segura e à barra de status do Android.

### Diário das Emoções

O Diário das Emoções foi transformado em uma ferramenta funcional, iniciada sem registros artificiais. A pessoa usuária pode:

- criar, visualizar, editar e excluir registros;
- informar título, data e uma reflexão livre;
- classificar o dia como Feliz, Triste, Calmo(a) ou Ansioso(a);
- associar uma música por nome, artista e link opcional;
- escolher uma foto e um vídeo da galeria;
- visualizar os anexos dentro do próprio formulário;
- manter os registros e arquivos salvos localmente no aparelho.

### Alarmes de medicamentos

A área de alarmes também foi substituída por um fluxo persistente e iniciado com lista vazia. Ela permite:

- adicionar lembretes com nome do medicamento e horário;
- editar e excluir alarmes existentes;
- manter os dados salvos entre sessões;
- agendar notificações locais diárias com som;
- cancelar e reagendar corretamente as notificações após alterações.

O funcionamento das notificações segue as permissões e regras do sistema Android. Os alarmes são lembretes locais e não constituem um serviço remoto ou emergencial.

### Materiais de Apoio

- Catálogo organizado em livros, filmes, vídeos e podcasts.
- Navegação por abas para separar as categorias.
- Conteúdo informativo incorporado ao aplicativo.

Nesta versão, o catálogo é estático e não possui painel administrativo ou atualização por servidor.

### Profissionais e Clínicas

- Listagem informativa de profissionais e clínicas.
- Acesso às informações de cada item do catálogo.

A seção não realiza autenticação, agendamento online ou comunicação com um backend. O aplicativo também preserva áreas de terapias e conteúdo motivacional do projeto original.

## Arquitetura e decisões técnicas

O projeto utiliza uma organização baseada em componentes, telas, rotas e contextos:

- `src/components`: elementos reutilizáveis, incluindo cabeçalho, menu, botões, campos e itens de lista;
- `src/screens`: telas e fluxos funcionais do aplicativo;
- `src/routes`: navegação lateral, pilhas e abas;
- `src/contexts`: estado e regras do Diário das Emoções e dos Alarmes;
- `src/assets`: logo, imagens e demais recursos visuais;
- `src/global`: tema e estilos compartilhados.

O estado persistente do diário e dos alarmes é gerenciado por Context API e AsyncStorage. Fotos e vídeos selecionados são copiados para o diretório privado do aplicativo com Expo File System, evitando depender apenas de endereços temporários da galeria. As notificações são agendadas e reconciliadas pelo contexto de alarmes, mantendo a identificação necessária para edição e cancelamento.

Não há conta de usuário, sincronização em nuvem ou servidor nesta versão. Registros pessoais, anexos e alarmes permanecem no armazenamento local e normalmente são removidos quando o aplicativo é desinstalado.

## Tecnologias utilizadas

- React 19
- React Native 0.81
- Expo SDK 54
- React Navigation 7
- Context API
- AsyncStorage
- Expo Notifications
- Expo Image Picker
- Expo File System
- Expo Video
- React Native Paper
- EAS Build
- pnpm 10

## Principais entregas da modernização

- Migração do projeto antigo para uma versão atual e suportada do Expo.
- Atualização da navegação e correção de cabeçalhos duplicados.
- Integração correta com safe area e barra de status do Android.
- Substituição de ícones incompatíveis após a migração.
- Implementação completa e persistente do Diário das Emoções.
- Implementação completa e persistente dos Alarmes de medicamentos.
- Integração com galeria, armazenamento de mídia, reprodução de vídeo e notificações locais.
- Configuração de splash screen personalizada com a identidade visual do projeto.
- Configuração de build Android instalável por meio do EAS Build.

## Download para Android

Uma versão instalável do Psicologando está disponível através do GitHub Releases.

<div align="center">
  <a href="https://github.com/danielifpb/Psicologando/releases/latest/download/Psicologando.apk">
    <img src="https://img.shields.io/badge/BAIXAR_APK-PSICOLOGANDO-EEC802?style=for-the-badge&logo=android&logoColor=000000&labelColor=EEC802&color=EEC802" alt="Baixar Psicologando para Android">
  </a>
</div>

> A instalação é realizada através de um arquivo APK. Como o aplicativo não é distribuído pela Google Play Store, o Android poderá solicitar autorização para instalar aplicativos provenientes do navegador ou gerenciador de arquivos utilizado.

As versões publicadas do aplicativo podem ser consultadas na página de Releases do projeto.

## Status do projeto

Projeto legado modernizado para fins acadêmicos, de portfólio e continuidade de desenvolvimento. A versão atual está alinhada ao Expo SDK 54 e possui uma build Android funcional.
