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

    // 菜单共享数据
    bread: {
        path: '/print',
        name: '印钞工序',
        path2: '/stat',
        name2: '概述'
    },
    activeName: 1,

    dashboard: {
        print: {
            goodrate: [],
            opennum: [],
            nocheck: [],
            plate: [],
            question: []
        },
        paper: {
            goodrate: [],
            abnormal: [],
            packagerate: [],
            reason: [],
        }
    }
}

export default state