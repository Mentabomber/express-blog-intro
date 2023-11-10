const postsList = require("../db/posts.json");



function postsFetch(req, res) {
    res.format({
        html: () => {
            const html = [`
                <h1>I Miei Posts</h1>
            `];
            html.push("<ul>");
            for( const post of postsList){
                html.push(`<li>
                    <h3>${post.title}</h3><br><br>
                    <p>${post.content}</p><br>
                    <img src="/imgs/posts/${post.img}" alt="" style="width: 200px">
                    <h3>Tags:</h3>`
                );
                for(const tag of post.tags){
                    html.push(`<span style="display: block">${tag}</span>`);
                };
                html.push("</li>");
            }
            html.push("<ul>");
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