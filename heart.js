var count = 4;
function toggleHeart() {

// adds animate class when clicked and updates counter
window.onclick = e => {
	var heart = e.target;
	var test = document.getElementById("1");
	var x = document.createElement("SPAN");
	var t = document.createTextNode(count);
	test.appendChild(x);
	x.appendChild(t);
	
	x.classList.add('what');
	x.classList.add('up');
	count++;
  let counter = heart.nextElementSibling;
	
	
	document.body.appendChild(x);
	
//   adds class with icon swap
   setTimeout(() => {
        heart.classList.toggle('active');
				counter.classList.toggle('active');

				var t = document.createTextNode(count);
				heart.removeChild(t);	
				
			
		}, 150);
    // removes animate class and updates counter
   setTimeout(() => {
		//  heart.classList.remove('animate');
		 	// update counter
		 count--;
		}, 300);
		}
	
}   	




	
