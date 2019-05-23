---
layout: post
cover: false
navigation: false
title: Gtk3 EnhancedTreeView Log #1
date: 2019-05-22 18:25:00
tags: Gtk3
subclass: 'post tag-Gtk3'
author: Dan
categories: Dan
---

Today I moved a project I started this month into a local branch of my projects repository before starting on new code.  

The goal for todays coding session was to continue work on handling cell_background_rgba as part of the EnhancedTreeView.
So far, I have worked out how to subclass Gtk.TreeView, Gtk.TreeViewColumn, & Gtk.ListStore to add a column to the TreeModel used to represent the background rgba for each row. Doing so in this way works, but could lead to issues when others use the module in place of the default widgets. I was looking for a way to handle the background rgba data separetly from the user data but ended up burning a couple of hours.  

My aproach was to overide the __getitem__ and __setitem__ methods in the treemodelrow object returned by the treemodels __getitem__ method. After getting the methods working, I discovered the cell renderers don't use the Python methods to access the treemodels data. It uses the Gtk3 C function 'gtk_list_store_get_value'. As a last ditch effort, I overode the get_value method in my subclassed ListStore class but still no luck.  

Next I might have to look into subclassing the cell renderers as well. Before that I think I will fully implement cell_background_rgba for TreeStores(learning to deal with children).  

--Dan Dahl