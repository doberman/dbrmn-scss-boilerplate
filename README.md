# dbrmn-scss-framework

Base framework for projects using [SCSS](http://sass-lang.com/).

## Usage

When creating a new SCSS module, use scss/__template.scss as a base.

In your new SCSS file, simply find and replace the string "template" with the name of the new module.

Then:

- Include the media query related mixins (e.g. `template-medium`) in
scss/media-queries/media-queries.scss.
- Import your SCSS file in scss/style.scss.

## Contributing

Everyone is more than welcome to contribute! More info on how to contribute is available in [CONTRIBUTING.md](CONTRIBUTING.md) (this info is also available when submitting a pull request).

## License

Licensed under the new BSD 3-clause license. See the separate [LICENSE](LICENSE) file.
