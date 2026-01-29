# Short Response Questions

Answer the following questions in your own words. Each response should be 2-4 sentences.

## Question 1: HTML Structure

What is the difference between the `<head>` and `<body>` sections of an HTML document? What kind of content goes in each? 

**Your Answer:**
In HTML, the purpose of the `<head>` tag is to contain the metadata, links to stylesheets, and the `<title>` of the page. The `<body>` tag contains all the website content. You can think of it as the entirety of a blank page where you will do your creative work.

## Question 2: Semantic HTML

Why should we use semantic elements like `<header>`, `<main>`, and `<footer>` instead of using `<div>` tags for everything?

**Your Answer:**
This is important to do because it provides structure to improve organization to our website. This creates separation of concerns, as every tag serves a purpose. 

It also serves for accessability purposes. It's easier for screen readers to identify the semantic tags and fascilitate webpage navigation.


## Question 3: CSS Selectors

Given the following HTML:

```html
<ul>
  <li class="vegetable">Carrots</li>
  <li class="vegetable">Broccoli</li>
  <li class="fruit" id="favorite">Mango</li>
</ul>
```

Write THREE different CSS rules:

1. One that makes ALL list items have a `yellow` background
2. One that makes only the vegetables have `green` text color
3. One that makes only the Mango `bold`

**Your Answer:**

```css
li {
  background-color: yellow;
}

.vegetable {
  color: green;
}

#favorite {
  font-weight: bold;
}
```

## Question 4: The Box Model

In your own words, explain the four parts of the CSS box model (content, padding, border, margin). What is the purpose of each part?

**Your Answer:**

The content is the actual content (e.g. text, picture, link) within a tag.
Padding is the space between the content and the border and its purposes is to provide internal separation room.
Border is the space surrounding the padding. Its purpose is to modify/manipulate the space surrounding the padding and content, ultimately affecting its shape or applying restraints. For instance when using `border-radius: 50%` to make a picture perfectly rounded.
Margin is the space surrounding the border and the one in charge of setting the space between neighboring elements.

## Question 5: Box-Sizing

What problem does `box-sizing: border-box` solve? Why do we include it in a CSS reset at the top of our CSS files?

**Your Answer:**

In _CSS_, the `width` and `height` attributes only affect the **content area** and any padding and border will be added additional space. This causes a problem known as **The Box-sizing Problem.** `box-sizing: border-box` makes such that the padding and border are also taken into consideration when calculating the `width` and `height` attributes. This makes the code more predictable across all browsers.

## Question 6: Display Property

What is the difference between `display: block`, `display: inline`, and `display: inline-block`? Give an example of when you might use `inline-block`.

**Your Answer:**

`display: block` allows most elements to be stacked vertically, starting at a new line.
`display: inline` enables programmers to display elements horizontally within a line of text, also allowing you to have control over the horizontal `padding` and/or `margin`, but not `width` and `height` attributes.
`display: inline-block` allows programmers to display elements horizontally with control over height/weight.

We can use this when we need our nav hyperlinks to be **15rem** while keeping them in the same line.
