# dbrmn-scss-framework

Base framework to use for to use for projects using
[SCSS](http://sass-lang.com/).

## Usage

When creating a new SCSS module, use scss/__template.scss as a base.

In your new SCSS file, simply find and replace the string "template" with the name of the new module.

Then:

- Include the media query related mixins (e.g. `template-medium`) in
scss/media-queries/media-queries.scss.
- Import your SCSS file in scss/style.scss.

## Contributing

Everyone is more than welcome to contribute! More info is available in CONTRIBUTING.md (or under Pull requests).

## License

Licensed under the new BSD 3-clause license. See the separate LICENSE file.