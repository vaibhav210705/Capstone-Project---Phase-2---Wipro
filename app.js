/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Employee_data_management.Application',

    name: 'Employee_data_management',

    requires: [
        // This will automatically load all classes in the Employee_data_management namespace
        // so that application classes do not need to require each other.
        'Employee_data_management.*'
    ],

    // The name of the initial view to create.
    mainView: 'Employee_data_management.view.main.Main'
});
