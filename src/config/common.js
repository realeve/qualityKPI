function getParameter(a, b) {
    var c = b || document.location.href,
        d = new RegExp("(?:^|&|[?]|[/])" + a + "=([^&]*)"),
        e = d.exec(c);
    return e ? decodeURIComponent(e[1]) : null
}

function jsRight(sr, rightn) {
    return sr.substring(sr.length - rightn, sr.length)
}

function getNow(type = 8) {
    let date = new Date()

    let a = date.getFullYear()
    let b = jsRight(('0' + (date.getMonth() + 1)), 2)
    let c = jsRight(('0' + date.getDate()), 2)
    let d = jsRight(('0' + date.getHours()), 2)
    let e = jsRight(('0' + date.getMinutes()), 2)
    let f = jsRight(('0' + date.getSeconds()), 2)
    let output
    switch (type) {
        case 0:
            output = a + '年' + b + '月' + c + '日'
            break
        case 1:
            output = a + '-' + b + '-' + c + ' ' + d + ':' + e + ':' + f
            break
        case 2:
            output = a + '年' + b + '月' + c + '日' + d + '时' + e + '分' + f + '秒'
            break
        case 3:
            output = a + '-' + b + '-' + c + ' ' + d + ':' + e
            break
        case 4:
            output = a + '年' + b + '月' + c + '日  ' + d + '时' + e + '分'
            break
        case 5:
            output = b + '/' + c + '/' + a
            break
        case 6:
            output = a + '-' + b + '-' + c
            break
        case 7:
            output = a + b + '01'
            break
        case 8:
            output = a + b + c
            break
    }
    return output
}

function getDateRange() {
    let params = {
        tstart: getNow(7),
        tend: getNow(8)
    };

    // 测试模式固定起始时间输出数据
    if (process.env.NODE_ENV == 'development') {
        params = {
            tstart: '20160401',
            tend: '20160430'
        }
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
};

/**
 * 
 * 获取当前值的分类等级
 * @param {any} data  待判断的值
 * @param {any} levelArr  评分等级
 * @param {float} score  当前项总分
 * @returns 当前等级 0,1,2,3,4及偏移比例
 */
function getScoreLevel(data, levelArr, score) {
    let len = levelArr.length;
    let curLevel = len;
    let delta = 1;
    let ratio = 0;
    let levelDesc = ['优秀值', '良好值', '中间值', '较低值', '较差值', '低于较差值'];
    for (let i = 0; i < len; i++) {
        // 当前值偏移量
        delta = data - levelArr[i];
        if (delta >= 0) {
            // 不同等级之间数值差
            ratio = i == 0 ? 0 : (delta / (levelArr[i - 1] - levelArr[i]));
            // 等级线性分布
            curLevel = i - ratio;
            break;
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

export default {
    getParameter,
    getNow,
    arrUnique,
    getDateRange,
    getScoreLevel
}