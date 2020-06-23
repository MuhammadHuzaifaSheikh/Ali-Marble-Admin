import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class AdminMosaic extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Mosaic" collections='mosaic' imageType={2/2} />
            </div>

        );
    }
}

export default AdminMosaic;