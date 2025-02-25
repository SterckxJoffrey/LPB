let nombre;
let min, max;
min = 10;
max = 20;

nombre = prompt('Entrez un nombre entre ' + min +  ' et ' + max);


while (nombre < min || nombre > max) {
    if (nombre < min) {
        nombre = prompt('Plus grand');

    } else {
        nombre = prompt('Plus petit');

    }
    
}
console.log('Valide');
