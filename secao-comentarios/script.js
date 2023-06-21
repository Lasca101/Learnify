onload = () => {
    listagem();
}


const leDados = () => {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            data: [
              {
                id: 0,
                pergunta: "Como você faz a função retornar inteiro?",
                resposta: [
                  {
                    perg: "Você deve utilizar int para isso."
                  },
                  {
                    perg: "Ao declarar a variavel, use int."
                  }
                ]
              },
              {
                id: 1,
                pergunta: "Qual a plataforma usada no video?",
                resposta: [
                  {
                    perg: "Utilizamos o Visual Studio Code."
                  }
                ]
             },
             {
                id: 2,
                pergunta: "Como faço para tornar a função modular?",
                resposta: [
                  {
                    perg: "Coloque ela fora da função main."
                  },
                  {
                    perg: "Deixe ela em escopo global."
                  }
                ]
              }
            ]
          }
    }

    return objDados;
}

const salvaDados = (dados) => {
    localStorage.setItem('db', JSON.stringify(dados));
}


const incluirPerguntas = () => {
    let objDados = leDados();

    let numId = objDados.data.length;
    let strPergunta = document.getElementById('input-pergunta').value;
    let strResposta = '';

    let novaPergunta = {
        id: numId,
        pergunta: strPergunta,
        resposta: [
            {
                perg: strResposta
            }
        ]
    };
    objDados.data.push(novaPergunta);

    salvaDados(objDados);
    listagem();
    document.getElementById('input-pergunta').value = '';
}


const listagem = () => {
    let tela = document.getElementById("tela");
    let html = '';
    let p = '';
    let objDados = leDados();

    for (let i = 0; i < objDados.data.length; i++) {
        for (let k = 0; k < objDados.data[i].resposta.length; k++) {

            p += `<p>${objDados.data[i].resposta[k].perg}</p>`;
        }
            html += `<div class="exibicao-pergunta-respostas">
                    <div class="pergunta-com-botao">
                        <h6 class="perguntas">${objDados.data[i].pergunta}</h6>

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
                    incluirResposta(objDados.data[j].id)
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

const incluirResposta = (id) => {
    let objDados = leDados();

    let strResposta = document.getElementById('input-resposta').value;

    let novaResposta = {
        perg: strResposta
    };

    objDados.data[id].resposta.push(novaResposta);
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
