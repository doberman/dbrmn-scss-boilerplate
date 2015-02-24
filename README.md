# dbrmn-scss-framework

Base framework to use for to use for projects using
[SCSS](http://sass-lang.com/).

## Usage

When creating a new SCSS file, please use scss/template.scss as a base.
In your new SCSS file, simply find and replace the string "template" with the name of the new file.

Then:

- Include the media query related mixins (e.g. `template-medium`) in
scss/media-queries/media-queries.scss.
- Import your SCSS file in scss/style.scss.
