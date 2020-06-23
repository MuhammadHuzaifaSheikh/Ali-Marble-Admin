import ReactDOM from 'react-dom';
import React, {PureComponent} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import './Cropper.css';

class Cropper extends PureComponent {
    state = {
        src: null,
        crop: {
            unit: '%',
            width: 30,
            aspect: this.props.imageType,
        },
        fileName: '',

    };

    onSelectFile = e => {

        if (e.target.files && e.target.files.length > 0) {

            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({src: reader.result})
            );
            reader.readAsDataURL(e.target.files[0]);
            this.setState({fileName: e.target.files[0].name, isHiddenCropper: false})
        }

    };






    // If you setState the crop in here you should return false.
    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({crop});
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                this.state.fileName || 'fileName',
            );
            this.setState({croppedImageUrl});
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {


                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                this.props.blob(blob)
                console.log(blob);
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, 'image/jpeg');
        });



    }

    isHiddenCropper=()=>{

        this.setState({isHiddenCropper:true})
        this.props.upLoadImage()
    }




    render() {
        const {crop, croppedImageUrl, src} = this.state;
        return (
            <div className="App">
                <div className=" divInput file btn btn-lg btn-primary">
                    Choose File
                    <input  className='inputFile' type="file" accept="image/*" onChange={this.onSelectFile}/>
                </div>
                <div>

                </div>
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                        style={this.state.isHiddenCropper?{display:'none'}:{display:'flex'}}

                    />
                )}
                {croppedImageUrl && (
                    <img alt="Crop"
                         src={croppedImageUrl}
                         style={this.state.isHiddenCropper?{display:'none'}:{width: '100%', height: 'auto', display: 'inlineBlock'}}

                    />



                )}

                <button
                    style={this.state.isHiddenCropper?{display:'none'}:{display:'flex'}}

                    onClick={   this.isHiddenCropper}
                    className="uploadBtn waves-effect waves-light btn-lg btn btn-primary"
                >
                    Upload
                </button>
            </div>
        );
    }
}

export default Cropper