# Slideshow

Do you need to give a presentation, but hate preparing slides in Microsoft PowerPoint?  Do you wish you could just take your notes and carve them up into slides and be done with it?  Do you wish you could use the strength and capabilities of HTML and CSS to create slides?

If not, you're probably not a programmer.  But if you live and breathe code and you spend most of your time in an IDE, maybe this application is for you.

This app lets you create slide presentations using Markdown, HTML, and CSS.  It's built with [**Reveal.js**](https://revealjs.com/) &ndash; **the HTML Presentation Framework.**

Reveal.js provides a way to define slides using HTML.  It optionally lets you use plain text in [Markdown format](https://www.markdownguide.org/) to define slides.  I've built this app on top of Reveal.js version 6, and set it up to use Markdown exclusively for the slide content.  I've also added some additional features to make it easy to add style and animation.

## Features

* Define your **entire presentation** with a single plain text file in Markdown format.
* **Quote characters are automatically &ldquo;curled&rdquo;** for you, so you can type plain old straight quotes in your content, but have it look more natural when presented.
* Since Markdown allows you to include HTML tags, you can **mix plain text and any HTML,** including styled text, images, graphics, videos &mdash; whatever you wish.
* All slides have **background graphics.**  The welcome slide, title slide, and section slides can each have their own background different from the other slides.  And any slide can be given its own unique background image.
* A **speaker's view** (provided by a Reveal.js plugin) lets you include speaker's notes and preview the next slide in a separate window.  The speaker's view also includes a timer.
* **A pointer is available** to let you draw attention to parts of your slide using your mouse.  The pointer simultaneously appears on both the audience view and speaker's view.
* A **scrollable text box** can be added to any slide, making it easy to present a long section of text without having to spread it over multiple slides.  The box scrolls simultaneously in both the audience view and speaker's view.
* While the slideshow is visible to the audience, **the computer's sleep functionality is suspended** (so you don't have the presentation suddenly disappear after a brief pause).
* Use one of **over a dozen different themes** to style your slides, or create one of your own.

The slides can be presented on any monitor, but they work best on an FHD resolution (1920x1080) monitor or TV.  The default font allows for 8-10 lines of text per slide, so the presentation on a large TV is readable even from the back of a large room.



# Instructions for use

## 1. Create slide content

Slides are described in the plain text file "content.md", in Markdown format.  Markdown is a popular set of conventions for describing formatted text.

Modify the text of the file "content.md" to define your slide content.  Each slide is simply text separated by three hyphens, with an empty line above and below them.

(***Tip:***  You may want to keep a copy of the original "content.md" for reference as it contains several examples of how to use the Markdown symbols and special notation that are described below.)

You can have as many slides as you want, all defined in this one file.  For example:

```plaintext

First slide contents goes here

---

Second slide contents goes here

---

Third slide contents goes here

```
It's that easy.

If you want to include speaker notes for a slide, separate the slide content from the notes with three equals signs, with an empty line above and below them like this:

```plaintext

First slide contents goes here

---

Second slide contents goes here

===

Speaker notes for the second slide go here

---

Third slide contents goes here

```
The speaker notes show up only in the speaker's view.  (How to turn that on is covered later.)

\
The rest of this document describes how to add style, color, and animation to your slides.


## Symbols you can use


### Markdown formatting

Markdown conventions are translated into formatted text when the slides are presented.

| Symbol | What it does |
| --- | --- |
| \#&nbsp;Text | Header text begins with a hash (\#) |
| \#\#&nbsp;Text | Subheader text begins with two hashes (\#\#) |
| \#\#\#&nbsp;Text | Sub-subheader text begins with three hashes (\#\#\#) |
| \#\#\#\#&nbsp;Text | Sub-sub-subheader text begins with four hashes (\#\#\#\#) |
| \_Text\_ | Surrounding text with underscores _makes it italic_ |
| \*Text\* | Surrounding text with single asterisks *also makes it italic* |
| \*\*Text\*\* | Surrounding text with double asterisks **makes it bold** |
| \*\*\*Text\*\*\* | Surrounding text with triple asterisks ***makes it bold italic*** |
| \-\- | Make an n-dash (&ndash;) with two hyphens |
| \-\-\- | Make an m-dash (&mdash;) with three hyphens |
| \ | (in front of another character) Display the character as-is |
| \ | (at end of line) Add a line break |
| \* Text | A bulleted list item begins with an asterisk and a space |
| 1. Text | A numbered list item begins with a number, a period, and a space |

Most Markdown conventions should work, including extended conventions for tables, code blocks, images, and so forth.  Consult the [Markdown Guide Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) for more symbols.


