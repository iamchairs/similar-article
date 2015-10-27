similar-article
---------------

Experimental simple article similarity algorithm


## Install

```
  npm install similar-article
```

## Use

```
var SimilarArticle = require('similar-article');
console.log(SimilarArticle.compare(string1, string2)); // number between 0 - 1
```

## Description

Uses word frequency to determine if two articles are about similar or same topics.