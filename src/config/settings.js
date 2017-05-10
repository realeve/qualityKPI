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
            goodRate: url + '256&M=3&cache=10',
            openNum: '',
            plate: '',
            unchecked: '',
            question: '',
            risk: '',
            qfj: '',
            spc: '',
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