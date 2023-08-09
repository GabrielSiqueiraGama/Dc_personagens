const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');

        const personagemSelecionado = document.querySelector('.selecionado');
        console.log(personagemSelecionado);
        personagemSelecionado.classList.remove('selecionado')
    });
})