    import React from 'react';
    import styled from 'styled-components';

    const  ToDo = (props) => {

        const {desc, id} = props.data;
        console.log(desc)
        
        return (
        
        <ToDoWrapper>
        <div className='row p-2 my-5'>
            
                <div className='col-md-10 text-center bord'>
                    <h3 className=''>{desc}</h3>
                </div>
                <div className='col-md-2 col-sm-10 text-center'>
                    
                <i onClick={() => props.edit(id)} className="fa fa-pencil-square-o p-1" aria-hidden="true"></i>
                <i onClick={() => props.del(id)} className="fa fa-trash p-1" aria-hidden="true"></i>
                </div>
            </div>
            </ToDoWrapper>
        )
    }

    export default ToDo;

    const ToDoWrapper = styled.div`
        i{
            font-size: 2.5rem;
            color: white;

        }
        i:hover{
            cursor: pointer;
        }
        .fa-trash:hover{
            color: black;
        }
        .fa-pencil-square-o:hover {
            color: yellow;
        }
        h3{
            font-family: 'Nunito';
        }

    `;