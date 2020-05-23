import React, {Component} from "react";

import './stype.css'

interface Props {
    children: any
}

export class Background extends Component<Props, any> {
    render() {
        return (
            <div className="Background">
                {this.props.children}
            </div>
        )
    }


}