window.addEventListener('load', salvarAulas);
window.addEventListener('load', loadVideo);

function loadVideo() {
    fetch('/json-teste/json.json')
        .then(res => res.json())
        .then(dados => {
            // Função para converter a imagem em base64
            function convertToBase64(file, callback) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    callback(reader.result);
                };
                reader.readAsDataURL(file);
            }

            // Elementos HTML
            let inputFileThumb = document.querySelector('#input-file-thumb');
            const adicionarButton = document.getElementById('finalizar-curso');

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

            adicionarButton.addEventListener('click', function () {
                let strDados = localStorage.getItem('db');
                let objDados = {};

                if (strDados) {
                    objDados = JSON.parse(strDados);
                }
                else {
                    objDados = dados;
                }

                localStorage.setItem('db', JSON.stringify(objDados));

                let codigoLink = document.querySelector('#input-link-video').value;
                let tituloVideo = document.querySelector('#inserir-titulo').value;
                let idV = objDados.curso[objDados.curso.length - 1].video.length;
                // Verifica se as duas imagens foram selecionadas
                if (imageBase64_1 && codigoLink && tituloVideo) {
                    // Insere os valores em um objeto JSON
                    let novoVideo = {
                        idVideo: idV,
                        link: codigoLink,
                        thumbnail: imageBase64_1,
                        titulo: tituloVideo,
                        data: [
                        ]
                    };

                    objDados.curso[objDados.curso.length - 1].video.push(novoVideo);
                    localStorage.setItem('db', JSON.stringify(objDados));

                    document.querySelector('#input-link-video').value = '';
                    document.querySelector('#inserir-titulo').value = '';
                    document.querySelector('#input-file-thumb').value = '';

                    alert("Video adicionado com sucesso! Para adicionar um novo video, preencha os campos novamente. Ao adicionar todos que deseja, apenas saia da pagina para finalizar.")
                } else {
                    alert("Por favor, selecione e preencha todos os campos.");
                }
            });


        })
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

                    document.querySelector('#continuar-cadastro').style.display = 'none';
                    document.querySelector('#div-inserir-imagem').style.display = 'none';
                    document.querySelector('#div-inserir-banner').style.display = 'none';
                    document.querySelector('#div-inserir-dados').style.display = 'none';

                    document.querySelector('#div-inserir-img-link').style.display = 'flex';
                    document.querySelector('#div-botao-finalizar').style.display = 'flex';
                } else {
                    alert("Por favor, selecione e preencha todos os campos.");
                }
            });





        })
}
