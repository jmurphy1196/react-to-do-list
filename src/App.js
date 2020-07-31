import React, { Component } from 'react';
import ReactCenter from 'react-center';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDo from './components/ToDo';
import AddBtn from './components/AddBtn';
import WriteToDo from './components/WriteToDo';
import EditToDo from './components/EditToDo';

export default class App extends Component {
    constructor(props){
      super(props);

      this.state = {
          toDoList: [],
          completedToDoList: [],
          input: '',
          id: 0,
          popUp: false,
          close: false,
          edit: false
      };
    }

    getInput = (event) => {
     let newInput = event.target.value;

     this.setState(() => {
       return {
         input: newInput
       }
     }, () => console.log(this.state))
    }

    writePopUp = () => {

        let pop = null;
        let close = null;
        let edit = this.state.edit;
        if(this.state.popUp == false){  pop = true; close = true;} else {  pop = false; close = false; }
        if(this.state.oldDesc){
              
        this.setState(() => {

          return {
            popUp: false,
            close: false,
            edit: false,
            oldDesc: false
            
          }
        }, () => console.log(this.state));
        } else {
            
        this.setState(() => {

          return {
            popUp: pop,
            close,
            
            
          }
        }, () => console.log(this.state));

        }

    }

    addToDo = () => {
      if(this.state.input !== ''){
        if(this.state.input.length <= 20 ){
          let newToDoList = [...this.state.toDoList];
          let input = this.state.input;
          input = Array.from(input);
          input = input.map((el, ind) => {
            if(ind === 0){
              return el.toUpperCase();
            } else {
              return el;
            }
          });
          input = input.join('');
        let todo = {
          id: this.state.id + 1,
          desc: input
        }
        newToDoList.push(todo);
  
        this.setState(() => {
  
          return {
            toDoList: newToDoList,
            id: this.state.id + 1,
            input: '',
            close: false,
            popUp: false
          }
        }, () => console.log(this.state));
        }
      }

    }

    editToDo = (id) => {
        let newToDoList = [...this.state.toDoList];
        let index = newToDoList.findIndex(item => item.id === id);
        let oldDesc = newToDoList[index].desc;
        this.setState(() => {
          return {
            edit: true,
            close: true,
            idToEdit: id,
            oldDesc
          }
        })
    }
    submitEdit = () => {
      if(this.state.input !== '' ){
        if(this.state.input.length <= 20){
          let id = this.state.idToEdit;
          let newToDoList = [...this.state.toDoList];
          let index = newToDoList.findIndex(item => item.id === id);
          
          newToDoList[index].desc = this.state.input;
    
    
          this.setState(() => {
    
            return {
              toDoList: newToDoList,
              input: '',
              close: false,
              popUp: false,
              edit: false,
              idToEdit: null,
              oldDesc: false
            }
          }, () => console.log(this.state));
        }
      }
    }
    
    deleteToDo = (id) => {
      let newToDoList = [...this.state.toDoList];
      let index = newToDoList.findIndex(item => item.id === id); //index to delete todo from array

     newToDoList.splice(index, 1);

      this.setState(() => {
        return {
          toDoList: newToDoList
        }
      }, () => console.log(this.state))


    }
 
  render() {
    return (
      <React.Fragment>

        <div className='container container-main p-2 mx-auto my-3'>
      
         
          <div className='row'>
              <div className='col-md-12 mx-auto'>
                   <h1 className='text-center title'>todos</h1>
                   {this.state.toDoList.map(item => <ToDo key={item.id} data={item} edit={this.editToDo} del={this.deleteToDo}/>)}
              </div>
             
             


          </div>
        </div>

       
        <WriteToDo popUp={this.state.popUp} getInput={this.getInput} input={this.state.input} add={this.addToDo}/>
        <AddBtn popUp={false} activate={this.writePopUp} close={this.state.close}/>
        {this.state.edit === true ? <EditToDo desc={this.state.oldDesc} add={this.submitEdit} input={this.state.input} getInput={this.getInput} /> : null}

      </React.Fragment>
    )
  }
}
