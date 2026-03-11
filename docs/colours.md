# Colours

## Topbar

### Background

The topbar of Visual Studio Code must do its best to blend in with the rest of the program, for otherwise it can be a major distraction.

Before creating this theme, I had the topbar blend in with the line number gutter. This is no longer appropriate, for tabs can also have that colour, so I have decided that it will instead inherit the colour of the sidebar.

> - `titleBar.activeBackground`

### Command Palette

#### Menu Background

The Command Palette is a very important part of the program, and must communicate this when open, while blending in with the rest of the theme.

The background of the Command Palette can be the same colour as that of a tab being hovered-over, for it is the perfect colour to distinguish it from the rest of the program while remaining visible, and is unlikely to appear at the same time as its usage.

The highlighted item, on the other hand, needs to be a bright colour, but not be too bright to make it look distracting. Starting with the background colour and moving towards white, a mix of 11:1 works well.

> - `quickInput.background`
> - `list.activeSelectionBackground`

#### Input Backgrounds

The background colour of inputs looks good as the Command Palette background colour, for it stands out just enough in the sidebar, and fully blends in inside the Command Palette.

> - `input.background`
> - `dropdown.background`

#### Foreground

The picker group text, which appears to the right of Command Palette items, can be the same colour as text links, for it can be used to show off the accent colour and takes the form of text.

> - `pickerGroup.foreground`

#### Keybindings

Keyboard shortcuts sometimes appear in the Command Palette. These have a brighter colour than desired. The colour must be dark enough that they stand out against the currently selected option, but not so dark that they become invisible.

Starting with the background colour and moving towards white, a mix of 28:1 works well.

Keybindings on active items have the same background colour as the active item itself.

> - `keybindingLabel.background`

### Menus & Widgets

Menus are found in various places within Visual Studio Code, and are also accessible via right-clicking. As they are very similar in function to the Command Palette, they can share all of its colours.

> - `menu.background`
> - `menu.selectionBackground`

This also includes widgets, which appear in a similar fashion to menus, as boxes of text with a background colour.

> - `editorWidget.background`
> - `editorSuggestWidget.selectedBackground`

## Sidebars

### Backgrounds

The backgrounds of the sidebars look their best when they naturally blend from the background of the editor area towards black, but don't quite reach it. The line number gutter of the editor area is also included here, as it is essentially a left sidebar.

Before creating this theme, I used the following colours:

- *Activity Bar*: `#000a0a` (2:3 with black)
- *Sidebar*: `#001111` (2:1 with black)
- *Editor Gutter*: `#001616` (4:1 with black)
- *Editor*: `#001b1b`

With the change of the editor area's colour, there is the opportunity to revisit the sidebar black ratios. Based on testing, I feel that the best ratios are as follows:

- *Activity Bar*: `#050a0a` (3:5 with black, any darker and it is too black, any brighter and it does not stand out from sidebar)
- *Sidebar*: `#091111` (2:1 with black, any lighter and it does not stand out from editor area)
- *Panel* (bottom bar): Same as sidebar
- *Editor Gutter*: `#0a1515` (4:1 with black, any lighter and it does not stand out from editor area)
- *Editor*: `#0d1a1a`
- *Terminal*: `#030606` (2:7 with black, any darker and it is too black, any brighter and it does not stand out from activity bar; the terminal is a special case as all sorts of colours can be displayed on it)

> - `activityBar.background`
> - `sideBar.background`
> - `panel.background`
> - `editorGutter.background`
> - `terminal.background`

### Icons

The icons that appear in the activity bar need to be dark enough to not be distracting, but light enough that they can still be discerned. I am making this theme based on my favourite icon theme, Carbon Product Icons by Anthony Fu.

Before creating this theme, I used `#727272` for the inactive colour. Like with the editor area, I wanted to make my choice of colour darker and more cyan.

Firstly, I had to settle on a greyscale colour which was not too dark. I gauged this by looking at the Explorer icon, reducing its brightness until just before it looks "greyed out" (disabled). I settled on `#6e6e6e`.

Next, I had to make the icon partially cyan. The cyan equivalent of `#6e6e6e` is approximately `#007a7a`. Considering that the inactive icon should have a disabled feel to it, I settled on a 3:1 mix.

> - `activityBar.inactiveForeground`

The active colour, on the other hand, has to be a bright near-white to ensure the user that they have that item selected.

