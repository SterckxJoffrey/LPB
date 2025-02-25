let nombre;
let i = 0;

// i = i++ = 0 car prend 0 plus 1 mais affiche le i avant l'incrémentation
// i = ++i = 2 car 1 de i plue 1 car l'incrémente direct

// perseInt (permet de transformer une string en int)
nombre = parseInt(prompt('Entrez un nombre : ' ));
//console.log(typeof nombre);


while (i <= 10) {
    console.log(nombre + i); 
    i++;
}
