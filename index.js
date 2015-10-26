module.exports = (function() {
  'use strict';

  var common = {'has':true,'doesnt':true,'too':true,'been':true,'im':true,'hes':true,'had':true,'says':true,'i':true,'wont':true,'here':true,'were':true,'there':true,'each':true,'are':true,'is':true,'said':true,'was':true,'the':true,'be':true,'to':true,'of':true,'and':true,'a':true,'in':true,'that':true,'have':true,'I':true,'it':true,'for':true,'not':true,'on':true,'with':true,'he':true,'as':true,'you':true,'do':true,'at':true,'this':true,'but':true,'his':true,'by':true,'from':true,'they':true,'we':true,'say':true,'her':true,'she':true,'or':true,'an':true,'will':true,'my':true,'one':true,'all':true,'would':true,'there':true,'their':true,'what':true,'so':true,'up':true,'out':true,'if':true,'about':true,'who':true,'get':true,'which':true,'go':true,'me':true,'when':true,'make':true,'can':true,'like':true,'time':true,'no':true,'just':true,'him':true,'know':true,'take':true,'person':true,'into':true,'year':true,'your':true,'good':true,'some':true,'could':true,'them':true,'see':true,'other':true,'than':true,'then':true,'now':true,'look':true,'only':true,'come':true,'its':true,'over':true,'think':true,'also':true,'back':true,'after':true,'use':true,'two':true,'how':true,'our':true,'work':true,'first':true,'well':true,'way':true,'even':true,'new':true,'want':true,'because':true,'any':true,'these':true,'give':true,'day':true,'most':true,'us':true};

  return new SimilarArticle();

  function SimilarArticle() {
    var self = this;

    this.compare = function(str1, str2) {
      var a1 = self.processString(str1);
      var a2 = self.processString(str2);

      var a1Words = [];
      var a1TopWords = [];
      var a2Words = [];
      var a2TopWords = [];

      for(var i = 0; i < a1.sortedWords.length; i++) {
        var word = a1.sortedWords[i];
        if(word[1] > a1.averageDensity * 3) {
          if(word[1] > a1.averageDensity * 4) {
            a1TopWords.push(word);
          }

          a1Words.push(word);
        }
      }

      for(var i = 0; i < a2.sortedWords.length; i++) {
        var word = a2.sortedWords[i];
        if(word[1] > a2.averageDensity * 3) {
          if(word[1] > a2.averageDensity * 4) {
            a2TopWords.push(word);
          }

          a2Words.push(word);
        }
      }

      var scenarios = [
        [a1TopWords, a2Words],
        [a2TopWords, a1Words]
      ];

      var matches = 0;
      for(var i = 0; i < scenarios.length; i++) {
        var topWords = scenarios[i][0];
        var words = scenarios[i][1];

        for(var l = 0; l < topWords.length; l++) {
          var topWord = topWords[l];

          for(var k = 0; k < words.length; k++) {
            var word = words[k];
            if(topWord[0] === word[0]) {
              matches++;
              break;
            }
          }
        }
      }

      return (matches/(a1TopWords.length + a2TopWords.length));
    }

    this.processString = function(str) {
      var article = new Article();

      article.str = str;
      article.sentences = str.replace(/[^\w\.\s]/gi, '').split(/\.\s+|$/g);

      // Word density
      self.loadWords(article);

      // Avereage density
      self.loadAverageDensity(article);

      // Pronouns
      self.loadPronouns(article);

      return article;
    }

    this.loadPronouns = function(article) {
      for(var i = 0; i < article.sentences.length; i++) {
        var pronouns = self.findPronouns(article.sentences[i]);
        for(var k = 0; k < pronouns.length; k++) {
          var pronoun = pronouns[k];

          if(!article.pronouns[pronoun]) {
            article.pronouns[pronoun] = 0;
          }

          article.pronouns[pronoun]++;
        }
      }
    }

    this.loadWords = function(article) {
      var words = article.str.replace(/[^\w\s]/gi, '').split(/\s+|$/g);
      for(var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();

        if(isNaN(parseInt(word)) && !common[word]) {
          if(!article.words[word]) {
            article.words[word] = 0;
          }

          article.words[word]++;
        }
      }

      var sortedWords = [];
      for(var word in article.words) {
        sortedWords.push([word, article.words[word]]);
      }

      sortedWords.sort(function(a, b) {
        return b[1] - a[1];
      });

      article.sortedWords = sortedWords;
    }

    this.loadAverageDensity = function(article) {
      var sum = 0;
      for(var i = 0; i < article.sortedWords.length; i++) {
        sum += article.sortedWords[i][1];
      }

      article.averageDensity = sum/article.sortedWords.length;
    }

    this.findPronouns = function(str) {
      var pronouns = [];
      var words = str.split(/\s+/g);
      var splice;
      var idx = 0;

      // First letter of first word will be capitalized in a sentence.
      // But if the second work in the sentence is capitalized, the first world is probably the
      //  start of a pronoun.
      if(words.length > 1 && self.isUC(words[1])) {
        splice = self.readPronoun(words, 0);
        idx = splice[1] + 1;

        var pronounWords = [];
        for(var k = splice[0]; k <= splice[0] + (splice[1] - splice[0]); k++) {
          pronounWords.push(words[k]);
        }

        pronouns.push(pronounWords.join(' '));
      } else {
        idx = 2;
      }

      for(var i = idx; i < words.length; i++) {
        if(self.isUC(words[i])) {
          splice = self.readPronoun(words, i);
          i = splice[1] + 1;

          var pronounWords = [];
          for(var k = splice[0]; k <= splice[0] + (splice[1] - splice[0]); k++) {
            pronounWords.push(words[k]);
          }

          pronouns.push(pronounWords.join(' '));
        }
      }

      return pronouns;
    }

    // Returns the start index of the pronoun and the end index of the pronoun
    this.readPronoun = function(words, startIdx) {
      if(self.endsInComma(words[startIdx])) {
        return [startIdx, startIdx];
      }

      for(var i = startIdx+1; i < words.length; i++) {
        var word = words[i];

        if(self.isUC(word) || word === 'for' || word === 'of' || word === 'on') {
          if(self.endsInComma(word)) {
            return [startIdx, i];
          }
        } else {
          return [startIdx, i-1];
        }
      }

      return [startIdx, startIdx];
    }

    this.isUC = function(word) {
      return word[0] !== word[0].toLowerCase();
    }

    this.endsInComma = function(word) {
      return word[word.length-1] === ',';
    }
  }

  function Article() {
    this.str = '';
    this.averageDensity = 0;
    this.sentences = [];
    this.wordsSorted = [];
    this.words = {};
    this.pronouns = {};
    this.quotes = [];
  }
})();