const $panda = document.querySelector('.panda')
const $obstacle = document.querySelector('.obstacle')
const $conteiner = document.querySelector('.conteiner')
let $contador = document.querySelector('.contador')
const junpPanda = +window.getComputedStyle($panda).bottom.replace('px', '')
let play = document.querySelector('.start')
const $iniciar = document.querySelector('.pressStart')
let a = b = c = d = e = f = g = 0


// inicia a animação do tronco quando o botão "Start" é clicado
$iniciar.addEventListener('click', () => {
    play.style.display = 'none'
    $obstacle.style.animation = 'obtAN 2.5s linear infinite'

    // loop para verifica se o jogador perdeu
    const loop = setInterval(() => {

        const obstacle = $obstacle.offsetLeft;
        const panda = +window.getComputedStyle($panda).bottom.replace('px', '')
        let tamanhoTela = +screen.height
        // verifica se a tela tem altura menor que 700px
        if (tamanhoTela < 701) {

            // função para o panda pular com o click 
            $conteiner.addEventListener('click', () => {
                $panda.classList.add('pandaAnimation')
                setTimeout(() => {
                    $panda.classList.remove('pandaAnimation')
                }, 700)
            })

            // se for verdadeiro significa que o panda colidiu com o tronco finalizando as animações.
            if (obstacle <= 163 && obstacle > 78 && panda < 60) {
                $obstacle.style.animation = 'none';
                $obstacle.style.left = `${obstacle}px`
                $panda.style.animation = 'none'
                $panda.style.bottom = `${panda}px`

                // Finaliza os loops
                clearInterval(loop)
                clearInterval(contador)

                // recarrega a pagina após 1.2 segundos para reiniciar o jogo
                setTimeout(() => {
                    document.location.reload()
                }, 1200)

            }

        } else {

            // Função para o panda pular quando preciona a tecla Space/Espaço
            const pulopanda = document.addEventListener('keypress', event => {

                if (event.key === " ") {
                    $panda.classList.add('pandaAnimation')
                    // função para remover animação do panda
                    setTimeout(() => {
                        $panda.classList.remove('pandaAnimation')
                    }, 700)
                }

            })

            // se for verdadeiro significa que o panda colidiu com o tronco finalizando as animações.
            if (obstacle <= 210 && obstacle > 90 && panda < 83) {
                $obstacle.style.animation = 'none';
                $obstacle.style.left = `${obstacle}px`
                $panda.style.animation = 'none'
                $panda.style.bottom = `${panda}px`

                // Finaliza os loops
                clearInterval(loop)
                clearInterval(contador)

                // recarrega a pagina após 1.2 segundos para reiniciar o jogo
                setTimeout(() => {
                    document.location.reload()
                }, 1200)


            }
        }
    }, 10)
    // Loop para contar pontos
    const contador = setInterval(() => {

        // ifs para fazer o contador de pontos
        a++
        if (a === 9) {
            a = 0
            b++
        }

        if (b === 9) {
            b = 0
            c++
        }

        if (c === 9) {
            c = 0
            d++
        }

        if (d === 9) {
            d = 0
            e++
        }

        if (e === 9) {
            e = 0
            f++
        }

        if (f === 9) {
            f = 0
            g++
        }
        if (g === 9) {

        }
        $contador.textContent = `${g}${f}${e}${d}${c}${b}${a}`

    }, 30)


})

