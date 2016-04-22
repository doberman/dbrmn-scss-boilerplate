# dbrmn-scss-framework

Base framework for projects using [SCSS](http://sass-lang.com/).

## Usage

When creating a new SCSS module, use `scss/__template.scss` as a base.

In your new SCSS file, simply find and replace the string "template" with the name of the new module.

Then import your SCSS file in `scss/_all.scss`.

The file `should-be-empty.scss` is a verification tool that, when all styles are correctly placed inside `layout-*` mixins, should compile to an empty CSS file. Note that this file is only for verifying that the scss is written correctly and should not be included in a deploy or delivery.

## Breakpoints & Media Queries

The breakpoints are defined in base/_variables and mediaqueries and column classes are generated from the breakpoint list.

### Breakpoint mixin

```
@include breakpoint(breakpoint);
```
**$breakpoint** depends on what you set the breakpoints to in (base/_variables -> $breakpoints)

The mixin can also be used to wrap elements
```
@include breakpoint(breakpoint){
    .my-class {
        background-color: red;
    }
    #my-id {
        background-color: blue;
    }
}
```

## Grid

### Classes

Grid column classes are generated from the base/_variables -> $breakpoint-classes list. They must have the same names as the $breakpoints.

```
<div class="row">
    <div class="sm-12 md-6 md-center lg-opposite col">
        On small, this div is full width.
        On medium, it's 6 columns wide and centered.
        On large, this div floats to the right.
    </div>
</div>
```

### Mixins

#### Rows
```
@include row();
```

#### Columns
```
@include col(size, position);
```
**$size** depends on what you set the grid column count to (base/_variables -> $grid-col-count)
**$position** left | right | center (left is set to default)

### Middleman & `compass-import-once`

If you're using [`compass-import-once`](https://rubygems.org/gems/compass-import-once/) (eg Middleman) you have to force `scss/all` to be imported several times into `style.scss`. This is done by adding a `!` at the end of the file to be imported, ie `scss/all!`.

## Contributing

Everyone is more than welcome to contribute! More info on how to contribute is available in [CONTRIBUTING.md](CONTRIBUTING.md) (this info is also available when submitting a pull request).

## License

Licensed under the new BSD 3-clause license. See the separate [LICENSE](LICENSE) file.
