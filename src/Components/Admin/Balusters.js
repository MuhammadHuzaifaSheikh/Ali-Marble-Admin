import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";
class Balusters extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp  folderName="Balusters" collections='balusters' imageType={16/9} />
            </div>

        );
    }
}

export default Balusters;