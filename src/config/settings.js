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
            unchecked:url + '465&M=3',
            question: url + '466&M=3&cate=质量问题发布',
            risk: url + '466&M=3&cate=风险隐患排查',
            qfj: url + '467&M=3',
            spc: url + '468&M=3'
        },
        paper: {
            goodRate: '',
            cGoodRate: '',
            wellRate: '',
            pkgRate: '',
            abnormalNum: '',
            qestion: '',
            spc: ''
        }
    },
    rtxInfo: rtx.rtxInfo
}