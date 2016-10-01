angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Villano',
    lastText: 'Sentimental',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Gordo',
    lastText: 'A jugar',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam For',
    lastText: 'Muy Feliz',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Grasa',
    lastText: 'Yo primero',
    face: 'img/perry.png'
  },
  {
    id: 3,
    name: 'Perry Gemelo',
    lastText: 'Jajajajajaja',
    face: 'img/perry.png'
  },
  {
    id: 4,
    name: 'Mike Gemelo',
    lastText: 'Jejejejejeje',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
