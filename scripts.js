// Mapeamento 
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

// Pontuação na tela
let humanScoreNumber = 0
let machineScoreNumber = 0

// Função que o usuario ao clicar faz a sua escolha
const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}
// Função para Maquina escolher uma opção
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}
// Condições para pontuação do jogo
const playTheGame = (human, machine) => {
    console.log('humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Ahh! Empatou!"

    }

    else if (
        (human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML=humanScoreNumber
        result.innerHTML = "Você ganhou!👏";
        pointSound.play();
    }
    else {
        machineScoreNumber++
        machineScore.innerHTML=machineScoreNumber
        result.innerHTML = "Você perdeu para Máquina!😭 ";
        hitSound.play();
    }
} 
// Musica
function execSom() {
    const playAudio = document.getElementById("playAudio");
    playAudio.play();	
}  





