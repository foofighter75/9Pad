Ext.define('9Pad.view.Main', {
    extend: 'Ext.Carousel',
    requires: [
        'Ext.Label'
    ],
    xtype: 'main',
    config: {
        id: 'mainView',
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
                    },
                    {
                        xtype: 'button',
                        text: 'Go to item 3',
                        id: 'cardSwitchButton'
                    }
                ]
            },
            {
                html : 'Item 2',
                style: 'background-color: #759E60'
            },
            {
                html : 'Item 3'
            }
        ]
    }
});
