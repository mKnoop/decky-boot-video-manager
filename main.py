import glob
import os

class Plugin:
    # A normal method. It can be called from JavaScript using call_plugin_function("method_1", argument1, argument2)
    async def getVideos(self):
        videos = []
        for file in list(glob.glob("/home/deck/Videos/Boot Videos/*.webm")):
             videos.append(os.path.basename(file))
        return videos

    # Asyncio-compatible long-running code, executed in a task when the plugin is loaded
    async def _main(self):
        pass

    async def setVideo(self, video):
        video_path = f'/home/deck/.steam/root/config/uioverrides/movies/deck_startup.webm'
        if os.path.islink(video_path) or os.path.exists(video_path):
            os.remove(video_path)

        os.symlink(f'/home/deck/Videos/Boot Videos/' + video, video_path)