// JavaScript Document

var HomeState = {
	preload: function(){
		
	},
	
	create: function(){	
		window.document.getElementById('printBtn').style.display = "block";
	
		/* SET BOUNDS ON A WORLD TO A SPECIFIC SIZE */
		this.game.world.setBounds(0,0,window.innerWidth, window.innerHeight);	
	
		SCORMinitialize();
		
		var status = SCORMstatuscheck();
		
		var bookmark = parseInt(SCORMdoLMSGetValue('cmi.suspend_data'));
		bookmark = 0;
		console.log("bookmark is", bookmark);
		
		
				
		///////////////////////////////////////
		// SCORM SETUP ////////////////////////
		///////////////////////////////////////
		
		if (status !== "completed"){
			console.log("setting status to incomplete");
			SCORMsetValue("cmi.core.lesson_status", "incomplete");
			SCORMdoLMSCommit();
		}
		
		this.game.stage.backgroundColor = '#c3f5fe';
		
		var bgmusic = this.game.add.audio('introAudio', 1, true);
		bgmusic.play();;
		
		var introbg = this.game.add.image(0,0,'introbg');
		introbg.x = window.innerWidth/2 - introbg.width/2;
		introbg.y = window.innerHeight/2 - introbg.height/2;
		
		var intro = this.game.add.image(0,0,'intro');
		intro.x = window.innerWidth/2 - intro.width/2;
		intro.y = window.innerHeight/2 - intro.height/2;
		
		
		
		var callGoToNextState = function(){
			console.log("starting new game");
			this.game.sound.stopAll();
			window.document.getElementById('printBtn').style.display = "none";
			_gc.onpage = 0;
			this.startNewGame();
		}.bind(this)
		
			
		var btnstart = this.game.add.image(0,0,'btnbegin');
	btnstart.x = window.innerWidth/2 - btnstart.width/2 + 300;
		btnstart.y = window.innerHeight/2 - btnstart.height/2 -160;
		
		btnstart.inputEnabled = true;
		btnstart.events.onInputUp.addOnce(callGoToNextState);
		
		
		
		var continueNextState = function(){
			console.log("continuing existing game");
			this.game.sound.stopAll();
			window.document.getElementById('printBtn').style.display = "none";
			_gc.onpage = bookmark;
			this.startNewGame();
		}.bind(this)
		
		
		if (bookmark > 0){
		
			var btncont = this.game.add.image(0,0,'btncontinue');
			btncont.right = intro.right - 10;
			btncont.top = btnstart.top + 30;
			
			btncont.inputEnabled = true;
			btncont.events.onInputUp.addOnce(continueNextState);
		
		}
		
		///////////////////////////////////////
		// WINDOW RESIZE //////////////////////
		///////////////////////////////////////
		
		window.onresize = function(){ 
			
		};
		
	}, 
	
	startNewGame: function(){
		SCORMsetValue("cmi.core.lesson_status", "incomplete");
		this.state.start('LoadNextLevel', true);
	},
	
	continueGame: function(a,t){
		this.state.start('LoadNextLevel', true, false, a);
	},
	
	loadPageContent: this.parent._loadPageContent
}

function _loadPageContent() {
	var curpage = _gc.pages[_gc.onpage]; console.log("curpage is ", curpage);

	if ( curpage.bg ){ console.log("loading background");
		this.game.load.image('bgimage', 'images/' + curpage.bg); console.log("background added to cache");
	}		
	
	for (var i = 0; i < curpage.panels.length; i++){ 
		var panel = curpage.panels[i]; console.log("current panel", panel);
		
		if (panel.animated){
			this.game.load.atlas(panel.title, 'images/' + panel.url, 'images/' + panel.json, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		} else {
			this.game.load.image(panel.title, 'images/' + panel.url);
		}
	}
}