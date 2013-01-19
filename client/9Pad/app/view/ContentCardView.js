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
                src: 'resources/images/bubble_invisible.png',
                style: {
                    'margin-left': '32px',
                    'margin-right': '50px',
                    'margin-top': '56px',
                    'margin-bottom': '56px',
                    width: '227px',
                    height: '227px'
                },
                flex: 1,
                draggable: true
            },
            {
                xtype : 'image',
                src: 'resources/images/bubble_invisible.png',
                style: {
                    margin: '56px 50px',
                    width: '227px',
                    height: '227px'
                },
                flex: 1,
                draggable: true
            },
            {
                xtype : 'image',
                src: 'resources/images/bubble_invisible.png',
                style: {
                    'margin-left': '50px',
                    'margin-right': '32px',
                    'margin-top': '56px',
                    'margin-bottom': '56px',
                    width: '227px',
                    height: '227px'
                },
                flex: 1,
                draggable: true
            }
        ],

        style: {
            padding: '16px'
        },
        cls: 'myContentCard1'
    }
});
