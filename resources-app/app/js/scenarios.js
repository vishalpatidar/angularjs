'use strict';

describe('homeCtrl', function() {

    beforeEach(module('resourceAppControllers'));

    it('should create "users" model with 10 users', function() {
        var scope = {
            usersList: [ {id: "ad"}, {id: "ads"}]
        };
        expect(scope.usersList.length).toEqual(2);

    });
});
