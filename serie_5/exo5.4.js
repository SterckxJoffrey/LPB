let nombre, resultat;
let i = 1;

nombre = parseInt(prompt('Entrez un nombre : '))

console.log('Table de ' + nombre + ' ;');

while (i <= 10) {
    resultat = nombre * i;

    if (resultat < 10) {
        resultat = ' ' + resultat;
    }
      if (i < 10) {
        i = ' ' + i;
    }

    console.log(nombre + ' x ' + i + ' = ' + resultat);
    
    ++i;

    
    
}
