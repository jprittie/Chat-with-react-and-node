import React, { Component } from "react";
import './ChatLog.css'
import ChatMessage from '../ChatMessage/ChatMessage.component.js';

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
    const { className, messages } = this.props;
    return (
      <div className="chatlog-container col s8 offset-s3">
        <ul className="collection">
          {messages.map((message, index) => <li key={index} ><ChatMessage message={message} /></li>)}
        </ul>
      </div>
    )
  }


};
