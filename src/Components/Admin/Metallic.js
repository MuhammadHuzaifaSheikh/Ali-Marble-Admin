import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class Metallic  extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="metallic " collections='metallic ' imageType={2/2} />
            </div>

        );
    }
}

export default Metallic;