Before creating this theme, I used `#ffffff`. This is far too bright, yet the standard text colour of `#acc6c6` is too dark. I settled on a 7:5 mix, as that is the point where the colour is just white enough to appear active.

> - `activityBar.foreground`

The active icon border should be disabled, as it is distracting. Instead, a background should be used. It cannot blend in with the sidebar, as that does not look good when the Explorer panel is active, so it is instead a brighter colour, namely that of the active file tab.

> - `activityBar.activeBorder` (invisible)
> - `activityBar.activeBackground`

### Icon Badges

Icon badges in Visual Studio Code are meant to represent notifications, however they are used for a large variey of purposes, so many that their presence becomes somewhat of an annoyance. In my theme their background should be toned down, though still be visible. Their foreground can be the same as the active icon colour for simplicity.

Before creating this theme, I used #404040, which is surprisingly too bright of a colour. I have instead taken the inactive icon background and mixed it with the activity bar background, using a 2:5 mix. Any darker and it becomes hard to tell if there is even a badge there. Any brighter and it becomes distracting.

> - `activityBarBadge.background`
> - `activityBarBadge.foreground`

### Text

#### Titles

The titles of sidebar tabs, unlike normal text, need to be brighter, as they have brighter backgrounds. The colour I am using is the active icon colour.

> - `sideBarTitle.foreground`
> - `sideBarSectionHeader.foreground`

#### Normal Text

The colour of the text in the sidebar controls how visible file and folder names are, but also all other normal text in the sidebar.

While the editor area text colour may seem too bright for the file and folder names, it is the perfect colour for normal text, so it is being used here.

> - `sideBar.foreground`

#### Git Decorations

Ignored files and folders ought to have a much darker text colour than normal text, as a developer will be acutely aware of all of their ignored files and will most likely not need to actively look for them. I am using a 14:15 mix of the normal text colour and black.

> - `gitDecoration.ignoredResourceForeground`

### Tabs

It is common to see tabs in sidebar windows. In my theme, they are the same colour as the editor area, for there is enough separation between them that it is possible to use the same colour. This is done to ensure the tabs are not distracting.

Unlike file tabs, these tabs do need borders, as vertically-stacked sections are hard to distinguish between. I have decided to use the active tab colour for these borders, as it is just bright enough to create a visual distinction.

> - `sideBarSectionHeader.background`
> - `sideBarSectionHeader.border`

### Buttons

Buttons are the primary means by which themes are able to show off their accent colours. In the case of my theme, I am using orange, as it is my favourite colour, and is reasonable enough of a colour to use for a button.

Before creating this theme, I used `#ff4200`, proven by the voting of my YouTube fans to be the best orange. However, looking at it based on this new theme, I felt that it needed to blend in more with the new sidebar colour, for it was too bright. A 6:1 mix reduces the bright orange without making it look dull.

Based on this change, it is possible to make the best orange the hover colour, though it needs to be mixed with white to stand out. A 25:1 mix works well, making hovered buttons stand out just enough.

> - `button.background`
> - `button.hoverBackground`

### Links

Links appear underneath buttons, and are also used to show off the accent colours. Unlike buttons, links can be a slightly brighter orange, as being purely text, they are less visible because of their shape.

Returning to the concept of mixing the best orange with pure white, a mix of 4:1 works best for links. Any lighter and the text takes on a washed-out quality. This washed-out look is more acceptable for when the link is being hovered over, using a 1:5 mix instead.

> - `textLink.foreground`
> - `textLink.activeForeground`

### Focus Border

The focus border is the line that appears around the active element, which is often the sidebar when one of its icons is clicked.

`#dc3b02` is too dark, yet `#ff4200` is too bright, so I settled on a 4:1 mix, which looks orange enough without being too distracting.

> - `focusBorder`

### Extensions

It is possible for extensions to have verified publishers, which gives them a checkmark before their name. The colour "button blue" is synonymous with such checkmarks thanks to Twitter (though both it and X suck though), so I will continue to use it here.

Before creating this theme, I used `#1da1f2fe`. The alpha of #fe was likely a remnant of a visual bug with an old version of Visual Studio Code, so it has been discarded. As for the colour itself, it is too bright, so I have settled on a 7:1 mix with the sidebar background colour. Any darker and it looks too faded.

> - `extensionIcon.verifiedForeground`

## Editor Area

The background of the editor area needs to be a dark colour, but just light enough that it isn't difficult to phase it out when reading code. It is the main background colour which all other background colours are derived from, so it is important to get right.

