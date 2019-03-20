
const dataLol= Object.values(window.LOL.data);

const boardCharacters = document.getElementById("board");
document.getElementById("power-type").addEventListener("change", () => {

  let condition = document.getElementById("power-type").value;
  let resultTags=window.filterData(dataLol,condition);
  boardCharacters.innerHTML ="";
  resultTags.forEach(element => {
    boardCharacters.innerHTML += `<div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
    <div class="card text-white bg-transparent"
      <div class="card-body">
        <h3 class="card-title font-weight-bold ">${element.id}</h3>

        <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary bg-transparent" data-toggle="modal" data-target="#exampleModal">
        Description
       </button>
       <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <div class="modal-body">
  <p>${element.blurb}
  </p>

  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  </div>
</div>
</div>
</div>
      </div>
      </div>
    </div>`


  });
});

const championsOrder = document.getElementById("orden1");
const containerOrder= document.getElementById("championBox");


championsOrder.addEventListener('change', () => {
  let option = championsOrder.value;
  let ordering = window.sortData(dataLol, 'name', option);
  containerOrder.innerHTML = '';
   ordering.forEach(element => {
    containerOrder.innerHTML +=

    `<div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
    <div class="card text-white bg-transparent"
      <div class="card-body">
        <h3 class="card-title font-weight-bold ">${element.id}</h3>

        <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary bg-transparent" data-toggle="modal" data-target="#exampleModal">
        Description
       </button>
       <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">${element.name}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <div class="modal-body">
  <p>${element.blurb}
  </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  </div>
</div>
</div>
</div>
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
    statsBoard.innerHTML +=`<h3 class = "subtitleStats" text-center>Champions Result: </h3>
  <p class = "paragraphStats">${resultLOL}</p>`

  });

  /*google charts funcion para futuras mejoras

  let pieData=
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  // Draw the chart and set the chart values
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
    ['Task', '134'],
    ['Mage', 52],
    ['Tank', 40],
    ['Support', 27],
    ['Assassin', 33],
    ['Fighter', 66],
    ['Marksman', 24]
  ]);

    // funcion ggogle.charts
    let options = {'title':'My Average Day', 'width':550, 'height':400};


    let chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
*/
