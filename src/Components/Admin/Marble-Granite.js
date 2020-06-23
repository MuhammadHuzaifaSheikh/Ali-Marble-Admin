import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class MarbleGranite extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Marble & Granite" collections='marbleGranite' imageType={2/2} />
            </div>

        );
    }
}

export default MarbleGranite;