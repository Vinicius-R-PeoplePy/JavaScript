// Constructor function for Televisao 
function Televisao() {
    // Properties
    this.ligada = false;
    this.canal = 2;
}

// Create an instance of the Televisao constructor
var tv = new Televisao();

//Print the properties of the tv object 
console.log(tv.ligada)
console.log(tv.canal)

// Create another instance of the Televisao constructor 
var tvSala = new Televisao()

// Modify the properties of the tvSala object
tvSala.ligada = true; 
tvSala.canal = 4; 

// Print the properties of both objects 
console.log(tv.canal);
console.log(tvSala.canal);