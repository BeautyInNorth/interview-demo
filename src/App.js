import React, { Component } from 'react';
import CardItem from './component/CardItem'
import AddCard from './component/AddCard'
import { Select } from 'antd';
import './App.css';

let simulatedData = [
  {
    name: '墨刀实验室',
    color: '#64d78f',
    privacy: false,
    lock: true,
    amount: 3
  },
  {
    name: '墨刀魔法棒团队',
    color: '#ffc265',
    privacy: false,
    lock: false,
    amount: 0
  },
  {
    name: '超级工作组',
    color: '#64d78f',
    privacy: true,
    lock: false,
    amount: 4
  },
  {
    name: '冷笑客服组',
    color: '#ff8a8a',
    privacy: false,
    lock: false,
    amount: 4
  },
  {
    name: '设计部门',
    color: '#ffc652',
    privacy: false,
    lock: true,
    amount: 4
  },
  {
    name: 'Third',
    color: '#7eccef',
    privacy: true,
    lock: true,
    amount: 1
  },
];
const Option = Select.Option;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.setState({ data: simulatedData });
  }
  handleChange = (value) => {
    let data = simulatedData;
    if(!value){
      this.setState({data});
      return false
    }
    data = data.filter((ele) => {
      return ele[value]
    })
    this.setState({ data })
  }

  render() {
    return (
      <div className="condition">
        <Select defaultValue="" style={{ width: 120, margin: 10 }} onChange={this.handleChange}>
          <Option value="">所有项目组</Option>
          <Option value="lock">锁定</Option>
          <Option value="privacy">私密</Option>
        </Select>
        <div className="content">
          {
            this.state.data.map((item, index) => {
              return <CardItem key={index} cardMsg={item} />
            })
          }
          <AddCard></AddCard>
        </div>
      </div>
    );
  }
}

export default App;
