Ext.define('Employee_data_management.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Employee_data_management.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", department:"IT" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , department:"Department" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , department:"Testing" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , department:"Department"}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
