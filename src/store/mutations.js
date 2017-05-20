// 同步事件

let mutations = {
  setPrintScore(state, val) {
    state.score.print = val
  },
  setPaperScore(state, val) {
    state.score.paper = val
  },
  readPrintData(state, val) {},
  readPaperData(state, val) {}
}

export default mutations
