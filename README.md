## Yeoman Express Generator Example

Built with [generator-express](https://github.com/petecoop/generator-express)
Options: MVC, Handlebars, Node-Sass, MongoDB, Grunt

```
# Scaffolding Commands
yo
? 'Allo Gary! What would you like to do? Express

Make sure you are in the directory you want to scaffold into.
This generator can also be run with: yo express

? Would you like to create a new directory for your project? No
? Select a version to install: MVC
? Select a view engine to use: Handlebars
? Select a css preprocessor to use (Sass Requires Ruby): Node-Sass
? Select a database to use: MongoDB
? Select a build tool to use: Grunt

I'm all done. Running npm install & bower install for you to install the required dependencies. If this fails, try running the command yourself.
```

```
# Start Commands
node app.js
grunt
```

```
# MongoDB Commands
mongo
show dbs
use mean-message-example-development
show tables
> db.articles.count()
10
> db.articles.find()
{ "_id" : ObjectId("5749ea0056dee21f45716218"), "title" : "Article One", "url" : "http://www.article.com/1", "text" : "An article about the number one", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f45716219"), "title" : "Article Two", "url" : "http://www.article.com/2", "text" : "An article about the number two", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f4571621a"), "title" : "Article Three", "url" : "http://www.article.com/3", "text" : "An article about the number three", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f4571621b"), "title" : "Article Four", "url" : "http://www.article.com/4", "text" : "An article about the number four", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f4571621c"), "title" : "Article Five", "url" : "http://www.article.com/5", "text" : "An article about the number five", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f4571621d"), "title" : "Article Six", "url" : "http://www.article.com/6", "text" : "An article about the number six", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f4571621e"), "title" : "Article Seven", "url" : "http://www.article.com/7", "text" : "An article about the number seven", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f4571621f"), "title" : "Article Eight", "url" : "http://www.article.com/8", "text" : "An article about the number eight", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f45716220"), "title" : "Article Nine", "url" : "http://www.article.com/9", "text" : "An article about the number nine", "timestamp" : "1464461813006" }
{ "_id" : ObjectId("5749ea0056dee21f45716221"), "title" : "Article Ten", "url" : "http://www.article.com/10", "text" : "An article about the number ten", "timestamp" : "1464461813006" }
```
