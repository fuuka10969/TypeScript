// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  // 蛇
  snake: Snake
  // 食物
  food: Food
  // 积分
  scorePanel: ScorePanel

  // 创建一个属性来存储蛇的移动方向（按键的方向）
  direction: string = ''

  // 创建一个属性记录游戏是否继续
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel(10, 5)

    this.init()
  }

  // 游戏的初始化方法，调用后开始游戏
  init() {
    // 绑定键盘按钮按下事件
    document.addEventListener('keydown', this.keydownHandle.bind(this))
    // 调用run方法，使蛇移动
    this.run()
  }

  /**
   * 创建一个键盘按下的响应函数
   * ArrowUp
   * ArrowDown
   * ArrowLeft
   * ArrowRight
   *  */
  keydownHandle(event: KeyboardEvent) {
    // 检查event.key的值是否合法
    // 修改direction属性
    this.direction = event.key

  }

  // 创建一个控制蛇移动的方法
  run() {
    /**
     * 根据方向this.direction来使蛇的位置改变
     * 向上 top 减少
     * 向下 top 增加
     * 向左 left 减少
     * 向右 left 增加
     */
    // 获取蛇目前坐标
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        // 向上移动 top 减少
        Y -= 10;
        break;
      case 'ArrowDown':
      case 'Down':
        // 向下移动 top 增加
        Y += 10;
        break;
      case 'ArrowLeft':
      case 'Left':
        // 向左移动 left 减少
        X -= 10;
        break;
      case 'ArrowRight':
      case 'Right':
        // 向右移动 left 增加
        X += 10;
        break;
    }

    // 检查蛇是否吃到食物
    this.checkEat(X, Y)

    // 修改蛇的X和Y值
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (err: any) {
      // 出现异常
      alert(`${err.message} Game Over!`)
      this.isLive = false
    }

    // 开启一个定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)

  }

  // 定义一个方法，来检查蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y) {
      // 食物的位置进行重置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 蛇要增加一节
      this.snake.addBody()
    }
  }
}

export default GameControl