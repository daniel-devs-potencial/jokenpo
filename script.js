 const result = document.querySelector('.result')
 const humanScore = document.querySelector('#human-score')
 const machineScore = document.querySelector('#machine-score')

 let humanScoreNumber=0
 let machineScoreNumber=0

 const GAME_OPTTIONS = {

    AZUL: 'azul',
    VERMELHO: 'vermelho',
    AMARELO: 'amarelo'
 }

 const playHuman = (humanChoice) => {
 playTheGame(humanChoice, playMachine())

 }

 const playMachine = () => {
  const choices = [GAME_OPTTIONS.AZUL, GAME_OPTTIONS.VERMELHO, GAME_OPTTIONS.AMARELO]
  const randonNumber = Math.floor(Math.random() * 3)

  return choices[randonNumber]
 
 }

 const playTheGame = (human, machine) => {

   console.log('Humano: ' + human + " Maquina: " + machine)

   if(human === machine){

    result.innerHTML = "Deu empate!"

   }else if(
    
    (human === GAME_OPTTIONS.AZUL && machine === GAME_OPTTIONS.VERMELHO) ||
    (human === GAME_OPTTIONS.VERMELHO && machine === GAME_OPTTIONS.AMARELO)||
    (human === GAME_OPTTIONS.AMARELO && machine === GAME_OPTTIONS.AZUL) 
){

    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber
    result.innerHTML = "Você ganhou!"
   }else {


    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber
    result.innerHTML = "Você perdeu para a alexa!"
   }

 }
