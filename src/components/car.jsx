import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import Actions from "../store/Actions"

class Car extends Component {
    list = []
    topList = []
    render() {
        let { dataList } = this.props
        return (
            <div className="content" ref="content">
                <div className="scroll_box" ref="scrollbox">
                    {
                        dataList.length && dataList.map((item, index) => <div key={index} className="con">
                            <h2 ref={(e) => {
                                if (this.topList.length === index) {
                                    this.topList.push(e.offsetTop)
                                    this.list.push(e)
                                }
                            }}>{item.key}</h2>
                            {
                                item.row.map((item, index) => <p key={index}>
                                    <img src={item.img} alt="" />
                                    <span>{item.name}</span>
                                </p>)
                            }
                        </div>)
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.myBScroll = new BScroll(this.refs.content, {
            probeType: 3
        })

        this.topList.concat([this.refs.scrollbox.offsetHeight])
        this.myBScroll.on("scroll", (e) => {
            const scrolltop = Math.floor(Math.abs(e.y))
            this.topList.forEach((item, ind) => {
                if (scrolltop > item && scrolltop < this.topList[ind + 1]) {
                    this.props.getIndex(ind)
                }
            })
        })
    }
    componentDidUpdate() {
        let { num } = this.props
        this.list.forEach((item, i) => {
            if (num === i) {
                this.myBScroll.scrollToElement(item)
            }
        })
    }
}

const mapStateToProps = (state) => {
    return {
        num: state.num
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)


