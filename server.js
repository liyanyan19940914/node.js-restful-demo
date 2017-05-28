var Http = require('http'),
    Router = require('router'),
    server,
    router;
router = new Router;

server = Http.createServer(function(request,response){
    router(request,response,function(err){
        if(!err){
            response.writeHead(404);
        }else{
            console.log(err.message,err.stack);
            response.writeHead(400);
        }
        response.end('RESTFUL APT Server is running!');
    })
});

server.listen(3000,function(){
    console.log('Listening on port 3000');
});

