import img1 from "./img1.jpg";
const pgLd = () => {
  //insertAfter function
  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  const main = document.getElementById("main");
  const myImg = new Image();
  myImg.src = img1;
  myImg.classList.add("image1");

  //buttonsContainer
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("btnContainer");
  main.appendChild(buttonsContainer);

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
  // book
  const book = document.createElement("button");
  book.textContent = "Book an Appointment";
  buttonsContainer.appendChild(book);

  const content = document.createElement("div");
  main.appendChild(content);
  content.classList.add("content");
  //--------------------------------------------------------------------------//

  //titleBox
  const titleBox = document.createElement("div");
  content.appendChild(titleBox);
  titleBox.classList.add("titleBox");

  //Title
  const title = document.createElement("h1");
  title.textContent = `This is my Restaurant...`;
  titleBox.appendChild(title);
  title.classList.add("title");

  // Explanation
  const exp = document.createElement("div");
  const textExp = document.createElement("p");
  textExp.textContent =
    "This Restaurant was built by fire and blood. Fire and Blood made This restaurant a very respectable place to have your little gatherings on. This place is only reserved for non pessant people so dont even bother showing up you dirty poors,, aaaghh... just kidding, youre all welcome, but seriouslly no poors, thank you!  ";
  insertAfter(exp, title);
  exp.appendChild(textExp);
  exp.appendChild(myImg);
  exp.classList.add("exp");

  // Locations
  const locationBox = document.createElement("div");
  insertAfter(locationBox, titleBox);
  locationBox.classList.add("locationsBox");
  const locationText = document.createElement("h1");
  locationText.textContent = "Locations";
  locationBox.appendChild(locationText);

  const createLocations = (adress, tel, email) => {
    const firstLocation = document.createElement("ul");
    locationBox.appendChild(firstLocation);
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
  const footer = document.createElement("footer");
  insertAfter(footer, content);
  const footerContent = document.createElement("p");
  footer.appendChild(footerContent);
  footerContent.textContent = `© Abenezer Kitata for the Odin Project`;
  return {
    content: content,
    home: home,
    menu: menu,
    aboutUs: aboutUs,
    btnContainer: buttonsContainer,
    main: main,
    title: titleBox,
    location: locationBox,
    bookAppointment: book,
  };
};
export { pgLd };
