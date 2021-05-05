
function toggleHeart() {
window.onclick = e => {
	var heart = e.target;
	  heart.classList.add('animate');
   setTimeout(() => {
        heart.classList.toggle('active');
   }, 150);
    
   setTimeout(() => heart.classList.remove('animate'), 300);
		}
}   	

