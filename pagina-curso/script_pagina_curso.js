window.addEventListener('load', loadVideos);

const urlParams = new URLSearchParams(window.location.search);
const cursoId = urlParams.get('id');

function loadVideos(){
    fetch('/json-teste/json.json')
            .then(res => res.json())
            .then(dados => {
                let videosPagina = document.getElementById("aulas-do-curso");
                let htmlVideos = '';
                let bannerPagina = document.getElementById("div-banner");
                let htmlBanner = '';

                for (let i = 0; i < dados.curso[cursoId].video.length; i++) {
                    htmlVideos += `
                        <div id="div-thumbnail">
                            <a href="/pagina-aula/pagina_aula.html?id=${dados.curso[cursoId].video[i].idVideo}" class="ancora-aulas"><img id="thumbnail" src="${dados.curso[cursoId].video[i].thumbnail}" alt="thumbnail">
                            <h5>${dados.curso[cursoId].video[i].titulo}</h5></a>
                        </div>`
                }
                htmlBanner = `<img id="banner-curso" src="${dados.curso[cursoId].banner}" alt="banner">`

                bannerPagina.innerHTML = htmlBanner;
                videosPagina.innerHTML = htmlVideos;
            })
}