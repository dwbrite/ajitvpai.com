This repo contain the contents served at the website http://ajitvpai.com/

This site was initially created by [/u/Hdmoney] inspired by a Reddit [comment thread], with major development by [/u/DistortoiseLP], and hosting provided by [/u/Sunsparc]
in [/r/pcmasterrace].

[comment thread]: https://np.reddit.com/r/pcmasterrace/comments/6d957x/website_packages_from_your_isp_its_coming/di16k9n/?context=3
[/u/Hdmoney]: https://reddit.com/user/Hdmoney
[/u/Sunsparc]: https://reddit.com/user/Sunsparc
[/u/DistortoiseLP]: https://reddit.com/user/DistortoiseLP
[/r/pcmasterrace]: https://reddit.com/r/pcmasterrace



### Hey, I want to contribute!


Awesome! Thank you for taking interest in contributing.

* Check the [Issues](http://github.com/dwbrite/ajitvpai.com) page for anything that needs work.
* Fork a copy of the repository
* Write and commit your code to your copy of the repository
* Submit a pull request

### Setting up your local environment

You'll need [NodeJS](https://nodejs.org/en/download/) and [gulp](http://gulpjs.com/) to make CSS changes to this project.

After forking the repo, cd into the `scss` folder and run
```
$ npm install
```
Any changes to the HTML can be made in `index.html`.

If you are editing CSS, you can run the `gulp watch` command in the `/scss` folder. Edit `./scss/src/styles.scss` to your liking.


If you want to see your changes on a local dev environment, you can use the python SimpleHTTPServer module. Run the following command in the root directory:
```
$ python -m SimpleHTTPServer
```

If you are using python 3 on a windows machine, please try using the code below if the code above does not work.
```
$ python -m http.server [port]
```
In your browser, head to `localhost:8000` to see your changes.
