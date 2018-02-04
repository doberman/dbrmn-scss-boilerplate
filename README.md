# dbrmn-scss-boilerplate

A structure and boilerplate for projects using [SCSS](http://sass-lang.com/).
The purpose of the boilerplate is to increase development speed, scalability,
and maintainability.

## Structure
This is a short summary of the structure and responsibility of each file and
folder. For more details see the header of each file separately.

```
/styles
|
| style.scss
|   The SCSS entrypoint, this is where all partials are included.
|
base
|   \
|    | _base.scss
|    |    Contains the most global styles, such as styles for <html> and <body>,
|    |    these can be seen as project opinionated resets.
|    |
|    | _typography.scss
|    |    Contains all our SCSS for general typography, generally we want
|    |    'opt-in' typography styles, don't apply styles to typography elements
|    |    but to classes, i.e. .headline. Specific typography, for example for
|    |    an .article, should reside in /modules/_article.scss.
|    |
|    | _variables.scss
|         Contains global project SCSS variables. Variables that are local to a
|         file should be kept in that file. Namespace the variable with the
|         concern of the variable, i.e. $color-<color> or $font-<size-default>.
|
|
helpers
|   \
|    | _mixins.scss
|    |    Contains mixins used globally. Mixins that are local to a file should
|    |    be included in the file itself.
|    |
|    | _stylelint-example.scss
|    |    Contains a reference of SCSS that adheres to our linting rules and
|    |    style.
|    |
|    | _utils.scss
|         Contains general utility classes.
|
|
modules
|   \
|    | This folder contains the bulk of our styles, where each module should
|    | be broken into a separate partial (file), such as _buttons.scss or
|    | _forms.scss.
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
We use `stylelint` to ensure a consistent style. See
`/src/helpers/_stylelint-example.scss` for an example file that adheres to the
`/.stylelintrc` rules. To lint manually run `npm run lint`, this task is also
run before each commit as a pre-commit hook.

## Gulp
To compile the SCSS run `npm install && gulp`. This is handy to ensure you don't
break anything while making changes.

## Contributing
Everyone is more than welcome to contribute! More info on how to contribute is
available in [CONTRIBUTING.md](CONTRIBUTING.md) (this info will also be
available when submitting a pull request).

## License
Licensed under the new BSD 3-clause license. See the separate [LICENSE](LICENSE)
file.
