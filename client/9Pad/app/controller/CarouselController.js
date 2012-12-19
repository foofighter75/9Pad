Ext.define('9Pad.controller.CarouselController', {
    extend: 'Ext.app.Controller',

    requires: [
        '9Pad.view.CarouselView',
        'Ext.util.Draggable',
        'Ext.ux.util.Draggable',
        'Ext.ux.util.Droppable'
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

    prepareCarouselViewWithColumn: function(column) {
        var carouselView = this.getCarouselView();
        carouselView.column = column;
        this.moveCarouselToStartingPosition(carouselView);
        this.initCarouselDragging(carouselView);
    },

    moveCarouselToStartingPosition: function(carouselView) {
        console.log("Moving carousel to starting point:");
        console.log(carouselView);
        var startIndex = this.getCarouselView().column;
        this.cardSwitchesToIgnore.push(startIndex);
        carouselView.setActiveItem(startIndex);
    },

    initCarouselDragging: function(carouselView) {
        var me = this;
        Ext.Array.each(carouselView.getInnerItems(), function(contentCard) {
            Ext.each(contentCard.getInnerItems(), function(item) {
                if (Ext.isDefined(item.draggableBehavior)) {
                    var draggable = item.draggableBehavior.getDraggable();

                    draggable.group = 'base'; // Default group for droppable
                    draggable.revert = true;

                    draggable.setConstraint({
                        min: { x: -Infinity, y: -Infinity },
                        max: { x: Infinity, y: Infinity }
                    });

                    draggable.on({
                        scope: me,
                        dragstart: me.onDragStart,
                        dragend: me.onDragEnd
                    });
                } else {
                    console.log("Element not draggable:");
                    console.log(item);
                }
            });
        });
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

    onDragStart: function() {
        var me = this;

        console.log('Start dragging', arguments);
    },

    onDragEnd: function() {
        console.log('End of dragging', arguments);
    },

    onCardSwitch: function(self, value, oldValue) {
        console.log("onCardSwitch");
        var index = self.getItems().indexOf(value) - 1;
        if (this.cardSwitchesToIgnore.shift() !== index) {
            this.sendCardSwitchBroadcast(index);
        }
    },

    sendCardSwitchBroadcast: function(newIndex) {
        var moveBroadcast,
            column = this.getCarouselView().column;
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
        console.log("Switching card to new index: " + newIndex);
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