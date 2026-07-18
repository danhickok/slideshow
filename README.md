# slideshow

This is my own take on slides using [Reveal.js](https://revealjs.com/).  Working
from the compiled product of version 6.0, I've added features that I use during
my ABF lessons.

Featured are specific sizes and dimensions for displaying on an FHD television,
and a scrollable box for when there's a lot to read but you want to stay on the
same page.  Scrolling the box happens simultaneously when using the speaker
view.

I've embedded the Roboto and Roboto Slab fonts, too, for a consistent look and
feel.  The default font size I've chosen is suited for the device this is
intended to be displayed on and for and the size of the room.

I've introduced some simple tags that make it easy to designate title and
section slides.  See the file "content.md" for examples of how to use these
tags.

The slideshow requires a web server.  If you've got one on your machine, great!
All you need to do is set it up on your server and open your browser to that
site.

But if you don't have a web server (or you don't want to add this app to the
existing server), you can use a one-line Python script to make one.  I've
included a batch file "serve_it.bat" with that command.  Execute that
batch file in the folder where this slideshow app exists, and then open your
browser to http://localhost:8000 and you're ready to go.
