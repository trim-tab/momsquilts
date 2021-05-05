function toggleHeart() {
// if clicked value is the same as id
window.onclick = e => {
	var id = e.target.id;

	console.log(id);
	var heart= document.getElementById(id);

	heart.classList.toggle("fa-heart");	
	heart.classList.toggle("fa-heart-o")
		}
}

