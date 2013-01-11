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

                items: [
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            '/resources/images/Kacheln_iPad-Matrix.jpg',
                            '/resources/images/Kacheln_iPad-Matrix2.jpg',
                            '/resources/images/Kacheln_iPad-Matrix3.jpg'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            '/resources/images/Kacheln_iPad-Matrix4.jpg',
                            '/resources/images/Kacheln_iPad-Matrix5.jpg',
                            '/resources/images/Kacheln_iPad-Matrix.jpg'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            '/resources/images/Kacheln_iPad-Matrix2.jpg',
                            '/resources/images/Kacheln_iPad-Matrix3.jpg',
                            '/resources/images/Kacheln_iPad-Matrix4.jpg'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            '/resources/images/Kacheln_iPad-Matrix5.jpg',
                            '/resources/images/Kacheln_iPad-Matrix.jpg',
                            '/resources/images/Kacheln_iPad-Matrix2.jpg'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            '/resources/images/Kacheln_iPad-Matrix3.jpg',
                            '/resources/images/Kacheln_iPad-Matrix4.jpg',
                            '/resources/images/Kacheln_iPad-Matrix5.jpg'
                        ]
                    }
                ]
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
