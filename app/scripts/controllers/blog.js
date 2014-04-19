'use strict';

angular.module('stoogeBloggerzApp')
  .controller('BlogCtrl', function ($scope, Blog, Author) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.blogPosts = Blog.getPosts();
        $scope.authors = Author.getAuthors();


    $scope.setSearchAuthor = function (name) {
        $scope.search = name;
    }

  });
