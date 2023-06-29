window.addEventListener('load', loadVideos);

function loadVideos() {
  fetch('/json-teste/json.json')
    .then(res => res.json())
    .then(dados => {

      let strDados = localStorage.getItem('db');
      let objDados = {};
      if (strDados) {
        objDados = JSON.parse(strDados);
      }
      else {
        objDados = dados;
      }
      localStorage.setItem('db', JSON.stringify(objDados));


      let cursos = document.getElementById("cursoContainer");
      let htmlCursos = '';

      for (let i = 0; i < objDados.curso.length; i++) {
        htmlCursos += `
                      <div class="col-md-6 curso" data-title="${objDados.curso[i].nome}" data-category="${objDados.curso[i].categoria}">
                        <a href="/pagina-curso/pagina_curso.html?id=${objDados.curso[i].idCurso}" class="ancora-cursos"><img src="${objDados.curso[i].imagem}" alt="curso">
                        <h3>${objDados.curso[i].nome}</h3></a>
                        <p class="categoria-curso">Categoria: ${objDados.curso[i].categoria}</p>
                      </div>`
      }
      cursos.innerHTML = htmlCursos;
    })
}

function searchCourses() {
  var input = document.querySelector('.search__input').value.toLowerCase();
  var cursos = document.querySelectorAll('.curso');

  cursos.forEach(function (curso) {
    var titulo = curso.getAttribute('data-title').toLowerCase();
    var categoria = curso.getAttribute('data-category').toLowerCase();

    if (titulo.includes(input) || categoria.includes(input)) {
      curso.style.display = 'inline-block';
    } else {
      curso.style.display = 'none';
    }
  });
}
