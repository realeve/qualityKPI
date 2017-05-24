import util from '../chartFunc'
import common from '../common'

let color = ['#4f19c7', '#c71969', '#c71969', '#c71969', '#c71919', '#c71969', '#c71969', '#1984c7', '#c76919', '#8419c7', '#c76919', '#c71969', '#c71969', '#c79f19', '#c71919', '#c71919', '#c71919', '#c78419', '#c719b9', '#1984c7', '#c719b9', '#199fc7', '#9f19c7', '#1984c7', '#69c719', '#8419c7', '#c71969', '#c71969', '#8419c7', '#19c719', '#19c719', '#1919c7', '#1984c7', '#c79f19', '#69c719', '#c74f19', '#19c7b9', '#c76919', '#19c719', '#19c719', '#19c7b9', '#9fc719', '#c7b919', '#c7b919', '#c7b919', '#c7b919', '#c7b919', '#c7b919', '#c7b919', '#19c719', '#b9c719', '#c78419', '#3419c7', '#19b9c7', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c719b9', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c79f19', '#c76919', '#34c719', '#c79f19', '#c79f19', '#3419c7', '#3419c7', '#c71919', '#9f19c7', '#9f19c7', '#1919c7', '#c78419', '#c79f19', '#c7b919', '#c78419', '#19c719', '#19c784', '#19c784', '#19c784', '#19c784', '#c7199f', '#c719b9', '#1969c7', '#1969c7', '#1969c7', '#c71919', '#b9c719', '#9fc719', '#c78419', '#19c7b9', '#c79f19', '#19c7b9', '#c71984', '#19b9c7', '#c71919', '#c78419', '#8419c7', '#8419c7', '#1984c7', '#c78419', '#c78419', '#c78419', '#19c719', '#c71984'];

function getLegend(data, i = 0) {
    let arr = data.map(item => item[i]);
    return util.arrUnique(arr);
}

function getNodes(data, legend) {

    let cat = [];
    // 类目ID
    let catIdx = {};
    cat = legend.map((item, category) => {
        let valueArr = data.filter(node => node[0] == item);
        let value = 0;
        valueArr.forEach(node => {
            value += parseInt(node[2]);
        });

        catIdx[item] = category;

        return {
            name: item,
            category,
            symbolSize: Math.min(value * 5, 60),
            value
        }
    });

    let arr = getLegend(data, 1);
    arr.forEach(item => {
        let valueArr = data.filter(node => node[1] == item);
        let value = 0;
        valueArr.forEach(node => {
            value += parseInt(node[2]);
        });
        let catArr = getLegend(valueArr, 0);
        // catArr.forEach(cateItem => {
        //     cat.push({
        //         name: item,
        //         symbolSize: Math.min(value * 5, 60),
        //         category: catIdx[cateItem],
        //         value
        //     })
        // })
        cat.push({
            name: item,
            symbolSize: Math.min(value * 5, 60),
            category: catIdx[catArr[0]],
            value
        });
    })

    cat = cat.map((item, i) => {
        item.id = i;
        item.itemStyle = {
            normal: {
                color: color[i % color.length]
            }
        };
        item.label = {
            normal: {
                show: item.symbolSize > 6,
                position: "right",
            }
        }
        return item;
    });
    return cat;
}

function getSrcAndTgt(src, tgt, nodes) {
    let srcArr = nodes.filter(item => item.name == src);
    let tgtArr = nodes.filter(item => item.name == tgt);
    let links = [];
    srcArr.forEach(srcItem => {
        tgtArr.forEach(tgtItem => {
            links.push({
                source: srcItem.id,
                target: tgtItem.id
            })
        })
    })
    return links;
}

function getLinks(data, nodes) {
    let links = [];
    data.forEach(item => {
        let link = getSrcAndTgt(item[0], item[1], nodes);
        links = [...links, ...link];
    });
    return links.map((item, i) => {
        item.id = i;
        return item;
    });
}


let option = function(obj) {
    let legend = getLegend(obj.data);
    let categories = legend.map(item => {
        return {
            name: item
        };
    });

    let nodes = getNodes(obj.data, legend);

    let links = getLinks(obj.data, nodes);

    return {
        title: {
            text: obj.title,
            left: 'left',
            textStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'lighter'
            }
        },
        tooltip: {
            trigger: 'item',
            // formatter(param) {
            //     // console.log(param);
            //     return '<b>' + param.name + '</b> : ' + param.value;
            // }
        },
        legend: {
            top: '30',
            left: 'right',
            data: legend,
            textStyle: {
                color: '#fff'
            },
            show: false
        },
        series: {
            type: "graph",
            layout: "circular", // "force", //
            circular: {
                rotateLabel: true
            },
            draggable: true,
            // force: {
            //     "gravity": 0.07,
            //     "edgeLength": 100,
            //     "repulsion": 150
            // },
            categories,
            nodes,
            links,
            roam: true,
            label: {
                normal: {
                    position: "right",
                    formatter: "{b}"
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        },
        color
    }
}

export default option