Before creating this theme, I would use `#001b1b`. Making this colour any dimmer causes it to be too dark, but it can be construed as being too blue-greenish. The grey equivalent of the colour is `#191919`, but it is distractingly desaturated. Therefore, I have settled on a 1:1 mix of the two.

> - `editor.background`

### Tab Bar

#### Tab Colours

Tab colours are used to distinguish between different files, and are often the first thing that users notice when they open a new file. They are also used to show off the accent colour along their borders.

With my use of Visual Studio Code, I have found that it is better for the active tab to be highlighted and for the inactive tabs to blend in, rather than for the active tab to blend in and the inactive tabs to be lighter.

The colour of the inactive tabs can be the same as the line number gutter, creating a visual distinction file titles and contents. Since the topbar uses the same colour as the sidebar, this contributes to the sideways gradient of the theme but vertically.

For the active tab, I have settled on a 15:1 mix of the inactive tab colour and white, as it is not too dark to be unseen, but not too bright to be distracting.

Hovering over a tab creates a 3:2 mix of the editor area colour and the active tab colour, a colour that looks roughly halfway between the two.

> - `tab.inactiveBackground`
> - `tab.activeBackground`
> - `tab.hoverBackground`
> - `tab.unfocusedHoverBackground`

If a tab is not focused, it should be dimmed, so I am repurposing the hover colour here.

> - `tab.unfocusedActiveBackground`

#### Tab Borders

Borders are required to separate tabs from the editor area. Borders should not be used to separate tabs from each other, as this proves to be distracting.

The active tab border should be the same as the focus colour. Unfocused active tabs can have the same colour, as their borders are thinner which makes them dimmer by themselves. Inactive tabs should not have a border.

> - `tab.border` (invisible)
> - `tab.activeBorder`
> - `tab.unfocusedActiveBorder`

#### Background

The tab bar background colours should be the same as the inactive tab colours, to further the illusion that the tabs are part of the editor area.

> - `editorGroupHeader.tabsBackground`

### Text Selection

Selecting text is distracting if the selection background is any colour other than white. With this in mind, a perfect transparency must be achieved, so that selecting text is not distracting while still being fully visible.

Before creating this theme, I used an alpha of `#20`, but this is a bit too bright. When focused, the selection background should be no darker than `#1b`, and when unfocused, `#0f`. The selection background can be the same when the window is inactive, for the rest of the window communicates this to the user.

> - `editor.selectionBackground`
> - `selection.background`
> - `editor.inactiveSelectionBackground`

## Status Bar

### Background

The status bar is located at the bottom of the window, and is used to show information such as the existing problems, file information, formatter information and notifications. It looks at its best when it is dark, but not too dark.

Before creating this theme, I would use `#001818`, which is about the colour of the sidebar, so I will be using this theme's version of that colour here.

> - `statusBar.background`
> - `statusBar.noFolderBackground`
<!-- TODO: Add debugging colours -->

### Border

The chosen background colour needs a border to distinguish it from the sidebar. For that reason, I am using the same border colour as the tabs in the sidebar, as that colour is distinguished from all side panels and the editor area.

> - `statusBar.border`
> - `statusBar.noFolderBorder`

## Editor Text

### Text Colour

The text colour of the editor area is placed here in the theme file, directly above `tokenColors`, as all token colour changes operate on this base colour. A white-like colour is the only sensible choice for a base text colour.

Before creating this theme, I used `#cccccc`. In keeping with the rest of the chosen colours, I wanted to not only darken the text while keeping it visible, but also to make it partially cyan like the background.

Firstly, I had to settle on a greyscale colour which was not too dark nor light. Somewhere between `#c0c0c0` and `#c8c8c8` seemed right, so I settled on `#c4c4c4`.

Next, I had to make the text partially cyan. The cyan equivalent of `#c4c4c4` is approximately `#00d0d0`, but that is distractingly cyan, so getting the mix right was important. I chose a 7:1 mix, as at that point the colour is still mostly grey at `#acc6c6`, only having a barely visible influence of cyan.

> - `editor.foreground`

### Bracket Colours

Visual Studio Code has support for up to 6 different bracket colours, which appear in order when nesting occurs. The first colour is the outermost bracket, the colours looping if excessive levels of nesting exist.

As this theme has defined several semantic token colours, I am using those to define the bracket colours, starting from the control flow colour and sweeping through in the function direction to make a rainbow.

