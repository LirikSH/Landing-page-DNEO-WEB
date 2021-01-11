window.onscroll = scroller;
let scrolling = 0,
  change = document.querySelector('.page-header')

  function.scroller() {
  if(window.pageYOffset > scrolling){
    scrolling = window.pageYOffset;
    change.className = 'absolute';
    else{ change.className = 'fixed';}
  }
}
