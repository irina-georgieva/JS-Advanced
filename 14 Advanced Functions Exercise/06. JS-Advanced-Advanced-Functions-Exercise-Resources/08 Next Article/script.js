function getArticleGenerator(articles) {
    let outputElement = document.getElementById('content');
    let text = articles;

    function printFirstRow(){
        if(text.length != 0){
            let article = document.createElement('article');
            article.textContent = text.shift();
            outputElement.appendChild(article);
        }

        return outputElement;
    }

    return printFirstRow;
}
