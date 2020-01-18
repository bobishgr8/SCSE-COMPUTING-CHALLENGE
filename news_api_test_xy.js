const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('ca7fc9941f904505b01ea7708b84e79b');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

newsapi.v2.topHeadlines({
    q: 'bitcoin',
}).then(response => {
    var rua = response.articles[0].author;
    console.log(rua);
});
console.log("a", rua)
    // // To query /v2/everything
    // // You must include at least one q, source, or domain
    // newsapi.v2.everything({
    //     q: 'bitcoin',
    //     sources: 'bbc-news,the-verge',
    //     domains: 'bbc.co.uk, techcrunch.com',
    //     from: '2017-12-01',
    //     to: '2017-12-12',
    //     language: 'en',
    //     sortBy: 'relevancy',
    //     page: 2
    // }).then(response => {
    //     console.log(response);
    //     /*
    //       {
    //         status: "ok",
    //         articles: [...]
    //       }
    //     */
    // });
    // // To query sources
    // // All options are optional
    // newsapi.v2.sources({
    //     category: 'technology',
    //     language: 'en',
    //     country: 'us'
    // }).then(response => {
    //     console.log(response);
    //     /*
    //       {
    //         status: "ok",
    //         sources: [...]
    //       }
    //     */
    // });