import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class Floaring  extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Floaring " collections='Floaring ' imageType={2/2} />
            </div>

        );
    }
}

export default Floaring;