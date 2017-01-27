(function() {
  function Room($fireBaseArray){
    var ref = firebase.database().ref().child('rooms'); //reference future room(location)
    var rooms = $firebaseArray(ref);//gets data on rooms in form of js array
    
    //return array with data
    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();