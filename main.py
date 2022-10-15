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