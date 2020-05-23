var Crawler = require("crawler");


var firstLap=0;
var n=0;

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
            
            if(firstLap===0){
                
                console.log($("title").text());
                console.log($(".product-brand").text());
                console.log($(".product-name").text());
                console.log($(".js-final-sale-price").text());
            }
            // console.log(res.request.uri.href);
            
            if($(".color-attribute").length>0){
                if($(".color-attribute").length>=n+1){
                    
                    firstLap=1;
                    

                    var str = $(".color-attribute")[n].attribs['data-url'];
                    var n1 = str.indexOf("_color");
                    var n12 = str.indexOf("&pid");
                    var res1 = str.substring(n1,n12);

                    var str2 = res.request.uri.href;
                    var n2 = str2.indexOf("_color");
                    var res2 = str2.substring(0,n2);
                    
                    const currentColor = $(".text2").text();
                    console.log(currentColor);
                    $(".thumb-nail.d-lg-block img").each(function(index,img){
                        console.log(img.attribs.src);
                    });
                    // colorsArray.push(colors.attribs['aria-describedby']);
                    n++;
                    c.queue({
                        uri: res2+res1,
                        headers: {'user-agent': 'node.js'}
                    });
                }
                
            }
            else{
                const currentColor = $(".text2").text();
                console.log(currentColor);
                $(".thumb-nail.d-lg-block img").each(function(index,img){
                        console.log(img.attribs.src);
                    });
            }
            
        }
        done();
    }
});



c.queue({
    uri:'https://www.thebay.com/product/nike-sb-icon-hoodie-0600091510729.html?dwvar_0600091510729_color=COURT_PURPLE_LASER_BLUE',
    headers: {'user-agent': 'node.js'}
});
// c.queue({
//     uri:'https://www.thebay.com/product/nike-full-zip-fleece-hooded-jacket-0600091527018.html?dwvar_0600091527018_color=BLACK',
//     headers: {'user-agent': 'node.js'}
// });
// c.queue({
//     uri:'https://www.thebay.com/product/cloudsteppers-by-clarks-brinkley-jazz-flip-flop-sandals-0600091433525.html?dwvar_0600091433525_color=WHITE',
//     headers: {'user-agent': 'node.js'}
// });