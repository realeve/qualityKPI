import util from '../chartFunc'
import common from '../common'
import theme from '../echartsTheme';
let color = theme.color;

function getLegend(data, i = 0) {
    let arr = data.map(item => item[i]);
    return util.arrUnique(arr);
}

function getSankeySeriesData(obj) {

    var series = {
        nodes: [],
        links: [],
        linkName: []
    };
    var sankeyData = {
        nodes: [],
        links: []
    };

    var len = obj.header.length;
    // //获取除最后一列之外所有列的Nodes，默认均为Category,此处不做数据类型校验
    for (var i = 0; i < len - 1; i++) {
        if (i == len - 2) {
            series.linkName = series.nodes;
        }
        series.nodes = series.nodes.concat(getLegend(obj.data, i));
    }

    //构造links 的 obj
    series.linkName.map(function(elem) {
        series.links[elem] = {};
    });

    //处理数据为通用数组格式
    obj.data.forEach(function(elem) {
        for (var i = 0; i < len - 2; i++) {
            if (isNaN(series.links[elem[i]][elem[i + 1]])) {
                series.links[elem[i]][elem[i + 1]] = Number.parseFloat(elem[len - 1]);
            } else {
                series.links[elem[i]][elem[i + 1]] += Number.parseFloat(elem[len - 1]);
            }
        }
    });

    sankeyData.nodes = series.nodes.map((elem, i) => {
        return {
            name: elem,
            itemStyle: {
                normal: {
                    color: color[i % color.length],
                }
            }
        };
    });

    for (var source in series.links) {
        for (var target in series.links[source]) {
            sankeyData.links.push({
                source: source,
                target: target,
                value: series.links[source][target]
            });
        }
    }

    return sankeyData;
}

let option = function(obj) {
    let series = getSankeySeriesData(obj);
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
        series: {
            type: "sankey",
            nodes: series.nodes,
            links: series.links,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: "#aaa"
                }
            },
            lineStyle: {
                normal: {
                    color: "source",
                    curveness: 0.5,
                    opacity: 0.5
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        }
    };
};

export default option