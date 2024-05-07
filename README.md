# ProjectE-commerce
Trabalho Final em reac-native 



Estrutura do projeto 

/meu-app-ecommerce
|-- /android
|-- /ios
|-- /src
    |-- /api
        |-- Api.js
        |-- AuthService.js
        |-- ProductService.js
    |-- /components
        |-- /common
            |-- Button.js
            |-- InputField.js
            |-- LoadingSpinner.js
            |-- ErrorMessage.js
        |-- ProductCard.js
        |-- ProductDetails.js
    |-- /navigation
        |-- AppNavigator.js
        |-- AuthNavigator.js
    |-- /screens
        |-- LoginScreen.js
        |-- ProductListScreen.js
        |-- ProductDetailScreen.js
        |-- ProductManagementScreen.js
        |-- MembersScreen.js
    |-- /state
        |-- /context
            |-- AuthContext.js
            |-- ProductContext.js
        |-- /reducers
            |-- productReducer.js
        |-- /actions
            |-- productActions.js
    |-- /utils
        |-- validators.js
        |-- networkMonitor.js
|-- App.js
|-- index.js
|-- package.json
|-- /assets
    |-- /images
    |-- /animations





    Descrição dos Diretórios e Arquivos Principais:

    
/src/api

    Api.js: Configuração base do Axios para chamadas de API.
    AuthService.js: Serviços para autenticação (login e logout) usando Firebase.
    ProductService.js: Chamadas de API para o CRUD de produtos.

/src/components

    common/: Componentes reutilizáveis como botões, campos de entrada, indicador de carregamento e mensagens de erro.
    ProductCard.js: Componente para exibir um produto no formato de card.
    ProductDetails.js: Componente para exibir os detalhes de um produto.

/src/navigation

    AppNavigator.js: Navegação principal do app incluindo abas ou drawer.
    AuthNavigator.js: Stack de navegação para fluxo de autenticação.

/src/screens

    LoginScreen.js: Tela de login.
    ProductListScreen.js: Tela que lista produtos usando um FlatList.
    ProductDetailScreen.js: Tela com os detalhes de um produto selecionado.
    ProductManagementScreen.js: Tela para gerenciamento (CRUD) de produtos.
    MembersScreen.js: Tela que lista os membros do grupo.

/src/state

    context/: Contextos para gerenciamento de estado global (autenticação e produtos).
    reducers/: Reducers para gerenciar estados complexos (ex.: produtos).
    actions/: Ações relacionadas ao Redux ou a um gerenciador de estado simplificado para disparar alterações de estado.

/src/utils

    validators.js: Funções para validar inputs do usuário.
    networkMonitor.js: Função para monitorar a conexão à internet.

/assets

    Contém recursos estáticos como imagens e animações.

App.js

    Componente raiz que configura a navegação e o contexto global.

index.js

    Ponto de entrada principal do aplicativo React Native.
