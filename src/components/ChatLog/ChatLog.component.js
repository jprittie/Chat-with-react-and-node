import React, { Component } from "react";
import './ChatLog.css'

import {findDOMNode} from "react-dom";



export default class ChatLog extends Component {

  componentWillUpdate () {
    const node = findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate () {
    if (this.shouldScrollBottom) {
      const node = findDOMNode(this);
      node.scrollTop = node.scrollHeight
    }
  }

  render() {
    return (
      <div className="">
        {this.props.children}
      </div>

    )
  }


};
