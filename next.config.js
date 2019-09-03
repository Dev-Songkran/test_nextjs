module.exports = {
   exportPathMap: function() {
     return {
       '/': { page: '/' },
       '/article': { 
          page: '/article',
          query: {
             slug: 'article-1'
          }
       }
     };
   }
};