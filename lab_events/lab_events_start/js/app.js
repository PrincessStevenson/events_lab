document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('#new-item-form', '#form-item');
  form.addEventListener('submit', handleFormSubmit);





});



const handleFormSubmit = function (event) {
  event.preventDefault()
  // console.log(event.target.title.value);

  const theForm = document.querySelector('#new-item-form');

  const newListItem = document.createElement('li');
  newListItem.textContent = `
  
  Book Title: ${this.title.value}
  Author: ${this.author.value}
  Category: ${this.category.value}`;

  const resultList = document.querySelector('#reading-list');
  resultList.appendChild(newListItem);
  theForm.reset();



  // const resultParagraph = document.querySelector('#new-item-form');
  // resultParagraph.textContent = `You typed: ${this.title.value}, ${this.author.value}, ${this.category.value}`


}




// const resultList = document.querySelector('#reading-list');
//   resultList.appendChild(newListItem);
//   theForm.reset();