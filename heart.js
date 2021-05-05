function toggleHeart() {
window.onclick = e => {
	var heart = e.target;
	heart.classList.add('animate');
  
//   adds class with icon swap
   setTimeout(() => {
        heart.classList.toggle('active');
   }, 150);
    
   setTimeout(() => heart.classList.remove('animate'), 300);
		}
}   	

