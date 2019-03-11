  /*window.onload = () => {*/
const data2= Object.values(window.LOL.data);

const boardCharacters = document.getElementById("board");
document.getElementById("power-type").addEventListener("change", () => {
  
  let condition = document.getElementById("power-type").value;
  let resultTags=window.filterData(data2,condition);
  boardCharacters.innerHTML ="";
  resultTags.forEach(element => {
<<<<<<< Updated upstream
    boardCharacters.innerHTML+= `<div class="col-sm-12	col-md-4 col-lg-4	col-xl-4">
    <div class="card text-white bg-transparent">
      <div class="card-body ">
        <h5 class="card-title font-weight-bold">${element.name}</h5>
        <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
        <h5 class="card-title font-weight-bold">${element.blurb}</h5>
      </div>
    </div>`
  
=======
    boardCharacters.innerHTML+= `<div class="card-deck">
    <div class="card">
      <img class="card-img-top" src="${element.splash}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.blurb}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">
        LOL Champions</small>
      </div>
    </div>
    <div class="card">
    <img class="card-img-top" src="${element.splash}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.blurb}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">LOL Champions</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="${element.splash}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.blurb}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">LOL Champions</small>
    </div>
  </div>
</div>`

>>>>>>> Stashed changes
  });
});

const championsOrder = document.getElementById("orden1");
const containerOrder= document.getElementById("championBox") 


championsOrder.addEventListener('change', () => {
  let option = championsOrder.value;
  let ordering = window.sortData(data2, 'name', option); 
  containerOrder.innerHTML = '';
   ordering.forEach(element => { 
    containerOrder.innerHTML += `<div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
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