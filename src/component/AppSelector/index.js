import React, { Component } from 'react'
import { Select } from 'antd';

const Option = Select.Option;
export default class index extends Component {
  render() {
    let { selected } = this.props;
    return (
      <Select defaultValue="" style={{ width: 120, margin: 10 }} onChange={(e)=>selected(e)}>
        <Option value="">所有项目组</Option>
        <Option value="lock">锁定</Option>
        <Option value="privacy">私密</Option>
      </Select>
    )
  }
}
