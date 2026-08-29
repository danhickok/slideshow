<lesson-welcome>

# Welcome Message<br>Goes Here

<img src="./images/logo.png" width="256" height="256">

#### Lesson Date Goes Here

</lesson-welcome>

---

<lesson-title>

# Lesson Title Goes Here

### Full Passage Description Goes Here

</lesson-title>

---

<lesson-section>

# Introduction

</lesson-section>

---

Here's where you would put introductory comments.  Notice that the default
orientation of the slide is left-justified.  "Quote" characters are
automatically curled for you, and you can use a double-hyphen (--) for an n-dash
or a triple-hyphen (---) for an m-dash.

---

Following standard markdown styling, **bold text** is surrounded by
double-asterisks (\*\*) and _italicized text_ is surrounded by either
underscores (_) or a single asterisk (*).  Other markdown styles should work,
too.

Slides themselves are separated by three hyphens all by themselves with an empty
line above and below them.

===

Use a triple-equals sign to add notes for the current slide.

Notes are supposed to show up only when you press the "S" key (for "Speaker"),
which opens a separate window with the speaker view.  Only the speaker view
shows the notes.

---

There are special tags you can use for different kinds of slides:

| Tag | Effects |
| --- | ----- |
| `<lesson-welcome>` | Centers contents; (default) fade transition |
| `<lesson-title>` | Centers contents; (default) fade transition |
| `<lesson-section>` | Centers contents; left-to-right transition |

---

For convenience,

<centered>

you can use `<centered>`\
to center your text,

</centered>

<right-justified>

or `<right-justified>`\
to right-justify text.

</right-justified>

---

<lesson-left>

You can divide the slide into two side-by-side pieces using the `<lesson-left>`
and `<lesson-right>` tags.  The text in each block wraps around.

</lesson-left>

<lesson-right>

The two blocks are designed to take up the entire slide by themselves.

So don't add any heading or footing to the slide.

</lesson-right>

<!-- Notice the use of Reveal's "fragment" class here -->
<lesson-float class="fragment">

Here's some text floating in a box.  It's in a `<lesson-float>` tag.

You'll notice that the text wraps around and allows it to expand for longer
sentences.  The more text you add, the taller the box becomes.

</lesson-float>

---

<centered>

If you need to get your audience's attention,

</centered>

<wide>SAY IT LOUDLY</wide>

<centered>

by putting the text in a `<wide>` tag.

</centered>

---

<lesson-section>

# Bible Passages

### The Star of the Show

</lesson-section>

---

#### _Selected Passage Name Goes Here_

<passage>

[1] This slideshow application can be used for anything, but its primary purpose
is for giving Bible Study lessons.  When quoting scripture, then, you would put
it in a `<passage>` tag.  It's a specially designed tag that stands out
separately from the rest of your presentation.

[2] Passages appear in a scrollable box. You can page up and down using the Up
Arrow and Down Arrow keys on your keyboard. [3] The `<passage>` section is
designed to be the only thing on the page besides the passage name.

[3] The verse numbers in your markdown are in square brackets, but they're
translated to a different font and style and the square brackets are removed
when they appear in the slide.

[4] So the whole idea is that this will give you a useful area for reading the
passage, [6] without having to navigate to another slide.

</passage>

---

<lesson-section>

# Animation

</lesson-section>

---

You can delay text (or anything) from appearing right away by including
{&ZeroWidthSpace;f&ZeroWidthSpace;} anywhere on the line to fade in when it
appears.  For example,

* {f} Here's the first bullet point in a list
* {f} Here's the second bullet point
* {f} And here's the third bullet point

---

<lesson-left>

<centered>

\
\
It even works on images:

</centered>

</lesson-left>

<lesson-right>

![](../images/mickey_mouse.png) {f}

</lesson-right>

---

And there are variations to fading:

* Use {&ZeroWidthSpace;fo&ZeroWidthSpace;} to <span>{fo} fade out text.</span>
* Use {&ZeroWidthSpace;fio&ZeroWidthSpace;} to <span>{fio} fade in, then fade out text.</span>
* Use {&ZeroWidthSpace;sfo&ZeroWidthSpace;} to <span>{sfo} semi-fade out text.</span>
* Use {&ZeroWidthSpace;fis&ZeroWidthSpace;} to <span>{fis} fade in then semi-fade out text.</span>
* Use {&ZeroWidthSpace;t&ZeroWidthSpace;} to <span>{t} strike through text.</span>

{f} You can use these on whole lines, or part of lines by placing text inside a
`<span>` tag.

---

Some work better on entire lines only:

{fu} Use {&ZeroWidthSpace;fu&ZeroWidthSpace;} to fade up text.

{fd} Use {&ZeroWidthSpace;fd&ZeroWidthSpace;} to fade down text.

{fl} Use {&ZeroWidthSpace;fl&ZeroWidthSpace;} to fade left text.

{fr} Use {&ZeroWidthSpace;fr&ZeroWidthSpace;} to fade right text.

---

<centered>

{g} Use {&ZeroWidthSpace;g&ZeroWidthSpace;} to grow text.

{s} Use {&ZeroWidthSpace;s&ZeroWidthSpace;} to shrink text.

{b} Use {&ZeroWidthSpace;b&ZeroWidthSpace;} to make text appear from a blur.

</centered>

---

Use {&ZeroWidthSpace;hr&ZeroWidthSpace;} to <span>{hr} highlight text red</span>

Use {&ZeroWidthSpace;hg&ZeroWidthSpace;} to <span>{hg} highlight text green</span>

Use {&ZeroWidthSpace;hb&ZeroWidthSpace;} to <span>{hb} highlight text blue</span>

Use {&ZeroWidthSpace;hcr&ZeroWidthSpace;} to <span>{hcr} highlight text red then turn normal.</span>

Use {&ZeroWidthSpace;hcg&ZeroWidthSpace;} to <span>{hcg} highlight text green then turn normal.</span>

Use {&ZeroWidthSpace;hcb&ZeroWidthSpace;} to <span>{hcb} highlight text blue then turn normal.</span>

---

<lesson-section>

# Content Sizing

### Use this section to test the limits

---

It will take some practice to get the size of the slides right.  Font choices
matter!  Here's some practice text:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.

---

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
officia deserunt mollitia animi, id est laborum et dolorum fuga.

---

Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
repellendus.

---

Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
repellat.

---

<lesson-section>

# Wrapping Up

</lesson-section>

---

The last slide (the one after this one) is always an empty slide with a plain
black background.  That indicates to you and your audience that the presentation
is finished.