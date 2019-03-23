main ();

function main(){
	
	//create and arrange elements
	createAndArrangeElements();
	}

function createAndArrangeElements(){
	
	var kotak = document.createElement("textarea");
	kotak.id = arguments[0];
	kotak.style.width = "400px"
	kotak.style.height = "50px";
	kotak.value = "Hello, Muhammad Malik Musthofa yang ber-NIM 10215045"
	
	document.body.append(kotak);
}
