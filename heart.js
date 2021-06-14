var count1 = "1";
var count2 = "2";

// when you click adds 2 counters
function toggleHeart(e) {
		
		var heart = e.target;
		let counter = heart.nextElementSibling;
		var firstCount = document.createTextNode(count1);
		var secondCount = document.createTextNode(count2);
		
	//   adds class with icon swap
		setTimeout(() => {
					heart.classList.toggle('active');
					counter.classList.toggle('active');
					counter.nextElementSibling.classList.toggle('active');

					if(counter.className === "counter" && counter.className !== "counter active"){
						console.log("working");
						
						// console.log(counter.firstChild);
						// counter.removeChild(firstCount);
					
					}
					if(counter.nextElementSibling.className ==="counter2" && counter.nextElementSibling.className !== "counter2 active"){
						counter.nextElementSibling.removeChild(secondCount);
						// count2++;
						console.log("remove2");
						
					}
					console.log(counter.firstChild); 
					if(counter.className == "counter active"){
						counter.appendChild(firstCount);
						console.log(firstCount);	
						
					}

					if(counter.nextElementSibling.className == "counter2 active"){
						counter.nextElementSibling.appendChild(secondCount);
						
					}
				
			}, 150);
			// removes animate class and updates counter
		setTimeout(() => {
			 heart.classList.remove('animate');
				// heart.nextElementSibling.removeChild(firstCount);
				
			// console.log("countONE " + count1);
			// console.log("countTWO " + count2);
			

			}, 300);   	

}

const button = document.querySelector("span");
	button.addEventListener("click", toggleHeart);
// adds animate class when clicked and updates counter
// window.onclick = e => {


// var heart = e.target;
// 	let counter = heart.nextElementSibling;
// 	var t = document.createTextNode(count);
// 	counter.appendChild(t);
// 	count++;
// //   adds class with icon swap
//    setTimeout(() => {
//         heart.classList.toggle('active');
// 				counter.classList.toggle('active');

// 			// heart.removeChild(t);	
				
			
// 		}, 150);
//     // removes animate class and updates counter
//    setTimeout(() => {
// 		//  heart.classList.remove('animate');
// 		 	// update counter
// 		 count--;
// 		}, 300);
// 		}
	
// }   	