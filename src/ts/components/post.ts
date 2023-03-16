let editBtns = document.querySelectorAll('.post .header .edit i');

editBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.nextElementSibling?.classList.toggle('active');
    });
})