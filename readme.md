# XKCD Reader
## A nanoproject

Try it here: [Codepen Link](https://codepen.io/meethari/pen/abvPgMq)

![Screenshot of app with XKCD 2308 loaded](/images/screenshot.png)

#### What is this?
This is a webpage that allows you to pull XKCD comics by the comic number. 


#### Motivation
I wanted to learn how to make HTTP requests from JS, so that I can build apps that take advantage of a lot of HTTP APIs that are available.

#### How did you make this?
This website makes an HTTP request to [mrmartineau's CORS enabled XKCD API](https://github.com/mrmartineau/xkcd-api) and parses the JSON to obtain details of the relevant XKCD comic.

#### Challenges
Using `XmlHttpRequest` to access the original XKCD API resulted in CORS errors that I was unsure of how to deal with. Thanks to Hossam for suggesting the CORS enabled API.

#### Future directions
- Add previous and next buttons
- Make the UI look nicer using Bootstrap
- Reimplement using React to practise that.
