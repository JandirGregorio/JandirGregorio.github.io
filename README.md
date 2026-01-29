# Welcome to my personal portfolio's source code!

## Project Reflections

### New Technical Concept
I developed greated mastery over the `::before` and `::after` pseudo-elements in CSS. I used them in three places: the `::before` pseudo-element for home page background, the `::after` pseudo-element for the underline hover effect in the navbar, and in my profile picture's gradient effect. My mental model of these pseudo-elements is to think of them as **stickers** that add decoration to your page without affecting the overall HTML structure. 



### Challenge I'm proud of implementing

The challenge I'm proud of implementing is the animations at the start of my page. What made challenging was the research, as we were not taught this in class and understanding how it works.

First le't analyze the home page layout. It has five "boxes" in total: the home section itself, the heading, the subheading, a box wrapping the button, and the button itself. For an animation to work, we need to steps: 
1. An **animation sequence** (the `animation` property and its sub-properties) applied to the specific container we want to target. I used the `animation-name` and `animation-duration` for mine.
2. We need to define the animation itself using the `@keyframes` at-rule.

`@keyframes` use percentages to indicate the start and end of the animation, but in my case, I used `from` and `to` to declare the beginning and ending; it serves the same purpose. For instance, the heading uses an animation starting off-center to the left with opacity of 0 and ending in the center with an opacity of 1. This creates the visual illustration of a smooth appearance.

### AI assistance

I used AI for four majoy purposes:

- To assist with **boilerplate code** that I knew how to implement. This allowed to have more time to work on things I needed to research, such as the animations and the pseudo-elements. 
- To help me with **color palette** decision making, providing different possible color combinations.
- To assist me with **debugging** code.
- And **teach/explain** code that I hadn't seen before, such as how to implement a sticky header, or understanding pseudo elements.

Check out my [AI Usage Document](https://docs.google.com/document/d/14yrCvop0tY-gOyoz822_evd4a1Ys__bxVB_I8uc0H0A/edit?usp=sharing) to see more details on how I used AI on this project.