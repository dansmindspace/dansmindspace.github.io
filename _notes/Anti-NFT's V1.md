---
title: Anti-NFT's V1
date: 2022-02-03
toc: true
comments: false
stickied: false
tags: [Art, NFT]
---
Version 1 - February 3 2022

## Overview

This project was inspired by the YouTube Documentary [Line Goes Up – The Problem With NFTs](https://www.youtube.com/watch?v=YQ_xWvX1n9g) by [Folding Ideas](https://www.youtube.com/channel/UCyNtlmLB73-7gtlBz00XOQQ). In the video, he talks about the entire history and process of making, distributing, and buying NFT's, along with the controversies and pitfalls associated with them. I was interested in the how the images were generated and wanted to recreate that process, just without ever minting a NFT on the blockchain.

In this first version I plan on keeping it simple and making a program in the P5js web editor that will randomize a selection of colours on an image to generate a unique version each time. Link to the mostly finished project here: [ChooChooBot Anti-NFT](https://editor.p5js.org/LostSorcerer/full/Q6v60lCvs)

## Part 1 - Preparing the Images
First thing I did was select an image to use that was simple in design with a number of sections to colour in. The ChooChooBot from [The Coding Trains Slide Puzzle](https://www.youtube.com/watch?v=uQZLzhrzEs4&t=1050s) was a perfect candidate.

![](../assets/img/choochoobot.png#center)

With permission from Daniel Shiffman, I have edited the image so there are 10 unique coloured sections. I replaced the default colours with various shades of grey to ensure each section is unique. I made the background transparent so I can change the background colour as the process happens. I also made sure the greys in the body section don't match up with the greys in the wheels.

![](../assets/img/choochoobot2.png#center)

Next up is to remove the numbers from the ChooChooBots front panel and make a number sheet so the seed can be displayed on the image.

![](../assets/img/choochoobot%20clean.png#center)

Creating the number sheet will require cutting the existing number sequence into the individual numbers. The numbers 2, 6, 8, 0 are not present so they will have to be created using the segments available. 2 & 6 are easy, flip the 5 horizontally, flip the 9 both vertically & horizontally.

In the end I needed to rework the 1 & 4 as they were not to the same proportions as the other digits.

![](../assets/img/Numbers.png#center)

## Part 2 - P5js

This is my first project using P5js (or JavaScript in general). I have however watched enough Coding Train to hopefully piece together a working project.

Over the course of a few hours, listening to The Zed 98.9 with their online web player, I hashed out a first pass at my idea. 

After doing the basics of displaying the image and setting up the files, I worked out a simple way of displaying the seed on the ChooChooBots front panel.

```javascript
function display_seed() {
  let sseed = String(seed)
  let pos = 0
  for (let c of sseed) {
    c = int(c)
    sx = 1 + (c * (23 + 3))
    sy = 1
    sw = 23
    sh = 32
    dx = 125 + (pos * (23 + 2))
    dy = 297
    dw = sw
    dh = sh
    copy(numbers, sx, sy, sw, sh, dx, dy, dw, dh)
    pos++
  }
}
```

Working out the positioning with a little trial and error, the seed value looks great.

Next I implemented a simple reveal method where the the colours will start to fill in the bot from top down. I ended up running into a few issues. Turns out the `loadJSON` function returns an array like object without the `indexOf` function. After sorting that out by first writing my own `indexOf` function, I went back and just used the original object to initialise a new array.

Another bug that I am currently unable to solve is `getURLParams` currently does not work with the full screen share links. Not sure how I will implement a way for the user to input their own seeds, but hopefully the problem is solved soon.

Everything else worked out easily enough, with lots of checking references, and I think the results are fairly great. The colour pallet is randomly generated at the start of the sketch using the seed, the ChooChooBot gets filled in, and then the sketch stops with a fully coloured in bot on a randomly selected background colour proudly displaying the seed.

The current method is a little slow, not sure if it is an optimisation issue or a browser one. Did end up calibrating it so only the sections to be coloured are checked.

## Part 3 - My Favourite Results
![](../assets/img/ChooChooBot%20-%20244089.png#center)

![](../assets/img/ChooChooBot%20-%2038219.png#center)

![](../assets/img/ChooChooBot%20-%20149503.png#center)

![](../assets/img/ChooChooBot%20-%20280222.png#center)

![](../assets/img/ChooChooBot%20-%20487421.png#center)

![](../assets/img/ChooChooBot%20-%20753634.png#center)

![](../assets/img/ChooChooBot%20-%20917704.png#center)

## Final Thoughts
Prepping the images took some work especially since I am not an artist or graphic designer. So the images have some artifacts where the original background met up with a curve, the digits aren't always centred, the colours are unconstrained. This adds to the charm that NFT's themselves are not perfect. This took a full evening of work but I am happy with the results. Next steps are to add additional reveal methods. Future versions may allow for full image compositing but that is a journey for another day.