const pgLd = ()=>{
    const content = document.getElementById(`content`);
    document.body.appendChild(content)
    //buttonsContainer
    const buttonsContainer = document.createElement('div');
    content.appendChild(buttonsContainer)
    // home
    const home =document.createElement('button');
    home.textContent = `Home`;
    buttonsContainer.appendChild(home)
    //contactUs
    const contactUs = document.createElement(`button`);
    contactUs.textContent = 'Contact Us';
    buttonsContainer.appendChild(contactUs)

    // About Us
    const aboutUs = document.createElement('button');
    aboutUs.textContent = 'About Us';
    buttonsContainer.appendChild(aboutUs);

    //Menu
    const menu = document.createElement('button');
    aboutUs.textContent = 'Menu';
    buttonsContainer.appendChild(menu);

}
export {pgLd}