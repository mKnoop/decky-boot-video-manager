import { VFC } from "react";

const VideoList: VFC = () => {
    const videos = ["test.mpv", "test99.mp4", "test.mkv", 'foobar.avi'];
    console.log('Init with dummy data');

    return (
        <ol>
            {videos.map((video: string) => (
                <li>{video}</li>
            ))}
        </ol>
    );
};

export default (( VideoList ));
