+++
title = "Shortcode Examples"
weight = 60
date = "2025-05-03T21:46:00.637Z"
insert_anchor_links = "heading"
fmContentType = "meta"
description = "Shortcode examples for quick reference"

[taxonomies]
tags = [ "design", "meta", "shortcodes" ]

[extra]
moon_phase = "waxing_gibbous"
tldr = "Shortcode examples for quick reference."
+++

This guide demonstrates how to use the shortcodes and other visual elements available.

## Divider Shortcode

The divider shortcode creates decorative separators with various moon-themed designs.

**Code:**
- **Default:** \{\{ divider() }}
- **Line:** \{\{ divider(style="line") \}}
- **New Moon:** \{\{ divider(style="new_moon") \}}
- **Simple:** \{\{ divider(style="simple") \}}
- **Quarter:** \{\{ divider(style="quarter") \}}
- **Ornate:** \{\{ divider(style="ornate") \}}

### Divider Styles

Default/moon phases divider:
<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":""}]} -->
{{ divider() }}
<!-- FM:Snippet:End -->

Line/stars divider:
<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":"line"}]} -->
{{ divider(style="line") }}
<!-- FM:Snippet:End -->

New moon divider:

<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":"new_moon"}]} -->
{{ divider(style="new_moon") }}
<!-- FM:Snippet:End -->

Simple/crescent moon divider:

<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":"simple"}]} -->
{{ divider(style="simple") }}
<!-- FM:Snippet:End -->

Quarter moon divider:

<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":"quarter"}]} -->
{{ divider(style="quarter") }}
<!-- FM:Snippet:End -->

Ornate/full moon divider:
<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":"ornate"}]} -->
{{ divider(style="ornate") }}
<!-- FM:Snippet:End -->


## Working with OG Emoji

The theme includes a special vintage emoji font. To use it, wrap emojis in `<span class="og">` tags:

**Code:**
```html
<span class="og">📷</span> This text has a vintage camera emoji
```

**Output:**
A vintage-styled camera emoji followed by regular text

For a complete list of emojis that work with the og class, see the [Emoji Table](@/meta/emoji-table.md).

## Setting Moon Phases in Content

To indicate a note's development stage, add moon phase information to the frontmatter:

```toml
+++
title = "My Note Title"
date = "2025-05-01"
[extra]
moon_phase = "waxing_crescent"
+++
```

**Valid moon phase values:**
- `new` (🌑)
- `waxing_crescent` (🌙)
- `first_quarter` (🌓)
- `waxing_gibbous` (🌔)
- `full` (🌕)

## Adding Related Notes

To display related notes at the bottom of a page, add this to the frontmatter:

```toml
[extra]
related_notes_links = [
  {
    "url": "/notes/example/",
    "title": "Example Note",
    "description": "Description of the related note",
    "moon_phase": "waxing_crescent"
  },
  {
    "url": "/notes/another-example/",
    "title": "Another Example",
    "description": "Description of another related note",
    "moon_phase": "full"
  }
]
```

This will automatically generate a "Related Notes" section with links and descriptions.

## Adding a TL;DR Summary

To add a summary box at the top of your content:

```toml
[extra]
tldr = "A brief summary of this note's content."
```

This will create a highlighted summary box below the title.

## HTML Snippets

While not shortcodes, use these HTML snippets for consistent formatting:

### Callouts

Callouts are styled boxes for highlighting important information.

Available styles:

<div class="callout info">
  <h3 class="callout-title">info</h3>
  <div class="callout-content">
    Used for informational content, definitions, or reference material.
  </div>
</div>

<div class="callout alert">
  <h3 class="callout-title">alert</h3>
  <div class="callout-content">
    Used for critical information or urgent messages.
  </div>
</div>

<div class="callout success">
  <h3 class="callout-title">success</h3>
  <div class="callout-content">
    Used for successful outcomes or proven methods.
  </div>
</div>

<div class="callout warning">
  <h3 class="callout-title">warning</h3>
  <div class="callout-content">
    Used for cautionary notes or potential issues.
  </div>
</div>

### Image Formatting

Use the following HTML snippets to format images with captions and pixel corners.

#### Centered Image with Caption

```html
<figure class="center">
  <div class="pixel-corners--wrapper">
    <img src="/path/to/image.jpg" alt="Description" width="450px">
  </div>
  <figcaption>Caption text</figcaption>
</figure>
```

#### Floating Right Image

```html
<figure class="float-right">
  <div class="pixel-corners--wrapper">
    <img src="/path/to/image.jpg" alt="Description" width="450px">
  </div>
  <figcaption>Caption text</figcaption>
</figure>
```

#### Floating Left Image

```html
<figure class="float-left">
  <div class="pixel-corners--wrapper">
    <img src="/path/to/image.jpg" alt="Description" width="450px">
  </div>
  <figcaption>Caption text</figcaption>
</figure>
```

#### Pixel Corners (without figure)

```html
<div class="pixel-corners--wrapper">
  <img src="/path/to/image.jpg" alt="Description" width="100%">
</div>
```

