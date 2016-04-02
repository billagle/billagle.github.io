var app = angular.module('app', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
angular.module('app').controller("MainController", function(){
    var site = this;
    site.title = 'Andy Kamath';
    site.description = 'This website is everything about Drones. Made by Providence High School\'s Technology Student Association';
    site.email = 'akamath426@gmail.com';
    site.logo = '<div id="square" style="background:rgba(73,73,73,0.5);height:50%;border-radius:50%;padding:0" class="container element"><h1 style="color:#FFF;top:0" id="h1">AK</h1></div>'
});

angular.module('app').controller("PageController", function(){
    var site = this;
    title = document.title
    site.description = 'This website is dedicated to all things drones. Made for TSA competition as webmaster';
    site.email = 'akamath426@gmail.com';
});