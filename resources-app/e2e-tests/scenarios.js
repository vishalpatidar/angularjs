'use strict';

describe('homeCtrl', function() {

    beforeEach(module('resourceApp'));

    it('should create "users" model with 10 users', inject(function($controller) {
        var scope = {
            usersList : [
                { "id" : "asdf" },
                { "id" : "asdf" }
            ]
        },
            ctrl = $controller('homeCtrl', {$scope:scope});

        expect(scope.usersList.length).toBe(2);
    }));
});


// describe('my app', function() {
//
//
//   it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
//     browser.get('index.html');
//     expect(browser.getLocationAbsUrl()).toMatch("/view1");
//   });
//
//
//   describe('view1', function() {
//
//     beforeEach(function() {
//       browser.get('index.html#!/view1');
//     });
//
//
//     it('should render view1 when user navigates to /view1', function() {
//       expect(element.all(by.css('[ng-view] p')).first().getText()).
//         toMatch(/partial for view 1/);
//     });
//
//   });
//
//
//   describe('view2', function() {
//
//     beforeEach(function() {
//       browser.get('index.html#!/view2');
//     });
//
//
//     it('should render view2 when user navigates to /view2', function() {
//       expect(element.all(by.css('[ng-view] p')).first().getText()).
//         toMatch(/partial for view 2/);
//     });
//
//   });
// });
