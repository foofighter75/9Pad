Ext.define('9Pad.controller.MainController', {
    extend: 'Ext.app.Controller',

    requires: [
        '9Pad.view.MainView',
        '9Pad.view.CarouselView'
    ],

    config: {
        refs: {
            mainView: '#mainView',
            mainRow0: '#mainRow0',
            mainRow1: '#mainRow1',
            mainRow2: '#mainRow2',
            carouselView: '#carouselView'
        },
        control: {

        }
    },

    numColumns: 3,

    launch: function(){
        var mainRow0 = this.getMainRow0(),
            mainRow1 = this.getMainRow1(),
            mainRow2 = this.getMainRow2(),
            i;
        for (i = 0; i < this.numColumns; i++) {
            mainRow0.add(this.createContentViewButtonForRowAndColumn(0, i));
            mainRow1.add(this.createCarouselButtonForColumn(i));
            mainRow2.add(this.createContentViewButtonForRowAndColumn(2, i));
        }
    },

    createContentViewButtonForRowAndColumn: function(row, column) {
        var button = Ext.create('Ext.Button', {
            text: '',
            flex: 1
        });
        button.on('tap', function() {
            console.log('Starting as content view in row ' + row + ', column ' + column);
            window.open('contentView.html?row=' + row + '&column=' + column, '_self');
        });
        return button;
    },

    createCarouselButtonForColumn: function(column) {
        var self = this,
            button = Ext.create('Ext.Button', {
                text: '',
                flex: 1
            }),
            mainView = this.getMainView();
        button.on('tap', function() {
            var carouselView = Ext.create('9Pad.view.CarouselView');
            Ext.Viewport.add(carouselView);
            mainView.hide();
            self.prepareContentCards(carouselView);
            carouselView.show();
            self.getApplication().getController('CarouselController').prepareCarouselViewWithColumn(column);
        });
        return button;
    },

    prepareContentCards: function(carouselView) {
        var self = this,
            carousel = carouselView.child('.carousel'),
            cardIndex = 0;
        console.log("Carousel: ", carousel);
        console.log("Carousel items: ", carousel.getInnerItems());
        Ext.Array.each(carousel.getInnerItems(), function(contentCard) {
            var contentItems = contentCard.getInnerItems(),
                contentImages = contentCard.config.contentImages,
                i;
            console.log("Processing content card: ", contentCard);
            // contentCard.setStyle('background-image', contentCard.config.backgroundImage);
            contentCard.setCls(contentCard.config.backgroundImage);
            for (i = 0; i < contentItems.length; i++) {
//                console.log("Setting up item ", cardIndex, i, contentItems[i]);
                // contentItems[i].setSrc(contentImages[i]);
                contentItems[i].element.id = "content_" + (cardIndex * 3 + i);
            }
            cardIndex++;
        });
    }
});