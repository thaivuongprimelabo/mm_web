import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/admin/bower_components/bootstrap/dist/css/bootstrap.min.css';
import './assets/admin/bower_components/font-awesome/css/font-awesome.min.css';
import './assets/admin/bower_components/Ionicons/css/ionicons.min.css';
import './assets/admin/dist/css/AdminLTE.min.css';
import './assets/admin/dist/css/skins/skin-blue.min.css';
import './assets/admin/dist/css/style.css';
import './assets/admin/css/custom-styles.css';

import 'jquery';
import './assets/admin/bower_components/bootstrap/dist/js/bootstrap.min.js';
import './assets/admin/dist/js/adminlte.min.js';
import './assets/admin/js/jquery.validate.js';
import './assets/admin/plugins/iCheck/icheck.min.js';


ReactDOM.render(
    <App />, 
    document.getElementById('root')
);