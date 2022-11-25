
const getData = async () => {
  let response = await fetch(`http://localhost:3001/thanhtoan`);
  let data = await response.json();
  return data;
}
const items = [];

getData().then(data => {
  console.log('>>>>>>Check data:', data);
  data.map((item) => {
    console.log('item:', item.thanh_tien);
    items.push(item.thanh_tien);
  })
})
console.log('items nè:', items);


var xValues = [items.map((it)=> it._id)];
var yValues = [items.map((it)=>it.thanh_tien)];
var barColors = ["red", "green","blue","orange","brown"];
new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});