$(document).ready(function(){

    $('header button').click(function() {
       $('form').slideDown();  //mostra o formulário
    })

    $('#cancel-button').click(function() {
        $('form').slideUp(); //esconde o formulário
    })

    $('form').on('submit', function(e) {
        e.preventDefault(); // previne o comportamento padrão do formulário
        const endereçoDaNovaImagem = $(`#endereço-imagem-nova`).val(); //pega o valor do input
        const novoItem = $(`<li style="display: none"></li>`);
        $(`<img src="${endereçoDaNovaImagem}"/>`).appendTo(novoItem); //cria a imagem com o endereço e adiciona ao novoItem <li> </li>
        $(`
            <div class="overlay-imagem-link">
                <a href="${endereçoDaNovaImagem}" target='_blank' title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
            
            $(novoItem).appendTo('ul'); //adiciona o novoItem à lista
            $(novoItem).faddenIn(1000); //mostra o novoItem com efeito fade in
            $('#endereço-imagem-nova').val(''); //limpa o input
    })
})

