import React, { Component } from 'react';
import AppCard from './component/AppCard'
import CreateApp from './component/CreateApp'
import AppSelector from './component/AppSelector'
import './App.css';

const mockAppData = [
  {
    name: '墨刀实验室',
    color: '#64d78f',
    privacy: false,
    locked: true,
    amount: 3
  },
  {
    name: '墨刀魔法棒团队',
    color: '#ffc265',
    privacy: false,
    locked: false,
    amount: 0
  },
  {
    name: '超级工作组',
    color: '#64d78f',
    privacy: true,
    locked: false,
    amount: 4
  },
  {
    name: '冷笑客服组',
    color: '#ff8a8a',
    privacy: false,
    locked: false,
    amount: 4
  },
  {
    name: '设计部门',
    color: '#ffc652',
    privacy: false,
    locked: true,
    amount: 4
  },
  {
    name: 'Third Reactor',
    color: '#7eccef',
    privacy: true,
    locked: true,
    amount: 1
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apps: [] };
  }

  componentDidMount() {
    // 一般ajax请求返回都在这里设置数据
    this.setState({ apps: mockAppData });
  }

  appSelectorChanged = (changeValue) => {
    let matchApps = mockAppData;
    switch (changeValue) {
      case 'locked':
        matchApps = matchApps.filter((ele) => { return ele.locked });
        break;
      case 'privacy':
        matchApps = matchApps.filter((ele) => { return ele.privacy });
        break;
      default:
        break;
    }
    this.setState({ apps: matchApps });
  }

  appListView = () => {
    let listView = this.state.apps.map((item, index) => {
      return <AppCard key={index} metaInfo={item} />
    })
    return listView
  }
  
  render() {
    return (
      <div className="apps">
        <AppSelector appSelectorChanged={this.appSelectorChanged} />
        <div className="app-list">
          {this.appListView()}
          <CreateApp />
        </div>
      </div>
    );
  }
}

export default App;
