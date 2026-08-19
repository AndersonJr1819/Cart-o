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
    const registerPageForm = document.getElementById('register-page-form');

    registerPageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = registerPageForm.querySelectorAll('input');
        const nome = inputs[0].value;
        const usuario = inputs[1].value;
        const senha = inputs[2].value;

        if (nome && usuario && senha) {
            showToast('Cadastro realizado com sucesso! Suas credenciais foram geradas com segurança. Redirecionando para a tela de acesso...');
            registerPageForm.reset();

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 3000);
        }
    });
});