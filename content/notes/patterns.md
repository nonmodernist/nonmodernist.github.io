---
title: "Generating Patterns with Doodad.dev"
date: 2024-12-05
draft: false
taxonomies:
  tags: ["design", "tools", "svg", "web development"]
extra:
  moon_phase: "first_quarter"
  tldr: "Using Doodad.dev's pattern generator to create SVG patterns as replacements for images."
---

<span class="og">🎨</span> I've been fighting with images on the [teaching](https://nonmodernist.com/teaching/) page of this site (mostly related to sizing and having things look nice yet be responsive), so I decided to replace them with SVG patterns generated at [Doodad.dev](http://doodad.dev). Since the Apollo theme used for this site allows me to call any URL as an image on a page with "cards," I was able to replace the images I had been hosting with the URI generated by the "CSS background image" selection on the [pattern generator](https://doodad.dev/pattern-generator/). I don't totally understand the [magic of SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction), but that's okay.

{{ divider(style="simple") }}

The pattern generator itself is fun to play with, and I've been amazed by how a small change to the components can create an entirely new pattern. 

For example, dots in circles become flowers, just by increasing the size of each dot.

<div class="pixel-corners--wrapper center">
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='100' height='100' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='100%25' height='100%25' fill='%232d3748'/%3E%3Ccircle cx='34' cy='20' r='4' fill='%234a5568'/%3E%3Ccircle cx='6' cy='20' r='4' fill='%234a5568'/%3E%3Ccircle cx='20' cy='34' r='4' fill='%234a5568'/%3E%3Ccircle cx='20' cy='6' r='4' fill='%234a5568'/%3E%3Ccircle cx='27' cy='13' r='4' fill='%231a202c'/%3E%3Ccircle cx='13' cy='27' r='4' fill='%231a202c'/%3E%3Ccircle cx='27' cy='27' r='4' fill='%231a202c'/%3E%3Ccircle cx='13' cy='13' r='4' fill='%231a202c'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E" alt="a pattern of dots arranged in circles, all in shades of blue">
</div>

<div class="pixel-corners--wrapper center">
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='73' height='73' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'%3E%3Crect width='100%25' height='100%25' fill='%232d3748'/%3E%3Ccircle cx='35' cy='20' r='9' fill='%234a5568'/%3E%3Ccircle cx='5' cy='20' r='9' fill='%234a5568'/%3E%3Ccircle cx='20' cy='35' r='9' fill='%234a5568'/%3E%3Ccircle cx='20' cy='5' r='9' fill='%234a5568'/%3E%3Ccircle cx='27' cy='13' r='9' fill='%231a202c'/%3E%3Ccircle cx='13' cy='27' r='9' fill='%231a202c'/%3E%3Ccircle cx='27' cy='27' r='9' fill='%231a202c'/%3E%3Ccircle cx='13' cy='13' r='9' fill='%231a202c'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E" alt="a pattern of dots arranged to look like four-petal flowers, all in shades of blue">
</div>

{{ divider() }}

*This note documents a design solution I found for my teaching page, using generated SVG patterns instead of traditional images.*