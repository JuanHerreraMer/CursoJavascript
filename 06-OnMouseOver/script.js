const listImg = document.querySelectorAll('.thum li');

listImg.forEach((item) => {
    item.onmouseover = () => {
        document.querySelector('.imgBox img').src = item.firstElementChild.getAttribute('src')
    }
})
