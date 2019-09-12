//!  Only works on site which has HTTPS enabled.

const shareButton = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');
// const blur = document.querySelector('.bg-blur');

const title = window.document.title;
const url = window.document.location.href;


shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
                title: `${title}`,
                url: `${url}`
            }).then(() => {
                console.log('Thanks for sharing!');
            })
            .catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
        // blur.classList.add('bg-blur');
    }
});


overlay.addEventListener('click', () => {
    overlay.classList.remove('show-share');
    shareModal.classList.remove('show-share');
});