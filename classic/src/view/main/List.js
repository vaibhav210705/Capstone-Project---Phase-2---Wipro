/**
 * This view is an example list of people.
 */
Ext.define('Employee_data_management.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Employee_data_management.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {text: 'Department', dataIndex: 'department', flex: 1},
        {text: 'UpdateDate', dataIndex: 'updateDate', flex: 1}
    ],

    renderTo:Ext.getBody(),
    selModel:{
        selType:'checkboxmodel',
        // mode:'SINGLE',
        listeners: {
            select:'onChecked'
        
    }
    },


    tbar:[
        {

        xtype:'button',
        itenId:'add',
        text:'Add',
        iconCls:'x-fa-fa-plus',
        reference:'btnadd',
        handler:'addPopup'

        },
        {


            xtype:'button',
            itenId:'edit',
            text:'Edit',
            iconCls:'x-fa-fa-pencil',
            reference:'btnedit',
            handler:'UpdatePopUp',
            disabled:true
        },

        {
            xtype:'button',
            itenId:'delete',
            text:'Delete',
            iconCls:'x-fa-fa-trash',
            reference:'btnDelete',
            disabled:true
        }



    ],



});
