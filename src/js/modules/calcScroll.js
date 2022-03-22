function calcScroll() {
  const div = document.createElement('div');

  div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibilty:hidden;';
  document.body.append(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

export default calcScroll;