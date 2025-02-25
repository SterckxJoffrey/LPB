console.log("geg,elk");


let age, accident, permis, anciennete, Tarif;
let bleu, vert, orange , rouge

bleu = 1
vert = 2
orange = 2
rouge = 3



    if ((age < 35) && (permis < 2) && (accident = 0)) {
        Tarif = rouge;
        
        
    } 
     else  if ((age < 35) && (permis > 2) && (accident = 0)) {
             Tarif = orange;
        
        } else if ((age > 35) && (permis < 2) && (accident = 0)) {
            console.log("Tarif : " + orange);
            
        } else if ((age > 35) && (permis < 2) && (accident = 1)) {
            console.log("Tarif : " + rouge);
            
        } else if ((age < 35) && (permis > 2) && (accident = 1)) {
            console.log("Tarif : " + rouge);
            
        } 
         else if ((age > 35) && (permis > 2) && (accident = 0)) {
            console.log("Tarif : " + vert);
            
        } else if ((age > 35) && (permis > 2) && (accident = 1)) {
            console.log("Tarif : " + orange);
            
        } else if ((age > 35) && (permis > 2) && (accident = 2)) {
            console.log("Tarif : " + rouge);
            
        } else  {
            console.log("On ne peut pas vous assurer");
            
        }
    
if (anciennete > 1) {
    
    
}

