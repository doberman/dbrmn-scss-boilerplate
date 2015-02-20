# dbrmn-scss-framework

Base framework to use for to use for projects using
[http://sass-lang.com/](SCSS).

## Usage

When creating a new SCSS file, please use scss/\_\_template.scss as a base.
In your new SCSS file, simply find and replace the string "template" with the name of the new file.

Then:

- Include the media query related mixins (e.g. `_template-medium`) in
scss/\_media-queries/\_media-queries.scss.
- Import your SCSS file in scss/style.scss.
