"requst-js-file"
//https://stackoverflow.com/a/950146
//https://stackoverflow.com/a/2122234

window.RequstJsFile = (function(){
	var idElementoContainerJs = 'conatiner-requst-js-file';
	var _elementoContainer;
	var hash = Math.floor(Math.random() * 1000 + 1);
	var _obterHash = function(){
		return "gambi="+hash
	}
	var _obterUrlScriptHash = function(jsFilePath){
		return jsFilePath + "?" + _obterHash()
	}
	var _criarElementoContainerJs = function (){
		var elemento = document.createElement('div');
		elemento.id = idElementoContainerJs;
		document.body.appendChild(elemento);
		return elemento;
	}
	
	var _obterElementoContainerJs = function (){
		if(_elementoContainer) return _elementoContainer;

		_elementoContainer = document.getElementById(idElementoContainerJs);
		if(!_elementoContainer)
			_elementoContainer = _criarElementoContainerJs();
		
		return _elementoContainer;
	}
	
	var _criarTagScritp = function(jsFilePath){
		var js = document.createElement("script");

		js.type = "text/javascript";
		js.src = _obterUrlScriptHash(jsFilePath);
		return js;
	}
	
	var _existeScript = function(jsFilePath){
		var lista = _obterElementoContainerJs()
			.querySelectorAll('script');
		for (const key in lista) {
			var scriptCarregado = lista[key];
			if(scriptCarregado.src === scriptCarregado.baseURI + _obterUrlScriptHash(jsFilePath)){
				return true;
			}
		}
		return false
	}
	
	var _adicionarScript = function(arquivosJs, callback){
		console.time("aa")
		arquivosCaregados = arquivosJs.length;
		
		for(index in arquivosJs){
			var jsFilePath = arquivosJs[index];
			if(_existeScript(jsFilePath)) {
				--arquivosCaregados
				continue;
			};
			var tagScript = _criarTagScritp(jsFilePath);
			tagScript.onload = function(){
				if(--arquivosCaregados === 0){
					callback();
					console.timeEnd("aa")
				}
			};
			_obterElementoContainerJs().appendChild(tagScript);
		}
		
	}
	return {
		adicionarScript: _adicionarScript
	};
})()
//demora
	//solucao
	//request unica para pegar todos os js