# Colours

## Title Bar

### Background

The title bar of Visual Studio Code must do its best to blend in with the rest of the program, for otherwise it can be a major distraction.

Before creating this theme, I had the title bar blend in with the line number gutter. This is no longer appropriate, for tabs can also have that colour, so I have decided that it will instead inherit the colour of the sidebar.

> - `titleBar.activeBackground`

By default, when defocusing Visual Studio Code, the title bar becomes too washed out. Even the colour of the editor area is too light for the title bar to use, however, it still cannot use the same colour as the line number gutter and tabs. For this reason, I have settled on a 1:1 mix of the gutter and editor area colours. Although it may blend in a little too much, any brighter and it becomes distracting.

> - `titleBar.inactiveBackground`

### Foreground & Icons

The title bar foreground controls not only the text in the Command Palette while it's closed, but also the layout icons and Windows buttons. In order for it to blend in and not distract from development, it is being set to the same foreground colour as the status bar.

> - `titleBar.activeForeground`

The same will be true for generic icons used throughout Visual Studio Code, such as those present at the sides of the file selection list, in the top-right of the editor area and in the top-right of various sidebars. These should also blend in, as their presence can be distracting.

> - `icon.foreground`

### Command Palette

#### Menu Background

The Command Palette is a very important part of the program, and must communicate this when open, while blending in with the rest of the theme.

The background of the Command Palette can be the same colour as that of a tab being hovered-over, for it is the perfect colour to distinguish it from the rest of the program while remaining visible, and is unlikely to appear at the same time as its usage.

The highlighted item, on the other hand, needs to be a bright colour, but not be too bright to make it look distracting. Starting with the background colour and moving towards white, a mix of 11:1 works well. When it is being highlighted by hovering, it is a 19:1 mix instead.

<!-- TODO: List colours are used in multiple places, not just the Command Palette. Change them to use white with different alphas. -->
> - `quickInput.background`
> - `list.hoverBackground`
> - `list.activeSelectionBackground`
> - `list.inactiveSelectionBackground`

#### Inputs

##### Backgrounds

The background colour of inputs looks good as the Command Palette background colour, for it stands out just enough in the sidebar, and fully blends in inside the Command Palette.

> - `dropdown.background`
> - `input.background`

##### Foregrounds

The foreground colour of inputs can be the same as other text in the IDE, and placeholder text can be the same colour as comments and ignored text.

> - `dropdown.foreground`
> - `input.foreground`
> - `input.placeholderForeground`

#### Picker Groups

Picker group text, which appears to the right of Command Palette items, can be the same colour as text links, for it can be used to show off the accent colour and takes the form of text.

> - `pickerGroup.foreground`

#### Keybindings

Keyboard shortcuts sometimes appear in the Command Palette. These have a brighter colour than desired. The colour must be dark enough that they stand out against the currently selected option, but not so dark that they become invisible.

Starting with the background colour and moving towards white, a mix of 28:1 works well.

Keybindings on active items have the same background colour as the active item itself.

> - `keybindingLabel.background`

### Menus & Widgets

#### Backgrounds

Menus are found in various places within Visual Studio Code, and are also accessible via right-clicking. As they are very similar in function to the Command Palette, they can share all of its colours.

> - `menu.background`
> - `menu.selectionBackground`

This also includes widgets, which appear in a similar fashion to menus, as boxes of text with a background colour.

> - `editorWidget.background`
> - `editorSuggestWidget.selectedBackground`

The notifications center counts as such a widget. Having its header be the same colour as its items means the header has less importance, which is intended as it only contains the number of notifications.

> - `notificationCenterHeader.background`

#### Checkboxes

Checkboxes appear when using GitHub Copilot and selecting what tools should be available to the AI model. They do not look good when dark, because they clash too much with the highlight colour in the Command Palette, nor should they be too bright, otherwise they would simply be distracting. Instead, they need to be a mixture of the Command Palette background colour and the highlight colour, so they look good when alternating between the two states. A mix of 5:3 works well.

