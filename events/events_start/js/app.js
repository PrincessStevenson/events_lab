// We need to know 3 things before we start:
// 1. which element will dispatch the event.
// 2. which event should we listen for.
// 3. what code should I run when the event happens.


document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick)

  const textInput = document.querySelector('#input');
  textInput.addEventListener('input', handleInput);

  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange);


  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);




});


  // const handleFormSubmit = function(event){
  //   event.preventDefault()
  //   console.log(event.target.first_name.value)
    // can get multiple
    // console.log(event.target.first_name.value, event.target.last_name.value)
  // }

  const handleFormSubmit = function(event){
    event.preventDefault()
    const resultParagraph = document.querySelector('#form-result');
    resultParagraph.textContent = `
    Your Name:
    ${this.first_name.value}
    ${this.last_name.value}
    `
  }



const handleSelectChange = function(event) {
  const resultParagraph = document.querySelector('#select-result');
  resultParagraph.textContent = `You chose: ${this.value}`
}

const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'That button has been clicked!';
}

const handleInput = function (event) {
  // Get the value from the input
  // Update the paragraph tag text
  // console.log("input has been typed in:", event.target.value)
  // console.log("input has been typed in:", event)
  const resultParagraph = document.querySelector('#input-result');
  resultParagraph.textContent = `You typed: ${event.target.value}`
}