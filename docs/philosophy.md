# General Philosophy

- Cyan (green-blue, `#00ffff`) is commonly mixed into colours that would otherwise be shades of black, grey or white.
  - **Reason:** On low-power screens, particularly laptop screens, purely grey shades look distractingly dull, and through testing, only reducing the red channel makes them look more natural.
- Orange is used as the primary accent colour, due it being the creator (Jack5)'s favourite colour.
  - The chosen base shade, `#ff4200`, was voted on by his YouTube fans as being the most appealing orange.
  - Alternate versions of this theme that use different accent colours may be created in the future, provided those colours are similarly voted on.
- This theme must be useable by those with protanopia colour-blindness.
  - It is possible that some colours may look strange to those without colour-blindness. If so, they can be changed, so long as this theme's usability is not affected for those with colour-blindness.
- The theme icon is an abstract version of the original Obsidian texture from Minecraft, using the theme's semantic colours.

# Text Colour Philosophy

- **Functions are blue.**
  - Functions represent blocks of code, executed to increase the stability or scope of a program. Blue is a colour associated with cleanliness and stability, which functions should strive for.
  - In Markdown, [links]() are treated the same.
- **Variables are yellow.**
  - Variables represent pieces of data that come together to form a picture of some aspect of a program. Yellow is a colour associated with creativity, but also danger, which is true for any use of variables.
  - In Markdown, `single-line code blocks` are treated the same, as they are most commonly referring to a variable name and must be differentiated from normal text.
  - For variables that are uppercase constants, their hue is shifted towards green, the colour of numbers.
- **Strings are white.**
  - Strings represent text that is either displayed to the user or used in processing. In dark mode, this theme uses shades of white for text, as do documents and terminals, so strings should be white too.
- **Numbers and constant values are green.**
  - Numbers and constant values represent data that quantifies aspects of a program. Green is associated with wealth and growth, which is often true for number usage, constants and iteratives respectively.
  - In Markdown, *italics* are treated the same, due to the creator (Jack5) using it to emphasise approximate names and entities, and the variable colour being in use by single-line code blocks.
- **Classes are red.**
  - Classes represent groups of functions and variables that form a rigid structure, inherited in many places throughout a program. Red is a colour associated with strength and anger, representing the power of classes and the maintenance pains caused by inheritance.
  - In Markdown, **bold text** is treated the same, due to the creator (Jack5) using it to emphasise proven-true names and entities.
- **Keywords and control flow are pink.**
  - Keywords and control flow direct the execution of a program. They lie somewhere between functions (blue) and classes (red), being rigidly-defined functions themselves.
  - In Markdown, **Headings** are treated the same.
- **Types are orange.**
  - Types objectify variables, rigidly defining their scope and usage. They lie somewhere between variables (yellow) and classes (red), being rigidly-defined variables themselves.
- **Imports are cyan.**
  - Imports represent external code that is being brought into a program. Imports are essentially functionality (blue) and constants (yellow) being brought in from other sources, cyan being the logical mix of the two.
  - *(This isn't possible in Python due to the Python extension's style of defining tokens. This may be implemented in other languages in the future.)*

# Text Style Philosophy

- **Definitions are bold.**
  - Function and class definitions are important bodies of work in a program, so their names should be bold only in said definitions.
  - In Markdown, **level 1 headings** are treated the same.
- **Single-line comments are italic.**
  - Single-line comments are used to briefly explain the purpose of a line of code. As they are tangential thoughts of the developer, they should be italicised. The exception to this is multi-line comments, which are often detailed and need to be read carefully.
