import React, {Component} from "react";
import ImageUploaderComp from "./ImageUploaderComp";


class AdminHome extends Component {


    render() {
        return (
            <div>
                <ImageUploaderComp folderName="Home/Portfolio" collections='home' imageType={2/2} />
            </div>

        );
    }
}

export default AdminHome;