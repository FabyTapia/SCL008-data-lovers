

const filterData = (dataLol,condition) => {
  let resultTags = dataLol.filter(element =>{
    return (element).tags.includes(condition)=== true;
  });
  return resultTags;
 }

 window.filterData=filterData;

const sortData =(dataLol, sortBy, sortOrder)=>{
let orderChampions = dataLol.sort((a,b)=> {
  return a [sortBy].localeCompare(b[sortBy]);
});
if (sortOrder==="ordenarZa"){
orderChampions.reverse();
}
return orderChampions
};


window.sortData=sortData;


  const computeStats = (dataLol,condition) => {
    let counter=0;
    for (let i = 0; i < dataLol.length; i++) {
        if (element.tags.includes("tags")){
          console.log("tags")
            counter=counter+1;
        }
    };
    return Math.round((counter/134)*100) +"%";
};
window.computeStats = computeStats;



/*datos para consola
undefined
const dataLol = Object.values(LOL.data)
undefined
computeStats(dataLol)
"39%"
computeStats(dataLol)
"39%"
*/
