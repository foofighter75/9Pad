Ext.define('9Pad.view.MainView', {
    extend: 'Ext.Container',
    requires: [
    ],
    xtype: 'mainview',
    config: {
        id: 'mainView',
        fullscreen: true,
        wdith: '100%',

        layout: 'vbox',

        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                id: 'mainRow0',
                height: '33%'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                id: 'mainRow1',
                height: '33%'
            },
            {
                xtype: 'container',
                layout: 'hbox',
                id: 'mainRow2',
                height: '33%'
            }
        ]
    }
});
