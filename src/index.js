import {pgLd} from './pageLd';
import { createMenu } from './menu';
import { whoWeAre } from './aboutus';
import './style.css';

let test = pgLd();
const removeMiddles = ()=>{
test.location.parentElement.removeChild(test.location);
test.title.parentElement.removeChild(test.title);

}


test.menu.addEventListener('click',(e)=>{
    e.preventDefault();
    removeMiddles()
    createMenu();
});
test.aboutUs.addEventListener('click',(e)=>{
    e.preventDefault();
    whoWeAre();
    
})

export {removeMiddles}