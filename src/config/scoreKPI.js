let print = {
  goodRate: {
    name: '好品率',
    score: 3,
    level: {
      '9602A': [91, 88, 85, 82, 80],
      '9603A': [84, 82, 80, 78, 76],
      '9604A': [88, 86, 84, 82, 80],
      '9606A': [82, 80, 78, 76, 74],
      '9606T': [82, 80, 78, 76, 74],
      '9607T': [82, 80, 78, 76, 74]
    } // 优秀值、良好值、中间值、较低值、较差值
  },
  openNum: {
    name: '开包量',
    score: 5,
    level: {
      '9602A': [40, 45, 50, 60, 70],
      '9603A': [60, 70, 80, 90, 100],
      '9604A': [55, 60, 65, 90, 110],
      '9606A': [55, 65, 75, 88, 100],
      '9606T': [55, 65, 75, 88, 100],
      '9607T': [90, 100, 110, 130, 150]
    }
  },
  plateNum: {
    name: '耐印量',
    score: 3,
    level: {
      '镍凹版': [110, 95, 85, 78, 70],
      '丝网版': [68, 65, 60, 55, 50],
      '水洗尼龙版': [1000, 900, 800, 700, 600],
      '多层金属版': [450, 400, 350, 320, 290],
      '尼龙色模版': [160, 140, 120, 105, 90]
    }
  },
  // 该指标范围需讨论
  machineWeak: {
    name: '机检漏废',
    score: 5,
    level: {
      '9602A': [40, 50, 60, 70, 80],
      '9603A': [40, 50, 60, 70, 80],
      '9604A': [40, 50, 60, 70, 80],
      '9606A': [40, 50, 60, 70, 80],
      '9606T': [40, 50, 60, 70, 80],
      '9607T': [40, 50, 60, 70, 80]
    }
  },
  // 该指标范围需讨论
  fakeRate: {
    name: '小开作废率',
    score: 7,
    level: {
      '9602A': [0.3, 0.4, 0.5, 0.6, 0.7],
      '9603A': [ 0.5, 0.6, 0.7, 0.8, 0.9],
      '9604A': [ 0.5, 0.6, 0.7, 0.8, 0.9],
      '9606A': [ 0.5, 0.6, 0.7, 0.8, 0.9],
      '9606T': [ 0.5, 0.6, 0.7, 0.8, 0.9],
      '9607T': [ 0.55, 0.65, 0.75, 0.85, 0.95]
    }
  },
  // 该指标范围需讨论
  uncheckedNum: {
    name: '机检未检',
    score: 5,
    level: {
      '9602A': [1, 2, 3, 4, 5],
      '9603A': [1, 2, 3, 4, 5],
      '9604A': [1, 2, 3, 4, 5],
      '9606A': [1, 2, 3, 4, 5],
      '9606T': [1, 2, 3, 4, 5],
      '9607T': [1, 2, 3, 4, 5]
    }
  },
  // 该指标范围需讨论
  question: {
    name: '质量问题发布',
    // 单项系数5分
    score: 5,
    level: {},
    // 总分
    subScore: 100
  },
  // 该指标范围需讨论
  risk: {
    name: '风险隐患排查',
    // 单项系数5分
    score: 5,
    level: {},
    // 总分
    subScore: 50
  },
  // 该指标范围需讨论
  qfj: {
    name: '清分机拒检',
    score: 5,
    level: {
      '9602A': [0.6, 0.7, 0.8, 0.9, 1.0],
      '9603A': [0.6, 0.7, 0.8, 0.9, 1.0],
      '9604A': [0.6, 0.7, 0.8, 0.9, 1.0],
      '9606A': [0.6, 0.7, 0.8, 0.9, 1.0],
      '9606T': [0.6, 0.7, 0.8, 0.9, 1.0],
      '9607T': [0.6, 0.7, 0.8, 0.9, 1.0]
    }
  },
  // 该指标范围需讨论
  spc: {
    name: 'SPC过程质量得分',
    score: 5,
    level: {
      '9602A': [94, 92, 90, 88, 86],
      '9603A': [94, 92, 90, 88, 86],
      '9604A': [94, 92, 90, 88, 86],
      '9606A': [94, 92, 90, 88, 86],
      '9606T': [94, 92, 90, 88, 86],
      '9607T': [94, 92, 90, 88, 86]
    }
  },
  procRate: {
    name: '码后核查工艺执行率',
    score: 2,
    level: {

    }
  }
}
let paper = {
  goodRate: {
    name: '纸机好品率',
    score: 10,
    level: {
      '103-G-2A': [96, 94, 92, 90, 88],
      '103-G-3A': [95, 93, 91, 89, 87],
      '103-G-4A': [95, 93, 91, 89, 87],
      '103-G-6A': [95, 93, 91, 89, 87],
      '103-G-6T': [95, 93, 91, 89, 87],
      '103-G-7T': [94, 92, 90, 88, 86],
      '实验品': [94, 92, 90, 88, 86]
    } // 优秀值、良好值、中间值、较低值、较差值
  },
  cGoodRate: {
    name: '切纸机好品率',
    score: 10,
    level: {
      '103-G-2A': [96, 94, 92, 90, 88],
      '103-G-3A': [95, 93, 91, 89, 87],
      '103-G-4A': [95, 93, 91, 89, 87],
      '103-G-6A': [95, 93, 91, 89, 87],
      '103-G-6T': [95, 93, 91, 89, 87],
      '103-G-7T': [94, 92, 90, 88, 86],
      '实验品': [94, 92, 90, 88, 86]
    } // 优秀值、良好值、中间值、较低值、较差值
  },
  pkgRate: {
    name: '一次封包率',
    score: 20,
    level: {
      '103-G-2A': [95, 90, 85, 82, 80],
      '103-G-3A': [95, 90, 85, 82, 80],
      '103-G-4A': [95, 90, 85, 82, 80],
      '103-G-6A': [95, 90, 85, 82, 80],
      '103-G-6T': [95, 90, 85, 82, 80],
      '103-G-7T': [95, 90, 85, 82, 80],
      '实验品': [95, 90, 85, 82, 80]
    } // 优秀值、良好值、中间值、较低值、较差值
  },
  rePkgRate: {
    name: '返工率',
    score: 20,
    level: {
      '103-G-2A': [5, 8, 10, 15, 20],
      '103-G-3A': [5, 8, 10, 15, 20],
      '103-G-4A': [5, 8, 10, 15, 20],
      '103-G-6A': [5, 8, 10, 15, 20],
      '103-G-6T': [5, 8, 10, 15, 20],
      '103-G-7T': [5, 8, 10, 15, 20],
      '实验品': [5, 8, 10, 15, 20]
    } // 优秀值、良好值、中间值、较低值、较差值
  },
  question: {
    name: '质量问题发布',
    // 单项系数5分
    score: 25,
    level: {},
    // 总分
    subScore: 40
  },
  // 该指标范围需讨论
  spc: {
    name: 'SPC过程质量得分',
    score: 5,
    level: {
      '103-G-2A': [99.5, 99, 98.5, 98, 97.5],
      '103-G-3A': [99.5, 99, 98.5, 98, 97.5],
      '103-G-4A': [99.5, 99, 98.5, 98, 97.5],
      '103-G-6A': [99.5, 99, 98.5, 98, 97.5],
      '103-G-6T': [99.5, 99, 98.5, 98, 97.5],
      '103-G-7T': [99.5, 99, 98.5, 98, 97.5],
      '实验品': [99.5, 99, 98.5, 98, 97.5]
    }
  },
  abnormal: {
    name: '异常轴个数',
    score: 10,
    level: {
      '103-G-2A': [5, 10, 15, 18, 20],
      '103-G-3A': [5, 10, 15, 18, 20],
      '103-G-4A': [5, 10, 15, 18, 20],
      '103-G-6A': [5, 10, 15, 18, 20],
      '103-G-6T': [5, 10, 15, 18, 20],
      '103-G-7T': [5, 10, 15, 18, 20],
      '实验品': [5, 10, 15, 18, 20]
    }
  }
}
let scoreType = {
  ASC: 1,
  DESC: 0
}
export default {
  print,
  paper,
scoreType}
