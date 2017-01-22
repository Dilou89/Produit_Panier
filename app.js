var Produit = function(nom,prixHT){
	this.nom = nom;
	this.prixHT = 0;
	console.log(Produit);}
  

var baguette = new Produit('Baguette', 0.85); 
var croissant = new Produit('Croissant', 0.80); 
 console.log(croissant);
 console.log(baguette);
 
Panier.prototype = new Produit();
Panier.prototype.constructor = Panier;
function Panier(nom,prixHT,totalHT,totalTTC){
  this.totalHt=totalHt;
  this.totalTTC=totalTTC;
  
 totalHt=function()){
  for (var i = 0; i < prixHT.length; i++)
    prixHT += prixHT[i];
    return(totalHT);
    
  var totalTTC= totalHT*1.0055;
  return(totalTTC);
  
};
}
 

