// console.log('app loaded',window);
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1')
    title.textContent = "Javascript says hello E50"
    // const welcomeParagraph = document.querySelector('#welcome-paragraph')
    // console.dir(welcomeParagraph);
    const redlistElement = document.querySelector('li.red')
    redlistElement.textContent = 'RED'
    redlistElement.classList.add('bold')
    console.dir(redlistElement);
    // const allRedElements = document.querySelectorAll('li')
    // console.dir(allRedElements);
    const newListItem = document.createElement('li')
    newListItem.textContent = "Hotpink"
    newListItem.classList.add('hotpink')
    const list = document.querySelector('ul')
    list.appendChild(newListItem)
})