var myChart = echarts.init(document.getElementById("echart"), "light", {
  renderer: "canvas"
});
myChart.showLoading();
fetch("option", { method: "get" })
  .then(function(response) {
    return response.json();
  })
  .then(function(j) {
    myChart.hideLoading();
    myChart.setOption(j);
  });
