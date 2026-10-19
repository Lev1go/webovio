
    const modal = document.getElementById('myModal');
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', () => modal.showModal());

    closeBtn.addEventListener('click', () => modal.close());