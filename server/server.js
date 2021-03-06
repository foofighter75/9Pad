// http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/
"use strict";

// Optional. You will see this name in eg. 'ps' or 'top' command
process.title = '9pad node.js Server';

// Port where we'll run the websocket server
var webSocketsServerPort = 1337;

// websocket and http servers
var webSocketServer = require('websocket').server;
var http = require('http');

/**
 * Global variables
 */
// list of currently connected clients (iPads)
var clients = [ ];

/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
    // Not important for us. We're writing WebSocket server, not HTTP server
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
    // WebSocket server is tied to a HTTP server. WebSocket request is just
    // an enhanced HTTP request. For more info http://tools.ietf.org/html/rfc6455#page-6
    httpServer: server
});

// This callback function is called every time someone
// tries to connect to the WebSocket server
wsServer.on('request', function(request) {
    console.log((new Date()) + ' Connection from origin ' + request.remoteAddress + '.');
    var connection = request.accept(null, request.origin); 
    
	// we need to know client index to remove them on 'close' event
    var index = clients.push(connection) - 1;
    var clientPosition = false;
    console.log((new Date()) + ' Connection accepted.');

    // user sent some message
    connection.on('message', function(message) {
        if (message.type === 'utf8') { // accept only text
			console.log((new Date()) + ' Received message from ' + connection.remoteAddress + ': ' + message.utf8Data);
			// broadcast message to all connected clients
			for (var i=0; i < clients.length; i++) {
				clients[i].sendUTF(message.utf8Data);
			}
        }
    });

    // user disconnected
    connection.on('close', function(connection) {
        if (clientPosition !== false && userColor !== false) {
            console.log((new Date()) + ": Peer " + connection.remoteAddress + " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
        }
    });

});