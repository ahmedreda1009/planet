export { }

// tags list in navbar.
const tagIcon = document.querySelector('.icons .tags') as HTMLElement;
const tagsList = document.querySelector('ul.tags-list') as HTMLUListElement;
const tagsListItems = document.querySelectorAll('ul.tags-list li') as NodeList;

tagIcon.addEventListener('click', () => {
    tagsList.classList.toggle('active');
});

// handle tags list when click on tags icon.
window.addEventListener('click', (e: Event) => {
    const tagIc = (e.target as HTMLDivElement)?.closest('.icons .tags');
    if (!tagIc) {
        tagsList.classList.remove('active');
    }

    if (tagsList.classList.contains('active')) {
        for (let i = 0; i < tagsListItems.length; i++) {
            const reversedIdx = tagsListItems.length - i;
            (tagsListItems[i] as HTMLElement).style.transform = `translateY(${(reversedIdx + 1) * -45}px)`;
            (tagsListItems[i] as HTMLElement).dataset.tagid = `${i + 1}`;
        }
    } else {
        for (let i = 0; i < tagsListItems.length; i++) {
            (tagsListItems[i] as HTMLElement).style.transform = `translateY(0px)`;
        }
    }
});

// handle when click connect icon.
// let connectIcon = document.querySelector('.icons .connect-btn') as HTMLDivElement;
let floatingConnectBox = document.querySelector('.floating-connect-box');
window.addEventListener('click', (e: Event) => {
    const connectBox = (e.target as HTMLDivElement)?.closest('.connect');
    const connectIc = (e.target as HTMLDivElement)?.closest('.icons .connect-btn');

    if (!connectIc && !connectBox) floatingConnectBox?.classList.add('hide');

    if (connectIc) {
        floatingConnectBox?.classList.toggle('hide');
    }
});