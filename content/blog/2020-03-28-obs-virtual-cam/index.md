---
title: 'Using OBS video output as a virtual webcam'
date: '2020-03-28'
description: 'obs-virtual-cam provides an interface where you can take the video output and convert it into a virtual webcam for apps like Skype or Zoom'
keywords:
  - OBS
status: fully-grown
---

<Warning>
Update as of 2020: OBS has implemented this across Windows, Mac, and Linux directly into OBS as of 26.0.0. That said, it only provides a single source so this can be useful if you want to stream to multiple virtual cameras.
</Warning>

When I livestream on Twitch, I have setup various sources to add in overlays, added filters to my camera, and have the ability to switch between various scenes in OBS. Though, I can't pull all of these things out to be used in an app like Skype. With the use of a OBS plugin, You can make OBS act as a webcam. CatxFish on GitHub created an OBS plugin called [obs-virtual-cam](https://github.com/CatxFish/obs-virtual-cam) which installs virtual webcams which can playback your video output coming from OBS. It requires you have at least OBS 24.0.0 installed.

In the releases tab in GitHub, there is an installer which will install the various drivers and plugin needed for this to work. Once you install it, if you go to the tools menu bar in OBS, there is a VirtualCam option.

![tools dropdown in OBS showing VirtualCam](./obs-tools-dropdown.png)

Inside it, it will show some options on if it should autostart when you open OBS or if you want to flip the output horizontally. What is important is you will have a target camera which was created when the plugin was installed. Depending on the install, you can have either one or multiple of these running at the same time.

![VirtualCam interface](./virtualcam.png)

Then when you hit the `start` button on the bottom, it is now ready to go. If you open an app like Zoom and configure your video, on top of the webcam you are using, you can choose the name of that camera output specified in VirtualCam, in this case `OBS-Camera`, and it will present the video output coming from OBS. Now all of the functionality in OBS will be available to be used in other apps as if it was just another webcam on your system.
