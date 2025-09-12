
// Instalação PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // cria botão dinamicamente
    const btnInstall = document.createElement('button');
    btnInstall.innerText = '📲 Instalar App';
    btnInstall.style.position = 'fixed';
    btnInstall.style.bottom = '20px';
    btnInstall.style.right = '20px';
    btnInstall.style.padding = '10px 20px';
    btnInstall.style.background = '#008040';
    btnInstall.style.color = '#fff';
    btnInstall.style.border = 'none';
    btnInstall.style.borderRadius = '8px';
    btnInstall.style.cursor = 'pointer';

    document.body.appendChild(btnInstall);

    btnInstall.addEventListener('click', async () => {
        btnInstall.remove();
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Instalação: ${outcome}`);
        deferredPrompt = null;
    });
});