
function getColor(score){
    if(score>=90){
        return 'rgb(126,207,81)';
    }else if(score>=80){
        return '#1c8bea';
    }else if(score>=70){
        return '#ddb926';
    }
    return '#ea3c3e';
}
let option = (score) => {
    let print = score.print / 100;
    let paper = score.paper / 100;
    let  radius = '70%';
    let color1 = getColor(score.print),color2 = getColor(score.paper);
    return {
        title: [{
            textStyle: {
                color: '#fff',
                fontSize: 30,
                fontWeight: 'lighter' //100
            },
            text: '质量实时监控预警',
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
                    shadowBlur: 20,
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
                    shadowBlur: 20,
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