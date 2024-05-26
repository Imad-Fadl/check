# checkout
Structure du Projet
•	index.html : Le fichier HTML principal contenant la structure de la page web.
•	style.css : Le fichier CSS pour le style de la page web.
•	script.js : Le fichier JavaScript pour ajouter des fonctionnalités interactives.
Structure HTML
Le fichier HTML est structuré comme suit :
Doctype HTML5
•	Video : Une vidéo de fond (`coffee.mp4`) avec les attributs `autoplay`, `muted`, et `loop`
•	Container : Un conteneur principal avec la classe `container`.
•	Form : Un formulaire avec l'ID `checkoutForm`
    - Deux colonnes (`div` avec la classe `col`) pour les sections "billing address" et "payment"
    - Différents champs de saisie pour l'adresse de facturation et les détails de paiement
    - Un bouton "proceed to checkout" pour soumettre le formulaire
•	Validation  : Un élément `<div>` avec la classe `validation-message` et l'ID `validationMessage` pour afficher un message de validation de commande 
CSS et Style
Le fichier CSS (prd.css) est lié dans la section <head> et gère le style de la page web, y compris la mise en page, les couleurs, la typographie et la réactivité.
Fonctionnalité JavaScript
Le fichier JavaScript (script.js) inclut les fonctionnalités suivantes :
•	Écouteur d'événement :
Il utilise addEventListener pour détecter l'événement de soumission du formulaire (submit).
•	Empêcher la soumission du formulaire par défaut :
event.preventDefault() est utilisé pour empêcher le comportement par défaut du navigateur qui est de soumettre le formulaire.
•	Validation du formulaire :
Il vérifie si le formulaire est valide en utilisant la méthode checkValidity() sur l'élément du formulaire.
Si le formulaire est valide :
Masque le formulaire en changeant son style display à 'none'.
Affiche le message de validation en changeant le style de l'élément avec l'ID validationMessage à 'block'.
Sinon :
Affiche les messages de validation natifs en utilisant la méthode reportValidity() sur l'élément du formulaire.
Cette fonctionnalité garantit que le formulaire n'est soumis que s'il est valide, et affiche un message de validation approprié sinon.
