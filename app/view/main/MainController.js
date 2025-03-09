/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Employee_data_management.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onChecked:function(sender, record, isSelected){
        debugger;
        var updateBtn=this.lookupReference('btnedit'),
        removebtn=this.lookupReference('btndelete');
        if(isSelected>=1)
            {
                isSelected=1;
                console.log(isSelected);
                updateBtn.setDisabled(false);
                removebtn.setDisabled(false);
                // this.requires=record;

            }
            else if(isSelected<0)
                {
                    removebtn.setDisabled(true);
                    updateBtn.setDisabled(true);
                }
                else if(isSelected==0){
                    updateBtn.setDisabled(false);
                    removebtn.setDisabled(false);
                    // this.requires=record;
                }

    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
