---
slug: welcome
title: My Apache way
authors: [CheverJohn]
tags: [Hello world, Open-source]
---
![七牛云 & 中文](http://cdn.mr8god.cn/img/chinese.svg)

# Let's talk about the open source philosophy

## Overview

Problem first: What is “Open Source” in Apache APISIX?
The idea started with an experimental workshop for university students I did last Friday.
It was a nice friday, I was very excited to talk to them about how I could contribute to the apache project (in this case, APISIX) until they asked this thought-provoking question.
Oh, yeah. That's a good question. But I'm doing this out of an instinctive drive to bring something different to the world, that's all, and who knows the real reason behind that action?
I admit I didn’t think too deeply about it and “just do it” is my principle.
That was a confusing friday :(

I thought about it for a week, and then I came up with this article :)

<!--truncate-->
About this document
I will talk with you about three aspects of “My thinking”, “Good book recommendation”, “how to contribute”.
Welcome to add your own idea into this document :-)

First let me express my thanks to The Cathedral and the Bazaar and the ASL Beijing Organization Article, it was very inspiring for me !!!

## Goal
Make that students who are not sure about open source can have a basic understanding.
Make the APISIX community have more contributors. (That is a meaningful thing!)
Take a little break from your coding journey to talk about something interesting :P

## My Thinking
As the classic saying "a thousand people have a thousand Hamlets", even if you ask AFS members what is "The Apache Way", they may give a thousand strange answers.
But at the same time, the official summary of many senior open source developers from the point of view of some things out (at least this is how I understand the official meaning of Apache).

### WHAT MAKES THE APACHE WAY SO HARD TO DEFINE?

