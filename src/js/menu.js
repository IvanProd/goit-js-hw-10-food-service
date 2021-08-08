import menu from '../menu.json';
import menuСards from "../templates/markUp.hbs";



const menuList = document.querySelector(".js-menu");

const markUp = menuСards(menu);

menuList.insertAdjacentHTML("beforeend", markUp );
