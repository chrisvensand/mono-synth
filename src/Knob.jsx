import React from 'react';
import KnobController from './KnobController.jsx';

export default class Knob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (newValue) => {
        this.setState({value: newValue});
    }

    handlePresetModification = (val) => {
        this.props.modifyPreset(this.props.setting, val);
    }

    returnCorrectTags(isString, value) {
        let content = "string-knob-label";

        if (!isString) {
            content = this.props.label;
        }

        return(
            <div className={this.props.name}>
                <img src="./assets/Knob.png" alt="Knob" />
                <KnobController
                    className="knob-controller"
                    modifyPreset={this.handlePresetModification}
                    numTicks={25}
                    degrees={270}
                    min={1}
                    max={100}
                    value={30}
                    onChange={this.handleChange}
                />
                <label className={content}>{value}</label>
            </div>
        );
    }

    render() {
        let value = this.props.value;
        if (typeof(value) === "string") {
            return(this.returnCorrectTags(true, value));
        } else {
            return(this.returnCorrectTags(false, value));
        }
    }
}