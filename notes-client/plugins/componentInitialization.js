import Vue from 'vue';

var components = require.context('@/components', true, /\.vue$/);
register(components);

function register(req) {
  var paths = req.keys();

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];

    var component = req(path);
    var name = translatePathToName(path);

    // @NOTE: ignore paths that contain #
    if (name.indexOf('#') !== -1) {
      continue;
    }

    // @NOTE: remove intermediate folders
    var parts = name.split('/');
    name = parts[parts.length - 1];

    // @NOTE: register the component
    Vue.component(name, component.default);
  }
}

function translatePathToName(filepath) {
  return filepath
    .replace(/^.\//, '') // @NOTE: strip initial `./`
    .replace(/\.vue$/, ''); // @NOTE: strip terminal `.vue`
}
