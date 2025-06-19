document.addEventListener('DOMContentLoaded', function () {
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    const openModalBtn = document.getElementById('openModalBtn');
    const modalFooterBtn = document.getElementById('modalFooterBtn');

    const TEN_HOURS = 10 * 60 * 60 * 1000; // 10 horas em ms
    const lastModalTime = localStorage.getItem('lastModalTime');
    const currentTime = Date.now();

    // Mostrar modal somente se ainda não tiver mostrado nas últimas 10h
    if (!lastModalTime || (currentTime - lastModalTime) > TEN_HOURS) {
        eventModal.show();
        localStorage.setItem('lastModalTime', currentTime);
    }

    // Se quiser mostrar modal manualmente via botão (se existir)
    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            eventModal.show();
            localStorage.setItem('lastModalTime', Date.now());
        });
    }
});
