window.onscroll = scroller;
let scrolling = 0,
  change = document.querySelector('.page-header')

  function scroller() {
  if(window.pageYOffset > scrolling){
    scrolling = window.pageYOffset;
    change.className = 'absolute';
  }else{ change.className = 'fixed';
  }
}

/*
let scrolling = 0,
  change = document.querySelector('.page-header')
const neonBlock = document.querySelector('.neonBlock')

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY;
  let neonBlockCenter = neonBlock.offsetHeight / 2;

    if ( scrollTop >= neonBlockCenter) {
      change.classList.add ('absolute');
      neonBlock.style.marginTop = '${change.offsetHeight}px';
    } else {
      change.className = 'fixed';
      neonBlock.style.marginTop = '0px';
    }
}
)
