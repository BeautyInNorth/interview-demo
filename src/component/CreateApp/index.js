import React, { Component } from 'react'
import { Card, message } from 'antd';
import './index.css'

export default class index extends Component {

  addApp = () => {
    message.config({
      duration: 1,
      maxCount: 1
    });
    message.info('待添加！');
  }

  render() {
    return (
      <Card className="creat-app">
        <div className="app-view">
          <div className="creat-app-icon" onClick={this.addApp}></div>
          <p>新建项目组</p>
        </div>
      </Card>
    )
  }
}
