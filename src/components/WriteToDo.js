import React from 'react';
import styled from 'styled-components';

export default function WriteToDo(props) {
    let inputClass = '';
    let canSubmit = '';

        if(props.input == '' || props.input.length > 20){
            inputClass = 'form-control is-invalid'
        } else { inputClass = 'form-control is-valid'; canSubmit = 'submit'; }

        if(props.popUp === false){
            return null;
        } else {
            return (
                
                <WriteWrapper>

                        <div className='container'>
                            <div className='row'>
                                <div id='popUp' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                    <div className='form'>
                                    
                                    <input id={inputClass} name='todo' type='text' placeholder='write here...' className={inputClass} onChange={props.getInput}/>
                                    <button  onClick={props.add} id={canSubmit} className='btn'><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                                    </div>
                        
                                </div>
                            </div>
                        </div>

                </WriteWrapper>

            )

        }
    
   
}


const WriteWrapper = styled.div`

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;

        #popUp{
            background: white;
        }

        button{
            background-color: whitesmoke;
            position: absolute;
            top: 0;
            bottom: 1;
            left: 1;
            right: 0;
            margin-top: 3rem;
            margin-right: 2px;
            border-color: red;
            color: white;
            background-color: red;


        }
        #submit{
            border-color: green;
            background-color: green;
            color: white;
        }
       

     

`;