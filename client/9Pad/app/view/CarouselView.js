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

                items: [
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix.jpg',
                            'resources/images/Kacheln iPad-Matrix2.jpg',
                            'resources/images/Kacheln iPad-Matrix3.jpg'
                        ],
                        backgroundImage: 'myContentCard1'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix4.jpg',
                            'resources/images/Kacheln iPad-Matrix5.jpg',
                            'resources/images/Kacheln iPad-Matrix6.jpg'
                        ],
                        backgroundImage: 'myContentCard2'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix7.jpg',
                            'resources/images/Kacheln iPad-Matrix8.jpg',
                            'resources/images/Kacheln iPad-Matrix9.jpg'
                        ],
                        backgroundImage: 'myContentCard3'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix10.jpg',
                            'resources/images/Kacheln iPad-Matrix11.jpg',
                            'resources/images/Kacheln iPad-Matrix12.jpg'
                        ],
                        backgroundImage: 'myContentCard4'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix13.jpg',
                            'resources/images/Kacheln iPad-Matrix14.jpg',
                            'resources/images/Kacheln iPad-Matrix15.jpg'
                        ],
                        backgroundImage: 'myContentCard5'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix16.jpg',
                            'resources/images/Kacheln iPad-Matrix17.jpg',
                            'resources/images/Kacheln iPad-Matrix18.jpg'
                        ],
                        backgroundImage: 'myContentCard6'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix19.jpg',
                            'resources/images/Kacheln iPad-Matrix20.jpg',
                            'resources/images/Kacheln iPad-Matrix21.jpg'
                        ],
                        backgroundImage: 'myContentCard7'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard8'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard9'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard10'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard11'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard12'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard13'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard14'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard15'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard16'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard17'
                    },
                    {
                        xtype : 'contentcard',
                        contentImages: [
                            'resources/images/Kacheln iPad-Matrix22.jpg',
                            'resources/images/Kacheln iPad-Matrix23.jpg',
                            'resources/images/Kacheln iPad-Matrix24.jpg'
                        ],
                        backgroundImage: 'myContentCard18'
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
