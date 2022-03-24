function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
const createBook = ()=>{

//book field
  const bookField = document.createElement("div");
  
// title
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = "Book an Appointment";
  bookField.appendChild(bookTitle);
  bookField.className = "bookContainer"
//form element

  const bookForm = document.createElement("form");
  bookForm.className = 'bookForm'
  insertAfter(bookForm, bookTitle);

//input elements
  const bookFName = document.createElement("input");
  bookFName.setAttribute("placeholder", "First Name");
  bookForm.appendChild(bookFName);
  const bookLName = document.createElement("input");
  bookLName.setAttribute("placeholder", "Last Name");
  bookForm.appendChild(bookLName);
    //email
    const usremail = document.createElement("input");
    usremail.setAttribute("type", "email");
    usremail.setAttribute("placeholder", "yourName@something.com");
    bookForm.appendChild(usremail);
  
    //submit
    const submitbtn = document.createElement("button");
    submitbtn.textContent = "Submit";
    bookForm.appendChild(submitbtn);
    return {
      bookfield: bookField
    }
  
  }

    export {createBook}