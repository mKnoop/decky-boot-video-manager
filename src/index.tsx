import {
    ButtonItem,
    definePlugin, Menu, MenuItem,
    PanelSection,
    PanelSectionRow,
    ServerAPI, showContextMenu,
    staticClasses
} from "decky-frontend-lib";
import {useEffect, useState, VFC} from "react";
import { FaShip } from "react-icons/fa";

interface AddMethodArgs {
}

const VideList: VFC<{ }> = ({ result }) => {
    return (
        <Menu label="Videos" cancelText="Cancel" onCancel={() => {}}>
            {result.map((video: string) => (
                <MenuItem onSelected={(e) => {console.log(e)}}>{video}</MenuItem>
            ))}
        </Menu>
    );
};

const Content: VFC<{ serverAPI: ServerAPI }> = ({ serverAPI }) => {
    const [result, setResult] = useState<number | undefined>();

    useEffect(() => {
        console.log('load data');
        const fetchData = async () => {
            // get the data from the api
            const data = await serverAPI.callPluginMethod<AddMethodArgs, number>(
                "getVideos",
                {}
            );
            if (data.success) {
                setResult(data.result);
            }
        }

        fetchData().catch(console.error);
    }, [])

    return (
        <PanelSection title="Panel Section">
            <PanelSectionRow>
                <ButtonItem
                    layout="below"
                    onClick={(e) =>
                        showContextMenu(
                            <VideList result={result}/>,
                            e.currentTarget ?? window
                        )
                    }
                >
                    Load Videos
                </ButtonItem>
            </PanelSectionRow>
        </PanelSection>
    );
};

export default definePlugin((serverApi: ServerAPI) => {
    console.log('Start Plugin')

    return {
        title: <div className={staticClasses.Title}>Custom Boot Video Manager</div>,
        content: (
            <Content serverAPI={serverApi} />
        ),
        icon: <FaShip />,
    };
});