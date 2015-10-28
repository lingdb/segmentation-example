"use strict";
requirejs.config({
  baseUrl: 'prison',
  paths: {
    jquery: 'lib/vendor/jquery'
  }
});
requirejs(['jquery','lib/highlight','lib/features'], function($, highlight, features){
  var input = $('#toSegment')
    , output1 = $('#output1')
    , output2 = $('#output2');
  input.on('keyup', function(){
    var normalized = features.normalize_ipa(input.val())
      , tokens = highlight.ipa2tokens(normalized)
      , plotted = highlight.plotMorphemes(tokens);
    output1.text(tokens);
    output2.html(plotted);
  });
});
