function extract(content) {
    let contentEl = document.getElementById(content);

    let pattern = /\(([^(]+)\)/g;
    let matches = contentEl.textContent.matchAll(pattern);
    let result = [];
    for(const match of matches){
        result.push(match[1]);
    }

    return result.join('; ');
}