import React, { Component } from 'react';
import AppCard from './component/AppCard'
import CreateApp from './component/CreateApp'
import AppSelector from './component/AppSelector'
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
    name: 'Third Reactor',
    color: '#7eccef',
    privacy: true,
    lock: true,
    amount: 1
  },
];
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
    if (!value) {
      this.setState({ data });
      return false
    }
    data = data.filter((ele) => {
      return ele[value]
    })
    this.setState({ data })
  }

  appListView = () => {
    let listView = this.state.data.map((item, index) => {
      return <AppCard key={index} metaInfo={item} />
    })
    return listView
  }
  render() {
    return (
      <div className="apps">
        <AppSelector selected={this.handleChange} />
        <div className="app-list">
          {this.appListView()}
          <CreateApp />
        </div>
      </div>
    );
  }
}

export default App;