<!-- TODO: Add dark border colour for maximum visibility -->
> - `checkbox.background`

#### Shadows

For widgets with shadows (e.g. Find and Replace), a very specific black alpha was chosen, `#6d`. This is just dark enough to make the widget distinguishable from the editor area and all text found within it, but not so dark that it becomes distracting. The same is true for the top of the editor area when the view is scrolled.

> - `widget.shadow`
> - `scrollbar.shadow`

#### Borders

As in the standard Visual Studio Code dark theme, there is no reason for widgets to have border colours. All these serve to do is distract the user, so they have been kept as transparent.

- `widget.border`

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

### Activity Bar

#### Icons

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

#### Icon Badges

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

#### Preformatted (Code)

As in Markdown files, the text in code blocks is given the colour of variables. This appears most often in Visual Studio Code's settings when describing a setting.

> - `textPreformat.foreground`

The background colour of code blocks cannot be inherited from blockquotes, as there may be code in blockquotes, nor can it be the sidebar background colour, as that is too dark and distracting. Instead a 1:2 mix of the editor area and the sidebar is used.

> - `textPreformat.background`
> - `textCodeBlock.background`
> - `checkBox.background`

#### Blockquotes

In the standard Visual Studio Code dark theme, blockquotes are given a brighter background colour than other text. This is rather distracting, as blockquotes are typically used for side notes or other tangentially related text. In this theme, it will be darker instead.

Using the 'Editor Playground' page for experimentation, even the line number gutter colour is too dark, because an association may be created between blockquotes and the sidebars. Therefore, I have settled on a 2:1 mix of the gutter colour and the editor area colour.

As for the border colour, it is necessary to keep in the case of nested blockquotes, but it would be distracting if it were any shade of the accent colour, so I've made it a 15:1 mix of the editor background and foreground colours, at which point it is possible to make out nested blockquotes while also not being distractingly bright.

> - `textBlockQuote.background`
> - `textBlockQuote.border`

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

`button.border` is intentionally not set, as doing this slightly reduces the vertical height of buttons, which has the benefit of reducing their importance.

### Links

Links appear underneath buttons, and are also used to show off the accent colours. Unlike buttons, links can be a slightly brighter orange, as being purely text, they are less visible because of their shape.

Returning to the concept of mixing the best orange with pure white, a mix of 4:1 works best for links. Any lighter and the text takes on a washed-out quality. This washed-out look is more acceptable for when the link is being hovered over, using a 1:5 mix instead.

> - `textLink.foreground`
> - `textLink.activeForeground`

Active links can also appear in the editor when holding Ctrl and hovering over a piece of code. These can use the same active link colour as it is bright enough to stand out against all other colours.

> - `editorLink.activeForeground`

### Focus Border

The focus border is the line that appears around the active element, which is often the sidebar when one of its icons is clicked.

`#dc3b02` is too dark, yet `#ff4200` is too bright, so I settled on a 4:1 mix, which looks orange enough without being too distracting.

> - `focusBorder`

### Input Buttons

The sidebar can contain inputs with square buttons in them, which are surrounded by a border while selected. These have to blend in with both the focus border colour and the input background colour, as interaction with them is similar in nature.

Starting with the background colour, I settled on a 21:8 mix, `#a9340a`. Any darker or lighter and it looks too faded or distracting.

For the border, I found that the input options look better when they have no border. Instead, I had to choose between fully transparent, which reveals the full size of options, or the same colour as the input background, which causes options to shrink a little. I settled on full transparency, as it allows the selected options to retain the modern look of the rest of the theme, rather than appearing boxy and too spread apart.

> - `inputOption.activeBackground`
> - `inputOption.activeBorder`

### Search & Word Matches

