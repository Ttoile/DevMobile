# DevMobile

Zigmann Bastien
Dutronc Eliott

#Fonctionnalitées implémentées :

	- Listes de todo de base
	- Ajout et suppression de todo
	- Ajout et suppression de listes
	- Connexion avec mail et mot de passe
	- Confirmation de mail necessaire pour se connecter
	- Récupération de mot de passe par mail
	- Partage de listes en lecture (uniquement du visionnage) et écriture (possibilité de cocher des todo, en ajouter/supprimer)
	- Seul le créateur de la liste peut changer les contributors et leurs droits ou supprimer la liste.
	- Cloud messaging implementé mais notifications uniquement fonctionnelles sur la webapp, pas sur le téléphone.

#Problèmes rencontrés :

 	- Configuration.
	- Des problèmes de version de plugins
	- Des problèmes de fichiers générés par l'executions qui n'étaient pas généré correctement
	- npm install qui ne marche pas sur mon pc (Bastien)
	- Difficultés à mettre le site en ligne avec firebase (actuellement en ligne mais sort plein de popup au lancement)
	- Difficultés à build l'application au début (pas mal de configurations locales à faire)
	- Connexion facebook implémentée mais faisait crash le build de l'apk (faute à un mauvais id dans un fichier de config généré), suite à de maintes recherches, on a enlevé cette fonctionnalité

#Fonctionnement du projet :

	- ionic serve pour ouvrir le site.
	- Pour build l'application :
		- Si c'est la première fois, générer une clé de release et son alias :
			- keytool -genkey -v -keystore my-release-key.keystore -alias my_key_alias -keyalg RSA -keysize 2048 -validity 10000
		- Ensuite, executer le script my-build.sh à la racine du projet, de la manière suivante :
			- ./my_build.sh [votre clé de release avec le chemin pour y accéder] [alias de la clé de release]
		 	Ce script va générer l'apk signé et vous ouvrir son dossier dans le gestionnaire de fichiers

#Problème actuel :
	
	- Lors du chargement de l'appli Web, des fenetres de dialogue s'ouvre, il faut toutes les annuler afin d'avoir acces au site. Nous n'avons pas réussi à résoudre ce probleme.
