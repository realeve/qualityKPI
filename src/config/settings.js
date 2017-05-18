var host = (process.env.NODE_ENV == 'development') ? '//localhost' : '//10.8.2.133'

var url = host + '/datainterface/api?ID='

import rtx from './rtx'

export default {
    host,
    url,
    api: {
        // POST
        insert: host + '/DataInterface/insert',
        // UPDATE
        update: host + '/DataInterface/update',
        // rtxPush
        rtxPush: host + '/datainterface/rtxpush',
        // 媒体列表
        print: {
            goodRate: url + '256&M=3',
            openNum: url + '259&M=3',
            plate: url + '464&M=3',
            // 未检
            unchecked: url + '465&M=3',
            question: url + '466&M=3&cate=质量问题发布',
            risk: url + '466&M=3&cate=风险隐患排查',
            qfj: url + '467&M=3',
            spc: url + '468&M=3',

            // 码后工艺执行率，未添加api Id
            procRate: url + '&M=3',
        },
        paper: {
            goodRate: url + '123&M=3',
            pkgRate: url + '116&M=3',
            abnormalNum: url + '469&M=3',
            qestion: url + '470&M=3',
            spc: url + '60&M=3',
        }
    },
    rtxInfo: rtx.rtxInfo
}