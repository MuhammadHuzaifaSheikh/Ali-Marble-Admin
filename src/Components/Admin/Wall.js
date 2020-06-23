import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class Wall extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Wall" collections='wall' imageType={16/9} />
            </div>

        );
    }
}

export default Wall;