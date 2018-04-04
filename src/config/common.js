import dev from "./dev";

function getParameter(a, b) {
  var c = b || document.location.href,
    d = new RegExp("(?:^|&|[?]|[/])" + a + "=([^&]*)"),
    e = d.exec(c);
  return e ? decodeURIComponent(e[1]) : null;
}

function jsRight(sr, rightn) {
  return sr.substring(sr.length - rightn, sr.length);
}

function getNow(type = 8) {
  let date = new Date();

  let a = date.getFullYear();
  let b = jsRight("0" + (date.getMonth() + 1), 2);
  let c = jsRight("0" + date.getDate(), 2);
  let d = jsRight("0" + date.getHours(), 2);
  let e = jsRight("0" + date.getMinutes(), 2);
  let f = jsRight("0" + date.getSeconds(), 2);
  let output;
  switch (type) {
    case 0:
      output = a + "年" + b + "月" + c + "日";
      break;
    case 1:
      output = a + "-" + b + "-" + c + " " + d + ":" + e + ":" + f;
      break;
    case 2:
      output = a + "年" + b + "月" + c + "日" + d + "时" + e + "分" + f + "秒";
      break;
    case 3:
      output = a + "-" + b + "-" + c + " " + d + ":" + e;
      break;
    case 4:
      output = a + "年" + b + "月" + c + "日  " + d + "时" + e + "分";
      break;
    case 5:
      output = b + "/" + c + "/" + a;
      break;
    case 6:
      output = a + "-" + b + "-" + c;
      break;
    case 7:
      output = a + b + "01";
      break;
    case 8:
      output = a + b + c;
      break;
    case 9:
      if (date.getMonth() == 0) {
        a = a - 1;
        b = 12;
      } else {
        b = jsRight("0" + date.getMonth(), 2);
      }
      c = jsRight("0" + date.getDate(), 2);

      output = a + b + c;
      break;
  }
  return output;
}

function getDateRange() {
  // 从上月开始计数
  const tstart = getNow(9);

  const tend = getNow(8);

  let params = {
    tstart,
    tend,
    tstart2: tstart,
    tend2: tend,
    tstart3: tstart,
    tend3: tend,
    cache: 10
  };

  // 测试模式固定起始时间输出数据
  if (dev) {
    params = {
      tstart: "20160401",
      tend: "20160430"
    };
  }

  return params;
}

// 数组去重
function arrUnique(uArr) {
  var arr = [];
  var set = new Set(uArr);
  set.forEach(function(item) {
    arr.push(item);
  });
  return arr;
}

/**
 *
 * 获取当前值的分类等级
 * @param {any} data  待判断的值
 * @param {any} level  评分等级
 * @param {float} score  当前项总分
 * @returns 当前等级 0,1,2,3,4及偏移比例
 */
function getScoreLevel(option) {
  let { data, level, score, type } = option;
  if (typeof level == "undefined") {
    return {
      score: 0,
      desc: "无数据"
    };
  }
  let len = level.length;
  let curLevel = len;
  let delta = 1;
  let ratio = 0;
  let levelDesc = [
    "优秀值",
    "良好值",
    "中间值",
    "较低值",
    "较差值",
    "低于较差值"
  ];
  if (type) {
    for (let i = 0; i < len; i++) {
      // 当前值偏移量
      delta = data - level[i];
      if (delta <= 0) {
        // 不同等级之间数值差
        ratio = i == 0 ? 0 : delta / (level[i - 1] - level[i]);
        // 等级线性分布
        curLevel = i - ratio;
        break;
      }
    }
  } else {
    for (let i = 0; i < len; i++) {
      // 当前值偏移量
      delta = data - level[i];
      if (delta >= 0) {
        // 不同等级之间数值差
        ratio = i == 0 ? 0 : delta / (level[i - 1] - level[i]);
        // 等级线性分布
        curLevel = i - ratio;
        break;
      }
    }
  }

  let curScore;
  // 比优秀值更好，不扣分
  if (curLevel == 0) {
    curScore = score;
    // 比较差值更低，得0分
  } else if (curLevel == len) {
    curScore = 0;
  } else {
    // 每一阶梯得分
    let scorePerLevel = score / len;
    curScore = score - scorePerLevel * curLevel;
  }

  return {
    score: curScore,
    desc: levelDesc[Math.ceil(curLevel)]
  };
}

function getLevelColor(score) {
  if (score >= 80) {
    return "green";
  } else if (score >= 60) {
    return "yellow";
  }
  return "red";
}

function calcScoreDetail(option) {
  let { dataNum, numArr, type, valIdx } = option;
  let subScore = dataNum.score;
  let sum = 0;
  let levelList = numArr.map(item => {
    let level = dataNum.level[item[0]];
    let score = subScore / numArr.length;
    let data = getScoreLevel({
      data: item[valIdx],
      level,
      score,
      type
    });
    sum += data.score;
    return Object.assign(
      {
        prod: item[0],
        value: item[valIdx]
      },
      data
    );
  });

  let percent = sum * 100 / subScore;

  return {
    score: parseFloat(sum.toFixed(3)),
    percent: parseFloat(percent.toFixed(2)),
    detail: levelList,
    color: getLevelColor(percent),
    subScore
  };
}

function getColumnList(item, setLevel = true) {
  let columns = [
    {
      type: "index",
      width: 60,
      align: "center"
    },
    {
      title: item[0],
      key: "prod"
    },
    {
      title: item[1],
      key: "value"
    }
  ];
  if (setLevel) {
    columns.push({
      title: "评价等级",
      key: "desc"
    });
  }
  return columns;
}

function getBread(path) {
  let bread;
  switch (path) {
    case "/print/":
      bread = {
        path: "/print",
        name: "印钞工序",
        path2: path,
        name2: "概述"
      };
      break;
    case "/print/oi":
      bread = {
        path: "/print",
        name: "印钞工序",
        path2: path,
        name2: "胶凹"
      };
      break;
    case "/print/code":
      bread = {
        path: "/print",
        name: "印钞工序",
        path2: path,
        name2: "印码"
      };
      break;
    case "/print/pkg":
      bread = {
        path: "/print",
        name: "印钞工序",
        path2: path,
        name2: "检封"
      };
      break;
    case "/paper":
      bread = {
        path,
        name: "钞纸工序",
        path2: "",
        name2: ""
      };
      break;
    case "/dashboard":
    case "/":
      bread = {
        path,
        name: "控制台",
        path2: "",
        name2: ""
      };
      break;
  }
  return bread;
}

export default {
  getParameter,
  getNow,
  arrUnique,
  getDateRange,
  getScoreLevel,
  getLevelColor,
  calcScoreDetail,
  getColumnList,
  getBread
};