Searching for text in files doesn't only highlight the search term as it appears in the sidebar, but also as it appears in the editor area and the overview ruler underneath the scrollbar. It is intended to be a transparent colour.

Search is often used as a means of finding and replacing text, which is an operation that requires extra scrutiny, so I have chosen white with the lowest alpha that is still legible on the sidebar, namely `#11`.

> - `editor.findMatchHighlightBackground`
<!-- TODO: Review transparencies for overview ruler markers -->
> - `editorOverviewRuler.findMatchForeground`

The background of the currently selected match also tends to be white with a set alpha. Since match highlights stack from both the sidebar and the editor area, and making the selected match any brighter will only create complications when combined with other highlights (e.g. word matches), it too uses the same transparent white.

> - `editor.findMatchBackground`

Word matches are much less important than search terms, but still need to be legible. I found that an alpha of `#09` ensures the matches are still legible, while ensuring they are less important than search terms. All in all, it is still possible to read comments in the editor area even when fully highlighted, if only barely. (*Note: Variable-access symbol highlights, from initial observation, appear to be implemented by extensions, which are not possible to change.*)

> - `editor.wordHighlightBackground`
> - `editorOverviewRuler.wordHighlightForeground`

### Extensions

#### Star Count

The star count icon that appears on extensions is not yellow enough in the base dark theme, however in my testing, I was unable to create a more saturated yellow that wasn't brighter than the original, which would create a distraction.

Because of this, I have instead chosen to go with a minimal design, where the star count icon has the same colour as the sidebar text, much like the download count icon, though as a 9:2 mix with the sidebar background, so the icon is as dark as possible without appearing disabled.

> - `extensionIcon.starForeground`

#### Verified Checkmark

It is possible for extensions to have verified publishers, which gives them a checkmark before their name. The colour "button blue" is synonymous with such checkmarks thanks to Twitter (though both it and X suck though), so I will continue to use it here.

Before creating this theme, I used `#1da1f2fe`. The alpha of #fe was likely a remnant of a visual bug with an old version of Visual Studio Code, so it has been discarded. As for the colour itself, it is too bright, so I have settled on a 7:1 mix with the sidebar background colour. Any darker and it looks too faded.

> - `extensionIcon.verifiedForeground`

## Editor Area

### Background

The background of the editor area needs to be a dark colour, but just light enough that it isn't difficult to phase it out when reading code. It is the main background colour which all other background colours are derived from, so it is important to get right.

Before creating this theme, I would use `#001b1b`. Making this colour any dimmer causes it to be too dark, but it can be construed as being too blue-greenish. The grey equivalent of the colour is `#191919`, but it is distractingly desaturated. Therefore, I have settled on a 1:1 mix of the two.

> - `editor.background`

When an editor area is being dropped on another, this theme uses a pure white that is just opaque enough to indicate that something will happen, specifically using an alpha of `#0c`.

> - `editorGroup.dropBackground`

In the case where an editor area is blank (starting Visual Studio Code or creating a split view with one file), the chosen background colour above was too bright. It didn't take very long to find that the inactive title bar colour is the best for this use case. Even when a blank editor area is defocused, it doesn't get as bright as the sidebar tabs.

> - `editorGroup.emptyBackground`

### Borders

Editor area borders appear when multiple editor areas are open. The default colour for these is too bright, while something akin to the status bar border colour is too dark.

I have taken a similar approach to the blockquote border colour when choosing this colour, though rather than a 15:1 mix of the editor background and foreground colours, I am using a 9:1 mix of the two. Any brighter and it becomes distracting, but any darker and it becomes too hard to tell horizontally-aligned editor areas from each-other. (*Note: `sideBySideEditor.horizontalBorder` and `sideBySideEditor.verticalBorder` seem to have no effect.*)

> - `editorGroup.border`

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
> - `editorGroupHeader.noTabsBackground`

### Modified Settings

