import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
// import ".././Admin/protfolio.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '.././Config';

import firebase from "firebase";

const images = [

];


var db = firebase.firestore();


class Image_gallery extends React.Component {
    state = {
        isOpen: false,
        imageData:[],

    };

        componentDidMount() {


            // load Images
            db.collection(this.props.collections)
                .onSnapshot((snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                            let data = change.doc.data();
                            data.id = change.doc.id;
                            let local = this.state.imageData
                            local.push(data);
                            images.push(data.imageUrl)
                            this.setState({imageData: local});
                            console.log(images);

                        }
                        if (change.type === "modified") {
                        }
                        if (change.type === "removed") {
                            alert("Delete Successfully");
                            let local = this.state.imageData;


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


    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
                <MDBContainer>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>{this.props.heading}</h1>

                    <div className="mdb-lightbox no-margin">
                        <MDBRow>

                            {   this.state.imageData.map((item, index) => (
                                <MDBCol md="4" key={index}>
                                    <figure>
                                        <img
                                            src={item.imageUrl}
                                            alt="Gallery"
                                            className="img-fluid"
                                            onClick={() =>
                                                this.setState({ photoIndex: 0, isOpen: true })
                                            }
                                        />
                                    </figure>
                                </MDBCol>
                            ))}


                        </MDBRow>
                    </div>

                    {isOpen && (

                        <Lightbox
                            mainSrc={images[(photoIndex) % images.length]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length
                                })
                            }
                        />
                    )}
                </MDBContainer>

            </div>
        );
    }
}

export default Image_gallery;