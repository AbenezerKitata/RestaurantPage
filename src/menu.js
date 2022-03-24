const createMenu = () => {
  const menuVar = document.createElement("div");
  menuVar.classList.add("menuContainer");
  const div = document.createElement("div");
  div.classList.add("menu");
  div.classList.add("menuContainer2");
  menuVar.appendChild(div);

  const createMenuItems = (name, description, price, cal) => {
    const container = document.createElement("div");
    container.className = "menuItm";
    div.appendChild(container);

    const names = document.createElement("span");
    container.appendChild(names);
    names.textContent = name;
    const calories = document.createElement("span");
    container.appendChild(calories);
    calories.textContent = cal;

    const describe = document.createElement("p");
    container.appendChild(describe);
    describe.textContent = description;

    const prices = document.createElement("span");
    container.appendChild(prices);
    prices.textContent = price;
  };

  createMenuItems(
    "MicBag",
    "Mouthwatering perfection starts with two 100% pure beef patties and MicBag sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese for a 100% beef burger with a taste like no other.",
    "$8.99",
    "550 Cal"
  );
  createMenuItems(
    "DcMubble",
    "A slice of cheese! It’s topped with tangy pickles, chopped onions, ketchup, mustard and a melty slice of American chees",
    "2.99",
    "400Cal"
  );
  createMenuItems(
    "Double CheeseBurger",
    "features two 100% pure beef burger patties seasoned with just a pinch of salt and pepper. Its topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese. ",
    "$3.45",
    "450 Cal"
  );
  const getMenu = () => {
    return menuVar;
  };
  return {
    menu: getMenu(),
  };
};
export { createMenu };