> - `editorBracketHighlight.foreground1`
> - `editorBracketHighlight.foreground2`
> - `editorBracketHighlight.foreground3`
> - `editorBracketHighlight.foreground4`
> - `editorBracketHighlight.foreground5`
> - `editorBracketHighlight.foreground6`

# Semantic Token Colours

Semantic token colours are an abstraction of token colours, which may or may not be used by Visual Studio Code extensions. Non-existant semantic tokens are also defined here, so they may be replicated in `tokenColors`.

> - `function` - 1:3 mix of `#2424db` and `#dae7e7`
> - `variable` - 1:2 mix of `#ffff00` and `#e5e5e5`
> - `string` - Same as `editor.foreground`
> - `number` - 7:2 mix of `#00ff00` and `#486a6a`
> - `class` - 11:8 mix of `#ff0000` and `#ffffff`
> - `keyword` - 11:16 mix of `#ff006a` and `#c7dbdb`
> - `type` - 4:1 mix of `#ff8000` and `#00f5f5`
> - `comment` - Same as `gitDecoration.ignoredResourceForeground`

# Token Colours

## Functions

> - **Python**
>   - `entity.name.function`
>   - `support.function`
>   - `meta.member.access`
>   - `punctuation.definition.arguments`
>   - `punctuation.definition.decorator`
>   - `punctuation.definition.parameters`
> - **Markdown**
>   - `markup.underline.link`
>   - `punctuation.definition.link`
>   - `punctuation.definition.metadata`
> - **JavaScript**
>   - `meta.brace.round`
> - Bold
>   - **Python**
>     - `entity.name.function.python`
>   - **JavaScript**
>     - `meta.definition.function`
>     - `meta.definition.method`

## Variables

> - **Python**
>   - `source`
>   - `variable`
>   - `meta.item-access.arguments`
>   - `meta.indexed-name`
> - **Markdown**
>   - `markup.inline.raw`
> - **HTML**
>   - `entity.other.attribute-name`
> - **JavaScript**
>   - `meta.object-literal.key`
> - **TOML**
>   - `support.type.property-name`
> - **YAML**
>   - `entity.name.tag`
> - Italic
>   - `markup.italic`

### Constant Variables

The constant variable name colour is a 29:18 mix between variable and constant value colours.

> - `constant.other.caps`

## Strings

> - `string`

## Constant Values

> - **Python**
>   - `constant.numeric`
>   - `constant.language`
>   - `constant.other.ellipsis`
> - **Markdown**
>   - `markup.italic`
>   - `punctuation.definition.italic`
> - **JavaScript**
>   - `constant.character.escape`

## Classes

> - **Python**
>   - `entity.name.type.class`
>   - `meta.function`
>   - `support.type.exception`
>   - `variable.parameter.function.language.special.self`
> - **Markdown**
>   - `markup.bold`
>   - `punctuation.definition.bold`
> - **JavaScript**
>   - `variable.language.this`
> - Bold
>   - **Python**
>     - `entity.name.type.class`
>   - **Markdown**
>     - `markup.bold`
>     - `heading.1`

## Keywords and Control Flow

> - **Python**
>   - `keyword`
>   - `meta.lambda-function`
>   - `storage.type.class`
>   - `storage.type.function`
>   - `storage.type.string`
>   - `support.variable.magic`
>   - `punctuation.separator`
>   - `punctuation.parenthesis`
> - **JSON**
>   - `meta.structure.array`
>   - `meta.structure.dictionary`
> - **Markdown**
>   - `markup.heading`
>   - `punctuation.definition.heading`
>   - `punctuation.definition.list`
>   - `punctuation.definition.quote`
>   - `punctuation.definition.raw`
>   - `punctuation.definition.markdown`
>   - `fenced_code.block.language`
> - **HTML**
>   - `punctuation.definition.tag`
> - **JavaScript**
>   - `storage.type`
>   - `meta.array`
> - **YAML**
>   - `punctuation.definition.block`
>   - `storage.modifier`
>   - `meta.flow-mapping`
>   - `meta.flow-sequence`
>   - **GitHub Actions**
>     - `meta.embedded.block`

## Types

> - `support.type`
> - `meta.item-access`

## Comments

> - **Python**
>   - `comment`
>   - `punctuation.definition.comment`
>   - `string.quoted.docstring`
> - **Robot Framework**
>   - `meta.setting.documentation.robotframework`
>   - `meta.testcase_setting.documentation.robotframework`
> - Italic
>   - `comment`
>   - `punctuation.definition.comment`
