// testing for array
describe('TeamgeeksController', function() {
  beforeEach(module('teamgeeksApp'));

  describe('TeamgeeksControllerHobbies', function() {
    it('should check if the "hobbies" array exists', inject(function($controller){

      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(scope.hobbies).toBeDefined();

    }));
    
    it('should have a maximum length of 4', inject(function($controller){

      var scope = {},
        controller = $controller('TeamgeeksController',{$scope:scope});
      expect(scope.hobbies.length).toBe(4);
    }));

    it('should be an array', inject(function($controller) {

      var scope = {},
        controller = $controller('TeamgeeksController',{$scope:scope});
      expect(Array.isArray(scope.hobbies)).toBe(true);
    }));

  });



// testing for name
  describe('TeamgeeksControllerName', function() {
    it('should check if name exists', inject(function($controller) {

      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(scope.name).toBeDefined();
    }));

    it('should check if name is a string', inject(function($controller) {

      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(typeof scope.name).toEqual('string');
    }));

  });


// testing for age
  describe('TeamgeeksControllerAge', function() {
    it('should check if age exists', inject(function($controller) {

      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(scope.age).toBeDefined();
    }));

    it('should check if age is a number', inject(function($controller) {

      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(typeof scope.age).toEqual('number');
    }));
  });


// testing for goodInAngular 
  describe('TeamgeeksControllerGoodInAngular', function() {
    it('should check if goodInAngular exists', inject(function($controller) {
      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(scope.goodInAngular).toBeDefined();
    }));

    it('should check if goodInAngular is a boolean', inject(function($controller) {

      var scope = {},
        controller = $controller('TeamgeeksController', {$scope:scope});
      expect(typeof scope.goodInAngular).toEqual('boolean');
    }));
  });
});

