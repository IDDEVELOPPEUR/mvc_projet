// controleur/controleurTache.js  
const Tache = require('../models/Tache');  

class ControleurTache {  
    constructor() {  
        this.taches = [];  
    }  

    ajouterTache(titre) {  
        const tache = new Tache(titre);  
        this.taches.push(tache);  
    }  

    completerTache(index) {  
        if (index >= 0 && index < this.taches.length) {  
            this.taches[index].completerTache();  
        }  
    }  

    getTaches() {  
        return this.taches;  
    }  
}  

module.exports = ControleurTache;  