// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return null
    })
  }

  onBrake = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return null
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-display">Speed is {count}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            className="accelerate"
            type="submit"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="brake" type="submit" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
