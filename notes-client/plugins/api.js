import axios from 'axios';

var options = {};
// The server-side needs a full url to works
options.baseURL = 'http://localhost:3020';

var api = axios.create(options);

window.api = api;
