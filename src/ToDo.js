import {Component} from 'react';
import image from './to-do-list.png';

export class ToDo extends Component {
    state = {
        userInput: "",
        toDoList: []
    }

    onChangeEvent (e) {
        this.setState({userInput:e})
    }

    addItem(input){
        if(input==="" || input===" "){
        }
        else{
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList:listArray, userInput:""})
    }
    }

    deleteItem(){
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList:listArray});
    }

    crosseWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return(
            <form onSubmit={this.onFormSubmit}>
            <div>
                <input type="text" placeholder="Какие планы на сегодня?"
                onChange={(e)=>{this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput} />
            </div>

            <div className='segment'>
                <button onClick={()=>this.addItem(this.state.userInput)}>Добавить</button>
            </div>

            <div className='segment'>
                <button onClick={()=> this.deleteItem()}>Удалить</button>
            </div>

            <ul>
                {this.state.toDoList.map((item,index)=>(
                <li onClick={this.crosseWord} key={index}>
                    <img src={image} width='20px' alt='список'/>{item}
                    </li>
                ))}
            </ul>

            </form>
        )
    }
}