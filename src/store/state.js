const state = {
    print: {
        goodRate: [],
        openNum: [],
        plateNum: [],
        uncheckedNum: [],
        question: [],
        risk: [],
        qfj: [],
        spc: [],
        procRate: []
    },
    paper: {
        goodRate: [],
        cGoodRate: [],
        pkgRate: [],
        question: [],
        spc: [],
        abnormal: []
    },
    score: {
        print: 0,
        paper: 0
    },
    bread: {
        path: '/print',
        name: '印钞工序',
        path2: '/stat',
        name2: '概述'
    },
    // 当前激活菜单
    activeName: 1
}

export default state