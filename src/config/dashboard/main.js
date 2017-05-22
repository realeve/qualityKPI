let color1 = '#ea3c3e',
    color2 = '#1c8bea',
    radius = '70%';
let option = (score) => {
    let print = score.print / 100;
    let paper = score.paper / 100;
    return {
        title: [{
            textStyle: {
                color: '#fff',
                fontSize: 40,
                fontWeight: 'lighter' //100
            },
            text: '质量管理面板',
            left: 'center'
        // }, {
        //     text: '1.综合得分 ',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 20,
        //         fontWeight: 'lighter'
        //     },
        //     x: '10%',
        //     y: '15%'
        }],
        series: [{
            type: 'liquidFill',
            animation: true,
            waveAnimation: true,
            data: [print],
            color: [color1],
            center: ['25%', '60%'],
            waveLength: '80%',
            amplitude: 8,
            radius,
            label: {
                normal: {
                    formatter: function(val) {
                        return '印刷工序\n\n' + val.value * 100 + '分';
                    },
                    textStyle: {
                        fontSize: 22,
                        color: color1
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: color1,
                    borderWidth: 5,
                    shadowBlur: 10,
                    shadowColor: '#fff'
                },
                borderDistance: 0
            },
            itemStyle: {
                normal: {
                    backgroundColor: '#fff'
                }
            }
        }, {
            animation: true,
            waveAnimation: true,
            type: 'liquidFill',
            data: [paper],
            color: [color2],
            center: ['75%', '60%'],
            radius,
            amplitude: 8,
            label: {
                normal: {
                    formatter: function(val) {
                        return '纸张工序\n\n' + val.value * 100 + '分';
                    },
                    textStyle: {
                        fontSize: 22,
                        color: color2
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: color2,
                    borderWidth: 5,
                    shadowBlur: 10,
                    shadowColor: '#fff'
                },
                borderDistance: 0
            },
            itemStyle: {
                normal: {
                    backgroundColor: '#fff'
                }
            }
        }]
    };
};


export default {
    option
}