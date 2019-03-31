import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";
import './list.css'
class List extends Component{
    static propTypes={
        title:PropTypes.string,
        time:PropTypes.string,
        text:PropTypes.string
    }
    handleClick(id){
        this.props.history.push("/about/"+id)
    }
    render(){
        const {title,time,text,id}=this.props
        console.log(this.props)
        return(
            <div onClick={this.handleClick.bind(this,id)}>
                <h6>{title}</h6>
                <span>{time}</span>
                <p>{text}</p>
            </div>
        )
    }
}
export default withRouter(List)