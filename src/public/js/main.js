window.onload = function () {
    var listaArquivos = [
        'js/1.js',
        'js/2.js',
        'js/2.js',
        'js/2.js',
        'js/2.js',
        'js/2.js',
        'js/2.js',
        'js/2.js',
        'js/2.js',
        'js/3.js',
        'js/4.js',
        'js/5.js',
        'js/6.js',
        'js/6.js',
        'js/6.js',
        'js/6.js',
        'js/6.js',
        'js/6.js',
        'js/6.js',
        'js/7.js',
        'js/7.js',
        'js/7.js',
        'js/7.js',
        'js/7.js',
        'js/8.js',
        'js/8.js',
        'js/8.js',
        'js/8.js',
    ]
    RequstJsFile.adicionarScript(listaArquivos, function(){
        console.log('aq');
    });
}