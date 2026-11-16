export function formaterBadge(utilisateur) {
  // TODO: 1. Early return si utilisateur est absent ou sans nom
  // TODO: 2. Extraire ville avec ?. et ?? ('Ville inconnue')
  // TODO: 3. Extraire points avec ?? (0 par défaut)
  // TODO: 4. Retourner `${nom} (${ville}) - ${points} pts`

  if (!utilisateur || !utilisateur.nom ){
    return "Utilisateur anonyme"}
  
    const ville = utilisateur.adresse?.ville ?? `Ville inconnue`;
    const points = utilisateur.points ?? 0;

    return `${utilisateur.nom} (${ville}) - ${points} pts`;
} 

export function comparerStrict(a, b) {
  // TODO: Retourner l'égalité stricte entre a et b
  if (a === b){
    return true;
  }else{
    return false;
  }
}
