import React, { Component } from "react";

import { Modal } from "./hoc/Modal/Modal";
import { Invites } from "./components/Invites/Invites";
import './index.css'
import {Open} from "./components/UI/Open/Open";
import {Background} from "./hoc/Background/Background";

interface State {
  invites: string[];
  opened: boolean;
}

export class App extends Component<{}, State> {
  public readonly state: State = {
    invites: [],
    opened: false
  };

  public toggle(opened: boolean) {
   this.setState({opened})

  }

  public invite(name: string) {
    this.setState(({ invites }) => {
      invites.push(name);

      return { invites };
    });
  }

  public render() {
    return (
      <div>
        <Background>
            <Open text={`Show Modal Window`} onClick={() => this.toggle(true)}/>

            <Modal opened={this.state.opened} onClose={() => this.toggle(false)}>
                <Invites
                    invites={this.state.invites}
                    onAdd={this.invite.bind(this)}
                />
            </Modal>
        </Background>

      </div>
    );
  }
}
