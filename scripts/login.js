function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
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

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usuarioInput = loginForm.querySelector('input[type="text"]').value;
        const senhaInput = loginForm.querySelector('input[type="password"]').value;

        if (usuarioInput && senhaInput) {
            showToast('Boas-vindas de volta! Redirecionando para o painel...');
            
            setTimeout(() => {
                window.location.href = '../pages/home.html';
            }, 2000);
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = registerForm.querySelectorAll('input');
        const nome = inputs[0].value;
        const usuario = inputs[1].value;
        const senha = inputs[2].value;

        if (nome && usuario && senha) {
            showToast('Cadastro realizado com sucesso! Agora você já pode entrar na sua conta.');
            toggleForm();
            registerForm.reset();
        }
    });
});