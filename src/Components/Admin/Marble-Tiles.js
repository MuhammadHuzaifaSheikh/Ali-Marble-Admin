import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class MarbleTiles extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Tiles" collections='Tiles' imageType={2/2} />
            </div>

        );
    }
}

export default MarbleTiles;