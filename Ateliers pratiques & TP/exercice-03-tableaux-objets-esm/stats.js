export function promouvoirUtilisateur(utilisateur, nouveauRole) {
  // TODO: Retourner un nouvel objet avec ...utilisateur et role mis à jour

  const maj = { ...utilisateur, role : nouveauRole};
    return maj;
}

export function calculerTotalTTC(commandes, tva = 0.2) {
  // TODO: Chaîner .filter(), .map() et .reduce()

  const totalTTC = commandes
  .filter((c)=> c.payee)
  .map((c) => c.ht * 1.2)
  .reduce((somme, ttc) => somme + ttc, 0); //flou 

  return totalTTC;
}

export function trouverCommande(commandes, id) {
  // TODO: Utiliser .find() et retourner null si non trouvé

  let trouve = commandes.find((u) => u.id === id) ?? null; //agregé
    return trouve;
}
