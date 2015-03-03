Ext.define('9Pad.view.CarouselView', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Label',
        'Ext.carousel.Carousel',
        '9Pad.view.ContentCardView'
    ],
    xtype: 'overview',
    config: {
        layout: 'vbox',
        fullscreen: true,
        id: 'overview',
        items: [
            {
              xtype: 'image',
              id: 'bubble_blue',
              src: 'resources/images/bubble_blue.png',
                style: {
                    width: '227px',
                    height: '227px',
                    visibility: 'hidden',
                    display: 'none',
                    position: 'absolute',
                    'z-index':1
                }
            },
            {
              xtype: 'image',
              id: 'bubble_red',
              src: 'resources/images/bubble_red.png',
                style: {
                    width: '227px',
                    height: '227px',
                    visibility: 'hidden',
                    display: 'none',
                    position: 'absolute',
                    'z-index':1
                }
            },
            {
              xtype: 'image',
              id: 'bubble_green',
              src: 'resources/images/bubble_green.png',
                style: {
                    width: '227px',
                    height: '227px',
                    visibility: 'hidden',
                    display: 'none',
                    position: 'absolute',
                    'z-index':1
                }
            },
			{
              xtype: 'image',
              id: 'bubble_yellow',
              src: 'resources/images/bubble_yellow.png',
                style: {
                    width: '227px',
                    height: '227px',
                    visibility: 'hidden',
                    display: 'none',
                    position: 'absolute',
                    'z-index':1
                }
            },
            {
                xtype: 'container',
                id: 'upperDropZone',
                flex: 1,
                style: {
                    width: '100%',
                    opacity: 0.3
                }
            },
            {
                xtype: 'carousel',
                id: 'carouselView',
                flex: 3,

                defaults: {
                    styleHtmlContent: true
                },

                style: {
                    width: '100%'
                },

                items: Ext.create('9Pad.view.CarouselItems').items
            },
            {
                xtype: 'container',
                id: 'lowerDropZone',
                flex: 1,
                style: {
                    width: '100%'
                }
            }
        ]
    }
});
