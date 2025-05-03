+++
title = "Site Development Journal"
weight = 15
date = "2025-05-03"
insert_anchor_links = "heading"
template = "development-journal.html"
fmContentType = "meta"
description = "A development journal tracking decisions, problems solved, and future plans for my digital moon garden."

[taxonomies]
tags = [ "meta", "development", "zola" ]

[extra]
moon_phase = "quarter"
tldr = "A development journal tracking decisions, problems solved, and future plans for my digital moon garden."
decision_count = 6
solution_count = 1
future_count = 4
breaking_count = 1
+++

This is my working journal for site development decisions, problems solved, and ideas for future improvements. It serves as both documentation and a reference for my future self.

## Design Decisions

### Status Updates {.design-decision}

**Date:** 2025-03-09

Implemented a status update system to log my current thoughts and activities. This is a simple post type that allows me to jot down quick notes or updates. Inspired by [Dame](https://dame.is/) and styled to evoke web 2.0 vibes.

**Why:** I wanted a way to quickly log my current thoughts and activities without needing to create a full note. This allows for more spontaneous updates.

**Implementation:**
- Posted to Bluesky through MacOS shortcut
- Echoed to GitHub by EchoFeed 

### Homepage Counters {.design-decision}

**Date:** 2025-04-27

Implemented a counter system to the site footer to display days since site launch, number of books read and movies watched:
- <span class="og">🎂</span> Days since launch
- <span class="og">📺</span> Total movies watched in my lifetime
- <span class="og">📖</span> Total books read in my lifetime 

**Why:** This provides a quick overview of the kinds of things I used to log on commercial sites like Goodreads and Letterboxd (though I still use Letterboxd, because I love it), but now I can do it in my own space.

**Known Issues:**
- Movie and book counts are using fallback values for now
- Need to find a way to automate these counts

**Related Ideas:**
- Consider adding a "days since last update" counter


### Recent Activity Section {.design-decision}

**Date:** 2025-04-29

Implemented a "recent activity" section on the homepage to show my most recent status update, movie logged, and note added.

**Why:** This provides a quick overview of my recent activities and encourages me to keep the site updated. It also makes the homepage feel more dynamic.

**Implementation:**
- Added a new section to the homepage template
- Used Zola's built-in `recent_posts` function to pull in the latest status update, movie, and note
- Styled the section to match the overall theme

### Digital Garden with Moon Phases {.design-decision}

**Date:** 2025-04-29

Converted `/notes/` section to digital garden-style collection. Implemented a moon phase progression system to visualize the maturity of notes:
- 🌑 New idea (new)
- 🌙 Beginning to take shape (waxing_crescent)
- 🌓 Half-developed (first_quarter)
- 🌔 Mostly formed (waxing_gibbous)
- 🌕 Complete thought (full)

**Why:** This provides visual feedback on note maturity and creates a cohesive theme for the digital garden.

**Implementation:**
```scss
// Moon phase styles in _garden.scss
.moon-phase {
  font-size: 1.1rem;
  vertical-align: top;
  font-family: var(--emoji-font);
}

// Create a mixin for the hover tooltip
@mixin moon-phase-tooltip($text) {
  position: relative;
  &:hover::after {
    content: $text;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-2);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    white-space: nowrap;
    pointer-events: none;
  }
}
```

### Custom Dividers {.design-decision}

**Date:** 2025-04-30

Created several divider styles with moon and star motifs to support the celestial theme:

{{ divider(style="simple") }}

{{ divider() }}

{{ divider(style="ornate") }}

**Why:** Enhances visual interest while maintaining thematic consistency.

**Implementation:**
```html
<!-- Divider shortcode in templates/shortcodes/divider.html -->
{% if style %}
  {% set divider_style = style %}
{% else %}
  {% set divider_style = "default" %}
{% endif %}

{% if divider_style == "default" %}


```
### Related Notes Section and Backlinks {.design-decision}

**Date:** 2025-05-01

Implemented "related notes" and "backlinks" sections on the note pages to show links to other notes with similar tags or content.

**Why:** This encourages exploration of related content and helps users discover more of my notes.

**Implementation:**
- **Related Notes:**
    - Added new partial to display related notes
    - Currently using frontmatter to hardcode related notes, but will automate this in the future
- **Backlinks:**
    - Added a new partial to display backlinks
    - Used Zola's built-in `backlinks` function 

**Note:** If a note has backlinks, it will not show the related notes section to avoid redundancy.


## Problems Solved

### Safari rendering pixel borders incorrectly {.problem-solved}

**Date:** 2025-05-03

**Problem:** Safari was rendering the pixel corners incorrectly on images, causing jagged edges and visual artifacts.

**Solution:** Adjusted CSS clip-path to use explicit pixel values rather than percentages:

```css
.pixel-corners,
.pixel-corners--wrapper {
  clip-path: polygon(0px calc(100% - 16px),
    4px calc(100% - 16px),
    4px calc(100% - 8px),
    8px calc(100% - 8px),
    8px calc(100% - 4px),
    16px calc(100% - 4px),
    16px 100%,
    /* ...rest of the path... */
  );
}
```

**Files Modified:**
- `sass/parts/_image.scss`

## Future Improvements

### Invert moon phase indications in dark mode {.future-idea}

**Planned:** When in dark mode, invert the moon phase icons being called so that they maintain their meaning. 


### Create custom 404 page with moon theme {.future-idea}

**Planned:** Design a themed 404 page that fits with the moon garden concept.

**Ideas:**
- Use a "dark side of the moon" visual
- Add a "lost in space" theme
- Include a site map to help users find their way


### Automate movie and book counts {.future-idea}

**Planned:** Find a way to automate the movie and book counts in the footer.

**Ideas:**
- Use an API to pull in data from Letterboxd
- Refactor `/reading/` to automatically count books read

### Add a "days since last update" counter {.future-idea}

**Planned:** Create a counter to show the number of days since the last update.

**Ideas:**
- Use a simple JavaScript function to calculate the difference between today and the last update date
- Display the counter in the footer
- Need to figure out how to implement this in Zolas

### Add a "moon phase" filter for notes {.future-idea}

**Planned:** Create a filter to view notes by their moon phase.

**Ideas:**
- Use a dropdown or toggle to select the moon phase
- Filter the notes displayed on the page based on the selected phase

### 

## Breaking Changes

### Restyled callouts {.breaking-change}

**Date:** 2025-05-01

- Deleted callout template from `templates/partials/note.html`
- Added new callout styles to `_garden.scss`
- Callouts are now created in html using the `callout` class

**Reason:** The old callout template was too complex and introduced spacing issues that I could not solve. The new styles are simpler and easier to use.

### Updated SCSS structure {.breaking-change}

**Date:** 2025-05-03

- Split `_garden.scss` into separate components
- Changed moon phase class naming convention from `phase-new` to `moon-phase-new`
- Modified the card styling mixins to use consistent borders

**Migration:** Update any custom templates using the old class names.

**Files Modified:**
- `sass/parts/_garden.scss`
- `sass/parts/_variables.scss`
- `sass/main.scss`

{{ divider(style="ornate") }}

*This journal is itself a moon garden note that will grow over time.*