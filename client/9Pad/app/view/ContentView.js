Ext.define('9Pad.view.ContentView', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Label'
    ],
    xtype: 'contentview',
    config: {
        defaults: {
            styleHtmlContent: true
        },

        layout: 'fit',

        style: {
            padding: '16px'
        }
    }
});
