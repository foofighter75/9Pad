Ext.define('9Pad.view.ContentCardView', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Label',
        'Ext.Img'
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
                    margin: '16px 16px'
                },
                flex: 1,
                draggable: true
            },
            {
                xtype : 'image',
                src: '/resources/images/TestNote.png',
                style: {
                    margin: '16px 16px'
                },
                flex: 1,
                draggable: true
            },
            {
                xtype : 'image',
                src: '/resources/images/TestNote.png',
                style: {
                    margin: '16px 16px'
                },
                flex: 1,
                draggable: true
            }
        ],

        style: {
            padding: '16px'
        }
    }
});
