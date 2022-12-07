---
title: Anti-NFT's V1.5
date: 2022-02-12
toc: true
comments: true
stickied: false
tags: Art, NFT, P5js
---

## Overview

This version of my [Anti-NFT's V1](../_notes/Anti-NFT's%20V1.md) allows  anyone to setup their own images to be pallet swapped. 

## GitHub for assets

This part is important for scaling up this project. Anyone who wants to be able to make use of my Anti NFT's V1.5 Color Pallet Swap Generator can simply set up a repo on GitHub with the name `anti-nfts-v1.5-assets` and set up sub-directories for each image they want to use. To create their own Anti-NFT, they just have to add a prepared image, `asset.json` file, and optionally a number sheet image.

The `asset.json` file is the key to everything. The contents contain all the variables needed, including the base color pallet, name of the Anti-NFT, calibration values. If the creator wants to omit the numbers section of the Anti-NFT, they don't have to include the `numbers_calibration` dictionary in the `asset.json` file.

After copying the original project, changing everything over took some work. A few errors and typos later I have a working sketch. Turns out GitHub does not give the json file the correct mime type so adding `?callback=?` forces P5js to evaluate the file type for itself.

Example GitHub: [anti-nfts-v1.5-assets](https://github.com/dansmindspace/anti-nfts-v1.5-assets)

## Custom Embeds

So far it seems there is no workaround for the `getURLParams` issue in the P5js web editor. I have tried embedding the URL parameters in the embed iframe source, but no dice. This makes the feasibility of this project drop significantly. 

The frame in this post: 
```html
<iframe src="https://editor.p5js.org/LostSorcerer/full/gAj7GTCUX?seed=123" width="404" height="490" markdown = "0"></iframe>
```


<iframe src="https://editor.p5js.org/LostSorcerer/full/gAj7GTCUX?seed=123" width="404" height="490" markdown = "0"></iframe>

Unless I can work out a way to expose the githubuser and source variables, there won't be a way to allow others to create and share their Anti-NFT's without them also having to clone and edit the sketch. Maybe it is time to consider moving over to https://openprocessing.org/

## Additional Reveals

In this version I have made it so additional reveals are easy to add. First thing I did was move the reveal code to its own file. Afterwords I added a second reveal function (section_reveal). I also renamed the original reveal function from simple_reveal to scan_reveal. The final touch was adding the entry point function that will randomly select one of the implemented reveals each time the sketch is loaded.

## For the time being...

I will be setting this project to the side for the time being. Hopefully I will figure out how to handle the URL Parameters issue, but for the time being it would be best to switch to another project to keep the juices flowing.




