window.addEventListener('load', loadVideo);
window.addEventListener('load', comentarios);

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
<<<<<<< Updated upstream
=======
}








function comentarios() {
    fetch('/json-teste/json.json')
        .then(res => res.json())
        .then(dados => {

            const leDados = () => {
                let strDados = localStorage.getItem('db');
                let objDados = {};


                if (strDados) {
                    objDados = JSON.parse(strDados);
                }
                else {
                    objDados = dados;
                }

                return objDados;
            }

            const salvaDados = (dadosBase) => {
                localStorage.setItem('db', JSON.stringify(dadosBase));
            }


            const incluirPerguntas = () => {
                let objDados = leDados();

                let numId = objDados.curso[cursoId].video[videoId].data.length;
                let strPergunta = document.getElementById('input-pergunta').value;
                let strResposta = '';

                let novaPergunta = {
                    idPergunta: numId,
                    pergunta: strPergunta,
                    resposta: [
                        {
                            perg: strResposta
                        }
                    ]
                };
                objDados.curso[cursoId].video[videoId].data.push(novaPergunta);

                salvaDados(objDados);
                listagem();
                document.getElementById('input-pergunta').value = '';
            }


            const listagem = () => {
                let tela = document.getElementById("tela");
                let html = '';
                let p = '';
                let objDados = leDados();

                for (let i = 0; i < objDados.curso[cursoId].video[videoId].data.length; i++) {
                    for (let k = 0; k < objDados.curso[cursoId].video[videoId].data[i].resposta.length; k++) {

                        p += `<p>${objDados.curso[cursoId].video[videoId].data[i].resposta[k].perg}</p>`;
                    }
                    html += `<div class="exibicao-pergunta-respostas">
                        <div class="pergunta-com-botao">
                            <h6 class="perguntas">${objDados.curso[cursoId].video[videoId].data[i].pergunta}</h6>

                            <button type="button" id="${i}" class="botao-responder btn btn-secondary"
                            style="--bs-btn-padding-y: .20rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .60rem;">
                            Responder
                            </button>
                        </div>

                        <button class="botao-exibir-respostas btn btn-primary btn-sm" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapseExample${i}" aria-expanded="false"
                            aria-controls="collapseExample">
                            Respostas
                        </button>
                        <div class="collapse" id="collapseExample${i}">
                            <div class="card card-body">
                                ${p}
                            </div>
                        </div>
                    </div>`;

                    p = '';
                }

                tela.innerHTML = html;

                const botoesResponder = document.getElementsByClassName("botao-responder");
                for (let j = 0; j < botoesResponder.length; j++) {
                    botoesResponder[j].addEventListener('click', () => {
                        document.querySelector('#botao-enviar-resposta').onclick = () => {
                            if (document.getElementById('input-resposta').value != '') {
                                incluirResposta(objDados.curso[cursoId].video[videoId].data[j].idPergunta)
                            }
                        }

                        document.addEventListener('keypress', function (event) {
                            if (event.key === "Enter") {
                                botaoHandler(event);
                            }
                        }, false);
                    });
                }
            }

            listagem();

            const incluirResposta = (id) => {
                let objDados = leDados();

                let strResposta = document.getElementById('input-resposta').value;

                let novaResposta = {
                    perg: strResposta
                };

                objDados.curso[cursoId].video[videoId].data[id].resposta.push(novaResposta);
                salvaDados(objDados);
                listagem();
                document.getElementById('input-resposta').value = '';

            }

            document.querySelector('#botao-enviar-pergunta').onclick = () => {
                if (document.getElementById('input-pergunta').value != '') {
                    incluirPerguntas()
                };
            }

            document.addEventListener('keypress', function (event) {
                if (document.getElementById('input-pergunta').value != '' && event.key === "Enter") {
                    incluirPerguntas();
                    botaoHandler(event);
                }
            }, false);

            function botaoHandler(event) {
                event.preventDefault()
            }
        })
>>>>>>> Stashed changes
}