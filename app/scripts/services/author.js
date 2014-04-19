'use strict';

angular.module('stoogeBloggerzApp')
  .service('Author', function Author() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
        getAuthors: function() {
            return [
                {name: "Larry"},
                {name: "Curly"},
                {name: "Moe"},
                {name: "All"}
            ]
        }
    }

    });
