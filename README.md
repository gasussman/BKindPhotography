# Notes on how I got the site working

Hey Garrett, I figured this might be the easiest way to explain what I'm doing to get the app up and running.

## Grunt

I configured a simple [Gruntfile](http://gruntjs.com/) that will handle running your app so the Angular part will work. You'll need a basic backend when using heroku (Grunt isn't something you'd run on a remote, hosted platform), but that's something Matthieu can help with (and if he can't, let me know and I'll help you with it).

I added a the few Grunt packages you'll be using for this under `devDependencies` in `package.json`, if you want to take a look at what they are. If you run

```bash
$ npm install # installs the project Grunt dependencies
$ npm install -g grunt-cli # installs the command line interface for running grunt tasks on your computer permanently
```

You'll be able to run

```bash
$ grunt
```

in your terminal and your site will start running on the port specified in the Terminal (it should be `localhost:8000`, and it should open automatically in Google Chrome for you). I added tasks for:

- running a server
- opening automatically in google chrome
- having the code reload in your browser automatically on save (so you don't have to refresh the page)

If you don't want any of these, let me know and I'll amend the file.

This is new and requires installation on your end, so let me know if you have trouble with it.

## `link` files in the `<head>`

### CDN links errors

When you don't have a server running (i.e. when there isn't a backend serving up the static content), the external links like

```html
<link href="https//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
```

Don't load because they're requested via the backend and then loaded in by the server.

#### The solution

This is precisely what Bower is for. You create a `bower.json` file (which I've done for you) and add the bower names of the files you want included in your app. The names for these can be found on the websites of the developers of the libraries/frameworks themselves (just google "bower _insert package name here_" if you have trouble finding them). If finding the exact versions for Bower packages is difficult, you can also run

```bash
$ bower install <package name>
```

If it works, then you should see a new `bower_components` directory in your app with the folder of the dependencies you installed. Now you can link to these directly by including the local file path for the assets provided by Bower (see more on this in __local file errors__ below).

You still need to have a `bower.json` file with the name of your app and the version, but once you've installed Bower via NPM, everything else should work fine.

Speaking of NPM, that's what the `package.json` file is for (which it seems you've figured out). Same behavioral paradigm as Bower: you can either include the package name in the `package.json` explicitly, or run

```bash
$ npm install <package name> # you can get the package name from the developer/documentation site as well
```

### Local file errors

If you have a file that _isn't_ requested via http from a cdn, that means that it's expected to be provided locally. Examples of this in your old `<head>` tag are

```html
<link rel="stylesheet" type="text/css" href="/stylesheets/app.css">
<script src="/javascripts/app.js"></script>
<script>
 require('scripts/app');
</script>
```

The page is looking for files in your app's directory structure. So when you say `src="/javascripts/app.js"`, your page literally looks for a directory named `javascripts` in your root directory, and then for a file called `app.js` within `javascripts/`. Since you didn't have that as a folder in your root path, you're going to get an error.

I've updated the files in the head with the paths to their directories and files (including your `app.js`). Notice how the paths vary between components. And even after installing Bower and the dependencies for your app, you need to write the `link` and `script` tags yourself. Here's a screenshot attempting to show the correlation:

![directory path to head](https://dl.dropboxusercontent.com/u/10788831/Screenshots/gs_file_path_shot.png)

> This image is really hectic, but hopefully it's more helpful than confusing.

If you have trouble extrapolating this concept, or want some more context in how we handled this in Bloc Jams, let me know.

#### Why the `min`?

This means the files are minified, which takes out a bunch of unnecessary whitespace and shortens the variables and function names in the code so that it loads faster in the browser. If you aren't planning to edit a library yourself, stick to files with a `.min.js` extension.

#### `require` syntax

`require('scripts/app')` is a node-specific method for asynchronously loading JS files that will only work if you have a backend processing it or something like [RequireJS](http://requirejs.org/) included in your app. You don't have any need for it here, though.

#### Image error

Continuing on the same line of thought, preceded all your image calls in your Angular with the proper directory path. Your landing link also referenced the Bloc Jams logo, which doesn't appear to be included in this app, so I deleted it.

```html
<a ui-sref='landing' class='logo navbar-left'>
  <img src="app/assets/images/blocjams.png">
</a>
```

#### Template path

The reference to the template path in `app.js` needs to follow this convention as well.

Before 

```js
$stateProvider.state('landing', {
  url: '/',
  templateUrl: 'templates/landing.html',
  controller: 'Landing.controller'
});
```

After

```js
$stateProvider.state('landing', {
  url: '/',
  templateUrl: 'app/assets/templates/landing.html',
  controller: 'Landing.controller'
});
```

Any discrepancy between these conventions and Bloc Jams is related to the stuff we did on the backend to conveniently tell our app where to look for files.

### Adding new files

If you add any new files that the app depends on (e.g. a separate file for an angular controller, the path to some custom styles, etc), you'll need to continue to add them to your `<head>` or you'll get errors, too.

## The `vendor` directory

If you have files that aren't on Bower, but are still external libraries or snippets of code that you did not write and don't intend to modify, you put them in `vendor`. This isn't required, (you could include them in `app/assets` for example), but it's an organizational paradigm that most developers follow.

## Other additions

You didn't have a folder or file for your custom styles, so I added that in `app/assets` and included it in your header.

## Ordering your file references in the `<head>`

### CSS before JS

In general, CSS files should always go before JS files in the `<head>`. This is because JS acts on styling in many ways, and if the styles aren't loaded before the JS, then you'll get styling that you're not expecting.

### Dependencies

If you have a file that _depends_ on another -- for example, `angular-ui-router` depends on the general `angular` framework to function -- it should be included in the `<head>` before the file with the dependency. This will also prevent errors. It's usually either explained (on the documentation website) or is relatively intuitive which files depend on one another, but if you have trouble, feel free to shoot me an email in the future.

## A Note about Sass

Sass is a CSS Preprocessor, and as that term might imply, `.scss` files need to be processed by a server or a task runner (like Grunt) for it to function in a browser. Your browser doesn't know how to interpret Sass, and so your application does the conversion from Sass to CSS so that the browser is provided something it knows how to use.

## Reminder

Even though I wrote all this stuff out and tried to provide code snippets, remember to take a look at the latest commit or the Pull Request to see the actual changes I made to source. Send me questions if you have them.

![latest commit and PR](https://dl.dropboxusercontent.com/u/10788831/Screenshots/latest_commit_PR.png)