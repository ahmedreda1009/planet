export { }

// tags list in navbar.
const tagIcon = document.querySelector('.icons .tags') as HTMLElement;
const tagsList = document.querySelector('ul.tags-list') as HTMLUListElement;
const tagsListItems = document.querySelectorAll('ul.tags-list li') as NodeList;

tagIcon.addEventListener('click', () => {
    tagsList.classList.toggle('active');
});

window.addEventListener('click', (e: Event) => {
    const tagIc = (e.target as HTMLDivElement)?.closest('.icons .tags');
    if (!tagIc) {
        tagsList.classList.remove('active');
    }

    if (tagsList.classList.contains('active')) {
        for (let i = 0; i < tagsListItems.length; i++) {
            const reversedIdx = tagsListItems.length - i;
            (tagsListItems[i] as HTMLElement).style.transform = `translateY(${(reversedIdx + 1) * -45}px)`;
        }
    } else {
        for (let i = 0; i < tagsListItems.length; i++) {
            (tagsListItems[i] as HTMLElement).style.transform = `translateY(0px)`;
        }
    }
});
tagsListItems.forEach(ele => {
    ele.addEventListener('click', () => {
        console.log(ele)
    })
});