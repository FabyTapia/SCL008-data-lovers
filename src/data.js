

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




