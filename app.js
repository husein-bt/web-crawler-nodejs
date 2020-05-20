var Crawler = require("crawler");

var c = new Crawler({
    rateLimit: 2000,
    maxConnections : 2,

    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
            console.log($(".product-brand").text());
            console.log($(".product-name").text());
            console.log($(".js-final-sale-price").text());
            // $("img").each(function(index,img){
            //     setInterval(()=>{},1000)
            //     console.log(img.attribs.src);
            // });
            // $(".img-fluid").each(function(index,img){
            //     setInterval(()=>{},1000)
            //     console.log(img.attribs.src);
            // });
            // $(".thumb-nail.d-lg-block img").each(function(index,img){
            //     setInterval(()=>{},1000)
            //     console.log(img.attribs.src);
            // });
            if($(".color-attribute")){
                $(".color-attribute").each(function(index,img){
                    setInterval(()=>{},1000)
                    console.log(img.attribs.src);
                });
            }else{
                $(".thumb-nail.d-lg-block img").each(function(index,img){
                        setInterval(()=>{},1000)
                        console.log(img.attribs.src);
                    });
            }
            
        }
        done();
    }
});

var c2 = new Crawler({
    rateLimit: 2000,
    maxConnections : 2,

    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("title").text());
            // console.log($(".product-brand").text());
            // console.log($(".product-name").text());
            // console.log($(".js-final-sale-price").text());

            $(".thumb-nail.d-lg-block img").each(function(index,img){
                setInterval(()=>{},1000)
                console.log(img.attribs.src);
            });
        }
        done();
    }
});

// Queue just one URL, with default callback
// c.queue('https://www.amazon.com');
// c.queue('https://www.thebay.com/product/nike-sb-icon-hoodie-0600091510729.html?dwvar_0600091510729_color=COURT_PURPLE_LASER_BLUE');
c.queue({
    uri:'https://www.thebay.com/product/nike-sb-icon-hoodie-0600091510729.html?dwvar_0600091510729_color=COURT_PURPLE_LASER_BLUE',
    headers: {'user-agent': 'node.js'}
});
// c.queue({
//     uri:'https://www.thebay.com/product/bdg-oversize-hooded-denim-crop-jacket-0600091544255.html?dwvar_0600091544255_color=BLUE',
//     headers: {'user-agent': 'node.js'}
// });