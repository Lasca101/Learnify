function searchCourses() {
    var input = document.querySelector('.search__input').value.toLowerCase();
    var cursos = document.querySelectorAll('.curso');
  
    cursos.forEach(function(curso) {
      var titulo = curso.getAttribute('data-title').toLowerCase();
      var categoria = curso.getAttribute('data-category').toLowerCase();
  
      if (titulo.includes(input) || categoria.includes(input)) {
        curso.style.display = 'inline-block';
      } else {
        curso.style.display = 'none';
      }
    });
  }
  