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
            output = a + '-' + b

            break
        case 8:
            output = a + b + c
            break
    }
    return output
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

export default {
    getParameter,
    getNow,
    arrUnique
}