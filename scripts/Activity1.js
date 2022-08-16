// JavaScript Document

var Activity1State = {

	preload: function(){
		
	},

	init: function(bookmark){ 
		//bookmark = 's119pC5pF7pB3pW4tC35tF47tB18tW23';
		
		if (bookmark){
			
		}
	},
	
	create: function(){ 	
		
		var pagedata = _gc.pages[_gc.onpage];
		_gc.onpage++;
		
		var adjWidth = (pagedata.pageW - window.innerWidth) / 2;
		var adjHeight = (pagedata.pageH - window.innerHeight) / 2;
		
		
			
		/**********************************************************************************************
			TYPOGRAPHY
			
			Define your font styles here so they are all in one nice place for reference.
			
		**********************************************************************************************/
		
		var plainText = {
							font: 'Heebo',
							fontWeight: 'normal',
							fontSize: 16,
							fill: 'black',
							align: 'left',
							wordWrap: true,
							wordWrapWidth: 200
						}
						
		var boldText = {
							font: 'Heebo',
							fontWeight: 'bold',
							fontSize: 16,
							fill: 'black',
							align: 'left',
							wordWrap: true,
							wordWrapWidth: 200
						}
						
		var wordBubble = {
							font: 'Mouse Memoirs',
							fontWeight: 'normal',
							fontSize: 20,
							fill: 'black',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 200
						}
						
		var boldBubble = {
							font: 'Mouse Memoirs',
							fontWeight: 'bold',
							fontSize: 20,
							fill: 'black',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 200
						}
						
		var exclamation = {
							font: 'Bangers',
							fontWeight: 'normal',
							fontSize: 20,
							fill: 'black',
							align: 'left',
							wordWrap: false
						}
		
		
		
		/**********************************************************************************************
			LAYERING
			
			You'll want to create several groups to use in the game. Groups serve as "layers" and are 
			displayed from bottom to top in the order they are created.
			
		**********************************************************************************************/
		
		var BG = this.game.add.group();
		var MID = this.game.add.group();
		var FORE = this.game.add.group();
		var OVER = this.game.add.group();
		
		
		
		/**********************************************************************************************
			GAMEDATA - Object
			
			The gamedata object holds everything we want to track in the game. It is the place to set up
			custom functions and variables that do not have to do with the regular outlay of the board and
			how the game is created programmatically. 
			
		**********************************************************************************************/
		
		var gamedata = {
			
		}
		
		
		
		/**********************************************************************************************
		
		Add backgrounds and mask
		
		**********************************************************************************************/
		
		this.game.stage.backgroundColor = pagedata.bgcolor;
		
		var bgimage = BG.create(0,0,'bgimage'); // adds the board art to the upper left corner of the screen
		bgimage.anchor.setTo(.5);
		bgimage.x = window.innerWidth/2;
		bgimage.y = window.innerHeight/2;
		
		var bg2 = MID.create(0,0,'bg2');
		bg2.anchor.setTo(.5);
		bg2.x = window.innerWidth/2;
		bg2.y = window.innerHeight/2; 
		
		var pgscale = 1;
		if (bg2.height > window.innerHeight) {
			pgscale = window.innerHeight/bg2.height
		}
		if (bg2.width > window.innerWidth) {
			pgscale = pgscale > window.innerWidth/bg2.width ? window.innerWidth/bg2.width : pgscale;
		}
		
		bg2.scale.setTo(pgscale);
		
		var bg1 = BG.create(0,0,'bg1');
		bg1.anchor.setTo(.5);
		bg1.x = window.innerWidth/2;
		bg1.y = window.innerHeight/2; 
		bg1.scale.setTo(pgscale);
		
		var scanner = FORE.create(0,0,'scanner');
		scanner.anchor.setTo(.5);
		scanner.x = this.input.mousePointer.x;
		scanner.y = this.input.mousePointer.y;
		
		var scgfx = this.game.add.graphics(0,0);
		scgfx.beginFill(0xffffff);
		scgfx.drawCircle(0,0,100);
		scgfx.endFill();
		scgfx.x = this.input.mousePointer.x;
		scgfx.y = this.input.mousePointer.y;
		scgfx.alpha = 0;
		FORE.add(scgfx);
		
		bg2.mask = scgfx;
		
		this.game.input.addMoveCallback(move,this);
		
		function move(){
			scanner.x = this.input.mousePointer.x;
			scanner.y = this.input.mousePointer.y;
			scgfx.x = this.input.mousePointer.x;
			scgfx.y = this.input.mousePointer.y;
		}
		
		
		
		/**********************************************************************************************
		
		Add page audio
		
		**********************************************************************************************/
		
		var bgmusic;
		
		//if (pagedata.pageAudio){ console.log('playing audio');
			bgmusic = this.game.add.audio('pageAudio', 1, true);
			bgmusic.play();
		//}
		
		
		
		
		/**********************************************************************************************
		
		Create clickables
		
		**********************************************************************************************/
		
		var adjX = (bg1.x - bg1.width/2);
		var adjY = (bg1.y - bg1.height/2);
		
		var box1 = this.game.add.graphics((864*pgscale)+adjX,(424*pgscale)+adjY);
		box1.beginFill(0xff0000);
		box1.drawRect(0,0,104*pgscale,216*pgscale);
		box1.endFill();
		box1.alpha = 0;
		box1.inputEnabled = true;
		box1.events.onInputUp.addOnce(show,this,0,'pop1',true);
		FORE.add(box1);
		
		
		
		var box2 = this.game.add.graphics((13*pgscale)+adjX,(502*pgscale)+adjY);
		box2.beginFill(0xff0000);
		box2.drawRect(0,0,106*pgscale,184*pgscale);
		box2.endFill();
		box2.alpha = 0;
		box2.inputEnabled = true;
		box2.events.onInputUp.addOnce(show,this,0,'pop2',true);
		FORE.add(box2);
		
		
		
		var box3 = this.game.add.graphics((665*pgscale)+adjX,(482*pgscale)+adjY);
		box3.beginFill(0xff0000);
		box3.drawRect(0,0,67*pgscale,86*pgscale);
		box3.endFill();
		box3.alpha = 0;
		box3.inputEnabled = true;
		box3.events.onInputUp.addOnce(show,this,0,'pop3',true);
		FORE.add(box3);
		
		
		
		var box4 = this.game.add.graphics((822*pgscale)+adjX,(152*pgscale)+adjY);
		box4.beginFill(0xff0000);
		box4.drawRect(0,0,85*pgscale,154*pgscale);
		box4.endFill();
		box4.alpha = 0;
		box4.inputEnabled = true;
		box4.events.onInputUp.addOnce(show,this,0,'pop4',true);
		FORE.add(box4);
		
		
		
		var box6 = this.game.add.graphics((249*pgscale)+adjX,(549*pgscale)+adjY);
		box6.beginFill(0xff0000);
		box6.drawRect(0,0,97*pgscale,89*pgscale);
		box6.endFill();
		box6.alpha = 0;
		box6.inputEnabled = true;
		box6.events.onInputUp.addOnce(show,this,0,'pop6',true);
		FORE.add(box6);
		
		
		
		
		
		
		
		/**********************************************************************************************
		
		FUNCTION SHOW
		
		pops readable text and creates a button to continue
		
		**********************************************************************************************/
		
		var callGoToNextState = function(){
			this.game.sound.stopAll();
			this.gotoNextState();
		}.bind(this)
		
		var numchecks = 0;
		var numcheckstotal = 5;
		
		function show(obj,evt,bool,key,check){
			bg2.mask = null;
			bg2.alpha = 0;
			scanner.alpha = 0;
			FORE.setAllChildren('inputEnabled',false);
			
			var cover = this.game.add.graphics(0,0);
			cover.beginFill(0x324888);
			cover.drawRect(0,0,window.innerWidth,window.innerHeight);
			cover.endFill();
			cover.alpha = 0.2;
			OVER.add(cover);
			
			var pop = OVER.create(0,0,key);
			pop.anchor.setTo(.5);
			pop.x = window.innerWidth/2;
			pop.y = window.innerHeight/2;
			pop.scale.setTo(pgscale);
			
			if (check){
				var cmark = FORE.create(0,0,'checkmark');
				cmark.anchor.setTo(.5);
				cmark.scale.setTo(.5*pgscale);
				cmark.x = this.input.mousePointer.x;
				cmark.y = this.input.mousePointer.y;
				numchecks++;
			}
			
			var btncont = OVER.create(0,0,'btncont');
			btncont.x = window.innerWidth - btncont.width - 10;
			btncont.y = window.innerHeight - btncont.height - 10;
			btncont.inputEnabled = true;
			if (check || numchecks === 0){
				btncont.events.onInputUp.addOnce(hide);
			} else {
				btncont.events.onInputUp.addOnce(function(){
					console.log("next page");
					callGoToNextState();
				});
			}
		}
		
		show(null,null,false,'act1intro');
		
		function hide(){
			bg2.mask = scgfx;
			bg2.alpha = 1;
			scanner.alpha = 1;
			FORE.setAllChildren('inputEnabled',true);
			
			OVER.destroy(true,true);
			
			console.log(numchecks, numcheckstotal);
			
			if (numchecks === numcheckstotal){
				show(null,null,false,'act1outro');
			}
		};
		
		
		
		/**********************************************************************************************
		
		FUNCTION
		
		creates the continue button to move to the next panel
		
		**********************************************************************************************/
		
		/*
		var callGoToNextState = function(){
			this.game.sound.stopAll();
			this.gotoNextState();
		}.bind(this)
		
		function createContinueButton(pan){
			var btncont = this.game.add.image(0,0,'btncont');
			FORE.add(btncont);
			
			var detRight = window.innerWidth;
			if (pan.right - adjWidth < detRight){
				detRight = pan.right - adjWidth;
			}
			btncont.right = window.innerWidth - 10;
			
			var detBottom = window.innerHeight;
			if (pan.bottom - adjHeight < detBottom){
				detBottom = pan.bottom - adjHeight;
			}
			btncont.bottom = window.innerHeight - 10;
			
			btncont.inputEnabled = true;
			btncont.events.onInputUp.addOnce(function(btn,pointer,isover){
				onpanel++;
				if (onpanel < pagedata.panels.length){
					createNextPanel();
				} else {
					console.log("next page");
					callGoToNextState();
				}
				btn.destroy();			
			});
		}
		*/
		
		
		/////////////////////////////////////////
		//// WINDOW RESIZE //////////////////////
		/////////////////////////////////////////	

		var winwidth = window.innerWidth;
		var winheight = window.innerHeight;
		
		window.onresize = function(){
				var changeinX = window.innerWidth - winwidth;
				var changeinY = window.innerHeight - winheight;
				
				MID.x += changeinX/2;
				MID.y += changeinY/2;
				
				winwidth = window.innerWidth;
				winheight = window.innerHeight;
				
				bgimage.x = window.innerWidth/2;
				bgimage.y = window.innerHeight/2;
		};
				
	},
	
	gotoNextState: function(){
		this.state.start('LoadNextLevel', true);
	},
	
	update: function(){

	}
};