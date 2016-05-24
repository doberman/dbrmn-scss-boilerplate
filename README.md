# dbrmn-scss-framework

Base framework for projects using [SCSS](http://sass-lang.com/).

## Usage

When creating a new SCSS module, use `scss/modules/__module.scss.template` as a base.

In your new SCSS file, simply find and replace the string "template" with the name of the new module.

Then import your SCSS file in `scss/_all.scss`.

The file `should-be-empty.scss` is a verification tool that, when all styles are correctly placed inside `layout-*` mixins, should compile to an empty CSS file. Note that this file is only for verifying that the scss is written correctly and should not be included in a deploy or delivery.

### Middleman & `compass-import-once`

If you're using [`compass-import-once`](https://rubygems.org/gems/compass-import-once/) (eg Middleman) you have to force `scss/all` to be imported several times into `style.scss`. This is done by adding a `!` at the end of the file to be imported, ie `scss/all!`.

## Contributing

Everyone is more than welcome to contribute! More info on how to contribute is available in [CONTRIBUTING.md](CONTRIBUTING.md) (this info is also available when submitting a pull request).

## License

Licensed under the new BSD 3-clause license. See the separate [LICENSE](LICENSE) file.
