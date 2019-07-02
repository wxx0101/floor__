import React, { Component } from 'react'
import axios from "axios"
import Car from "./components/car"
import Right from "./components/right"
import store from "./store/redux"
import { Provider } from "react-redux"

class App extends Component {
  state = {
    dataList: []
  }
  render() {
    let { dataList } = this.state
    return (
      <Provider store={store}>
        {
          dataList.length && (<><Car dataList={dataList} /><Right dataList={dataList} /></>)
        }
      </Provider>
    )
  }
  componentDidMount() {
    axios.get("/mock/5ceb8bac32cfe337f96fe748/example/car#!method=get").then(({ data }) => {
      // console.log(data.data.items)
      this.setState({
        dataList: data.data.items
      })
    })
  }
}


export default App;
