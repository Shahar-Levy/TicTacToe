let http = require('http');
let fs = require('fs');

function loadHTML(){
	let HTML = fs.readFileSync('./index.html');
	return HTML;
}
function loadCSS(){
	let CSS = fs.readFileSync('./tictactoe.css');
	return CSS;
}
function loadJS(){
	let JS = fs.readFileSync('./tictactoe.js');
	return JS;
}

let server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.writeHead(200,{'content-type': 'text/html'});
		res.end(loadHTML());

	}else if(req.url === '/tictactoe.css'){
		res.writeHead(200, {'content-type' : 'text/css'});
		res.end(loadCSS());
	
	}else if(req.url === '/tictactoe.js'){
		res.writeHead(200, {'content-type': 'application/javascript'});
		res.end(loadJS());

	}else{
		res.writeHead(404, {'content-type': 'image/jpg'});
		let pageNotFoundImg = fs.readFileSync('./BlueScreenOfDeath.png');
		res.end(pageNotFoundImg);
	}
});

server.listen(8080);
console.log('Server is listening on port 8080...');