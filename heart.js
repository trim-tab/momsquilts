function toggleHeart() {
// if clicked value is the same as id
window.onclick = e => {
	var id = e.target.id;
	var heart= document.getElementById(id);
	  heart.classList.add('animate');
   setTimeout(() => {
        heart.classList.toggle('active');
   }, 150);
    
   setTimeout(() => heart.classList.remove('animate'), 300);
		}
}   	

