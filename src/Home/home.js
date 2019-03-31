import React,{Component} from "react"
import './home.css'
export default class Home extends Component{
    render(){
        return (
            <div className="header">
                <img className="banner" src="/imgs/banner.jpeg" alt=""/>
                <h1>Once you've accepted your flaws, no one can use them against you.</h1>
            </div>
        )
    }
}