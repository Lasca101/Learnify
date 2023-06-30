document.querySelector('#botao-enviar-numero-aulas').onclick = () => {
    let numeroAulas = document.querySelector('#input-inserir-numero-aulas').value;
    let htmlInserirAulas = '';
    let divAulas = document.querySelector('#div-inserir-img-link');
    let htmlInserirBotaoFinalizar = '';
    let divBotaoFinalizar = document.querySelector('#div-botao-finalizar');

    for (let i = 0; i < numeroAulas; i++) {
        htmlInserirAulas += `
        <div class="inserir-aula">
            <h3>${i+1}º Video</h3>
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
}