# Slideshow

Do you need to give a presentation, but hate preparing slides in Microsoft PowerPoint?  Do you wish you could just take your notes and divide them up into slides and be done with it?  Do you wish you could use the strength and capabilities of HTML and CSS in creating slides?

If so, maybe this application is for you.  This is built using [**Reveal.js**](https://revealjs.com/) &ndash; **the HTML Presentation Framework.**

Reveal.js provides a way to define slides using HTML.  It optionally lets you use plain text in [Markdown format](https://www.markdownguide.org/) to define slides.  I've built this app on top of Reveal.js version 6, and set it up to use Markdown exclusively for the slide content.  I've also added some additional features to make it easy to add style and animation.

## Features

* Define your **entire presentation** using plain text in Markdown format.
* **Quote characters are automatically &ldquo;curled&rdquo;** for you, so you can type plain old straight quotes in your content, but have it look more professional when presented.
* Since Markdown allows you to include HTML tags, you can **mix plain text and any HTML,** including styled text, images, graphics, videos &mdash; whatever you wish.
* All slides have **background graphics.**  The welcome slide, title slide, and section slides can each have their own background different from the other slides.  And any slide can be given a unique background image.
* A **speaker's view** (provided by a Reveal plugin) lets you include speaker's notes and preview the next slide in a separate window.  The speaker's view also includes a timer.
* **A pointer is available** to let you draw attention to parts of your slide using your mouse.  The pointer simultaneously appears on both the audience view and speaker's view.
* A **scrollable text box** can be added to any slide, making it easy to present a long section of text without having to spread it over multiple slides.  The box scrolls simultaneously in both the audience view ans speaker's view.
* While the slideshow is visible to the audience, **the computer's sleep functionality is suspended** (so you don't have the presentation suddenly disappear after a brief pause).
* Use one of **over a dozen different themes** to style your slides, or create one of your own.

The slides can be presented on any monitor, but they work best on an FHD resolution (1920x1080) monitor or TV.  The default font allows for 8-10 lines of text per slide, so the presentation is readable even from the back of a large room.


## Instructions for use

### Creating slide content

Slides are described in a plain text file in Markdown format.  Markdown is a popular set of conventions for describing formatted text.

Modify the text of the file "content.md" to define your slide content.  Each slide is simply text separated by three hyphens, with an empty line above and below them.  So you can have as many slides as you want, all defined in this one file.  For example:

```plaintext

First slide contents goes here

---

Second slide contents goes here

---

Third slide contents goes here

```

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

***Tip:***  You may want to keep a copy of the original "content.md" for reference as it contains several examples of how to use the Markdown symbols and special notation that are described below.

### Symbols you can use

#### Markdown formatting

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
| \* Text | A bulleted list item begins with an asterisk and a space. |
| 1. Text | A numbered list item begins with a number, a period, and a space. |

Most Markdown conventions should work, including extended conventions for tables, code blocks, images, and so forth.  Consult the [Markdown Guide Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) for more symbols.


#### Special slide tags

The following tags govern the look and behavior of the entire slide:

* `<lesson-welcome>` &mdash; Enclose the content of your first slide with a welcome message.  The content is centered and the slide has its own background image.

  Example:

  ```plaintext
  <lesson-welcome>

  # Welcome to Our Class
  ## Room 101

  </lesson-welcome>
  ```

* `<lesson-title>` &mdash; Enclose the content of of your second slide that defines the start of your presentation.  The content is centered and the slide has a special background image.

  Example:

  ```plaintext
  <lesson-title>

  Tonight's Lesson:
  # Raising Ferrets
  ### for Fun and Profit

  </lesson-title>
  ```

* `<lesson-section>` &mdash; Enclose the content of every slide that marks the beginning of a section.  The content is centered, and the slide transition sweeps from left to right.

  Example:

  ```plaintext
  <lesson-section>

  # Why Gloves are Important
  ### *Ferrets can Bite!*

  </lesson-section>
  ```

#### Special content tags

left off here



#### Animation symbols



| Symbol | What it does |
| --- | --- |
| {f} Text | The text fades into view when advancing the presentation. |


-------------------------------------------------------------old


| `<lesson-welcome>` | Put this tag at the top of your first slide with a welcome message &ndash; it's centered text | This app |
| `<lesson-title>` | Put this tag at the top of your second slide &ndash; it's centered and fades into view | This app |
| `<lesson-section>` | Put this tag at the top of each slide that begins a new section &ndash; it's centered and horizontally slides into view | This app |
| `<lesson-image>` | Use this on a slide by itself, with a "src" attribute (like an `<img>` element) | This app |
| `<lesson-left>` | Text inside this tag takes up the left side of a slide | This app |
| `<lesson-right>` | Text inside this tag takes up the right side of a slide | This app |
| `<lesson-float>` | Text inside this tag is placed in a centered, floating box with a shadow | This app |
| `<passage>` | Text inside this tag appears in a serif font and is scrollable via the up and down arrow keys | This app |
| `{f}` | Animation: place this on any line to make it "fade" into view as you press the arrow key | Reveal |

Markdown text can do other things, too.  Look up the [standard conventions for Markdown](https://www.markdownguide.org/basic-syntax/) to learn more about how to make bulleted or numbered lists, and tables, and try them out.

Markdown also allows you to use regular HTML tags like `<div>`, `<span>`, `<p>`, and `<img>`.

If you add `class="fragment"` to any tag, Reveal.js will delay showing that part until you press the right arrow key.  You can use this for emphasis as you speak through your slides.  The shortcut `{f}` can also be used.  The sample content demonstrates several other animation shortcuts as well.

Reveal.js also includes other features for style and animation in Markdown files.  Check out the [documentation](https://revealjs.com/markdown/#external-markdown) when you have a chance.

### Starting the web server

The slideshow requires a web server.  If you've got one on your machine, great! All you need to do is set it up on your server and open your browser to that site.

But if you don't have a web server (or you don't want to add this app to an existing server), you can use a simple Python script to make one.  I've included a batch file "serve.bat" that calls a Python script "serve.py".  Execute that batch file in the folder where this slideshow app exists, and then open your browser to http://localhost:8000 and you're ready to go.

### While displaying the slides

Slide navigation is performed through Reveal.js. Navigate through the slides using either the left arrow or right arrow on your keyboard.

You can also use the Home key to return to the beginning of the slide or the End key to go to the last slide (which for this app is always a black slide with no text).

If you press the Esc key, you'll get a quick overview of all your slides.  This provides quick navigation to find a particular slide.

In this app, the up and down arrow keys are reserved for scrollable text.  The text scrolls simultaneously in both the audience view and the speaker view.

You can press the "S" key to open the speaker view in a separate window that shows the current slide, the upcoming slide, and speaker notes.  This is a via a Reveal.js plugin.

This app also includes a feature where when you press the "P" key, a finger-shaped pointer is displayed that moves with your mouse.  The pointer is visible in both the main slide view and the speaker view.  Press "P" again to turn off the pointer.

### When you're done with the slides

Simply close the browser window and speaker view window (if you've opened it).


