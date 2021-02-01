import React from 'react';
import Modal from '../Modal.js'
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { StaticRouter } from 'react-router-dom';


class StreamDelete extends React.Component{
    
    componentDidMount()
    {
        console.log(this.props);
        fetchStream(this.props.match.params.id);
    }
    renderContent(){
        if(!this.props.stream)
        return 'Are you sure you want to delete the stream?';
        
        return `Are you sure you want to delete the stream with title : ${this.props.stream.title} ?`;
    }
    render()
    {
        return (
            <div>
                Stream Delete 
                <Modal 
                title = "Delete"
                content = {this.renderContent()}
                action = "Delete"
                onDismiss = {()=>history.push('/')}
                onDelete = {()=>this.deleteStream(this.props.match.params.id)}

                />
            </div>
        )
    }
   
}

const mapStateToProps = (state , ownProps) => {
    
   console.log(state);
   return {
       stream : state.streams[ownProps.match.params.id]
   }
}

export default connect(mapStateToProps)(StreamDelete);