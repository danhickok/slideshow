# Slideshow

This is my own take on slides using [Reveal.js](https://revealjs.com/).  Working from the compiled product of version 6.0, I've added features that I use during my ABF lessons.

Featured are specific sizes and dimensions for displaying about 8-10 lines of text per slide on an FHD television. I've embedded the Roboto and Roboto Slab fonts for a consistent look and feel.

Also featured is a scrollable box for when there's a lot to read but you want to stay on the same page.  Scrolling the box happens simultaneously for both the audience view and speaker view when the speaker view is open.

I've also introduced some simple tags that make it easy to designate title and section slides.  See the file "content.md" for examples of how to use these tags.

## Instructions for use

### Creating slide content

Slides are described in a plain text file in Markdown format.  Markdown is a popular set of conventions for describing formatted text.

Modify the text of the file "content.md" to define your slide content.  Each slide is simply text separated by three hyphens, so you can have as many slides as you want, all defined in this one file.

The original version of "content.md" has examples you can follow.  But here's a summary of the rules:

| Symbol | What it does | Feature Source |
| --- | --- | --- |
| \-\-\- | Three hyphens with an empty line above and below it separate one slide from another | This app |
| \=\=\= | Three equals signs with an empty line above and below it separate a slide's content and speaker notes that go with it | This app |
| \#&nbsp;Text | Header text begins with a hash (\#) | Markdown |
| \#\#&nbsp;Text | Subheader text begins with two hashes (\#\#) | Markdown |
| \#\#\#&nbsp;Text | Sub-subheader text begins with three hashes (\#\#\#) | Markdown |
| \*\*Text\*\* | Surrounding text with double-asterisks **makes it bold** | Markdown |
| \_Text\_ | Surrounding text with underscores _makes it italic_ | Markdown |
| `<lesson-welcome>` | Put this tag at the top of your first slide with a welcome message &ndash; it's centered text | This app |
| `<lesson-title>` | Put this tag at the top of your second slide &ndash; it's centered and fades into view | This app |
| `<lesson-section>` | Put this tag at the top of each slide that begins a new section &ndash; it's centered and horizontally slides into view | This app |
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


