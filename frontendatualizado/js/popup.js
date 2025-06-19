document.addEventListener('DOMContentLoaded', function () {
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    const openModalBtn = document.getElementById('openModalBtn');

    const TEN_HOURS = 10 * 60 * 60 * 1000; // 10 horas em ms
    const lastModalTime = localStorage.getItem('lastModalTime');
    const currentTime = Date.now();

    // Aguarda o login estar completo antes de rodar a lógica
    const userIsLoggedIn = localStorage.getItem('token') && localStorage.getItem('matricula');

    if (userIsLoggedIn) {
        if (!lastModalTime || (currentTime - lastModalTime) > TEN_HOURS) {
            eventModal.show();
            localStorage.setItem('lastModalTime', currentTime);
        }
    }

    // Se quiser mostrar modal manualmente via botão (se existir)
    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            eventModal.show();
            localStorage.setItem('lastModalTime', Date.now());
        });
    }
});
