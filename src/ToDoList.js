import React , { Component,Fragment } from 'react'
import PropTypes from 'prop-types'

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                {/* 这是注释 */}
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.submitValue.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index} onClick={this.deleteValue.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    submitValue(){
        // this.state.list.unshift(this.state.inputValue)
        this.setState({
            list: [this.state.inputValue,...this.state.list],
            inputValue: ''
        })
    }
    deleteValue(index){
        //immutable概念：state不允许我们做任何的改变

        let list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list
        })

        //不允许如下操作  以下操作也可以实现，但会导致性能优化出现问题
        // this.state.list.splice(index,1)
        // this.setState({
        //     list: this.state.list
        // })
    }
}
export default ToDoList
