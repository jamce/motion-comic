// JavaScript Document

var SCENE = "Scene One";

var game = new Phaser.Game(1920, 1080, Phaser.AUTO);


game.state.add('GameState', GameState);
game.state.add('BootState', BootState);
game.state.add('PreloadState', PreloadState);
game.state.add('LoadNextLevel', LoadNextLevel);
game.state.add('HomeState', HomeState);
game.state.add('PreloadActivity1State', PreloadActivity1State);
game.state.add('Activity1State', Activity1State);
game.state.add('PreloadActivity2State', PreloadActivity2State);
game.state.add('Activity2State', Activity2State);

game.state.start('BootState');