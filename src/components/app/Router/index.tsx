import {VFC} from "react";
import { SidebarNavigation } from "decky-frontend-lib";
import VideoList from "../../organism/VideoList";

const VideManagerRouter: VFC = () => {
    return (
        <SidebarNavigation
            title="Video Manager"
            showTitle
            pages={[
                {
                    title: "Browse Videos",
                    content: <VideoList/>,
                    route: "/video-manager/browser",
                }
            ]}
        />
    );
};

export default (( VideManagerRouter ));

