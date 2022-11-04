/*
Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.

Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.

MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
trasformare la stringa foto in una immagine effettiva

BONUS 2:
organizzare i singoli membri in card/schede

*/
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: './assets/img/scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
  ];

  for( let i = 0; i < team.length; i++){
    let elemento = team[i];
    document.getElementById("nome").innerHTML += `
    <div class="card col-3 m-1 g-3 p-3 mb-3 text-center">
        <img src="${elemento.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text">${elemento.role}</p>
        </div>
    </div>`;
}