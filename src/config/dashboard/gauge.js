import util from '../chartFunc'
import common from '../common'
import theme from '../echartsTheme';
let color = theme.color;

function getLegend(data, i = 0) {
    let arr = data.map(item => item[i]);
    return util.arrUnique(arr);
}

let option = function(obj) {

    return {
        title: {
            text: obj.title,
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 25,
                fontWeight: 'lighter'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        series: [{
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            center: ['25%', '50%'], // 默认全局居中
            radius: '50%',
            title: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            data: [{ value: 50, name: '完成率' }]
        }, {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            center: ['50%', '50%'], // 默认全局居中
            radius: '50%',
            title: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            data: [{ value: 50, name: '完成率' }]
        }]
    };
};

export default option