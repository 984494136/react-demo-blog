import React, { Component } from "react"
import List from '../List/list'
class Index extends Component {
    constructor() {
        super()
        this.state = {
            obj: [
                {
                    title: "标题",
                    time: "2019/03/31",
                    text: "今天天气真好"
                },
                {
                    title: "标题1",
                    time: "2019/04/01",
                    text: "这天真蓝"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.obj.map((item, i) => {
                    return <List key={i} id={i} title={item.title} time={item.time} text={item.text}></List>
                })}
            </div>
        )
    }
}
export default Index