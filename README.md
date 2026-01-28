#Personal Portfolio

## AI Usage
This project provided me an opportunity to build something with AI assistance. Check out my [AI Usage Document](https://docs.google.com/document/d/14yrCvop0tY-gOyoz822_evd4a1Ys__bxVB_I8uc0H0A/edit?usp=sharing) to see how I used AI on this project.

## Reflection Questions


1. Share one technical concept that you developed greater mastery over in this project. Demonstrate how you understand that concept by sharing your mental model of the concept. Then, show how you used that concept in your project.<br>
I developed greated mastery over the `::before` and `::after` pseudo elements in CSS. I used in three places. I added a background to the home page. It's shown in the hover effect in the navbar. Lastly, in my profile picture with a revolving gradient.

2. Choose one project requirement that you found challenging and are proud of implementing. Describe what made it challenging and how you were able to implement the requirement by walking through your code as succinctly as possible. Remember that your audience does not know your code nearly as well as you do so you’ll have to break it down in a logical manner for them to quickly understand it.<br>
The challenge I'm proud of implementing is the animations at the start of my page. What made challenging was the research as we were not taught this in class and understanding how it works. First le't analyze the home page layout. It has six "boxes" in total: the home section itself, the heading, the subheading, a box containing the buttons, and the buttons themselves. For an animation work we need to steps: an animation sequence (`animation` property and its sub-properties) that needs to be applied to the specific container we want to target. I used the `animation-name` and `animation-duration` sub-properties for my animations. Second, we need to define the animation itself using the `@keyframes` at-rule for the `animation-name` sub-property to reference. `@keyframes` use percentages to indicate the start and end of the animation. But in my case, I used `from` and `to` to declare the beginning and ending of the animation; it serves the same purpose. For instance, the heading uses an animation starting off-center to the left, with opacity of 0, and ending in the center with an opacity of 1. This creates the ilusion of a smooth appearance.

3. How did you leverage AI to assist your development of this project? I used AI for four majoy purposes:
- To assist with boilerplate code that I knew how to implement. This allowed to have more time to work on things I needed to research, such as the animations and the pseudo elements. 
- It helped me with some color palette decision making.
- It assisted me with debugging code.
- And teach/explain code that I hadn't seen before.
