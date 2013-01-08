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
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        style: 'background-color: #759E60',
                        contentImages: [
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        style: 'background-color: #314347',
                        contentImages: [
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        style: 'background-color: #4587E5',
                        contentImages: [
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png'
                        ]
                    },
                    {
                        xtype : 'contentcard',
                        style: 'background-color: #880000',
                        contentImages: [
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png',
                            '/resources/images/TestNote.png'
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
