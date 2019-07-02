import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import Actions from "../store/Actions"

class Right extends Component {
    render() {
        let { dataList,num } = this.props
        return (
            <div className="right-box">
                {
                    dataList.length && dataList.map((item, index) => <b key={index} onClick={() => this.activeChange(index)} className={index === num ? 'active' : ''} >{item.key}</b>)
                }
            </div>
        )
    }
    activeChange(index){
        this.props.ChangeFn(index)
    }
}

const mapStateToProps = (state) => {
    return {
        num: state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Right)