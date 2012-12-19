Ext.define('9Pad.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
        '9Pad.view.Main'
    ],

    config: {
        refs: {
            mainView: '#mainView',
            cardSwitchButton: '#cardSwitchButton'
        },
        control: {
            cardSwitchButton: {
                tap: function() {
                    this.sendCardSwitchBroadcast(2);
                }
            },
            mainView: {
                activeitemchange: 'onCardSwitch'
            }
        }
    },

    connection: undefined,
    myColumn: 0,
    thisController: this,
    cardSwitchesToIgnore: [],

    init: function(){
        this.initWebSocket();
    },

    initWebSocket: function() {
        var self = this;
        console.log("Opening WebSocket...");
        // if user is running mozilla then use its built-in WebSocket
        window.WebSocket = window.WebSocket || window.MozWebSocket;

        this.connection = new WebSocket('ws://54.246.102.191:1337');

        this.connection.onerror = function (error) {
            alert('Sorry, but there\'s some problem with your connection or the server is down.');
        };

        this.connection.onmessage = function(message) {
            self.handleUpdateMessage.call(self, message);
        };
        console.log("WebSocket open.");
    },

    onCardSwitch: function(self, value, oldValue) {
        var index = self.getItems().indexOf(value) - 1;
        console.log("Switched to index: " + index);
        if (this.cardSwitchesToIgnore.shift() !== index) {
            this.sendCardSwitchBroadcast(index);
        }
    },

    sendCardSwitchBroadcast: function(newIndex) {
        var moveBroadcast;
        console.log("Sending card switch broadcast to index: " + newIndex);
        moveBroadcast = {
            "command": "move",
            "cardIndex": newIndex,
            "sourceColumn": this.myColumn
        };
        this.connection.send(JSON.stringify(moveBroadcast));
    },

    doLogout: function() {
        // called whenever any Button with action=logout is tapped
    },

    handleUpdateMessage: function(message) {
        var json,
            cardIndex,
            sourceColumn;
        console.log("Got update message:");
        console.log(message);
        try {
            json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }

        if (json.command === 'move') {
            cardIndex = json.cardIndex;
            sourceColumn = json.sourceColumn;
            this.switchCard(cardIndex + (this.myColumn - sourceColumn));
        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
        }
    },

    switchCard: function(newIndex) {
        console.log("Will switch to new index: " + newIndex);
        var mainView = this.getMainView(),
            activeIndex = mainView.getActiveIndex(),
            diff = newIndex - activeIndex,
            jumpIndex;
        if (Math.abs(diff) > 0) {
            if (Math.abs(diff) > 1) {
                if (diff > 0) {
                    jumpIndex = newIndex - 1;
                } else {
                    jumpIndex = newIndex + 1;
                }
                this.cardSwitchesToIgnore.push(jumpIndex);
                mainView.setActiveItem(jumpIndex);
            }
            this.cardSwitchesToIgnore.push(newIndex);
            if (diff > 0) {
                mainView.next();
            } else {
                mainView.previous();
            }
        }
    }
});