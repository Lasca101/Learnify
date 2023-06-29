window.addEventListener('load', loadVideos);

const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

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


            let videosPagina = document.getElementById("aulas-do-curso");
            let htmlVideos = '';
            let bannerPagina = document.getElementById("div-banner");
            let htmlBanner = '';

            for (let i = 0; i < objDados.curso[cursoId].video.length; i++) {
                htmlVideos += `
                        <div id="div-thumbnail">
                            <a href="/pagina-aula/pagina_aula.html?id=${cursoId}&idvideo=${objDados.curso[cursoId].video[i].idVideo}" class="ancora-aulas">
                                <div class="imagem-texto">
                                    <img id="thumbnail" src="${objDados.curso[cursoId].video[i].thumbnail}" alt="thumbnail">
                                    <h6>${objDados.curso[cursoId].video[i].titulo}</h6>
                                </div>
                            </a>
                        </div>`
            }
            htmlBanner = `<img id="banner-curso" src="${objDados.curso[cursoId].banner}" alt="banner">`

            bannerPagina.innerHTML = htmlBanner;
            videosPagina.innerHTML = htmlVideos;
        })
}