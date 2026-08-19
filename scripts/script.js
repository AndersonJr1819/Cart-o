function showToast(message) {
    let toast = document.querySelector('.toast-message');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-message';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function flipCard() {
    const cardContainer = document.querySelector('.card-flip-container');
    cardContainer.classList.toggle('flipped');
}

function logout() {
    window.location.href = '../index.html';
}

function simularUso() {
    showToast('Acesso liberado na catraca! Passagem de estudante debitada com sucesso na linha 809L-10.');
}