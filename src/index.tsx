import {
    ButtonItem,
    definePlugin,
    PanelSection,
    PanelSectionRow,
    ServerAPI,
    staticClasses,
    Router
} from "decky-frontend-lib";
import { RiPaintFill } from "react-icons/ri";
import { VFC } from "react";
import VideManagerRouter from "./components/app/Router";

const Content: VFC<{ serverAPI: ServerAPI }> = ( serverApi) => {
    return (
        <PanelSection title="Videos">
            <PanelSectionRow>
                <ButtonItem
                    layout="below"
                    onClick={() => {
                        Router.CloseSideMenus();
                        Router.Navigate("/video-manager");
                    }}
                >
                    Manage Videos
                </ButtonItem>
            </PanelSectionRow>
        </PanelSection>
    );
};

export default definePlugin((serverApi: ServerAPI) => {
    serverApi.routerHook.addRoute("/video-manager", () => (
        <VideManagerRouter />
    ));

    console.log('Start Plugin')

    return {
        title: <div className={staticClasses.Title}>Custom Boot Video Manager</div>,
        content: (
            <Content serverAPI={serverApi} />
        ),
        icon: <RiPaintFill />,
    };
});