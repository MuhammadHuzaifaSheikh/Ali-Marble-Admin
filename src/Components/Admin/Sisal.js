import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class Sisal extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Sisal" collections='sisal' imageType={2/2} />
            </div>

        );
    }
}

export default Sisal;