Modified settings show a vertical bar on their left side. While this can be similar to the accent colour, its proximity to links (which are also the accent colour mixed with white) makes it blend in too much. A mix of 9:2 is used, as it is not too dark to blend in, but not too bright to look washed out.

> - `settings.modifiedItemIndicator`

### Text Selection

Selecting text is distracting if the selection background is any colour other than white. With this in mind, a perfect transparency must be achieved, so that selecting text is not distracting while still being fully visible.

Before creating this theme, I used an alpha of `#20`, but this is a bit too bright. When focused, the selection background should be no darker than `#1b`, and when unfocused, `#0f`. The selection background can be the same when the window is inactive, for the rest of the window communicates this to the user.

> - `editor.selectionBackground`
> - `selection.background`
> - `editor.inactiveSelectionBackground`

### Scroll Bar

Due to the very faint colours in use by various selection components in this theme, the scrollbar needs to be able to show these while still remaining visible. The alphas for the below three states (seen in order) were chosen carefully to maintain a visual distinction between each state while remaining dark and still showing what is behind them.

> - `scrollbarSlider.background`
> - `scrollbarSlider.hoverBackground`
> - `scrollbarSlider.activeBackground`

`scrollbar.background` is intentionally not set, as if it is, it only appears when the editor area is focused, and it hides Find and Replace highlights. (If I could set it, it would be the empty editor colour.)

## Status Bar

### Background

The status bar is located at the bottom of the window, and is used to show information such as the existing problems, file information, formatter information and notifications. It looks at its best when it is dark, but not too dark.

Before creating this theme, I would use `#001818`, which is about the colour of the sidebar, so I will be using this theme's version of that colour here.

> - `statusBar.background`
> - `statusBar.noFolderBackground`

When debugging, the status bar changes to a different colour. In the majority of themes, this colour stands out prominently, but this presents itself as a major distraction.

One option is to use a mix between the function colour and the normal status bar colour, however, this would lead to limited variability between themes. Instead, I have decided to use the accent colour for the left-hand side of the status bar colour mix. A 5:6 mix (for orange) strikes the perfect balance between being subdued and noticeable.

> - `statusBar.debuggingBackground`

### Border

The chosen background colour needs a border to distinguish it from the sidebar. For that reason, I am using the same border colour as the tabs in the sidebar, as that colour is distinguished from all side panels and the editor area.

> - `statusBar.border`
> - `statusBar.noFolderBorder`

When debugging, the border uses a 10:1 mix of the background colour and pure white, similar to the 15:1 mix of the normal status bar (active tab colour), adjusted for the colour of greater brightness.

> - `statusBar.debuggingBorder`

### Foreground

The status bar foreground is a 5:1 mix of the editor text and the background colour, the darkest it can get before it looks disabled.

> - `statusBar.foreground`
> - `statusBar.noFolderForeground`

For debugging, this dark colour is no longer appropriate, and so the editor text colour is used as-is.

> - `statusBar.debuggingForeground`

## Debugging

### Toolbar

#### Background

The debug toolbar appears while debugging, showing icons for different debug tasks. Because it appears as a pop-up similarly to widgets, it can share with them the same background colour as the Command Palette. It blending into the editor area is intentional, as this is often what a developer wants (since dealing with its position is already a major distraction).

> - `debugToolBar.background`

#### Icons

The debug toolbar's icons are given colours similar to the sematic colours in this theme, as shown below:

- *Start*: The same as *Continue*, but as a 3:2 mix with the dropdown background, because it is too distracting otherwise
- *Pause*: The variable colour, for it exposes variables and is more visible than the type colour
- *Continue*: The value colour, for it is green
- *Step Over*: The function colour, for it implies running a function
- *Step Into*/*Step Back*: A 1:1 mix of the function and control flow colours, creating a linear gradient
- *Step Out*: The control flow colour, for it implies exiting a flow
- *Restart*: The type colour, for it is unused by the rest of the debug icons and creates a gradient between *Pause* and *Stop*
- *Stop*/*Disconnect*: The class colour, for it is red

