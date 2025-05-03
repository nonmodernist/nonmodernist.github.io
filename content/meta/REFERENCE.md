+++
title = "Site Documentation"
weight = 1
insert_anchor_links = "heading"
+++

This document contains essential information for maintaining and developing my personal site built with Zola and a heavily modified version of the Apollo theme.

## Common Commands

```bash
# Start development server with 
zola serve --drafts

# Build site for production
# usually not needed since GitHub Actions handles this
# but useful for local testing
zola build

```

# Frontmatter Templates
## Standard Note Template
```toml
+++
title = "Note Title"
date = "2025-05-02"
draft = false
taxonomies:
  tags = ["tag1", "tag2"]
extra:
  moon_phase = "waxing_crescent" # Options: new, waxing_crescent, first_quarter, waxing_gibbous, full
  tldr = "A brief summary of this note's content."
  related_notes_links = [
    {
      "url": "/notes/related-note/",
      "title": "Related Note Title",
      "description": "Brief description of the related note",
      "moon_phase": "first_quarter"
    }
  ]
+++
```

## Standard Page Template
```toml
+++
title = "Page Title"
date = "2025-05-02"
insert_anchor_links = "heading"
+++
```
# Moon Phase Progression System

For a basic reference, see the table below. For complete design guidelines, see the [Digital Moon Garden Style Guide](@/meta/lunar-system-reference.md).

| Phase | Emoji | Class | Meaning |
|-------|-------|-------|---------|
| New Moon | 🌑 | `moon-phase-new` | Brand new ideas, initial thoughts |
| Waxing Crescent | 🌙 | `moon-phase-waxing_crescent` | Beginning to take shape |
| First Quarter | 🌓 | `moon-phase-first_quarter` | Half-developed |
| Waxing Gibbous | 🌔 | `moon-phase-waxing_gibbous` | Mostly formed |
| Full Moon | 🌕 | `moon-phase-full` | Complete thought |

# Shortcodes

## Divider Shortcode

See the [Lunar Style Guide](@/meta/lunar-system-reference.md#dividers-by-complexity) for more information on divider styles.

# HTML Classes for Special Formatting

```html
<!-- Center an image -->
<figure class="center">
  <div class="pixel-corners--wrapper">
    <img src="/path/to/image.jpg" alt="Description" width="450px">
  </div>
  <figcaption>Caption text</figcaption>
</figure>

<!-- Float image right -->
<figure class="float-right">
  <div class="pixel-corners--wrapper">
    <img src="/path/to/image.jpg" alt="Description" width="450px">
  </div>
  <figcaption>Caption text</figcaption>
</figure>

<!-- OG Emoji styling -->
<span class="og">🆕</span>
```

## Valid OG Emojis
For a complete list of emojis that work with the og class, see the [Lunar Style Guide](@/meta/lunar-system-reference.md).

# Site Structure
```
content/            
├── _index.md    # Homepage
├── is/          # Status updates echoed from Bluesky
├── log/         # Movie log echoed from Letterboxd
├── meta/        # Site documentation
├── notes/       # Digital garden notes
├── reading/     # Reading list
├── research/    # CV
└── teaching/    # Index of courses


themes/apollo/      
├── templates/      # HTML templates
├── sass/           # Styling
└── static/         # Static assets
    └── images/     # Images
```

# Troubleshooting

- If styles aren't updating, try clearing your browser cache
- For template changes, restart the Zola server
- Taxonomy issues often require rebuilding the site with `zola build`
- For deployment issues, check GitHub Actions logs

# Related Documentation
- [Zola Documentation](https://www.getzola.org/documentation/getting-started/overview/)
- [Moon Style Guide](@/meta/lunar-system-reference.md)