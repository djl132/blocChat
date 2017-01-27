(function(){
  function chatController(Rooms, $scope){
    $scope.rooms = Rooms.all;
  }
  
  
  angular
    .module('blocChat')
    .controller('chatController', ['Rooms', chatController]);
})();