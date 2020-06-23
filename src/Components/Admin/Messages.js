import React, {Component} from "react";
import firebase from "firebase";
import Table from "react-bootstrap/Table";

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

var db = firebase.firestore();


class Messages extends Component {

    state = {
        messages: [],
    }


    componentDidMount() {
        db.collection("message")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("New city: ", change.doc.data());
                        let data = change.doc.data()
                        data.id = change.doc.id
                        let local = this.state.messages
                        local.push(data)
                        this.setState({messages: local})
                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        let local = this.state.messages;
                        local.forEach((v, i) => {
                            if (v.id === change.doc.id) {
                                local.splice(i, 1);
                            }
                        });

                        this.setState({message: local});
                    }
                });
            });
    }

    deleteMessage = (item) => {
        db.collection("message").doc(item.id).delete().then(() => {
            console.log("Document successfully deleted!");


        });
    }


    render() {
        let tableStyle = {
            margin: '40px'
        }
        let mainDiv={
            textAlign:'center',
        }

        return (

            <div style={mainDiv}>

                <h1>Table</h1>

                <Table style={tableStyle} striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Messages</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>


                    {this.state.messages.map((item, index) => (


                        <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td>
                                {item.subject}
                            </td>
                            <td>
                                {item.message}
                            </td>
                            <td>
                                <Tooltip title="Delete">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon onClick={()=>this.deleteMessage(item)}/>
                                    </IconButton>
                                </Tooltip>
                            </td>


                        </tr>

                    ))}


                    </tbody>
                </Table>


            </div>
        )
    }
}

export default Messages