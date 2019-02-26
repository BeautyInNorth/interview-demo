import React, { Component } from 'react'
import { Card, Tag, Icon } from 'antd';
import './index.css';

export default class AppItem extends Component {
  createPrivacyTag = () => {
    return <Tag key='privacy'><Icon type="eye-invisible" />私密</Tag>
  }
  createLockedTag = () => {
    return <Tag key='locked'><Icon type="lock" />锁定</Tag>
  }

  createTags = (metaInfo) => {
    let tags = []
    if (metaInfo.locked) {
      tags.push(this.createLockedTag())
    }
    if (metaInfo.privacy) {
      tags.push(this.createPrivacyTag())
    }
    return tags
  }

  render() {
    let { metaInfo } = this.props;
    return (
      <Card className={`card-item ${metaInfo.locked ? 'card-item-lock' : 'card-item-not-lock'}`}>
        <div className="item">
          <div className="app-icon" style={{ background: metaInfo.color }}></div>
          <div>
            <p className="app-name">{metaInfo.name}</p>
            <div className="app-tags">{this.createTags(metaInfo)}</div>
            <p><span className="card-amount">{metaInfo.amount} </span> 项目</p>
          </div>
        </div>
      </Card>
    )
  }
}
