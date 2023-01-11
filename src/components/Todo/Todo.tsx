import React, { Component } from "react";
import {v4} from 'uuid' 
import { List } from "../List/List";

import './Todo.css'

interface TodoProps{}
interface TodoState{
    task:string,
    items: any[]
}

export class Todo extends Component<TodoProps, TodoState>{

    constructor(props:TodoProps, state:TodoState){
        super(props)
        //establecer el estado inicial
        this.state = {
            task: '',
            items: []
        }
    }

    render() {
        return(
            <div className="Todo">
                <h1>Nueva tarea:</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.task} onChange={this.handleOnChange}/>
                </form>

                <List 
                    items={this.state.items} 
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}/>
            </div>
        )
    }

    componentWillMount(): void {
        //rellenar
        const storage = window.localStorage;

        this.setState({
            items: JSON.parse(localStorage.getItem('items') || '[]')
        })
    }

    handleOnSubmit = (e: any) =>{
        e.preventDefault();

        if(this.state.task.trim() != ''){
            const newState = {
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: v4(),
                        task: this.state.task,
                        completed: false
                    }
                ]
            }

            this.setState(newState);
            this.updateStorage(newState.items)
        }

    }

    handleOnChange = (e:any) => {
        const { target : {value} } = e

        this.setState( {task: value} )
    }

    markAsCompleted = (id:string) => {

        const foundTask = this.state.items.find( (task) => {
            return task.id == id;
        });

        const newState = {
            items: [
                ...this.state.items.map( (item) => {

                    let result = {...item};

                    if(result.id == foundTask.id){
                        foundTask.completed = true;
                        result = foundTask;
                    }

                    return result
                }),
            ]
        }
        
        this.setState(newState);
        this.updateStorage(newState.items)
    }

    removeTask = (id:string) => {

        const filteredTasks = this.state.items.filter( (task) => {
            return task.id != id;
        });

        const newState = {
            items: filteredTasks
        }

        this.setState(newState);

        this.updateStorage(newState.items)
    }

    updateStorage = (info:any[]) => {
        console.log('updating', info)
        const storage = window.localStorage;
        storage.setItem('items', JSON.stringify(info));
    }
}