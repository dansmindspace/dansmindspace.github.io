---
layout: post
cover: false
navigation: false
title: Gtk3 EnhancedTreeView Log 2 Huge Success
date: 2019-05-30 20:50:00
tags: Gtk3
subclass: 'post tag-Gtk3'
author: Dan
categories: Dan
---

Today I stumbled onto a major breakthrough when Googling "python gtk3 insert liststore into treestore". I was looking to see if there was a way to add a ListModel as a child of a TreeModel row as a quick way to build a TreeModel quickly. However I found a <a href="https://stackoverflow.com/questions/11178743/gtk-3-0-how-to-use-a-gtk-treestore-with-custom-model-items">StackOverflow link</a> that demonstrated how to implement custom "cell_data_func" functions to set cell properties. This discovery now lets me set the "cell_backround_rgba" for each row without needing to store the rgba value in the model. 

I also worked out how to get the cell renderers in a Gtk.TreeViewColumn by calling the "get_cells" method. This now means all the code required for my EnhancedTreeView is handled without needing to subclass any of the other components used by it.

Also the other day I did implement code for handling depth. May play around with other options as my current method looks best with different color pairs for each depth. 

Pushed working EnhancedTreeView code to <a href="https://github.com/dansmindspace/projects/tree/master/GT3-EnhancedTreeView">Github</a>

--Dan Dahl