// app.js  
const express = require('express');  
const bodyParser = require('body-parser');  
const ControleurTache = require('./controleur/controleurTache');  

const app = express();  
const controleur = new ControleurTache();  

// Configuration du moteur de template EJS  
app.set('view engine', 'ejs');  
app.set('views', './views');  
app.use(bodyParser.urlencoded({ extended: false }));  

// Route pour afficher les tâches  
app.get('/', (req, res) => {  
    res.render('index', { taches: controleur.getTaches() });  
});  

// Route pour ajouter une nouvelle tâche  
app.post('/ajouter', (req, res) => {  
    const titre = req.body.titre;  
    controleur.ajouterTache(titre);  
    res.redirect('/');  
});  

// Route pour compléter une tâche  
app.post('/completer/:index', (req, res) => {  
    const index = req.params.index;  
    controleur.completerTache(index);  
    res.redirect('/');  
});  

// Démarrage du serveur  
const PORT = 3000;  
app.listen(PORT, () => {  
    console.log(`Serveur en cours d'exécution à http://localhost:${PORT}`);  
});  