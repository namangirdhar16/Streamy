import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm.js';

class StreamCreate extends React.Component{
   
    
   
    onSubmit = (formValues) =>
    {
      console.log(formValues);
      this.props.createStream(formValues);
      
    }
    
    render(){
        console.log(this.props);
        return (<div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit = {this.onSubmit} /> 
        </div>) ;
                 
    }
}

 
const validate = (formValues) => {
    
    const errors = {};
    if(!formValues.title)
    {
       errors.title = 'You must enter a title!';
    }
    if(!formValues.description)
    errors.description = 'You must enter a description';
    return errors;
}
// to connect both connect and reduxForm we can just use 

// export default connect(reduxForm({
//     form : 'streamCreate',
//     validate : validate 
// })(StreamCreate));

// using alternate syntax 

export default connect(null , { createStream })(StreamCreate);
