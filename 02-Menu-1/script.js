const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

const list = document.querySelectorAll('.list')
const activarLink = () => {
    list.forEach((item) => 
        item.classList.remove('active')
    )
    event.currentTarget.classList.add('active')
}

list.forEach((item) => 
    item.addEventListener('click', activarLink)
)
