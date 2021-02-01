import React from 'react';

import { Field , reduxForm } from 'redux-form';



class StreamForm extends React.Component{
   
    renderError({meta:{error , touched}}) 
    {
        if( touched && error)
        return ( <p >
            {error}
        </p>);
       
    }

    renderInput(formProps)
    {  
       console.log(formProps);
       const { meta } = formProps;
       console.log(meta);
       console.log(formProps.input.value);
       //return <input onChange = {formProps.input.onChange} 
             // value = {formProps.input.value} />
       
        return <div>
            <input {...formProps.input}  autoComplete = "off"/>
            <p>{()=>this.renderError(formProps)} </p>
        </div>;

    }

    onSubmit = (formValues) => 
    {
      console.log(formValues);
      this.props.onSubmit(formValues);
      
    }
    
    render(){
        console.log(this.props);
        return (<div>
                  <form onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                      <Field name = "title" component = {this.renderInput}  />
                      <Field name = "description" component = {this.renderInput} />
                      <button type = "submit" className = "btn btn-primary">Submit</button>
                  </form>
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
export default reduxForm({
    form : 'streamForm',
    validate : validate 
})(StreamForm);

