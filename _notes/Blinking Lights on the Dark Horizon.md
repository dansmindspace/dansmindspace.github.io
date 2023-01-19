---
title: Blinking Lights on the Dark Horizon
date: 2023-01-09
toc: true
comments: true
stickied: false
tags: 12m12b P5js Art
---

![](../assets/img/Blinking%20Lights%20on%20the%20Dark%20Horizon%2029633.gif)

## Inspiration

When going out on late night walks, off in the distance I can see a set of four towers with blinking lights at their tops. These lights blink on and off at random, not synced from their neighbor. Were they ever synced? Why might there be four towers in close proximity, in a line? 

## Creating the Banner in p5js

I started by experimenting with getting a single tower to blink. To do that I first had to create the function to draw the tower. Keeping it simple, a tower is to lines that diverge towards the bottom, two overlapping red circles in the middle(red on darkred), then the top light. If the "state" is 0, a dark circle is drawn, if 1 a darkred circle with a smaller red circle, if 2 it matches the middle light. These states allow for the light to be off, turning on, fully on.

Next I worked out the code to update the state for each tower. I hard coded the initial parameters (90 frames, 50% duty cycle, 0 offset). The 90 frames represents a blinking rate of 20 times a minute at 30 frames per second. This matches the recommended rate for tower warning lights. Duty cycle refers to what percentage of the time the light will be on, in this case 45 frames. The offset is simply a time offset to allow for different start times.

Now for the math, I took the `current framecount` + `an arbitrary offset` (so even a static version looks interesting) + `the towers own offset`(which ranges from -5 to 5 frames) mod `the towers blink rate` all divided by `the towers blink rate`. What this all leads to is where the tower is currently at in its blink cycle. If the result is less than the duty cycle it is off, if it within the first 5% it is half on, else fully on. At the time of writing I realize I handled the duty cycles incorrectly in the code, so instead of being on 45% it is off 45% of the time. This does not change the outcome so I plan on leaving it as is.

Now for the randomness. I created 3 lists of applicable values that can be set for each part of the towers parameters. They boiled down to a range of 17 to 23 blinks per minute(adjusted for 30 frames per second), duty cycles ranging from 40% to 60% in increments of 5%(see the bug from above has no real effect on the outcome), and offsets ranging from -5 to 5 frames. 

After adding the finishing touches(getting the spacing right, adding the ground, stamping the monogram) I was ready to render the GIF. I got greedy, wanted to render a full minute. Ended up locking up my computer. No progress lost luckily. 45 seconds and 30 seconds happened to be too much for my aging laptop but no lock up. 20 seconds it is(well just under). Now to upload the banner...

Except trying to upload the GIF lead to Mastodon erroring out. Only upside is the animated Mastodon getting frustrated at their own computer. I message the admin for Mastodon.art so hopefully I will be able to resolve this issue soon. For the time being a static banner it is. Luckily the message to admin proved I could post the animated GIF in a post.