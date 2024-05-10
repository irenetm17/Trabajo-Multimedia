 Branch-alex

let acc=document.getElementsByClassName('accordion-container');
let i;

for(i=0; i<acc.length; i++){
	acc[i].addEventListener("click",function(){
		this.classList.toggle("active");

		let contenido= this.nextElementSibling;
		if(contenido.style.display ==="block"){
			contenido.style.display = "none";
		}else{
			contenido.style.display = "block";
		}
	});
}





let acc=document.getElementsByClassName('accordion-container');
let i;

for(i=0; i<acc.length; i++){
	acc[i].addEventListener("click",function(){
		this.classList.toggle("active");

		let contenido= this.nextElementSibling;
		if(contenido.style.display ==="block"){
			contenido.style.display = "none";
		}else{
			contenido.style.display = "block";
		}
	});
}



 main