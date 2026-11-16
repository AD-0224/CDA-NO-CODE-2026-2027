// TODO: Implémenter en fonction fléchée avec tva = 0.2 par défaut

export const calculerTTC = (ht, tva = 0.2) => (Number((ht * (1 + tva)).toFixed(2)));


export function filtrerMotsLongs(mots, minLongueur = 4) {
  // TODO: Parcourir mots avec for...of et garder ceux de longueur >= minLongueur
  let tab =[];

  for (const word of mots){
    if(word.length >= minLongueur){
      tab.push(word);
    }
  }
  return tab;
}


export function creerCompteur(depart = 0) {
  // TODO: Utiliser une closure pour encapsuler l'état du compteur

   let valeur = depart;
   return{
    incrementer (){ 
      valeur = valeur + 1;
      return valeur;
    }, // j'ai encore d'autres  

    lire(){
      return valeur;
      }
  }
}


