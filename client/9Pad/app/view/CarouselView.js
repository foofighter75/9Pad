Ext.define('9Pad.view.CarouselView', {
    extend: 'Ext.Carousel',
    requires: [
        'Ext.Label',
        '9Pad.view.ContentCardView'
    ],
    xtype: 'overview',
    config: {
        id: 'carouselView',
        fullscreen: true,

        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                xtype : 'contentcard'
            },
            {
                xtype : 'contentcard',
                style: 'background-color: #759E60'
            },
            {
                xtype : 'contentcard',
                style: 'background-color: #314347'
            },
            {
                xtype : 'contentcard',
                style: 'background-color: #4587E5'
            },
            {
                xtype : 'contentcard',
                style: 'background-color: #880000'
            }
        ]
    }
});
