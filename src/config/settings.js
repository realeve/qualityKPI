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
      risk: url + '466&M=3&cate=工艺质量隐患排查',
      qfj: url + '467&M=3',
      spc: url + '468&M=3',

      // 码后工艺执行率，未添加api Id
      procRate: url + '430&M=3'
    },
    paper: {
      goodRate: url + '123&M=3',
      pkgRate: url + '116&M=3',
      abnormalNum: url + '469&M=3',
      question: url + '470&M=3',
      spc: url + '60&M=3'
    },
    dashboard: {
      print: {
        // 	SELECT b.ProductName AS 品种, ProduceDate AS 日期, round(AVG(GoodRate), 2) AS 平均好品率,avg(errPicCount) 平均缺陷条数 FROM MaHouData a INNER JOIN ProductData b ON a.ProductTypeID = b.ID WHERE ProduceDate between ? and ? GROUP BY ProduceDate, ProductName ORDER BY 1, 2
        goodrate: url + '476&M=3',
        // SELECT a.producttype as 品种, CONVERT (VARCHAR,a.scandate,112)  as 日期,AVG(totalopennum) AS 开包量 FROM OCRData a WHERE CONVERT (VARCHAR,a.scandate,112) BETWEEN  ? and ? GROUP BY producttype, CONVERT (VARCHAR,a.scandate,112)
        opennum: url + '478&M=3',
        // SELECT 品种,[生产日期],round(cast(sum(未检条数) as float)/count(*),2) 平均未检 FROM [dbo].[view_print_hecha] where [生产日期] between 20160501 and 20160531 group by 品种,[生产日期] order by 1,2
        nocheck: url + '480&M=3',
        // 产量情况
        prodnum: url + '472&M=3',
        question: url + '473&M=3',
        plate:url+'471&M=3'
      },
      paper: {
        // SELECT [产品名称],CONVERT(varchar, [开始时间],112) 生产日期,round(avg(好品率),2) 平均好品率 FROM [dbo].[view_paper_quality] where 机型 ='切纸机' and CONVERT(varchar, [开始时间],112) between '20160501' and '20160530' group by [产品名称],CONVERT(varchar, [开始时间],112) order by 1,2
        goodrate: url + '477&M=3',
        // SELECT [产品名称],CONVERT(varchar, [开始时间_切纸机],112) 生产日期,count(*) 数量 FROM [dbo].[view_paper_quality_compare] where abs(好品率-好品率_切纸机)>5 and CONVERT(varchar, [开始时间_切纸机],112) between '20160501' and '20160530' group by [产品名称],CONVERT(varchar, [开始时间_切纸机],112) order by 1,2
        abnormal: url + '479&M=3',
        // SELECT a.品种, 记录日期,round( CAST ( SUM (a.[封包重量]) AS FLOAT ) * 100 / SUM (a.[裁切重量]), 2 ) AS 一次封包率 FROM dbo.view_paper_validate AS a WHERE 是否放行 IN ('放行','返工') AND ( a.[记录日期] BETWEEN 20160501 and 20160531) group by a.品种,记录日期 order by 1,2
        packagerate: url + '481&M=3',

        reason: url + '308&M=3'
      }
    }
  },
  rtxInfo: rtx.rtxInfo
}
