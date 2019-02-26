import React, { Component } from 'react'
import { Card, message } from 'antd';
import './index.css'
export default class index extends Component {
  handleAddCard = () => {
    message.config({
      duration:1,
      maxCount: 1
    });
    message.info('待添加！');
  }
  render() {
    return (
      <Card className="add-card">
        <div className="add-content">
          <div className="new" onClick={this.handleAddCard}></div>
          <p>新建项目组</p>
        </div>
      </Card>
    )
  }
}
