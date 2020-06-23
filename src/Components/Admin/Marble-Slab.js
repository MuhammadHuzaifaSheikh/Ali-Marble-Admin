import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class MarbleSlab extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Slab" collections='Slab' imageType={16/9} />
            </div>

        );
    }
}

export default MarbleSlab;