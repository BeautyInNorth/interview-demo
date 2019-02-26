import React, { Component } from 'react'
import { Card, Tag, Icon } from 'antd';
import './index.css';
export default class CardItem extends Component {
  render() {
    let { metaInfo } = this.props;
    return (
      <Card className={metaInfo.lock?'card-item card-item-lock':'card-item card-item-not-lock'}>
        <div className="item">
          <div className="card-color" style={{ background: metaInfo.color }}></div>
          <div>
            <p className="card-name">{metaInfo.name}</p>
            <div className="card-tag">
              {metaInfo.privacy?(<Tag><Icon type="eye-invisible" />私密</Tag>):(<div></div>)}
              {metaInfo.lock?(<Tag><Icon type="lock" />锁定</Tag>):(<div></div>)}
            </div>
            <p><span className="card-amount">{metaInfo.amount} </span> 项目</p>
          </div>
        </div>
      </Card>
    )
  }
}
