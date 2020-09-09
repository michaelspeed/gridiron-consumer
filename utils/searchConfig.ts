export function multiSearchOr(text, searchWords){
    var regex = searchWords
        .map(word => "(?=.*\\b" + word + "\\b)")
        .join('');
    var searchExp = new RegExp(regex, "gi");
    return (searchExp.test(text))? "Found!" : "Not found!";
}
