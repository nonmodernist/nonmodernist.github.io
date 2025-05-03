---
title: Digital Garden Lunar System Reference
weight: 20
---

# 🌙 Digital Garden Lunar System Reference

This guide provides a quick reference for applying the lunar-themed design system to your digital garden.

## Growth Stages & Moon Phases

| Stage | Moon | Class | Meaning | Styling |
|-------|------|-------|---------|---------|
| **New Moon** | 🌑 | `.moon-phase-new` | Brand new ideas, questions, or thoughts |  |
| **Waxing Crescent** | 🌒 | `.moon-phase-waxing_crescent` | Growing ideas with some development |  |
| **First Quarter** | 🌓 | `.moon-phase-first_quarter` | Half-formed notes with structure |  |
| **Waxing Gibbous** | 🌔 | `.moon-phase-waxing_gibbous` | Nearly complete content |  |
| **Full Moon** | 🌕 | `.moon-phase-full` | Complete, mature notes |  |

## Dividers by Complexity

| Complexity | Symbol | Usage |
|------------|--------|-------|
| Line | `⋆ ✧ ⋆ ✧ ⋆` | All-purpose |
| New Moon | `🌑` | For new-moon and early-stage content, towards the beginning of documents |
| Simple | `☽` | For crescent moon ideas |
| Quarter | `🌓 🌓 🌓` | For half-formed content and the halfway mark of documents |
| Default | `🌑 ☽ 🌓 ` | For nearly complete content, towards the end of documents |
| Ornate | `✨ 🌕 ✨` | For full moon notes and the final divider of a document, or to mark a major section break |


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

Moon phases divider:
<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":""}]} -->
{{ divider() }}
<!-- FM:Snippet:End -->

Ornate/full moon divider:
<!-- FM:Snippet:Start data:{"id":"Dividers","fields":[{"name":"style","value":"ornate"}]} -->
{{ divider(style="ornate") }}
<!-- FM:Snippet:End -->


## Special Indicators

| Symbol | Meaning | Usage |
|--------|---------|-------|
| ⭐ | Starred content | Important or featured notes |
| ✨ | Connected ideas | Notes with multiple connections |

## Color System

### Base Colors
- **Primary**: #FFC107 (Amber)
- **Primary Light**: #FFECB3 (Light amber)
- **Primary Dark**: #FF8F00 (Dark amber)
- **Background**: #fff (Light background)
- **Text**: #212121 (Dark text)

### Callout Colors & Usage
- **Info** (Blue): #007FFF - Reference material, definitions
- **Alert** (Red): #fb706e - Critical information, blockers
- **Success** (Green): #AAD6A0 - Completed work, proven methods
- **Warning** (Orange): #fcb388 - Considerations, potential issues


