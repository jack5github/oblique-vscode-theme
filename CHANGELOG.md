# Changelog

## 0.0.3 - Unreleased

### Added

- CSS: Value semantic colour `constant.other.color`
- Ctrl+hover colour
- Cursor colours
- Debugging colours (status bar, debug toolbar and sidebar variables)
- Editor area colours (dropped editor, empty editor and editor borders)
- Elm, Java, Lua and SourcePawn support
- Inactive title bar colour
- Input and dropdown background, foreground and placeholder colours
- Markdown preview colours for preformatted text and blockquotes
- Overview ruler colours (seen under vertical scrollbar)
- Python: Class semantic colours `variable.language.special.self`, `variable.parameter.function.language.special.cls` and `variable.language.special.cls`
- Python: Function semantic colour `meta.function-call.generic`
- Python: Keyword semantic colours `constant.character.format.placeholder`, `punctuation.definition.arguments` and `punctuation.definition.dict`
- Tab bar background colour when tabs are not visible
- XML: Keyword semantic colour `meta.tag.preprocessor`
- Widget background, shadow and border colours
- Whitespace colour

### Changed

- Python: `support.variable.magic` changed from keyword to constant variable semantic colour
- Python: `punctuation.definition.arguments` changed from function to keyword semantic colour

### Removed

- `meta.member.access` colour

## 0.0.2 - 2026-03-12

### Added

- Added C#, CSS, GitHub Actions (YAML), HTML, Ignore, JavaScript, Properties and XML support
- Added active links colour
- Added colours for panels and terminals
- Added colours for search results and word matches
- Added `docs/languages.md` to track supported languages and extensions
- Added editor widgets colours
- Added `entity.name.section.markdown` colour for Markdown
- Added extension star counts colour
- Added GitHub workflow for publishing extension to Open VSX Registry
- Added input options colours
- Added modified settings colour
- Added missing `punctuation.definition.mapping`, `punctuation.definition.sequence` and `storage.type.tag` colours for YAML
- Added `punctuation.definition.table` and `punctuation.eq` colours for TOML
- `.vscode/settings.json` added to `.gitignore`

### Changed

- Changes to documentation in `docs/colours.md`
- Class semantic token colour changed to `#ed5858`
- Icon updated to use new class semantic token colour
- Markdown `fenced_code.block.language` colour now uses type semantic token colour
- Python `entity.name.type.class` colour now applies to `entity.name.type`
- `string.quoted` colour now applies to `string`
- YAML `entity.name.tag` colour now applies to `entity.name.tag.yaml`

## 0.0.1 - 2026-03-07

Initial release
