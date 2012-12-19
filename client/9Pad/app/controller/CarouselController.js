Ext.define('9Pad.controller.CarouselController', {
    extend: 'Ext.app.Controller',

    requires: [
        '9Pad.view.CarouselView'
    ],

    config: {
        refs: {
            carouselView: '#carouselView',
            cardSwitchButton: '#cardSwitchButton'
        },
        control: {
            cardSwitchButton: {
                tap: function() {
                    this.sendCardSwitchBroadcast(2);
                }
            },
            carouselView: {
                activeitemchange: 'onCardSwitch'
            }
        }
    },

    connection: undefined,
    cardSwitchesToIgnore: [],

    init: function(){
        this.initWebSocket();
    },

    prepareCarouselView: function() {
        var carouselView = this.getCarouselView(),
            startIndex = this.getCarouselView().column;
        this.cardSwitchesToIgnore.push(startIndex);
        carouselView.setActiveItem(startIndex);
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
        var moveBroadcast,
            column = this.getCarouselView().column;
        console.log("Sending card switch broadcast to index: " + newIndex);
        moveBroadcast = {
            "command": "move",
            "cardIndex": newIndex,
            "sourceColumn": column
        };
        this.connection.send(JSON.stringify(moveBroadcast));
    },

    doLogout: function() {
        // called whenever any Button with action=logout is tapped
    },

    handleUpdateMessage: function(message) {
        var json,
            cardIndex,
            sourceColumn,
            column = this.getCarouselView().column;
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
            this.switchCard(cardIndex + (column - sourceColumn));
        } else {
            console.log('Hmm..., I\'ve never seen JSON like this: ', json);
        }
    },

    switchCard: function(newIndex) {
        console.log("Will switch to new index: " + newIndex);
        var carouselView = this.getCarouselView(),
            activeIndex = carouselView.getActiveIndex(),
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
                carouselView.setActiveItem(jumpIndex);
            }
            this.cardSwitchesToIgnore.push(newIndex);
            if (diff > 0) {
                carouselView.next();
            } else {
                carouselView.previous();
            }
        }
    }
});