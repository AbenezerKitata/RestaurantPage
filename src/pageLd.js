const pgLd = () => {
  //insertAfter function
  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  const content = document.getElementById(`content`);
  document.body.appendChild(content);
  content.classList.add('content')
  //buttonsContainer
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add('btnContainer')
  content.appendChild(buttonsContainer);

  // home
  const home = document.createElement("button");
  home.textContent = `Home`;
  buttonsContainer.appendChild(home);

  //Menu
  const menu = document.createElement("button");
  menu.textContent = "Menu";
  buttonsContainer.appendChild(menu);

  // About Us
  const aboutUs = document.createElement("button");
  aboutUs.textContent = "Who We Are";
  buttonsContainer.appendChild(aboutUs);

  //titleBox
  const titleBox = document.createElement("div");
  insertAfter(titleBox, buttonsContainer);

  //Title
  const title = document.createElement("h1");
  title.textContent = `This is my Restaurant...`;
  titleBox.appendChild(title);

  // Explanation
  const exp = document.createElement("p");
  exp.textContent =
    "Zach Ramsbottom looked at the tiny blade in his hands and felt concerned He walked over to the window and reflected on his noisy surroundings. He had always loved picturesque Newton Abbot with its jealous, jittery jungle. It was a place that encouraged his tendency to feel concerned Then he saw something in the distance, or rather someone. It was the figure of Josh Parkes. Josh was a cute ogre with ginger fingers and beautiful eyebrows.Zach gulped. He glanced at his own reflection. He was a proud, bold, brandy drinker with ugly fingers and squat eyebrows. His friends saw him as a kindhearted, keen knight. Once, he had even saved a glamorous injured bird that was stuck in a drain.   But not even a proud person who had once saved a glamorous injured bird that was stuck in a drain, was prepared for what Josh had in store today. ";
  insertAfter(exp, title);

  //book field
  const bookField = document.createElement("div");
  insertAfter(bookField, titleBox);
  // title
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = "Book an Appointment";
  bookField.appendChild(bookTitle);
  //form element

  const bookForm = document.createElement("form");
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
  // Locations
  const locationsContainer = document.createElement("div");
  insertAfter(locationsContainer, bookField);
  const locationText = document.createElement("h1");
  locationText.textContent = "Locations";
  locationsContainer.appendChild(locationText);

  const createLocations = (adress, tel, email) => {
    const firstLocation = document.createElement("ul");
    locationsContainer.appendChild(firstLocation);
    const locAddress = document.createElement("li");
    firstLocation.appendChild(locAddress);
    locAddress.textContent = adress;
    const locTel = document.createElement("li");
    insertAfter(locTel, locAddress);
    locTel.textContent = tel;
    const locEmail = document.createElement("li");
    insertAfter(locEmail, locTel);
    locEmail.textContent = email;
  };
  createLocations("12345 harmon Ave", "888-888-8888", "harmonRest@gmail.com");
  createLocations("7894 rastoma sss", "999-966-3212", "rastoma@gmail.com");
  const footer = document.createElement('footer');
  insertAfter(footer,locationsContainer);
  const footerContent = document.createElement('p');
  footer.appendChild(footerContent);
  footerContent.textContent = `© Abenezer Kitata for the Odin Project`;
  function getContent() {
      return content
  };
  function getHome() {
    return home
}
function getMenu() {
    return menu
}
function getAboutUs() {
    return aboutUs
}
return {getContent, getHome,getMenu, getAboutUs}
};
export { pgLd };
