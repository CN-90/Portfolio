let scrollDiv = document.getElementById('scrollproject');
let body = document.body;

window.addEventListener('wheel', (e) => {
  if (e.deltaY < 0) {
    console.log('scrolling up');
    scrollDiv.scrollTop -= 75;
  }
  if (e.deltaY > 0) {
    console.log('scrolling down');
    scrollDiv.scrollTop += 75;
  }
})
  