> - `debugIcon.pauseForeground`
> - `debugIcon.startForeground`
> - `debugIcon.continueForeground`
> - `debugIcon.stepOverForeground`
> - `debugIcon.stepIntoForeground`
> - `debugIcon.stepBackForeground`
> - `debugIcon.stepOutForeground`
> - `debugIcon.restartForeground`
> - `debugIcon.stopForeground`
> - `debugIcon.disconnectForeground`

### Variables (Token Expressions)

Because the debug view in the sidebar represents actual programmatic concepts, the token expression colours should be identical to the semantic colours in this theme.

- *Name*: Depending on the accent colour, this may be either the function colour or the variable colour, as both are classified using this colour key.
  - *Use the variable colour for an orange accent.*
- *Value*: The ignored colour, for it represents an object that can be expanded and may be irrelevant to the user
- *String*: The string colour
- *Boolean*/*Number*: The value colour
- *Type*: The type colour
- *Error*: The error colour

> - `debugTokenExpression.name`
> - `debugTokenExpression.value`
> - `debugTokenExpression.string`
> - `debugTokenExpression.boolean`
> - `debugTokenExpression.number`
> - `debugTokenExpression.type`
> - `debugTokenExpression.error`

### Outline Symbols

As with the debug view, the icons in the Outline also make use of the semantic colours in this theme.

<!-- TODO: Add remaining Outline symbols, determine if use of constant variable colour is correct -->
- *Boolean*/*Null*/*Number*: The value colour
- *Class*: The class colour
- *Constant*: The constant variable colour (for variety)
- *Constructor*/*Function*/*Method*: The function colour
- *Field*/*Property*/*Variable*: The variable colour
- *Module*: The control flow colour
- *String*: The string colour
- *Type Parameter*: The type colour

> - `symbolIcon.booleanForeground`
> - `symbolIcon.constantForeground`
> - `symbolIcon.classForeground`
> - `symbolIcon.constructorForeground`
> - `symbolIcon.fieldForeground`
> - `symbolIcon.functionForeground`
> - `symbolIcon.methodForeground`
> - `symbolIcon.moduleForeground`
> - `symbolIcon.nullForeground`
> - `symbolIcon.numberForeground`
> - `symbolIcon.propertyForeground`
> - `symbolIcon.stringForeground`
> - `symbolIcon.typeParameterForeground`
> - `symbolIcon.variableForeground`

## Editor Text

### Text Colour

The text colour of the editor area is placed here in the theme file, directly above `tokenColors`, as all token colour changes operate on this base colour. A white-like colour is the only sensible choice for a base text colour.

Before creating this theme, I used `#cccccc`. In keeping with the rest of the chosen colours, I wanted to not only darken the text while keeping it visible, but also to make it partially cyan like the background.

Firstly, I had to settle on a greyscale colour which was not too dark nor light. Somewhere between `#c0c0c0` and `#c8c8c8` seemed right, so I settled on `#c4c4c4`.

Next, I had to make the text partially cyan. The cyan equivalent of `#c4c4c4` is approximately `#00d0d0`, but that is distractingly cyan, so getting the mix right was important. I chose a 7:1 mix, as at that point the colour is still mostly grey at `#acc6c6`, only having a barely visible influence of cyan.

> - `editor.foreground`

### Whitespace

Whitespace characters must blend in thoroughly with the editor background while still being visible when reading comments, especially if `editor.renderWhitespace` is set to "all". Therefore, it is set to a 2:5 mix of the comment colour and the background colour.

> - `editorWhitespace.foreground`

### Bracket Colours

Visual Studio Code has support for up to 6 different bracket colours, which appear in order when nesting occurs. The first colour is the outermost bracket, the colours looping if excessive levels of nesting exist.

As this theme has defined several semantic token colours, I am using those to define the bracket colours, starting from the control flow colour and sweeping through in the function direction to make a rainbow.

> - `editorBracketHighlight.foreground1`
> - `editorBracketHighlight.foreground2`
> - `editorBracketHighlight.foreground3`
> - `editorBracketHighlight.foreground4`
> - `editorBracketHighlight.foreground5`
> - `editorBracketHighlight.foreground6`

### Problems

Errors must be red, though the class semantic colour is not red enough. Using the same process, a 5:2 mix of `#ff0000` and `#ffffff` produces a more attention-grabbing red that is still legible on both the editor background and the current file selection.

> - `list.errorForeground`
> - `editorError.foreground`
> - `errorLens.errorForeground`

Similarly, warnings are somewhat orange, so the same approach is taken but for the type semantic colour, using a 6:1 mix of its components.

> - `list.warningForeground`
> - `editorWarning.foreground`
> - `errorLens.warningForeground`

As for the info colour, info messages tend to be very annoying, so rather than giving them their default hue of blue, they use a colour even darker than comments, a 5:2 mix of said colour and the editor background colour.

> - `editorInfo.foreground`
> - `errorLens.infoForeground`

## Cursors

Surprisingly, despite the cursor being thinner than editor text, when using the same colour it turns out to be too bright. To resolve this, an 11:2 mix is used between the editor text colour and the background colour.

> - `editorCursor.foreground`

In the event that there are multiple cursors, decreasing the brightness of any of them will make it harder to discern them from the text, so instead, the primary cursor is made brighter. First a 3:1 mix between white and cyan was chosen (`#bfffff`), then that was put into a 5:3 mix with the standard cursor colour.

> - `editorMultiCursor.primary.foreground`

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
>   - `meta.function-call.generic`
>   - `punctuation.definition.decorator`
>   - `punctuation.definition.parameters`
> - **Markdown**
>   - `punctuation.definition.link`
>   - `punctuation.definition.metadata`
> - **Java**
>   - `meta.declaration.annotation`
>   - `storage.type.annotation`
> - **JavaScript**
>   - `meta.brace.round`
> - Bold
>   - **Python**
>     - `entity.name.function.python`
>   - **JavaScript**
>     - `meta.definition.function`
>     - `meta.definition.method`
>   - **Lua**
>     - `entity.name.function.lua`
> - *Removed*
>   - `meta.member.access`

### URLs

While grouped under functions, URLs should use the accent-defined link colour, as that is how they are defined in other parts of the theme. However, said colour does not look good when paired with editor text, so a 6:1 mix between the link colour and pure white is used.

> - `markup.underline.link`

## Variables

> - **Python**
>   - `source`
>   - `variable`
>   - `meta.item-access.arguments`
>   - `meta.indexed-name`
> - **Markdown**
>   - `markup.inline.raw`
> - **HTML**
>   - `meta.tag.structure`
>   - `meta.tag.metadata`
>   - `entity.other.attribute-name`
> - **CSS**
>   - `entity.name.tag.css`
> - **Elm**
>   - `meta.record.field`
> - **Java**
>   - `storage.modifier.package`
>   - `storage.modifier.import`
>   - `meta.class.body.java`
> - **JavaScript**
>   - `meta.object-literal.key`
> - **Lua**
>   - `entity.other.attribute`
> - **Properties**
>   - `entity.name.section`
>   - `keyword.other.definition`
> - **SourcePawn**
>   - `support.variable.single-line.spdoc`
> - **TOML**
>   - `support.type.property-name`
> - **TypeScript**
>   - `support.variable.property`
> - **XML**
>   - `entity.name.tag.localname`
> - **YAML**
>   - `entity.name.tag.yaml`
> - Italic
>   - `markup.italic`

### Constant Variables

The constant variable name colour is a 29:18 mix between variable and constant value colours.

> - **Python**
>   - `constant.other.caps`
>   - `support.variable.magic`
> - **JavaScript**
>   - `variable.other.constant`
> - **CSS**
>   - `support.constant`

## Strings

> - **Python**
>   - `string`
> - **HTML**
>   - `source.css`
> - **Ignore**
>   - `source.ignore`
> - **Properties**
>   - `source.ini`

## Constant Values

> - **Python**
>   - `constant.numeric`
>   - `constant.language`
>   - `constant.other.ellipsis`
> - **CSS**
>   - `constant.other.color`
> - **Markdown**
>   - `markup.italic`
>   - `punctuation.definition.italic`
> - **JavaScript**
>   - `constant.character.escape`

## Classes

> - **Python**
>   - `entity.name.type`
>   - `meta.function`
>   - `support.type.exception`
>   - `variable.parameter.function.language.special.self`
>   - `variable.language.special.self`
>   - `variable.parameter.function.language.special.cls`
>   - `variable.language.special.cls`
> - **Elm**
>   - `meta.module.name`
> - **Markdown**
>   - `markup.bold`
>   - `punctuation.definition.bold`
> - **Java**
>   - `storage.type.java`
>   - `storage.type.object.array.java`
>   - `storage.type.generic.java`
> - **JavaScript**
>   - `meta.class`
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
>   - `constant.character.format.placeholder`
>   - `punctuation.definition.arguments`
>   - `punctuation.definition.dict`
>   - `punctuation.separator`
>   - `punctuation.parenthesis`
> - **JSON**
>   - `meta.structure.array`
>   - `meta.structure.dictionary`
> - **Markdown**
>   - `markup.heading`
>   - `entity.name.section.markdown`
>   - `punctuation.definition.heading`
>   - `punctuation.definition.list`
>   - `punctuation.definition.quote`
>   - `punctuation.definition.raw`
>   - `punctuation.definition.markdown`
> - **HTML**
>   - `meta.tag.metadata.doctype`
>   - `punctuation.definition.tag`
> - **CSS**
>   - `punctuation.section`
> - **C#**
>   - `punctuation.curlybrace`
>   - `punctuation.squarebracket`
> - **Elm**
>   - `keyword.type.elm`
>   - `punctuation.bracket`
>   - `punctuation.parens`
>   - `meta.function.type-declaration`
>   - `meta.function.type-record`
>   - `constant.unit.elm`
> - **JavaScript**
>   - `storage.type`
>   - `meta.array`
>   - `punctuation.definition.binding-pattern`
>   - `punctuation.definition.template-expression`
>   - `punctuation.terminator`
> - **Lua**
>   - `source.lua`
> - **Properties**
>   - `punctuation.definition.entity`
> - **SourcePawn**
>   - `source.sourcepawn`
> - **TOML**
>   - `punctuation.definition.table`
>   - `punctuation.eq`
> - **TypeScript**
>   - `punctuation.definition.typeparameters`
> - **XML**
>   - `meta.tag.preprocessor`
>   - `meta.tag.xml`
> - **YAML**
>   - `punctuation.definition.block`
>   - `punctuation.definition.mapping`
>   - `punctuation.definition.sequence`
>   - `storage.modifier`
>   - `meta.flow-mapping`
>   - `meta.flow-sequence`
>   - **GitHub Actions**
>     - `meta.embedded.block`

## Types

The types semantic colour only applies to built-in types, differentiating them from user-defined types.

One downside of this approach is that for old languages (such as Java) that have very few built-in types, the class semantic colour will appear more frequently than expected.

> - **Python**
>   - `support.type`
>   - `meta.item-access`
> - **C#**
>   - `keyword.type`
> - **Elm**
>   - `storage.type.elm`
>   - `constant.type-constructor`
> - **Java**
>   - `storage.type.primitive`
> - **Markdown**
>   - `fenced_code.block.language`
> - **SourcePawn**
>   - `storage.type.built-in`
> - **YAML**
>   - `storage.type.tag`

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
