import echarts from 'echarts'

window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));
    let optionBarChart = {
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
    }

    let optionPieChart = {
        backgroundColor: '#2c343c',
        itemStyle: {
            emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
        },
        labelLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        itemStyle: {
            // 设置扇形的颜色
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        visualMap: {
            // 不显示 visualMap 组件，只用于明暗度的映射
            show: false,
            // 映射的最小值为 80
            min: 80,
            // 映射的最大值为 600
            max: 600,
            inRange: {
                // 明暗度的范围是 0 到 1
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                roseType: 'angle',
                radius: '55%',
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    }
    // 绘制图表
    myChart.setOption(optionPieChart);
}

