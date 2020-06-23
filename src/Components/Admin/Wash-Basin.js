import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class WashBasin extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Wash Basin" collections='washBasin' imageType={2/2} />
            </div>

        );
    }
}

export default WashBasin;