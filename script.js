// Code à copier pour Json, gestion des erreurs
fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json")   //J'appel mon fichier json qui est sur une autre page
    .then(response =>{
        if (!response.ok) {
            throw new Error ("Failed to load JSON data")
        } 
        return response.json()
            
        
    })
    .then(data =>{ //ici on met notre code que l'on veut appliquer sur notre fichier json
       
        //J'appel tous mes id 
        let header = document.getElementById("header");
        let nav = document.getElementById ("nav");
        let nomentreprise = document.getElementById ("nomentreprise");
        let activite = document.getElementById("activite");
        let temoignage = document.getElementById("temoignage");
        let réserver = document.getElementById("réserver");
        let sectionhead = document.getElementById("sectionhead");
        let sectionactivite = document.getElementById ("sectionactivite");
        let sectiontemoignage = document.getElementById ("sectiontemoignage")


for (let key in data) {

    let keys = Object.keys(data);
    console.log(keys);
    
    //Header
    nomentreprise.textContent = data.nomCommercial;
    nomentreprise.className = "entreprise"
    activite.textContent = "Activités";
    temoignage.textContent = "Témoignages";

    let butonresa = document.createElement ("button");      
    butonresa.textContent = data.texteAppelAction;        
    réserver.appendChild (butonresa);

    let accroche = document.createElement ("h1")
    accroche.textContent = data.phraseAccroche;
    sectionhead.appendChild(accroche);


    let phrasesclientsWrapper = document.createElement("div");
    sectionhead.appendChild(phrasesclientsWrapper);
    data.avantagesClients.forEach(element => {
        let phrasesclients = document.createElement("p");
        phrasesclients.textContent = element;
        phrasesclientsWrapper.appendChild(phrasesclients);
    });

    //mes h2
    let titreactivite = document.createElement ("h2");
    titreactivite.className = "hdeux"
    titreactivite.textContent = keys[4];
    sectionactivite.appendChild(titreactivite);

    let titretemoignage = document.createElement ("h2");
    titretemoignage.className = "hdeux"
    titretemoignage.textContent = keys[5];
    sectiontemoignage.appendChild(titretemoignage);


    //Section activité
    let index = 0;
    let indeximg =0;
    let cardsWrapper = document.createElement("div");
    cardsWrapper.className = "cardsWrapper"
    sectionactivite.appendChild(cardsWrapper);
    data.activites.forEach(element => {
        index++;
        let divactivite = document.createElement("div");
        divactivite.className="card-activite";
        divactivite.id="carte"+index;
        cardsWrapper.appendChild(divactivite);

        indeximg++
        let image = document.createElement("img");
        image.className = "image";
        image.id="imgindex"+index;
        image.src = element["image-url"];
        divactivite.appendChild(image);

        

        let divcontentactivite = document.createElement("div");
        divcontentactivite.className = "activitecontent"
        divactivite.appendChild(divcontentactivite);

        let nomactivite = document.createElement("h3");
        nomactivite.textContent = element.nom;
        divcontentactivite.appendChild(nomactivite);

        let descriptionactivite = document.createElement("p");
        descriptionactivite.textContent = element.description;
        divcontentactivite.appendChild(descriptionactivite);

    });

    // section témoignages

    let temoignageWrapper = document.createElement("div");
    temoignageWrapper.className = "temoignageWrapper"
    sectiontemoignage.appendChild(temoignageWrapper);

 


    let indexdeux = 0
    let indextrois = 0
    data.temoignages.forEach(element => {
        indexdeux++;
        indextrois++;
        let divtemoignage = document.createElement("div");
        divtemoignage.className="cardTemoignage";
        divtemoignage.id="cartedeux"+indexdeux;
        temoignageWrapper.appendChild(divtemoignage)

        let prenomNote = document.createElement("div");
        prenomNote.className = "prenomNote"
        prenomNote.id="prenomNoteIndex"+indextrois;
        divtemoignage.appendChild(prenomNote);

        let prenomtemoin = document.createElement("h3");
        prenomtemoin.textContent = element.prenom;
        prenomNote.appendChild(prenomtemoin);

        let notetemoin = document.createElement("h4");
        notetemoin.id="note";
        notetemoin.textContent = element.note;
        prenomNote.appendChild(notetemoin);

        let temoinactivite = document.createElement("h5");
        temoinactivite.textContent = element.typeExperience;
        divtemoignage.appendChild(temoinactivite);

        let descriptiontemoin = document.createElement("p");
        descriptiontemoin.textContent = element.commentaire;
        divtemoignage.appendChild(descriptiontemoin);

    });




    data.projects.forEach(element => {
        let div = document.createElement("div");
        div.className="project-card";
        section.appendChild(div);

        let image = document.createElement("img");
        image.src = element.imageURL;
        div.appendChild(image);

        let divdeux = document.createElement("div");
        divdeux.className = "content";
        div.appendChild(divdeux);

        let titre = document.createElement("h2");
        divdeux.appendChild(titre);
        titre.textContent = data.projects.name;

        let paragraphe = document.createElement("p");
        divdeux.appendChild(paragraphe);
        paragraphe.textContent = element.description;

        let lien = document.createElement("a");
        divdeux.appendChild(lien);
        lien.href = element.githubLink;
        lien.textContent = "cliquez-moi";


    });
   
}
    })
    .catch(error => console.error("Error: ", error ));