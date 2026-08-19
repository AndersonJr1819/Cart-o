function switchView(viewId) {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }
}

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
    }, 3000);
}

function flipCard() {
    const cardContainer = document.querySelector('.card-flip-container');
    if (cardContainer) {
        cardContainer.classList.toggle('flipped');
    }
}

function simularUso() {
    showToast('Acesso liberado na catraca! Passagem debitada com sucesso na linha 6071-10.');
}

document.addEventListener('DOMContentLoaded', () => {
    // Evento de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Login efetuado com sucesso!');
            setTimeout(() => {
                switchView('home-view');
                loginForm.reset();
            }, 800);
        });
    }

    // Evento de Cadastro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Cadastro realizado com sucesso! Faça login.');
            setTimeout(() => {
                switchView('login-view');
                registerForm.reset();
            }, 1000);
        });
    }
});