# dbrmn-scss-boilerplate

A structure and boilerplate for projects using [SCSS](http://sass-lang.com/). The purpose
of the boilerplate is to increase development speed, scalability, and maintainability.

## Structure
This is a short summary of the structure and responsibility of each file and folder. For more details see the header of each file separately.

```
/styles
|
| style.scss
|   Our SCSS entrypoint, this is what builds into our global CSS.
|
| media-query-dependants.scss
|   This file imports all modules that rely on the media-query mixins (contained
|   in /helpers/_mixins.scss), such as _typography.scss or a module in /modules.
|
|
base
|   \
|    | _base.scss
|    |    Contains the most global styles, such as styles for <html> and <body>,
|    |    these can be seen as project opinionated resets.
|    |
|    | _typography.scss
|    |    Contains all our SCSS for general typography, generally we want 'opt-in'
|    |    typography styles, don't apply styles to typography elements but
|    |    to classes, i.e. .headline. Specific typography, for example for
|    |    an .article, should reside in /modules/_article.scss.
|    |
|    | _variables.scss
|         Contains global project SCSS variables. Variables that are local to a
|         file should be kept in that file. Namespace the variable with the
|         concern of the variable, i.e. $color--<color> or $font--<size-default>.
|
|
helpers
|   \
|    | _mixins.scss
|    |    Contains mixins used globally. Mixins that are local to a file should
|    |    be included in the file itself.
|    |
|    | _module-dependencies.scss
|    |    Imported into shared modules as a convenience wrapper for multiple
|    |    other imports required by a module to work properly.
|    |
|    | _module-template.scss
|    |    A template for creating a new module, handy to duplicate,
|    |    rename, and then find and replace '_module-template' with for example
|    |    '_buttons'.
|    |
|    | _styleguide-example.scss
|         Contains a reference of SCSS that adheres to our linting rules and
|         style.
|
|
modules
|   \
|    | This folder contains the bulk of our styles, where each module should
|    | be broken into a separate partial (file), such as _buttons.scss or
|    | _forms.scss. See /helpers/_module-template.scss for how to structure a
|    | shared module file.
|
|
vendor
    \
     | This folder contains vendor CSS/SCSS.
     |
     | _normalize.scss
          Normalizes/resets browser specific styles (user-agent stylesheets).

```

## Stylelint
We use `stylelint` to ensure a consistent style. See `/src/helpers/_styleguide-example.scss`
for an example file that adheres to the `/.stylelintrc` rules. To lint manually run
`npm run lint`, this task is also run before each commit as a pre-commit hook.

## Gulp
To compile the SCSS run `npm install && gulp`. This is handy to ensure you don't
break anything while making changes.

## Middleman & `compass-import-once`
If you're using [`compass-import-once`](https://rubygems.org/gems/compass-import-once/) (e.g. Middleman) you have to force `/media-query-dependants.scss` to be imported several times into `/style.scss`. This is done by adding a `!` at the end of the file to be imported, i.e. `media-query-dependants.scss!`.

## Contributing
Everyone is more than welcome to contribute! More info on how to contribute is available in [CONTRIBUTING.md](CONTRIBUTING.md) (this info is also available when submitting a pull request).

## License
Licensed under the new BSD 3-clause license. See the separate [LICENSE](LICENSE) file.
