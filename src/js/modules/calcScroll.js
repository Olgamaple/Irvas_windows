function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  // div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibilty:hidden;';
  document.body.appendChild(div);

  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

export default calcScroll;