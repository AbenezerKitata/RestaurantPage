import { pgLd } from "./pageLd";
import { createMenu } from "./menu";
import { whoWeAre } from "./aboutus";
import { createBook } from "./book";
import "./style.css";


//helper
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

//-----------

let test = pgLd();
const removeNextContent = (node) => {
    if (document.body.contains(node.nextSibling)) {
        
        node.nextSibling.parentNode.removeChild(node.nextSibling);
    }
};
let bringMenu = createMenu();
let bringAboutUs = whoWeAre();
let bringBook = createBook();

function insertFn(item, item2) {
  item.addEventListener("click", (e) => {
    removeNextContent(test.btnContainer);
    insertAfter(item2, test.btnContainer);  
    e.preventDefault();     
  });
}

insertFn(test.menu, bringMenu.menu);
insertFn(test.aboutUs, bringAboutUs.about);
insertFn(test.bookAppointment, bringBook.bookfield);
insertFn(test.home, test.content)
test.home.addEventListener("click", (e) => {
  e.preventDefault();
  console.log();
});