### Special slide tags

The following tags govern the look and behavior of the entire slide:

`<lesson-welcome>` &mdash; Enclose the content of your very first slide with this tag to make a welcome message.  The content is centered and the slide has its own background image.  (Background images are explained later.)

Example:

```plaintext
<lesson-welcome>

# Welcome to Our Class
## Room 101

</lesson-welcome>
```

`<lesson-title>` &mdash; Enclose the content of of your second slide with this tag to define the purpose of your presentation.  The content is centered and the slide has its own background image.

Example:

```plaintext
<lesson-title>

Tonight's Lesson:
# Raising Ferrets
### for Fun and Profit

</lesson-title>
```

`<lesson-section>` &mdash; Enclose the content of every slide that marks the beginning of a section with this tag.  The content is centered, and the slide transition sweeps from left to right.  (All other slides use a fade transition.)

Example:

```plaintext
<lesson-section>

# Why Gloves are Important
### *Ferrets can bite!*

</lesson-section>
```


### Special content tags

The following tags provide some layout control over parts of the slide's content:

`<centered>` and `<right-justified>` &mdash; Normally text in a slide is left-justified.  Use these tags to center or right-justify lines in the content.

Example:

```plaintext
<centered>

**Haiku**

</centered>

Soft rain starts to fall\
Quiet drops tap on the leaves\
Cool air calms ferrets

<right-justified>

*-- Anonymous*

</right-justified>
```

