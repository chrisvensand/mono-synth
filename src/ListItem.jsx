import React from 'react';

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentDidMount() {
        if (this.props.currentPreset === this.props.name) {
            this.setState({active: true});
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentPreset !== prevProps.currentPreset) {
            if (this.props.name === this.props.currentPreset || this.props.name === prevProps.currentPreset){
                this.setState(state => ({
                    active: !state.active
                }));
            }
        }
    }

    formatedPresetNumber() {
        if (this.props.presetNumber < 10) {
            return "00" + String(this.props.presetNumber);
        } else if (this.props.presetNumber < 100) {
            return "0" + String(this.props.presetNumber);
        } else {
            return String(this.props.presetNumber);
        }
    }

    render() {
        let activeState = this.state.active ? "active" : "not-active";

        return(
            <li id={this.props.name}
                className={activeState}
                onClick={this.props.handlePresetChange}
                onKeyDown={this.props.handlePresetChange}
                tabIndex="0">
                <div className="contents">
                    <div className="number">
                        {this.formatedPresetNumber()}
                    </div>
                    <div className="name">
                        {this.props.name}
                    </div>
                </div>
            </li>
        );
    }
}