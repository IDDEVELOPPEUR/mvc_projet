// modele/Tache.js  
class Tache {  
    constructor(titre) {  
        this.titre = titre;  
        this.terminee = false;  
    }  

    completerTache() {  
        this.terminee = true;  
    }  
}  

module.exports = Tache;  