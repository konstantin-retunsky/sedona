module.exports = function(environment) {

  environment.addFilter('getLastElement', (arr) => arr[arr.length - 1])

  // environment.addFilter('slug', function(str) {
  //   return str && str.replace(/\s/g, '-', str).toLowerCase();
  // });
 
  // environment.addGlobal('globalTitle', 'My global title')
}