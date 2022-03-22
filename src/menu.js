const createMenu = () => {
    let imgs = []
  for (let i = 0; i < 10; i++) {
      imgs.push(document.createElement('img'))
  }
  imgs[0].setAttribute('src') = '../dist/burger.jpg';
  const imgcontainer = document.createElement('div');
  document.body.appendChild(imgcontainer);
  imgcontainer.appendChild(imgs[0])
};
