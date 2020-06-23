import React, {Component} from "react";
import storage from ".././Config";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import ProgressBar from "../Tools/ProgressBar";
import Cropper from "../Tools/Cropper";
import '.././Config'
import firebase from "firebase";
import './imageUploader.css'

var db = firebase.firestore();

var storageRef = storage.ref();

class ImageUploaderComp extends Component {

    state = {
        image: null,
        progress: 0,
        photoIndex: 0,
        isOpen: false,
        imageData: [],
    };


    componentDidMount() {
        db.collection(this.props.collections)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("New city: ", change.doc.data());
                        let data = change.doc.data();
                        data.id = change.doc.id;
                        let local=this.state.imageData
                        local.push(data);
                        this.setState({imageData: local});
                        console.log(this.state.imageData);

                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("Removed city: ", change.doc.data());
                        let local =this.state.imageData;


                        local.forEach((v, i) => {
                            if (v.id === change.doc.id) {
                                local.splice(i, 1);
                            }
                        });

                        this.setState({imageData: local});


                    }
                });
            });
    }

    handleUpload = () => {
        const {image} = this.state;
        var uploadTask = storage.ref().child(`${this.props.collections}/${this.state.blobs.name}`).put(this.state.blobs);

        uploadTask.on('state_changed', (snapshot) => {
            //Progress
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({progress:progress});
            //Progress

            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    alert('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, (error) => {
        }, () => {
            //getUrl
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                //getUrl
                //add images
                this.setState({progress:+''})
                this.setState({url: downloadURL})
                db.collection(this.props.collections).add({
                    imageUrl: this.state.url,
                    imageName: `${this.props.collections}/${this.state.blobs.name}`,
                }).then(() => {
                    alert("Document successfully written!");
                })
                //add images


            });


        });
    }


    blob = (e) => {
        this.setState({blobs: e})
    }
    deleteImages=(item)=>{
        console.log(item.id);
        db.collection(this.props.collections).doc(item.id).delete().then(()=> {
            alert("Document successfully deleted!");
        }).catch((error)=> {
            alert('error')
        });

        let desertRef = storageRef.child(item.imageName);

        desertRef.delete().then(()=> {
            console.log("File deleted successfully");
        }).catch((error)=> {
          alert(error.message)
        });

    }



    render(){
        const {photoIndex, isOpen} = this.state;

        return (

            <div className="center">
                <br/>
                <h2 className="green-text text">{this.props.folderName} Image Uploader</h2>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <div className="file-field input-field">
                    <div className="btn">
                        <Cropper upLoadImage={this.handleUpload} imageType={this.props.imageType} blob={this.blob}/>
                    </div>
                    <ProgressBar progress={this.state.progress}/>
                </div>

                <br/>
                <br/>
                <MDBContainer>
                    <div className="mdb-lightbox m-5">
                        <MDBRow>

                            {

                                this.state.imageData.map((item, index) => (
                                    <MDBCol md="4" key={index}>
                                        <figure>
                                            <button onClick={()=>this.deleteImages(item)}>Delete</button>
                                            <img
                                                src={item.imageUrl}
                                                alt="Gallery"
                                                className="img-fluid"
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                onClick={() =>

                                                    this.setState({photoIndex: 0, isOpen: true})
                                                }
                                            />
                                        </figure>
                                    </MDBCol>
                                ))}


                        </MDBRow>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default ImageUploaderComp;