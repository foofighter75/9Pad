Ext.define('9Pad.view.CarouselView', {
    extend: 'Ext.Carousel',
    requires: [
        'Ext.Label'
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
                xtype : 'panel',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'label',
                        html:'Item 1'
                    }
                ]
            },
            {
                html : 'Item 2',
                style: 'background-color: #759E60'
            },
            {
                html : 'Item 3',
                style: 'background-color: #314347'
            },
            {
                html : 'Item 4',
                style: 'background-color: #4587E5'
            },
            {
                html : 'Item 5'
            }
        ]
    }
});
