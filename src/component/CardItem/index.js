import React, { Component } from 'react'
import { Card, Tag, Icon } from 'antd';
import './index.css';
export default class CardItem extends Component {
  render() {
    let { cardMsg } = this.props;
    return (
      <Card className={cardMsg.lock?'card-item card-item-lock':'card-item card-item-not-lock'}>
        <div className="item">
          <div className="card-color" style={{ background: cardMsg.color }}></div>
          <div>
            <p className="card-name">{cardMsg.name}</p>
            <div className="card-tag">
              {cardMsg.privacy?(<Tag><Icon type="eye-invisible" />私密</Tag>):(<div></div>)}
              {cardMsg.lock?(<Tag><Icon type="lock" />锁定</Tag>):(<div></div>)}
            </div>
            <p><span className="card-amount">{cardMsg.amount} </span> 项目</p>
          </div>
        </div>
      </Card>
    )
  }
}
