function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    animateComputerChoice(playerChoice, computerChoice, choices);

    // Adicione um pequeno atraso antes de exibir o resultado
    setTimeout(() => {
        const result = getResult(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, result);
    }, 3000); // 3000 milissegundos (3 segundos) de atraso
}

function animateComputerChoice(playerChoice, computerChoice, choices) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.innerHTML = 'Escolhendo...';

    const computerChoiceOptions = ['<i class="fas fa-hand-rock"></i>', '<i class="fas fa-hand-paper"></i>', '<i class="fas fa-hand-scissors"></i>'];
    let count = 0;

    const animationInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * computerChoiceOptions.length);
        resultMessage.innerHTML = computerChoiceOptions[randomIndex];
        count++;

        if (count === 10) {
            clearInterval(animationInterval);
            const finalComputerChoiceIcon = computerChoiceOptions[choices.indexOf(computerChoice)];
            resultMessage.innerHTML = `${finalComputerChoiceIcon}<br>${getResultText(playerChoice, computerChoice)}`;
        }
    }, 100); // 100 milissegundos por iteração
}

function getResultText(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Empate!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'Você ganhou!';
    } else {
        return 'Você perdeu!';
    }
}

function displayResult(playerChoice, computerChoice, result) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.innerHTML = `Você escolheu ${playerChoice}. O computador escolheu ${computerChoice}. ${result}`;
}
