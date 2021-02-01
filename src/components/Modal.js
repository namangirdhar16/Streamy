import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import history from '../history';
import { hasSubmitFailed } from 'redux-form';
import { Link } from 'react-router-dom';


const Modal = (props) => {
    return ReactDOM.createPortal(
       <div className = "Modal" onClick = {props.onDismiss}> 
           <div onClick = {(e)=>e.stopPropagation()} className = "Modal-content">
               <h1 clasName = "heading">{props.title}</h1>
               <div >{props.content}</div>
               <Link onClick = {props.onDelete}className = "btn btn-primary Modal-button">{props.action}</Link>
               <Link to = "/" className = "btn btn-danger Modal-button">Cancel</Link>

           </div>
       </div>
        ,
        document.querySelector('#modal')
    );
}

export default Modal;