`<lesson-left>` and `<lesson-right>` &mdash; These tags allow you to divide the
slide into a left half and a right half.  (Note that these tags take up the entire vertical space of the slide, so this doesn't leave any vertical room for a header or footer in the slide content.)

Example:

```plaintext
<lesson-left>

#### Advantages:

* First point
* Second point
* Third point

</lesson-left>

<lesson-right>

#### Disadvantages:

* First point
* Second point
* Third ferret

</lesson-right>
```

`<lesson-float>` &mdash; This tag creates a centered box floating over the other contents of a slide.  Combined with animation (explained in the next section), this can add some emphasis to the slide contents.

Example:

```plaintext
Superman is amazing.

Superman is known for being faster than a bullet and stronger
than a locomotive.

But they never mention how he is compared to bottled milk or
jazz music.  Or ferrets, for that matter.

<lesson-float class="fragment">

Note the use of absurdity here.

</lesson-float>
```

`<lesson-top>` and `<lesson-bottom>` &mdash; These tags separate the contents of a slide into a title section at the top of the slide and a body section underneath it.

The title is always positioned near the top of the slide and the body is always a given height, so the result is more like PowerPoint's default layout.  The title is automatically bolded and a little big larger than the other text.

Example:

```plaintext
<lesson-top>

Types of clouds

</lesson-top>

<lesson-bottom>

There are several different kinds of clouds.  Here are three
common types:

* **Cirrus** -- thin, feathery strands
* **Stratus** -- uniform gray layers
* **Cumulus** -- puffy, cotton-like
* **Ferrets** -- sorry, ferrets aren't clouds

</lesson-bottom>
```

`<wide>` &mdash; This tag makes its contents big enough to stretch horizontally across the entire slide.  The less text, the larger the font.

Example:

```plaintext
<wide>

THIS IS HUGE

</wide>

<wide>

This is just a little smaller

</wide>
```

`<passage>` &mdash; This tag was designed specifically for Bible passages, but can be used for any text that exceeds the normal size of a slide.  The contents will scroll when you press the up or down arrow keys on the keyboard.

This tag is designed to take up almost the entire vertical space of the slide, with a little bit of room at the top for a heading.  The scrollable contents appear with a slightly different background and (depending on the theme) a slightly different font.

Example:

```plaintext
#### *John 3:16--17*

<passage>

[16] "For God so loved the world, that he gave his only Son,
that whoever believes in him should not perish but have eternal
life. [17] For God did not send his Son into the world to
condemn the world, but in order that the world might be saved
through him. *(ESV)*

*Note: Numbers in square brackets (verse numbers) are
transformed into italicized text in a different color, with the
brackets removed.*

</passage>
```
***Tip:***  Empty lines around tags are important.  This helps Reveal.js's Markdown interpretation engine distinguish tags (as containers) from their contents.  If something doesn't look right, try separating the tags with empty lines.


### Animation

The Reveal.js display engine provides a number of ways to animate objects in slides.  The most common one is called "fragment" (though in my opinion, it's better referred to as "fade in").  It's a CSS class that can be added to an HTML element to make it a *fragment* that gets added to the slide with an **advancement** (that is, pressing the right arrow key).

See the `<lesson-float>` example above for how this class can be added to an element.

#### _Line-based animation symbols_

The problem is, this is difficult to use in plain Markdown text.  So I created the following shortcuts you can easily add to either a line of text or (with some exceptions) an inline element, such as `<span>`.  These shortcuts cover most of the animation features available in the Reveal.js engine.

| Symbol | What it does upon advancement |
| --- | --- |
| {f} | The text fades into view (the one you'll use most often) |
| {fo} | The text fades out of view |
| {fio} | The text fades in, then fade outs with the next advancement |
| {sfo} | The text "semi-fades out" (turns to gray) |
| {fis} | The text fades in then semi-fades out with the next advancement |
| {t} | The text is struck through |
| {hr} | Highlights the text by turning it red |
| {hg} | Highlights the text by turning it green |
| {hb} | Highlights the text by turning it blue |
| {hcr} | Makes the text red then turn normal with the next advancement |
| {hcg} | Makes the text green then turn normal with the next advancement |
| {hcb} | Makes the text blue then turn normal with the next advancement |

Here's an example of a list of bullet points that appear, one at a time, with each advancement:

```plaintext
### Interesting things about ferrets

* {f} *Heavy sleepers* -- they can sleep for 14-18 hours per
  day, then burst with energy when awake
* {f} *Good hearing* -- they can hear frequencies outside of
  human range (below 20Hz and above 20,000Hz)
* {f} *War dance* -- they make strange moves when excited or
  playful, such as arching their backs and hopping sideways
```

Note that the symbol can appear anywhere in the line to affect it, though it's good to keep to the convention of putting it at the beginning of the line.

Some of the animations available in the Reveal.js engine need to operate on a whole line of text and can't be used in an inline element, because they need vertical space to perform their animation.

| Symbol | What it does upon advancement |
| --- | --- |
| {fu} | Fade up the line of text |
| {fd} | Fade down the line of text |
| {fl} | Fade left the line of text |
| {fr} | Fade right the line of text |
| {g} | Make the text grow large |
| {s} | Make the text shrink |
| {b} | Make the text go from blurred to sharp |

#### _Slide-based animation_

The line animation symbols are great for that little bit of movement that helps keep your audience's attention.  But sometimes you want something more eye-catching.  Reveal.js provides an automatic "tweening" feature that transforms/moves features appearing in adjacent slides.  

The `<lesson-animate>` tag makes this possible.  Here's how to set it up:

1. Define two adjacent slides; enclose each of the slides' contents with this tag.
1. Put elements in each slide.  Any HTML elements that will transform from the first slide to the second need to have the same "data-id" attribute in each slide, so Reveal.js can match them up to make the transformation.
1. Define different colors or positions of these matching elements as desired for your animation.
1. For staggered delays in your animation, include a "data-auto-animate-delay" attribute specifying a fractional number of seconds to wait.

Example:

```plaintext
<lesson-animate>

<div
  data-id="backplate"
  style="background-color: gray;
    width: 140px;
    margin: auto;
    padding: 20px;">
  <div
    data-id="stop"
    style="background-color: red;
      width: 100px; height: 100px;
      border-radius: 50%;
      margin: 20px;">
  </div>
  <div
    data-id="caution"
    style="background-color: silver;
      width: 100px; height: 100px;
      border-radius: 50%;
      margin: 20px;">
  </div>
  <div
    data-id="go"
    style="background-color: silver;
      width: 100px; height: 100px;
      border-radius: 50%;
      margin: 20px;">
  </div>
</div>

<div data-auto-animate-id="msg1"
  style="text-align: center;
    margin-top: 80px;">
  Stop
</div>
<div data-auto-animate-id="msg2"
  style="text-align: center;
    margin-top: 20px;">
  &nbsp;
</div>
<div data-auto-animate-id="msg3"
  style="text-align: center;
    margin-top: 20px;">
  &nbsp;
</div>

</lesson-animate>

---

<lesson-animate>

<div
  data-id="backplate"
  style="background-color: gray;
    width: 140px;
    margin: auto;
    padding: 20px;">
  <div
    data-id="stop"
    style="background-color: silver;
      width: 100px; height: 100px;
      border-radius: 50%;
      margin: 20px;">
  </div>
  <div
    data-id="caution"
    style="background-color: silver;
      width: 100px; height: 100px;
      border-radius: 50%;
      margin: 20px;">
  </div>
  <div
    data-id="go"
    style="background-color: limegreen;
      width: 100px; height: 100px;
      border-radius: 50%;
      margin: 20px;">
  </div>
</div>

<div data-id="msg1"
  data-auto-animate-delay="0.8"
  style="text-align: center;
    margin-top: 80px;">
  Go!
</div>
<div data-id="msg2"
  data-auto-animate-delay="1.1"
  style="text-align: center;
    margin-top: 20px;">
  Go!
</div>
<div data-id="msg3"
  data-auto-animate-delay="1.4"
  style="text-align: center;
    margin-top: 20px;">
  Go!
</div>

</lesson-animate>
```

This simple example really doesn't do the auto-animation feature justice.  Look at [Reveal.js's documentation on auto-animation](https://revealjs.com/auto-animate/) for more details.


### Themes

There are currently 13 themes you can choose from for your slides:

* **beige** &mdash; a gentle swirled background and yellowish color
* **black** &mdash; a charcoal color with a tree silhouette
* **black-contrast** &mdash; a plain black background with no image
* **league** &mdash; a dark brown/black color with curves
* **moon** &mdash; a dark teal color with a moon image
* **night** &mdash; a charcoal color with a treeline silhouette
* **serif** &mdash; a light yellow-green color with ivy borders
* **simple** &mdash; a white background with yellow curves
* **sky** &mdash; a sky-blue background with clouds
* **solarized** &mdash; a teal color with polka dots
* **white** &mdash; a white background with colorful stripes
* **white-contrast** &mdash; a plain white background with no image
* **white-roboto** &mdash; a white background with marble accents 

To select a theme, edit the "index.html" file and look for the style line that looks like this:

```html
<link rel="stylesheet" href="dist/theme/white-roboto.css?v=1.8" />
```

Change the name part of the theme file (but keep the path, extension, and version number the same).

You can create your own theme by copying the corresponding .css file in the "dist/theme" folder, then referring to it in the "index.html" file.


### Background images

#### _Theme backgrounds_

Every theme available in this app has a set of four background images in the "images" folder: one for the welcome slide, one for the title slide, one for the section slide, and a background image for all other slides.

For example, the "serif" theme has "serif-welcome.png", "serif-title.png", "serif-section.png", and "serif-background.png".

These are all in .png format, which allow for transparencies that work with the theme's background color.  The "welcome" background images are all currently blank (transparent with no image).

You can edit any of these image files as desired with your favorite image editing program.  For example, you could edit the "welcome" background to include a picture of your organization's mascot.

#### _Custom backgrounds_

When it comes to slide presentations, monotony is your enemy.  To punch things up, you can include a custom background on any regular slide.

To do this, enclose the slide's contents in a `<lesson-image>` tag.  This tag has a "src" attribute similar to an `<img>` tag, and that can refer to an image of your choosing.

Example:

```plaintext
<lesson-image src="../../images/smiling-ferrets.png">

Slide content goes here

</lesson-image>
```

A self-closing `<lesson-image>` tag can work as the entire contents of the slide.  This is a great way to display a map when that's part of your presentation.

Example:

```plaintext
<lesson-image src="../../images/ancient-map.jpg" />
```

***Tip:*** Images formatted for the slideshow's target resolution of 1920x1080 pixels will work best.



## 2. Start the web server

The slideshow app requires a web server.  If you've got one on your machine, great! All you need to do is set it up on your server and open your browser to that site.

But if you don't have a web server (or you don't want to add this app to an existing server), you can use the included Python script "serve.py" to make one.  Execute that script in the folder where this app exists, and then open your browser to http://localhost:8000 and you're ready to go.

Some IDEs will let you view the slides while you edit them.  In VS Code, for example, this can be done with the Live Server plugin.  Check the IDE or plugin documentation to see what URL and port is used.

### While displaying the slides

Slide navigation is performed through the Reveal.js presentation engine. Navigate through the slides using either the left arrow or right arrow on your keyboard.

You can also use the Home key to return to the beginning of the slide or the End key to go to the last slide (which for this app is always a black slide with no text).

If you press the Esc key, you'll get a quick overview of all your slides.  This provides quick navigation to find a particular slide.

You can press the "S" key to open the speaker view in a separate window that shows the current slide, the upcoming slide, and speaker notes.  This is a via a Reveal.js plugin.

In this app, the up and down arrow keys are reserved for scrollable text in the `<passage>` element.  The text scrolls simultaneously in both the audience view and the speaker view.

This app also includes a pointer feature.  When you press the "P" key, a finger-shaped pointer is displayed that moves with your mouse.  The pointer is visible in both the main slide view and the speaker view.  Press "P" again to turn off the pointer.

## 3. When you're done with the slides

Simply close the browser window and speaker view window (if you've opened it).


