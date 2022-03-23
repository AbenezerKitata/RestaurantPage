const createMenu = () => {
  const menu = document.createElement("div");
  document.body.appendChild(menu);
  menu.classList.add("menuContainer");
  const div = document.createElement('div');
  menu.appendChild(div);

  const createMenuItems = (name, description, price, cal) => {
    const calories = document.createElement('span');
    div.appendChild(calories);
    calories.textContent = cal;

    const names = document.createElement('span');
    div.appendChild(names);
    names.textContent = name;

    const describe = document.createElement('p');
    div.appendChild(describe);
    describe.textContent = description;

    const prices = document.createElement('span');
    div.appendChild(prices);
    prices.textContent = price;

  };

createMenuItems('MicBag','Mouthwatering perfection starts with two 100% pure beef patties and MicBag sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other.','$8.99', '550 Cal')
createMenuItems('DcMubble', 'A slice of cheese! It’s topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American chees','2.99', '400Cal');
createMenuItems('Double CheeseBurger', 'features two 100% pure beef burger patties seasoned with just a pinch of salt and pepper. Its topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese. ','$3.45', '450 Cal')

};
export { createMenu };
