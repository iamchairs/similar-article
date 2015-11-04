module.exports = (function() {
  'use strict';

  var common100 = {"the":true,"be":true,"and":true,"of":true,"a":true,"in":true,"to":true,"have":true,"it":true,"I":true,"that":true,"for":true,"you":true,"he":true,"with":true,"on":true,"do":true,"say":true,"this":true,"they":true,"at":true,"but":true,"we":true,"his":true,"from":true,"not":true,"n't":true,"by":true,"she":true,"or":true,"as":true,"what":true,"go":true,"their":true,"can":true,"who":true,"get":true,"if":true,"would":true,"her":true,"all":true,"my":true,"make":true,"about":true,"know":true,"will":true,"up":true,"one":true,"time":true,"there":true,"year":true,"so":true,"think":true,"when":true,"which":true,"them":true,"some":true,"me":true,"people":true,"take":true,"out":true,"into":true,"just":true,"see":true,"him":true,"your":true,"come":true,"could":true,"now":true,"than":true,"like":true,"other":true,"how":true,"then":true,"its":true,"our":true,"two":true,"more":true,"these":true,"want":true,"way":true,"look":true,"first":true,"also":true,"new":true,"because":true,"day":true,"use":true,"no":true,"man":true,"find":true,"here":true,"thing":true,"give":true,"many":true,"well":true,"only":true,"those":true,"tell":true,"very":true};
  var common200 = {"the":true,"be":true,"and":true,"of":true,"a":true,"in":true,"to":true,"have":true,"it":true,"I":true,"that":true,"for":true,"you":true,"he":true,"with":true,"on":true,"do":true,"say":true,"this":true,"they":true,"at":true,"but":true,"we":true,"his":true,"from":true,"not":true,"n't":true,"by":true,"she":true,"or":true,"as":true,"what":true,"go":true,"their":true,"can":true,"who":true,"get":true,"if":true,"would":true,"her":true,"all":true,"my":true,"make":true,"about":true,"know":true,"will":true,"up":true,"one":true,"time":true,"there":true,"year":true,"so":true,"think":true,"when":true,"which":true,"them":true,"some":true,"me":true,"people":true,"take":true,"out":true,"into":true,"just":true,"see":true,"him":true,"your":true,"come":true,"could":true,"now":true,"than":true,"like":true,"other":true,"how":true,"then":true,"its":true,"our":true,"two":true,"more":true,"these":true,"want":true,"way":true,"look":true,"first":true,"also":true,"new":true,"because":true,"day":true,"use":true,"no":true,"man":true,"find":true,"here":true,"thing":true,"give":true,"many":true,"well":true,"only":true,"those":true,"tell":true,"very":true,"even":true,"back":true,"any":true,"good":true,"woman":true,"through":true,"us":true,"life":true,"child":true,"work":true,"down":true,"may":true,"after":true,"should":true,"call":true,"world":true,"over":true,"school":true,"still":true,"try":true,"last":true,"ask":true,"need":true,"too":true,"feel":true,"three":true,"state":true,"never":true,"become":true,"between":true,"high":true,"really":true,"something":true,"most":true,"another":true,"much":true,"family":true,"own":true,"leave":true,"put":true,"old":true,"while":true,"mean":true,"keep":true,"student":true,"why":true,"let":true,"great":true,"same":true,"big":true,"group":true,"begin":true,"seem":true,"country":true,"help":true,"talk":true,"where":true,"turn":true,"problem":true,"every":true,"start":true,"hand":true,"might":true,"American":true,"show":true,"part":true,"against":true,"place":true,"such":true,"again":true,"few":true,"case":true,"week":true,"company":true,"system":true,"each":true,"right":true,"program":true,"hear":true,"question":true,"during":true,"play":true,"government":true,"run":true,"small":true,"number":true,"off":true,"always":true,"move":true,"night":true,"live":true,"Mr":true,"point":true,"believe":true,"hold":true,"today":true,"bring":true,"happen":true,"next":true,"without":true};
  var common300 = {"the":true,"be":true,"and":true,"of":true,"a":true,"in":true,"to":true,"have":true,"it":true,"I":true,"that":true,"for":true,"you":true,"he":true,"with":true,"on":true,"do":true,"say":true,"this":true,"they":true,"at":true,"but":true,"we":true,"his":true,"from":true,"not":true,"n't":true,"by":true,"she":true,"or":true,"as":true,"what":true,"go":true,"their":true,"can":true,"who":true,"get":true,"if":true,"would":true,"her":true,"all":true,"my":true,"make":true,"about":true,"know":true,"will":true,"up":true,"one":true,"time":true,"there":true,"year":true,"so":true,"think":true,"when":true,"which":true,"them":true,"some":true,"me":true,"people":true,"take":true,"out":true,"into":true,"just":true,"see":true,"him":true,"your":true,"come":true,"could":true,"now":true,"than":true,"like":true,"other":true,"how":true,"then":true,"its":true,"our":true,"two":true,"more":true,"these":true,"want":true,"way":true,"look":true,"first":true,"also":true,"new":true,"because":true,"day":true,"use":true,"no":true,"man":true,"find":true,"here":true,"thing":true,"give":true,"many":true,"well":true,"only":true,"those":true,"tell":true,"very":true,"even":true,"back":true,"any":true,"good":true,"woman":true,"through":true,"us":true,"life":true,"child":true,"work":true,"down":true,"may":true,"after":true,"should":true,"call":true,"world":true,"over":true,"school":true,"still":true,"try":true,"last":true,"ask":true,"need":true,"too":true,"feel":true,"three":true,"state":true,"never":true,"become":true,"between":true,"high":true,"really":true,"something":true,"most":true,"another":true,"much":true,"family":true,"own":true,"leave":true,"put":true,"old":true,"while":true,"mean":true,"keep":true,"student":true,"why":true,"let":true,"great":true,"same":true,"big":true,"group":true,"begin":true,"seem":true,"country":true,"help":true,"talk":true,"where":true,"turn":true,"problem":true,"every":true,"start":true,"hand":true,"might":true,"American":true,"show":true,"part":true,"against":true,"place":true,"such":true,"again":true,"few":true,"case":true,"week":true,"company":true,"system":true,"each":true,"right":true,"program":true,"hear":true,"question":true,"during":true,"play":true,"government":true,"run":true,"small":true,"number":true,"off":true,"always":true,"move":true,"night":true,"live":true,"Mr":true,"point":true,"believe":true,"hold":true,"today":true,"bring":true,"happen":true,"next":true,"without":true,"before":true,"large":true,"million":true,"must":true,"home":true,"under":true,"water":true,"room":true,"write":true,"mother":true,"area":true,"national":true,"money":true,"story":true,"young":true,"fact":true,"month":true,"different":true,"lot":true,"study":true,"book":true,"eye":true,"job":true,"word":true,"though":true,"business":true,"issue":true,"side":true,"kind":true,"four":true,"head":true,"far":true,"black":true,"long":true,"both":true,"little":true,"house":true,"yes":true,"since":true,"provide":true,"service":true,"around":true,"friend":true,"important":true,"father":true,"sit":true,"away":true,"until":true,"power":true,"hour":true,"game":true,"often":true,"yet":true,"line":true,"political":true,"end":true,"among":true,"ever":true,"stand":true,"bad":true,"lose":true,"however":true,"member":true,"pay":true,"law":true,"meet":true,"car":true,"city":true,"almost":true,"include":true,"continue":true,"set":true,"later":true,"community":true,"name":true,"five":true,"once":true,"white":true,"least":true,"president":true,"learn":true,"real":true,"change":true,"team":true,"minute":true,"best":true,"several":true,"idea":true,"kid":true,"body":true,"information":true,"nothing":true,"ago":true,"lead":true,"social":true,"understand":true,"whether":true,"watch":true,"together":true,"follow":true};
  var common400 = {"the":true,"be":true,"and":true,"of":true,"a":true,"in":true,"to":true,"have":true,"it":true,"I":true,"that":true,"for":true,"you":true,"he":true,"with":true,"on":true,"do":true,"say":true,"this":true,"they":true,"at":true,"but":true,"we":true,"his":true,"from":true,"not":true,"n't":true,"by":true,"she":true,"or":true,"as":true,"what":true,"go":true,"their":true,"can":true,"who":true,"get":true,"if":true,"would":true,"her":true,"all":true,"my":true,"make":true,"about":true,"know":true,"will":true,"up":true,"one":true,"time":true,"there":true,"year":true,"so":true,"think":true,"when":true,"which":true,"them":true,"some":true,"me":true,"people":true,"take":true,"out":true,"into":true,"just":true,"see":true,"him":true,"your":true,"come":true,"could":true,"now":true,"than":true,"like":true,"other":true,"how":true,"then":true,"its":true,"our":true,"two":true,"more":true,"these":true,"want":true,"way":true,"look":true,"first":true,"also":true,"new":true,"because":true,"day":true,"use":true,"no":true,"man":true,"find":true,"here":true,"thing":true,"give":true,"many":true,"well":true,"only":true,"those":true,"tell":true,"very":true,"even":true,"back":true,"any":true,"good":true,"woman":true,"through":true,"us":true,"life":true,"child":true,"work":true,"down":true,"may":true,"after":true,"should":true,"call":true,"world":true,"over":true,"school":true,"still":true,"try":true,"last":true,"ask":true,"need":true,"too":true,"feel":true,"three":true,"state":true,"never":true,"become":true,"between":true,"high":true,"really":true,"something":true,"most":true,"another":true,"much":true,"family":true,"own":true,"leave":true,"put":true,"old":true,"while":true,"mean":true,"keep":true,"student":true,"why":true,"let":true,"great":true,"same":true,"big":true,"group":true,"begin":true,"seem":true,"country":true,"help":true,"talk":true,"where":true,"turn":true,"problem":true,"every":true,"start":true,"hand":true,"might":true,"American":true,"show":true,"part":true,"against":true,"place":true,"such":true,"again":true,"few":true,"case":true,"week":true,"company":true,"system":true,"each":true,"right":true,"program":true,"hear":true,"question":true,"during":true,"play":true,"government":true,"run":true,"small":true,"number":true,"off":true,"always":true,"move":true,"night":true,"live":true,"Mr":true,"point":true,"believe":true,"hold":true,"today":true,"bring":true,"happen":true,"next":true,"without":true,"before":true,"large":true,"million":true,"must":true,"home":true,"under":true,"water":true,"room":true,"write":true,"mother":true,"area":true,"national":true,"money":true,"story":true,"young":true,"fact":true,"month":true,"different":true,"lot":true,"study":true,"book":true,"eye":true,"job":true,"word":true,"though":true,"business":true,"issue":true,"side":true,"kind":true,"four":true,"head":true,"far":true,"black":true,"long":true,"both":true,"little":true,"house":true,"yes":true,"since":true,"provide":true,"service":true,"around":true,"friend":true,"important":true,"father":true,"sit":true,"away":true,"until":true,"power":true,"hour":true,"game":true,"often":true,"yet":true,"line":true,"political":true,"end":true,"among":true,"ever":true,"stand":true,"bad":true,"lose":true,"however":true,"member":true,"pay":true,"law":true,"meet":true,"car":true,"city":true,"almost":true,"include":true,"continue":true,"set":true,"later":true,"community":true,"name":true,"five":true,"once":true,"white":true,"least":true,"president":true,"learn":true,"real":true,"change":true,"team":true,"minute":true,"best":true,"several":true,"idea":true,"kid":true,"body":true,"information":true,"nothing":true,"ago":true,"lead":true,"social":true,"understand":true,"whether":true,"watch":true,"together":true,"follow":true,"parent":true,"stop":true,"face":true,"anything":true,"create":true,"public":true,"already":true,"speak":true,"others":true,"read":true,"level":true,"allow":true,"add":true,"office":true,"spend":true,"door":true,"health":true,"person":true,"art":true,"sure":true,"war":true,"history":true,"party":true,"within":true,"grow":true,"result":true,"open":true,"morning":true,"walk":true,"reason":true,"low":true,"win":true,"research":true,"girl":true,"guy":true,"early":true,"food":true,"moment":true,"himself":true,"air":true,"teacher":true,"force":true,"offer":true,"enough":true,"education":true,"across":true,"although":true,"remember":true,"foot":true,"second":true,"boy":true,"maybe":true,"toward":true,"able":true,"age":true,"policy":true,"everything":true,"love":true,"process":true,"music":true,"including":true,"consider":true,"appear":true,"actually":true,"buy":true,"probably":true,"human":true,"wait":true,"serve":true,"market":true,"die":true,"send":true,"expect":true,"sense":true,"build":true,"stay":true,"fall":true,"oh":true,"nation":true,"plan":true,"cut":true,"college":true,"interest":true,"death":true,"course":true,"someone":true,"experience":true,"behind":true,"reach":true,"local":true,"kill":true,"six":true,"remain":true,"effect":true,"yeah":true,"suggest":true,"class":true,"control":true,"raise":true,"care":true};
  var common500 = {"the":true,"be":true,"and":true,"of":true,"a":true,"in":true,"to":true,"have":true,"it":true,"I":true,"that":true,"for":true,"you":true,"he":true,"with":true,"on":true,"do":true,"say":true,"this":true,"they":true,"at":true,"but":true,"we":true,"his":true,"from":true,"not":true,"n't":true,"by":true,"she":true,"or":true,"as":true,"what":true,"go":true,"their":true,"can":true,"who":true,"get":true,"if":true,"would":true,"her":true,"all":true,"my":true,"make":true,"about":true,"know":true,"will":true,"up":true,"one":true,"time":true,"there":true,"year":true,"so":true,"think":true,"when":true,"which":true,"them":true,"some":true,"me":true,"people":true,"take":true,"out":true,"into":true,"just":true,"see":true,"him":true,"your":true,"come":true,"could":true,"now":true,"than":true,"like":true,"other":true,"how":true,"then":true,"its":true,"our":true,"two":true,"more":true,"these":true,"want":true,"way":true,"look":true,"first":true,"also":true,"new":true,"because":true,"day":true,"use":true,"no":true,"man":true,"find":true,"here":true,"thing":true,"give":true,"many":true,"well":true,"only":true,"those":true,"tell":true,"very":true,"even":true,"back":true,"any":true,"good":true,"woman":true,"through":true,"us":true,"life":true,"child":true,"work":true,"down":true,"may":true,"after":true,"should":true,"call":true,"world":true,"over":true,"school":true,"still":true,"try":true,"last":true,"ask":true,"need":true,"too":true,"feel":true,"three":true,"state":true,"never":true,"become":true,"between":true,"high":true,"really":true,"something":true,"most":true,"another":true,"much":true,"family":true,"own":true,"leave":true,"put":true,"old":true,"while":true,"mean":true,"keep":true,"student":true,"why":true,"let":true,"great":true,"same":true,"big":true,"group":true,"begin":true,"seem":true,"country":true,"help":true,"talk":true,"where":true,"turn":true,"problem":true,"every":true,"start":true,"hand":true,"might":true,"American":true,"show":true,"part":true,"against":true,"place":true,"such":true,"again":true,"few":true,"case":true,"week":true,"company":true,"system":true,"each":true,"right":true,"program":true,"hear":true,"question":true,"during":true,"play":true,"government":true,"run":true,"small":true,"number":true,"off":true,"always":true,"move":true,"night":true,"live":true,"Mr":true,"point":true,"believe":true,"hold":true,"today":true,"bring":true,"happen":true,"next":true,"without":true,"before":true,"large":true,"million":true,"must":true,"home":true,"under":true,"water":true,"room":true,"write":true,"mother":true,"area":true,"national":true,"money":true,"story":true,"young":true,"fact":true,"month":true,"different":true,"lot":true,"study":true,"book":true,"eye":true,"job":true,"word":true,"though":true,"business":true,"issue":true,"side":true,"kind":true,"four":true,"head":true,"far":true,"black":true,"long":true,"both":true,"little":true,"house":true,"yes":true,"since":true,"provide":true,"service":true,"around":true,"friend":true,"important":true,"father":true,"sit":true,"away":true,"until":true,"power":true,"hour":true,"game":true,"often":true,"yet":true,"line":true,"political":true,"end":true,"among":true,"ever":true,"stand":true,"bad":true,"lose":true,"however":true,"member":true,"pay":true,"law":true,"meet":true,"car":true,"city":true,"almost":true,"include":true,"continue":true,"set":true,"later":true,"community":true,"name":true,"five":true,"once":true,"white":true,"least":true,"president":true,"learn":true,"real":true,"change":true,"team":true,"minute":true,"best":true,"several":true,"idea":true,"kid":true,"body":true,"information":true,"nothing":true,"ago":true,"lead":true,"social":true,"understand":true,"whether":true,"watch":true,"together":true,"follow":true,"parent":true,"stop":true,"face":true,"anything":true,"create":true,"public":true,"already":true,"speak":true,"others":true,"read":true,"level":true,"allow":true,"add":true,"office":true,"spend":true,"door":true,"health":true,"person":true,"art":true,"sure":true,"war":true,"history":true,"party":true,"within":true,"grow":true,"result":true,"open":true,"morning":true,"walk":true,"reason":true,"low":true,"win":true,"research":true,"girl":true,"guy":true,"early":true,"food":true,"moment":true,"himself":true,"air":true,"teacher":true,"force":true,"offer":true,"enough":true,"education":true,"across":true,"although":true,"remember":true,"foot":true,"second":true,"boy":true,"maybe":true,"toward":true,"able":true,"age":true,"policy":true,"everything":true,"love":true,"process":true,"music":true,"including":true,"consider":true,"appear":true,"actually":true,"buy":true,"probably":true,"human":true,"wait":true,"serve":true,"market":true,"die":true,"send":true,"expect":true,"sense":true,"build":true,"stay":true,"fall":true,"oh":true,"nation":true,"plan":true,"cut":true,"college":true,"interest":true,"death":true,"course":true,"someone":true,"experience":true,"behind":true,"reach":true,"local":true,"kill":true,"six":true,"remain":true,"effect":true,"yeah":true,"suggest":true,"class":true,"control":true,"raise":true,"care":true,"perhaps":true,"late":true,"hard":true,"field":true,"else":true,"pass":true,"former":true,"sell":true,"major":true,"sometimes":true,"require":true,"along":true,"development":true,"themselves":true,"report":true,"role":true,"better":true,"economic":true,"effort":true,"decide":true,"rate":true,"strong":true,"possible":true,"heart":true,"drug":true,"leader":true,"light":true,"voice":true,"wife":true,"whole":true,"police":true,"mind":true,"finally":true,"pull":true,"return":true,"free":true,"military":true,"price":true,"less":true,"according":true,"decision":true,"explain":true,"son":true,"hope":true,"develop":true,"view":true,"relationship":true,"carry":true,"town":true,"road":true,"drive":true,"arm":true,"true":true,"federal":true,"break":true,"difference":true,"thank":true,"receive":true,"value":true,"international":true,"building":true,"action":true,"full":true,"model":true,"join":true,"season":true,"society":true,"tax":true,"director":true,"position":true,"player":true,"agree":true,"especially":true,"record":true,"pick":true,"wear":true,"paper":true,"special":true,"space":true,"ground":true,"form":true,"support":true,"event":true,"official":true,"whose":true,"matter":true,"everyone":true,"center":true,"couple":true,"site":true,"project":true,"hit":true,"base":true,"activity":true,"star":true,"table":true,"court":true,"produce":true,"eat":true,"teach":true};
  var common = common100;

  var additions = {'more':true,'often':true,'another':true,'has':true,'doesnt':true,'too':true,'been':true,'im':true,'hes':true,'had':true,'says':true,'i':true,'wont':true,'here':true,'were':true,'there':true,'each':true,'are':true,'is':true,'said':true,'was':true};
  for(var key in additions) {
    common[key] = true;
  }

  for(var key in common) {
    delete common[key];
    common[key.toLowerCase()] = true;
  }

  return new SimilarArticle();

  function SimilarArticle() {
    var self = this;

    this.compare = function(a1, a2) {
      var a1Words = [];
      var a1TopWords = [];
      var a2Words = [];
      var a2TopWords = [];

      for(var i = 0; i < a1.sortedWords.length; i++) {
        var word = a1.sortedWords[i];
        if(word[1] >= a1.lowMedianDensity) {
          if(word[1] >= a1.medianDensity) {
            a1TopWords.push(word);
          }

          a1Words.push(word);
        }
      }

      for(var i = 0; i < a2.sortedWords.length; i++) {
        var word = a2.sortedWords[i];
        if(word[1] >= a2.lowMedianDensity) {
          if(word[1] >= a2.medianDensity) {
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

      var ret = (matches/(a1TopWords.length + a2TopWords.length));

      /*console.log(a1.meanDensity);
      console.log(a1.medianDensity);
      console.log(a1.highMedianDensity);
      console.log(a1.lowMedianDensity);
      console.log(a1.high);
      console.log(a1.low);

      console.log('~~~');

      console.log(a2.meanDensity);
      console.log(a2.medianDensity);
      console.log(a2.highMedianDensity);
      console.log(a2.lowMedianDensity);
      console.log(a2.high);
      console.log(a2.low);
      
      console.log('~~~');

      console.log(a1TopWords);
      console.log(a1Words);
      console.log(a2TopWords);
      console.log(a2Words);*/
      

      return ret;
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
      //self.loadPronouns(article);

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

      var high = -Infinity;
      var low = Infinity;

      for(var i = 0; i < article.sortedWords.length; i++) {
        var density = article.sortedWords[i][1];
        if(density < low) {
          low = density;
        }
        
        if(density > high) {
          high = density;
        }

        sum += density;
      }

      article.high = high;
      article.low = low;
      article.medianDensity = low + (high - low)/2;
      article.highMedianDensity = article.medianDensity + (article.medianDensity - low)/2;
      article.lowMedianDensity = low + (article.medianDensity - low)/2;
      article.meanDensity = sum/article.sortedWords.length;
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
    this.highDensity = 0;
    this.lowDensity = 0;
    this.meanDensity = 0;
    this.medianDensity = 0;
    this.highMedianDensity = 0;
    this.lowMedianDensity = 0;
    this.sentences = [];
    this.wordsSorted = [];
    this.words = {};
    this.pronouns = {};
    this.quotes = [];
  }
})();