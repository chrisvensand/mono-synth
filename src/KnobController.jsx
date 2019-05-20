/* Created by Daniel Subat */
import React from 'react';

export default class KnobController extends React.Component {
    constructor(props) {
      super(props);
      this.fullAngle = props.degrees;
      this.startAngle = (360 - props.degrees) / 2;
      this.endAngle = this.startAngle + props.degrees;
      this.margin = props.size * 0.15;
      this.currentDeg = Math.floor(
        this.convertRange(
          props.min,
          props.max,
          this.startAngle,
          this.endAngle,
          props.value
        )
      );
      this.state = { deg: this.currentDeg };
    }
  
    startDrag = e => {
        e.preventDefault();
        const knob = e.target.getBoundingClientRect();
        const pts = {
            x: knob.left + knob.width / 2,
            y: knob.top + knob.height / 2
        };
        const moveHandler = e => {
            this.currentDeg = this.getDeg(e.clientX, e.clientY, pts);
            if (this.currentDeg === this.startAngle) this.currentDeg--;
            let newValue = Math.floor(
                this.convertRange(
                    this.startAngle,
                    this.endAngle,
                    this.props.min,
                    this.props.max,
                    this.currentDeg
                )
            );
            // 0 represents turned fully counter clockwise,
            // 0.5 represents half way turned, 1 represends fully turned
            const val = (this.currentDeg - 44) / 271;

            console.log(val);
            this.setState({ deg: this.currentDeg });
            this.props.modifyPreset(val);
            this.props.onChange(newValue);
        };
        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", e => {
            document.removeEventListener("mousemove", moveHandler);
        });
    };
  
    getDeg = (cX, cY, pts) => {
      const x = cX - pts.x;
      const y = cY - pts.y;
      let deg = Math.atan(y / x) * 180 / Math.PI;
      if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
        deg += 90;
      } else {
        deg += 270;
      }
      let finalDeg = Math.min(Math.max(this.startAngle, deg), this.endAngle);
      return finalDeg;
    };
  
    convertRange = (oldMin, oldMax, newMin, newMax, oldValue) => {
      return (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin;
    };
  
    dcpy = o => {
      return JSON.parse(JSON.stringify(o));
    };
  
    render() {
      let kStyle = {
        width: this.props.size,
        height: this.props.size
      };
      let iStyle = this.dcpy(kStyle);
      iStyle.transform = "rotate(" + this.state.deg + "deg)";
  
      return (
        <div className="knob-controller">
            <div className="knob-outer" onMouseDown={this.startDrag}>
                <div className="knob-inner" >
                    <div className="grip" />
                    </div>
                <img style={iStyle} src="./assets/Knob.png" alt="Knob" />
            </div>
        </div>
      );
    }
  }