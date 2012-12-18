$(function () {
    "use strict";

    // for better performance - to avoid searching in DOM
    var content = $('#content');
    var input = $('#input');
    var status = $('#status');

	// 9pad configuration (TODO: maybe to be moved somewhere else)
	var cardIndex = 4;
	var maxCardIndex = 8;
	var myColumnIndex = 1;

    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // if browser doesn't support WebSocket, just show some notification and exit
    if (!window.WebSocket) {
        content.html($('<p>', { text: 'Sorry, but your browser doesn\'t '
                                    + 'support WebSockets.'} ));
        input.hide();
        $('span').hide();
        return;
    }
	
	var getMoveCommand = function(cardIndex, sourceColumn){
			var message = JSON.stringify({
				"command": "move",
				"cardIndex": cardIndex,
				"sourceColumn": sourceColumn
			});
			return message;
		};

	var getShowCommand = function(contentIndex, targetRow, targetColumn){
			var message = JSON.stringify({
				"command":"show",
				"contentIndex": contentIndex,
				"target": {
					"row": targetRow,
					"column": targetColumn
				}
			});
			return message;
		};
		
    // open connection
	addMessage("Connecting to server...");
    var connection = new WebSocket('ws://54.246.102.191:1337');

    connection.onopen = function () {
		// BEGIN EXAMPLE 
		addMessage("OK. Connected.");
		$('button[value="left"]').click(function(){
			cardIndex = cardIndex > 0 ? cardIndex - 1 : 0;
			connection.send(getMoveCommand(cardIndex, myColumnIndex));
		});
		$('button[value="right"]').click(function(){
			cardIndex = cardIndex < maxCardIndex - 1 ? cardIndex + 1 : maxCardIndex;
			connection.send(getMoveCommand(cardIndex, myColumnIndex));
		});
		$('button[value="up"]').click(function(){
			connection.send(getShowCommand(cardIndex * 2, 0, myColumnIndex));
		});
		$('button[value="down"]').click(function(){
			connection.send(getShowCommand(cardIndex * 2, 2, myColumnIndex));
		});
		// END EXAMPLE 
    };

    connection.onerror = function (error) {
        content.html($('<p>', { text: 'Sorry, but there\'s some problem with your '
                                    + 'connection or the server is down.</p>' } ));
    };

    connection.onmessage = function (message) {
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('Invalid JSON string: ', message.data);
            return;
        }

		// BEGIN EXAMPLE 
        if (json.command === 'move') {
			// Beispielcode:
            addMessage("Received message: " + message.data);
        } else if (json.command === 'show') {
			// Beispielcode:
            addMessage("Received message: " + message.data);
        } else {
            console.log('Unknown command in JSON document: ', json);
        }
		// END EXAMPLE 
    };

	// Heatbeat check
    setInterval(function() {
        if (connection.readyState !== 1) {
            addMessage('Error occured.');
        }
    }, 3000);

    /**
     * Add message to the chat window
	 * Beispielcode
     */
    function addMessage(message) {
        content.append('<p>' + message + '</p>');
    }
});
