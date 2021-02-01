import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

import { Link } from 'react-router-dom';





class StreamList extends React.Component{
    componentDidMount()
    {
        this.props.fetchStreams();
    }

    renderCreate()
    {
        if(this.props.isSignedIn)
        {
           return <Link to = "/streams/new" ><button style = {{position:'relative' , left : '500px'}} className = "btn btn-primary">Create Stream</button></Link>
        }
    }
    renderAdmin(stream)
    {   
        const path = `/streams/edit/${stream.id}`;
        const deletePath = `/streams/delete/${stream.id}`;
        if(this.props.currentUserId === stream.userId)
        return <><Link  to = {path} className = "btn btn-success">EDIT</Link><Link to = {deletePath} className = "btn btn-danger">DELETE</Link></>
    }
    renderList()
    {
        return this.props.streams.map((stream)=>{
            return (
                <div className = "list-group-item" key = {stream.id} >
                <div>
                <i className = "camera"></i>
                <div>title : <Link to = {`/streams/${stream.id}`} >{stream.title}</Link> </div>
                <div>description : {stream.description}</div>
                <div>{this.renderAdmin(stream)}</div>
                </div>
                
                </div>
            )
        })
    }
    render()
    {   
        console.log(this.props.streams);
        return <div>
           <div className = "list-group">Stream List</div>
           {this.renderList()}
           {this.renderCreate()}
        </div>
    }
}

const mapStateToProps = (state) => {
    return { streams : Object.values(state.streams) , currentUserId: state.auth.userId , isSignedIn : state.auth.isSignedIn};
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);



//export default StreamList;