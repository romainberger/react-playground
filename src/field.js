import React, {Component} from 'react'
import 'fetch-polyfill'
import leftpad from 'left-pad' // ;)

class Ball extends Component {
  render() {
    return null
  }
}

export default class Field extends Component {
  static defaultProps = {
    size: 1000,
    nbBalls: 100
  }

  state = {
    balls: []
  }

  start = null

  newBall() {
    let pos = this.props.size / 2
    let velocities = [-1, 1];
    let vx = velocities[Math.floor(Math.random()*velocities.length)] * Math.random()
    let vy = velocities[Math.floor(Math.random()*velocities.length)] * Math.random()

    return {
      x: pos,
      y: pos,
      vx,
      vy,
      v: Math.random() * 3,
      s: Math.random() * 50,
      c: `#${leftpad(Math.floor(Math.random()*16777215).toString(16), 6, '0')}`
    }
  }

  componentDidMount() {
    requestAnimationFrame(::this.step)
    //this.fetchUsers()

    let balls = []
    for (let i=0; i < this.props.nbBalls; i++) {
      balls.push(this.newBall())
    }
    this.setState({balls})
  }

  moveBall(ball) {
    if (ball.x > this.props.size - ball.s/2 || ball.x < ball.s / 2) {
      ball.vx = ball.vx * -1;
    }
    if (ball.y > this.props.size - ball.s/2 || ball.y < ball.s / 2) {
      ball.vy = ball.vy * -1;
    }
    ball.x += ball.vx * ball.v
    ball.y += ball.vy  * ball.v

    return ball
  }


  step(timestamp) {
    let progress
    if (this.start === null) this.start = timestamp
    progress = timestamp - this.start
    requestAnimationFrame(::this.step)
  }

  render() {
    return (
      <svg width={this.props.size} height={this.props.size} fill="black" style={{backgroundColor: '#222'}}>
      </svg>
    )
  }
}

