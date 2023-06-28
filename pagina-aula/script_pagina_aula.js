window.addEventListener('load', loadVideo);

const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

function loadVideo(){
    fetch('/json-teste/json.json')
            .then(res => res.json())
            .then(dados => {
                let Aula = document.getElementById("div-aula");
                let htmlAula = '';

                htmlAula = `
                    <div>
                        <a href="#" class="ancora-titulo-curso">
                            <h3>Programação em C - Prof. Pietro Martins</h3>
                        </a>
                    </div>

                    <div class="video-botoes">
                        <iframe class="frame" src="https://www.youtube.com/embed/2w8GYzBjNj8" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                        <button type="button" class="btn btn-secondary botao-voltar">Aula Anterior</button>
                        <button type="button" class="btn btn-success botao-avancar">Próxima Aula</button>
                    </div>`

                Aula.innerHTML = htmlAula;
            })
}