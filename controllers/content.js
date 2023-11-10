const postsList = require("../db/posts.json");
const fs = require("fs");
const path = require("path");


function postsFetch(req, res) {
    res.format({
        html: () => {
            let headerContent = fs.readFileSync(path.resolve(__dirname, ".././html/header.html"), "utf-8");
            let htmlContent = fs.readFileSync(path.resolve(__dirname, ".././html/index.html"), "utf-8");
            htmlContent = htmlContent.replace("@header", headerContent);
            const html = [`${headerContent}
                <h1>I Miei Posts</h1>
            `];
            html.push("<ul>");
            for( const post of postsList){
                html.push(`<li>
                    <h3>${post.title}</h3><br><br>
                    <p>${post.content}</p><br>
                    <img src="assets/imgs/posts/${post.img}" alt="" style="width: 200px">
                    <h3>Tags:</h3>`
                );
                for(const tag of post.tags){
                    html.push(`<span style="display: block">${tag}</span>`);
                };
                html.push("</li>");
            }
            html.push("<ul>");
            html.push("<a href='/'>Torna indietro</a>");
            res.send(html.join(""));
        },
        json: () => {
            res.type("json").send({
              totalElements: postsList.length,
              list: postsList
            });
        }
    });
   
};


module.exports = {
postsFetch
}