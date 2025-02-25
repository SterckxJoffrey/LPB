console.log("Hello world");

let nombre;
let min, max;
min = 1;
max = 3; 

nombre = prompt('Entrez un nombre entre ' + min +  ' et ' + max);

while (nombre < min || nombre > max) {
    console.error('Erreur');
    nombre = prompt('Entrez un nombre entre ' + min +  ' et ' + max);
    
}
console.log('Valide');

