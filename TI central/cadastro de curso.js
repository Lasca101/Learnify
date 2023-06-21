
function createWebsite() {
    
    var doctype = document.implementation.createDocumentType('html', '', '');
    var html = document.createElement('html');
    var head = document.createElement('head');
    var body = document.createElement('body');
  
    
   
  
    
    `
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="style_midia_queries.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Site Compras</title>
      <link rel="shortcut icon" href="/imagens/logo-learnify.png" type="image/x-icon">
      <!-- código inclusão do bootstrap no site -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <!-- fim código inclusão do bootstrap no site -->
      <!-- código do filtro seletor da barra lateral "barra-filtro" -->
      <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
      <!-- fim código do filtro seletor da barra lateral "barra-filtro" -->
      <!-- código para incluir o FontAwesome no site -->
      <script src="https://kit.fontawesome.com/f2c736aaab.js" crossorigin="anonymous"></script>
      <!-- fim código para incluir o FontAwesome no site -->
      <style>
        .center {
          text-align: center;
        }
      </style>
    `;
  
    
     `
      <header>
        <div id="cabecalho">
          <nav class="barra-home">
            <ul class="menu">
              <li><a href="#" class="itens-barra-home">Minha Conta</a></li>
            </ul>
          </nav>
          <nav class="div-logo">
            <a href="#"><img class="logo" src="/imagens/logo-learnify.png" alt="logo"></a>
          </nav>
        </div>
      </header>
      <h1 class="center">Cadastro de Curso</h1>
      <form action="processar_cadastro.php" method="POST" class="center">
        <!-- Adicione aqui o restante do código do formulário -->
      </form>
      <main></main>
      <footer>
        <!-- Adicione aqui o código do footer -->
      </footer>
    `;
  
    
    html.appendChild(head);
  
    
    html.appendChild(body);
  
    
    var newDoc = document.implementation.createHTMLDocument();
    newDoc.documentElement.replaceWith(html);
  
   
    document.replaceChild(newDoc.documentElement, document.documentElement);
  }
  
  
  createWebsite();
  