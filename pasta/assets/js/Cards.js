class Cards {
    constructor() {

    }

    calculoScroll() {
        const posicao = document.getElementById('section-dicas').getBoundingClientRect()['y']
        console.log(posicao)
        if (posicao <= 100){
            console.log('chegou')
            document.querySelector('.card').style.backgroundColor = 'Blue'

        }
    }
}

export { Cards }