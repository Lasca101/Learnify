window.addEventListener('load', loadVideo);

const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');
const videoId = urlParams.get('idvideo');

function loadVideo() {
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


            let Aula = document.getElementById("div-aula");
            let htmlAula = '';

            htmlAula = `
                    <div>
                        <a href="/pagina-curso/pagina_curso.html?id=${objDados.curso[cursoId].idCurso}" class="ancora-titulo-curso">
                            <h3>${objDados.curso[cursoId].nome}</h3>
                        </a>
                    </div>

                    <div class="video-botoes">
                        <iframe class="frame" src="https://www.youtube.com/embed/${objDados.curso[cursoId].video[videoId].link}" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                        <button type="button" id="botao-voltar" class="btn btn-secondary">Aula Anterior</button>
                        <button type="button" id="botao-avancar" class="btn btn-success">Próxima Aula</button>
                    </div>`

            Aula.innerHTML = htmlAula;


            document.querySelector('#botao-voltar').onclick = () => {
                let numeroVideo = objDados.curso[cursoId].video[videoId].idVideo;

                if (numeroVideo > 0) {
                    window.location.href = `/pagina-aula/pagina_aula.html?id=${cursoId}&idvideo=${numeroVideo - 1}`;
                }

            }

            document.querySelector('#botao-avancar').onclick = () => {
                let numeroVideo = objDados.curso[cursoId].video[videoId].idVideo;

                if (numeroVideo < objDados.curso[cursoId].video.length - 1) {
                    window.location.href = `/pagina-aula/pagina_aula.html?id=${cursoId}&idvideo=${numeroVideo + 1}`;
                }
            }
        })
}