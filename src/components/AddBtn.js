import React from 'react';
import styled from 'styled-components';

export default function AddBtn(props) {
    let close = props.close;
    let wrappingClass = null;

    if(close === false){  wrappingClass = '' } else { wrappingClass = 'closing-wrapper'}
   
    if(props.popUp === true){
        return null;
    } else {   
        
        return (
            <AddBtnWrapper className={wrappingClass }>
             {close === false ? <i className="fa fa-plus-circle" aria-hidden="true" onClick={props.activate}></i> : 
                <i id='close' className="fa fa-plus-circle" aria-hidden="true" onClick={props.activate}></i>   }
            </AddBtnWrapper>
    )
}
}

const AddBtnWrapper = styled.div`
        z-index: 1; 

        font-size: 3.5rem;
        .fa{
            color: white; 
            background: radial-gradient(red 50%, transparent 50%);
           
                }
       
        position: fixed;

        bottom: 0;
        right: 0;

        margin-right: 10px;
        i{
            transition: .5s ease-out;
        }

        i:hover{
            margin-bottom: 20px;
            filter: saturate(100%);
            cursor: pointer;
        }

        #close{
            font-size: 3.5rem;
            transition: .5s ease-out;
            transform: rotate(45deg);
            color: white !important;
            
            
            background: radial-gradient(red 50%, transparent 50%) !important;
            
            padding: 0;
            margin: 0;
           
        }
        #close:hover{
            margin-bottom: 20px;
            color: red;
            cursor: pointer;
        }
        
       
       
        background: transparent(100%);

        
`;