So what's stopping us from defining the precise guidelines for how Apache should behave? (Repeating the title for emphasis)
As you can see from the surface of Apache, the Apache Code of Conduct is a microcosm of the development process of the various communities within it. To understand Apache's code of conduct, you have to start by understanding the communities, large and small, within Apache.
The Apache project and its communities are unique and diverse. The main focus is on the life cycle of the project and the set of actions that go into it. Such actions range from fostering the community (whether it's training technical people or evangelists), to uncovering better code, to building awareness of the project. In short, Apache is more focused on the project, as long as the project has a very good development, let him go ahead and do it (provided that it does not affect public order and morality).
Then I will have a brief and systematic understanding of Apache in terms of its features and philosophy.

### Features of Apache open source

Equality for all
Everyone has the opportunity to participate in the project, and the amount of access you get depends on your contribution to the project, which is the concept of equality for everyone.
Community-based
It should be individuals involved in the ASF project, not an organization involved. This actually further promotes a fair and open attitude.
Open communication
All communications and decisions are open on the open network, in the form of mailing lists, for open communication.
This actually has a flavor of constraint in it, but actually dialectically, you also have more opportunities. If you want to contribute to the community, suppose you make a wrong decision, then other friendly developers can be on this side of a battle against you, but if you are right it, you can be on the side of a heated discussion with others it, this is a beautiful thing yo. Of course if you do something bad, tsk tsk, good things don't come out, bad things spread a thousand miles may hhhh.
The mailing list has roughly the following groups
dev@ (main developers)
user@ (users' discussion forums)
commits@ (source code changes will be notified here)
Occasional support roles such as marketing@!
It is strongly stated that all conversations must be public!
Consensus Decision
All by the volunteer team to monitor the decision, this side of the quote below. That is, the next will talk about the "72-hour lazy consensus system".
To give an example.
If we have an open source project to put into Apache for incubation, then it will go through the Apache mentor voting session.
Apache is the implementation of the one-vote veto system. And the mentor voting here are all volunteers, trusted by enough Apache volunteers.


### Philosophy

The motto "community over code" is well known to many, and it's best exemplified in the Apache APISIX community. Because according to the ASF philosophy, a healthy community is more important than good code. A strong community can always correct problems with its code, while an unhealthy community may struggle to maintain the code base in a sustainable way and then not necessarily get a great ending yet.
And then this sentence, I can also interpret it in this way, to give a common example haha. If a string of code has reached the point of perfection, then the community doesn't really work (and here I'm reminded of Fabrice Bellard, the great hair-raising programmer, or perhaps more accurately, computer scientist). But Fabrice's projects are generally super-basic projects, which are basically written without the need for the next iteration of development. But it's also true that Fabrice's code doesn't need a community at all.
But how many programmers are there like Fabrice Bellard? Not many, I'm afraid!
Well, I think that's all I can comprehend for now, so let's start looking at some interesting knowledge about open source books.

## My Good book recommendation

I'm more than welcome to your recommendations !!!
If you have a book or material you'd like to recommend, please feel free to add your own content.

### The Cathedral and the Bazaar

Peer Review
In fact, the core value of the marketplace model lies in independent peer review across organizational boundaries to validate design and ensure correctness. The original article refers to this as "Linus' Law", which states that

If there are enough beta testers and co-developers, almost any problem will quickly become apparent, and then someone will naturally fix it.


But there are two things that need to be explained about this law.
The first point
The first point is that it emphasizes the simplicity and effectiveness of independent peer review implementation, rather than simply “Many hands make light work”.
As an example
Today, traditional R&D organizations still separate developers and testers into two shafts, with testers almost exclusively completing black-box testing. As you can imagine, phenomenal bug reports that lack analysis often require considerable developer time to revalidate, reproduce, and locate. The conflict between the two types of people becomes even more acute when testers, who have no knowledge of the source code, are allowed to grade the bugs.
......
The original article cites Brook's Law from The mythical man-month [5], which states that as the number of developers grows, project complexity and communication costs increase by the square of the number of people, while the work product only grows linearly. The authors of the original article agree with this argument. However, open source projects use a communication approach that distinguishes between a small core group of developers and a peripheral group of beta testers and potential contributors. The peripheral developers actually work on scattered and parallel subtasks that barely communicate with each other; code changes and bug reports flow to the core team, and only in that small core team is there Brooks overhead.
-- The Cathedrals and Bazaars


This side mentions a distinction for contributors to open source projects - some core developers versus a peripheral staff of beta testers and potential contributors. This reveals the elite leadership core of open source development and explains that Linus' Law, though often simplified to "bugs are easy to catch if there are many eyes", is not simply "there is strength in numbers".

The second point
is that bugs are normal in open source software. This is so natural that I was a little shocked to find that I needed to emphasize it. The Log4Shell vulnerability a few days ago led some voices to suggest that the use of open source projects is risky. But what I'm trying to say is that this should be entirely possible, after all, it's normal for open source projects to have bugs. But despite this, developers will do everything possible to protect the reputation of open source.
In addition, open source software generally comes with a disclaimer, that is, the source code of the software so (AS IS) to you, there is no guarantee (WITHOUT WARRANTIES).

### Bazaar Model

What is the Bazaar Model?
Having read this article, you probably know the concept, which comes from a book about open source communities, The Cathedrals and Bazaars
Many of these principles and techniques are not unique to open source and have permeated software development in commercial companies through concepts such as Agile. For example, "good software often comes from the developer's personal needs", "release early, release often, and listen to user feedback", and "it's good to come up with good ideas, and it's good to find good ideas from your users It's good to come up with good ideas, and it's good to find good ideas from your users," and so on.
One of the most important points is about publishing. Linux ensures that software quality and schedule are coordinated by releasing two different types of releases, each with one of the requirements relaxed.

One way to do this is to keep the deadlines the same and make the requirements list more flexible, allowing some requirements to be discarded if they are not completed by the deadline, which is essentially the strategy adopted for the "stable" core. There is no guarantee when a particular bug will be fixed, or when a feature from the experimental version will be moved to the stable version.
Another approach is to set a list of desired requirements and release them as they are completed, which is essentially the strategy for "experimental" versions of the core. Not only does it ensure the highest quality, but on average it results in shorter delivery times than "conservative" or "aggressive" schedules.
– The Cathedrals and Bazaars


Simply put, the open source approach gives developers enough freedom to attract high-level hackers to create value spontaneously. This model goes beyond the pursuit of security needs and even physical needs; what it inspires is the passion of participants for social needs and self-fulfillment.
Maybe I am one of those people :)

## How to contribute

I conclude that there are three ways to count as contribution:
Submit Issues;
Code review;
Submit PRs;
You can click links as follows for more info about how to contribute:
https://apisix.apache.org/zh/docs/general/contributor-guide/ (Important!!!)
https://github.com/apache/apisix/contribute
Add your links
You can click this link as follows to start your contributions (choose what you like)
GitHub - apache/apisix: The Cloud-Native API Gateway
GitHub - apache/apisix-dashboard: Dashboard for Apache APISIX
GitHub - apache/apisix-website: Apache APISIX Website
GitHub - apache/apisix-docker: the docker for Apache APISIX
GitHub - apache/apisix-go-plugin-runner: Go Plugin Runner for APISIX
GitHub - apache/apisix-java-plugin-runner: APISIX Plugin Runner in Java
GitHub - apache/apisix-python-plugin-runner: Apache APISIX Python plugin runner
GitHub - apache/apisix-helm-chart: Apache APISIX Helm Chart
GitHub - apache/apisix-ingress-controller: ingress controller for K8s
Add your links


I want to say
I'd like to end by emphasizing that I'm more than welcome to discuss this with you! Please don't be stingy with your thoughts!
