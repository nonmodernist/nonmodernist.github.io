# Artemis Theme for Zola

Artemis is a lunar-themed digital garden framework for the [Zola](https://www.getzola.org/) static site generator, forked from the [Apollo theme](https://github.com/not-matthias/apollo).

## Features

### 🌙 Moon-Phase Digital Garden

Track the growth and development of your notes using a lunar cycle metaphor:

- **🌑 New Moon** - Brand new ideas, questions, or thoughts
- **🌙 Waxing Crescent** - Growing ideas with some development
- **🌓 First Quarter** - Half-formed notes with structure
- **🌔 Waxing Gibbous** - Nearly complete content
- **🌕 Full Moon** - Complete, mature notes

### ✨ Enhanced Visual Elements

- **Pixel Art Borders**: Beautiful pixel-perfect borders for images and cards
- **Custom Dividers**: Multiple divider styles with lunar motifs
- **OG Emoji Support**: Classic emoji rendering using a custom font created by Monica Dinculescu

### 📝 Digital Garden Features

- **Backlinks**: Automatically display notes that link to the current note
- **Related Notes**: Manually specify related content with moon phase indicators
- **Dynamic Callouts**: Collapsible note containers with customizable styling
- **TLDR Summaries**: Add brief summaries to complex notes

### 🎭 Theme Options

- **Dark/Light Mode Toggle**: Switch between dark and light themes
- **Responsive Design**: Optimized for all device sizes

## Installation

1. Download this theme to your `themes` directory:
   ```bash
   git clone https://github.com/yourusername/artemis themes/artemis
   ```

2. Enable the theme in your `config.toml`:
   ```toml
   theme = "artemis"
   ```

## Configuration

### Basic Configuration

```toml
# config.toml
base_url = "https://yoursite.com"

[extra]
# Theme options
theme = "toggle"  # Options: "toggle", "light", "dark", "auto"
favicon = "/favicon.png"
logo = "/logo.png"

# Menu items
menu = [
    { name = "about", url = "/about" },
    { name = "notes", url = "/notes" },
    { name = "tags", url = "/tags" },
]

# Social icons
socials = [
    { name = "github", url = "https://github.com/yourusername", icon = "github" },
    { name = "twitter", url = "https://twitter.com/yourusername", icon = "twitter" },
]
```

### Digital Garden Setup

For the digital garden functionality, create a `notes` section with the following front matter:

```toml
# content/notes/_index.md
+++
title = "notes"
sort_by = "update_date"
insert_anchor_links = "heading"
generate_feeds = true
template = "notes_garden.html"

[extra]
comment = false
+++
```

### Note Front Matter

For individual notes, use the moon phase to indicate development status:

```toml
+++
title = "My Digital Garden Note"
date = 2023-01-01
taxonomies = { tags = ["example", "digital garden"] }

[extra]
moon_phase = "waxing_crescent"  # Options: new, waxing_crescent, first_quarter, waxing_gibbous, full
tldr = "A brief summary of this note's content."
related_notes_links = [
  {
    "url": "/notes/related-note/",
    "title": "Related Note Title",
    "description": "Brief description of how this relates",
    "moon_phase": "full"
  }
]
+++
```

## Shortcodes

### Dividers

Add thematic dividers between sections:

```markdown
{{ divider() }}  <!-- Default moon phases divider -->
{{ divider(style="simple") }}  <!-- Simple divider -->
{{ divider(style="ornate") }}  <!-- Ornate divider -->
{{ divider(style="line") }}  <!-- Line with stars divider -->
```

## Credits

- Original [Apollo theme](https://github.com/not-matthias/apollo) by not-matthias
- Inspired by digital garden concepts and the lunar cycle

## License

MIT License