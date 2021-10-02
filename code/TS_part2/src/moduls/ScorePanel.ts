
// 定义表示计分牌的类
class ScorePanel {
  // score用来记录分数，level记录等级
  score: number = 0
  level = 1

  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement

  // 设置一个变量限制等级
  maxLevel: number

  // 设置一个变量表示几分时升级upScore
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 设置一个加分的方法
  addScore() {
    // 使分数自增
    this.scoreEle.innerHTML = `${++this.score}`
    // 判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = `${++this.level}`
    }
  }
}

export default ScorePanel


// 测试代码
// const scorePanel = new ScorePanel(100, 2)
// for (let i = 0; i < 200; i++) {
//   scorePanel.addScore()
// }