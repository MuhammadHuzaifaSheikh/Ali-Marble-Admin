import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class KitchenTop extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Kitchen Top" collections='kitchenTop' imageType={16/9} />
            </div>

        );
    }
}

export default KitchenTop;