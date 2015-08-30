requirejs.config({
    // paths: { "promotron" : "http://matthew-mitchell.nyhq.nytint.com:3000/assets/promos"}
  //  paths: { "promotron" : "http://int.stg.nyt.com/applications/promotron/assets/article_promo.js" }
   // paths: { "promotron" : "http://localhost:3000/upshot/promos" }
    paths: { "promotron" : "http://int.nyt.com/applications/promotron/assets/promos" }
    //abtest js 
});

require(['foundation/main'], function () {

  require([
    'jquery/nyt',
    'underscore/nyt'
  ], function($, _) {
    window.INTABTest = function(testId, testName, groupNames){
   
      var outcomes = [],
          groupIndex = parseInt(NYTABTEST.engine.isUserVariant(testId)),
          currentGroup = groupNames[groupIndex];

      NYTD.pageEventTracker.updateData({
        "campaign": testName,
        "campaignVariant": groupIndex,
        "campaignGroup": currentGroup 
      });
      
      NYTD.pageEventTracker.shortCircuit();
      //console.log(testName,"initalized")
      return {
        
        getTestId: function(){
          return testId;
        },
   
        getTestName: function(){
          return testName;
        },
        
        getCurrentGroup: function(){
          return currentGroup;
        },
   
        trackOutcome: function(name, category, data){

          outcomes.push({
            name: name,
            category: category,
            data: data
          })

          NYTD.pageEventTracker.updateData({ "campaignOutcomes": JSON.stringify(outcomes) });
          NYTD.pageEventTracker.shortCircuit();
           
        }
      }   
   }
  });


  setTimeout(function() { 
    require([
      'jquery/nyt',
      'underscore/nyt',
      'promotron',
    ], function($, _, Promotron) {
      
      $('section.section-news').after( $("<section class='section-news promotron' />") );

      // code to join test goes during init sequence something like this...
      var test = new window.INTABTest("0002", "promotron-vs-moreon", ["moreon", "promotron"]);
     
     
        // code to check test group and act accordingly looks like this...
      if (test.getCurrentGroup() === "promotron"){
     
    
        Promotron.renderPromo({
                promotron: 'upshot',
                promotronName: 'The Upshot',
                renderStyle: "default",
                limit: 6,
                targetEl: '.section-news.promotron',
                clickTrack: '.promotron a',
                template: 'whatsnext'
            });
     
      }
     
      function readQueryParams(query){
        var queryParams = {},
            match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
            //query  = window.location.search.substring(1);

        while (match = search.exec(query)){
          queryParams[decode(match[1])] = decode(match[2]);
        }

        return queryParams; 
      }
      
      // code to track outcomes might look a bit like...
      $("body").on('click', 'a', function(e) {
        var anchor = $(e.target).closest('a'),
            href = anchor.attr("href"),
            isSiteClick = href.match("nytimes.com");

        if (isSiteClick) {
          var hrefParts = href.split("?"),
              url = hrefParts[0] 
              qs = hrefParts[1],
              params = readQueryParams(qs);
              if(!params.region||params.region===""){params.region="unknownRegion"}
              if(!params.module||params.module===""){params.module="unknownModule"}     
          test.trackOutcome("clickthrough", [params.region, params.module].join(":"), url);
          
        } 
      });
    });

}, 5000);
  });
