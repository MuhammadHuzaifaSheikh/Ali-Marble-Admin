import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class AdminVanity extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Vanity & Granite" collections='vanity' imageType={16/9} />
            </div>

        );
    }
}

export default AdminVanity;