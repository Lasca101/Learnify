window.addEventListener('load', salvarAulas);

document.querySelector('#botao-enviar-numero-aulas').onclick = () => {
    let numeroAulas = document.querySelector('#input-inserir-numero-aulas').value;
    let htmlInserirAulas = '';
    let divAulas = document.querySelector('#div-inserir-img-link');
    let htmlInserirBotaoFinalizar = '';
    let divBotaoFinalizar = document.querySelector('#div-botao-finalizar');

    for (let i = 0; i < numeroAulas; i++) {
        htmlInserirAulas += `
        <div class="inserir-aula">
            <h3>${i + 1}º Video</h3>
            <input id="inserir-titulo${i}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Insira o titulo do video">
            <div class="div-inserir-img">
                <label for="formFile" class="form-label">Selecione uma imagem para a thumbnail do video</label>
                <input id="inputFile${i}" class="form-control form-control-" id="formFile" type="file">
            </div>
            <div class="form-floating mb-3 small div-inserir-link">
                <input id="inputText${i}" class="form-control input-link" id="floatingInput" placeholder="">
                <label for="floatingInput">Insira código do link do video</label>
                <a href="#" class="botao-como-pegar-link">Como pegar o código do link?</a>
            </div>
        </div>`
    }
    htmlInserirBotaoFinalizar += `
    <button id="finalizar-curso" type="button" class="btn btn-primary">Finalizar</button>`

    divAulas.innerHTML = htmlInserirAulas;
    divBotaoFinalizar.innerHTML = htmlInserirBotaoFinalizar;

    document.querySelector('#finalizar-curso').onclick = () => {
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


                // Função para converter a imagem em base64
                function convertToBase64(file, callback) {
                    const reader = new FileReader();
                    reader.onloadend = function () {
                        callback(reader.result);
                    };
                    reader.readAsDataURL(file);
                }

                for (let i = 0; i < numeroAulas; i++) {
                    // Elementos HTML
                    let inputFileThumb = document.querySelector(`#inputFile${i}`);
                    let codigoLink = document.querySelector(`#inputText${i}`).value;
                    let tituloVideo = document.querySelector(`#inserir-titulo${i}`).value;

                    // Variáveis para armazenar os valores em base64
                    let imageBase64_1 = null;

                    // Evento change do input file 1
                    inputFileThumb.addEventListener('change', function (event) {
                        const file = event.target.files[0];

                        // Verifica se um arquivo foi selecionado
                        if (file) {
                            convertToBase64(file, function (base64) {
                                // Armazena o valor em uma variável
                                imageBase64_1 = base64;
                            });
                        }
                    });

                    // Verifica se as duas imagens foram selecionadas
                    if (imageBase64_1 && codigoLink && tituloVideo) {
                        // Insere os valores em um objeto JSON
                        let novoVideo = {
                            idVideo: i,
                            link: codigoLink,
                            thumbnail: imageBase64_1,
                            titulo: tituloVideo,
                            data: [
                            ]
                        };

                        objDados.curso[objDados.curso.length - 1].video.push(novoVideo);
                        localStorage.setItem('db', JSON.stringify(objDados));
                    } else {
                        console.log('Por favor, selecione e preencha todos os campos.');
                    }

                }
            })
    }
}



function salvarAulas() {
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




            // Função para converter a imagem em base64
            function convertToBase64(file, callback) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    callback(reader.result);
                };
                reader.readAsDataURL(file);
            }

            // Elementos HTML
            const inputFile1 = document.querySelector('#input-banner');
            const inputFile2 = document.querySelector('#input-imagem');
            const finalizarButton = document.getElementById('continuar-cadastro');

            // Variáveis para armazenar os valores em base64
            let imageBase64_1 = null;
            let imageBase64_2 = null;

            // Evento change do input file 1
            inputFile1.addEventListener('change', function (event) {
                const file = event.target.files[0];

                // Verifica se um arquivo foi selecionado
                if (file) {
                    convertToBase64(file, function (base64) {
                        // Armazena o valor em uma variável
                        imageBase64_1 = base64;
                    });
                }
            });

            // Evento change do input file 2
            inputFile2.addEventListener('change', function (event) {
                const file = event.target.files[0];

                // Verifica se um arquivo foi selecionado
                if (file) {
                    convertToBase64(file, function (base64) {
                        // Armazena o valor em uma variável
                        imageBase64_2 = base64;
                    });
                }
            });

            // Evento click do botão "Finalizar"
            finalizarButton.addEventListener('click', function () {
                let numIdCurso = objDados.curso.length;
                let nomeCurso = document.querySelector('#inserir-nome').value;
                let descricaoCurso = document.querySelector('#inserir-descricao').value;
                let categoriaCurso = document.querySelector('#inserir-categoria').value;
                // Verifica se as duas imagens foram selecionadas
                if (imageBase64_1 && imageBase64_2 && nomeCurso && descricaoCurso && categoriaCurso) {
                    // Insere os valores em um objeto JSON
                    let novoCurso = {
                        idCurso: numIdCurso,
                        nome: nomeCurso,
                        descricao: descricaoCurso,
                        categoria: categoriaCurso,
                        banner: imageBase64_1,
                        imagem: imageBase64_2,
                        video: [
                        ]
                    };

                    objDados.curso.push(novoCurso);
                    localStorage.setItem('db', JSON.stringify(objDados));

                    document.querySelector('#div-numero-aulas').style.display = 'flex';
                    document.querySelector('#continuar-cadastro').style.display = 'none';
                } else {
                    console.log('Por favor, selecione e preencha todos os campos.');
                }
            });





        })
}
