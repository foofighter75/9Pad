Ext.define('9Pad.view.ContentCardView', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Label'
    ],
    xtype: 'contentcard',
    config: {
        defaults: {
            styleHtmlContent: true
        },

        layout: 'hbox',

        items: [
            {
                xtype : 'image',
                src: '/resources/images/TestNote.png',
                style: {
                    margin: '15% 16px'
                },
                flex: 1
            },
            {
                xtype : 'image',
                src: '/resources/images/TestNote.png',
                style: {
                    margin: '15% 16px'
                },
                flex: 1
            },
            {
                xtype : 'image',
                src: '/resources/images/TestNote.png',
                style: {
                    margin: '15% 16px'
                },
                flex: 1
            }
        ],

        style: {
            padding: '32px'
        }
    }
});
