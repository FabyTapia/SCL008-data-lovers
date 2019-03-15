
const dataLol= Object.values(window.LOL.data);

const boardCharacters = document.getElementById("board");
document.getElementById("power-type").addEventListener("change", () => {

  let condition = document.getElementById("power-type").value;
  let resultTags=window.filterData(dataLol,condition);
  boardCharacters.innerHTML ="";
  resultTags.forEach(element => {
    boardCharacters.innerHTML+= `<div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
    <div class="card text-white bg-transparent"
      <div class="card-body">
        <h3 class="card-title font-weight-bold ">${element.name}</h3>

        <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
        <h5 class="card-title font-weight-bold">${element.blurb}</h5>
      </div>
    </div>`

  
  });
});

const championsOrder = document.getElementById("orden1");
const containerOrder= document.getElementById("championBox")


championsOrder.addEventListener('change', () => {
  let option = championsOrder.value;
  let ordering = window.sortData(dataLol, 'name', option); 
  containerOrder.innerHTML = '';
   ordering.forEach(element => { 
    containerOrder.innerHTML += `
    <div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
        <div class="card text-white bg-transparent"
          <div class="card-body">
            <h3 class="card-title font-weight-bold ">${element.name}</h3>
    
            <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
            <h5 class="card-title font-weight-bold">${element.blurb}</h5>
          </div>
          </div>
        </div>`
     
  
   });
  });

  const statsBoard = document.getElementById("statsBoard") 
  let statsLOL=document.getElementById("power-type");
  statsLOL.addEventListener("click",() => {
    statsBoard.innerHTML = "";
    let condition =statsLOL.value;
    let resultLOL = window.computeStats(dataLol, condition);
    statsBoard.innerHTML +=`<h3>champions result</h3>
  <p>${resultLOL}</p>`

  });