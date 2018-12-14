import echarts from 'echarts'

window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'ECharts playing'
        },
        tooltip: {},
        xAxis: {
            data: ['衣服', '褲子', '襪子', '鞋子', '帽子', '妹子']
        },
        yAxis: {},
        series: [{
            name: '銷量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
}

