# General Philosophy

- Cyan (green-blue, `#00ffff`) is commonly mixed into colours that would otherwise be shades of black, grey or white.
  - **Reason:** On low-power screens, particularly laptop screens, purely grey shades look distractingly dull, and through testing, only reducing the red channel makes them look more natural.
- Orange is used as the primary accent colour, due it being the creator (Jack Stringer)'s favourite colour.
  - The chosen base shade, `#ff4200`, was voted on by his YouTube fans as being the most appealing orange.
  - Alternate versions of this theme that use different accent colours may be created in the future, provided those colours are similarly voted on.
- This theme must be useable by those with protanopia colour-blindness.
  - It is possible that some colours may look strange to those without colour-blindness. If so, they can be changed, so long as this theme's usability is not affected for those with colour-blindness.
- The theme icon is an abstract version of the original Obsidian texture from Minecraft, using the theme's semantic colours.

# Text Colour Philosophy

- **Functions are blue.**
  - Functions represent blocks of code, executed to increase the stability or scope of a program. Blue is a colour associated with cleanliness and stability, which functions should strive for.
  - *Exception:* In Markdown, [links](#) are treated the same, except for URL components, which are given the accent-defined link colour.
- **Variables are yellow.**
  - Variables represent pieces of data that come together to form a picture of some aspect of a program. Yellow is a colour associated with creativity, but also danger (a trait inherited from orange), which is true for any use of variables.
  - In Markdown, `single-line code blocks` are treated the same, as they are most commonly referring to a variable name and must be differentiated from normal text.
  - *Exception:* For variables that are constants, their hue is shifted towards green, the colour of constant values.
- **Strings are white.**
  - Strings represent text that is either displayed to the user or used in processing. In dark mode, themes uses shades of white for text, as do documents and terminals, so strings should remain close to white for consistency.
  - *Exceptions:*
    - Escape characters are given the constant value colour to distinguish them from normal string characters.
    - In regular expressions, positional markers (e.g. `^` and `$`) are also given the constant value colour, as they are theoretically escape characters that represent empty strings.
    - In regular expressions, modifiers (e.g. `+`, `?` and `/g`) are given the control flow colour, as they are reserved characters that modify the behaviour of the regular expression.
- **Numbers and constant values are green.**
  - Numbers and constant values represent data that quantifies aspects of a program. Green is associated with wealth and growth, which is often true for number usage, constants and iteratives respectively.
  - In Markdown, *italics* are treated the same, due to the creator (Jack Stringer) using it to emphasise approximate names and entities, and due to the variable colour already being used by single-line code blocks.
- **Classes are red.**
  - Classes represent groups of functions and variables that form a rigid structure, inherited in many places throughout a program. Red is a colour associated with strength and anger, representing the power of classes and the maintenance pains caused by inheritance.
  - The red is not too dark, in order to differentiate itself from error red.
  - In Markdown, **bold text** is treated the same, due to the creator (Jack Stringer) using it to emphasise proven-true names and entities.
- **Keywords and control flow are pink.**
  - Keywords and control flow direct the execution of a program. They lie somewhere between functions (blue) and classes (red), being rigidly-defined functions themselves.
  - In Markdown, # Headings are treated the same.
  - *Exception:* Function parentheses are directly tied to their associated functions. In languages that support these being targeted with separate tokens, they are given the function colour, otherwise they use the control flow colour.
- **Types are orange.**
  - Types objectify variables, rigidly defining their scope and usage. They lie somewhere between variables (yellow) and classes (red), being rigidly-defined variables themselves.
  - The orange is not too saturated, in order to differentiate itself from warning orange.

## Discarded

- Imports represent external code that is being brought into a program. They essentially comprise functionality (blue) and constants (yellow) being brought in from other sources, cyan being the logical mix of the two. This isn't possible to implement due to many languages not having tokens for imports, so the variable colour is used instead.

# Text Style Philosophy

If a language does not provide the tokens needed to make the below distinctions, normal text is used instead.

- **Definitions are bold.**
  - Function and class definitions are important bodies of work in a program, so their names should be bold only in said definitions.
  - In Markdown, **level 1 headings** are treated the same.
- **Single-line comments are italic.**
  - Single-line comments are used to briefly explain the purpose of a line of code. As they are tangential thoughts of the developer, they should be italicised.
  - *Exception:* Multi-line comments are often detailed and need to be read carefully, so they should use normal text.
