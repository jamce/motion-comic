// JavaScript Document

var GameState = {

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
		
		var adjWidth = (pagedata.pageW - window.innerWidth);
		var adjHeight = (pagedata.pageH - window.innerHeight);
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		
			
		/**********************************************************************************************
			TYPOGRAPHY
			
			Define your font styles here so they are all in one nice place for reference.
			
		**********************************************************************************************/
		
		var plainText = {
							font: 'Kalam',
							fontWeight: 'normal',
							fontSize: 14,
							fill: 'white',
							align: 'left',
							wordWrap: true,
							wordWrapWidth: 300
						}
						
		var boldText = {
							font: 'Kalam',
							fontWeight: 'bold',
							fontSize: 14,
							fill: 'white',
							align: 'left',
							wordWrap: true,
							wordWrapWidth: 300
						}
						
		var wordBubble = {
							font: 'Kalam',
							fontWeight: 'normal',
							fontSize: 14,
							fill: 'black',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 250
							
						}
						
		var boldBubble = {
							font: 'Kalam',
							fontWeight: 'bold',
							fontSize: 14,
							fill: 'black',
							align: 'center',
							wordWrap: true,
							wordWrapWidth: 250
							
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
		
		
		
		/**********************************************************************************************
			GAMEDATA - Object
			
			The gamedata object holds everything we want to track in the game. It is the place to set up
			custom functions and variables that do not have to do with the regular outlay of the board and
			how the game is created programmatically. 
			
		**********************************************************************************************/
		
		var gamedata = {
			
		}
		
		
		
		/**********************************************************************************************
		
		Update background info
		
		**********************************************************************************************/


		this.game.stage.backgroundColor = pagedata.bgcolor;
		
		var bgimage = BG.create(0,0,'bgimage'); // adds the board art to the upper left corner of the screen
		bgimage.anchor.setTo(.5);
		bgimage.x = window.innerWidth/2;
		bgimage.y = window.innerHeight/2;
		
		MID.x = MID.x - adjWidth;
		MID.y = MID.y - adjHeight;
		
		
		
		/**********************************************************************************************
		
		Add page audio
		
		**********************************************************************************************/
		
		var bgmusic;
		
		if (pagedata.pageAudio){ console.log('playing audio');
			bgmusic = this.game.add.audio('pageAudio', 1, true);
			bgmusic.play();
		}
		
		
		
		
		/**********************************************************************************************
		
		Bring in the first panel
		
		**********************************************************************************************/
		
		var PANELS = pagedata.panels;
		
		var onpanel = 0;
		var panelaudio = [];
		var prevPanelAutoContinue = false;
		
		function createNextPanel(){  console.log("Setting is", prevPanelAutoContinue);
			if (prevPanelAutoContinue === false){
				console.log('stopping sounds');
				for (var i = 0; i < panelaudio.length; i++){
					panelaudio[i].stop();	
				}
				panelaudio = [];
			} else {
				prevPanelAutoContinue = false;
			}
			
			var p = PANELS[onpanel];
			console.log(p.title, p.autocontinue);
			prevPanelAutoContinue = p.autocontinue === true ? true : false;
			console.log("Setting to ", prevPanelAutoContinue);
			if (p.type === 'panel'){
				paintPanel(p)
			} else if (p.type === 'box'){
				renderBox(p)
			} else if (p.type === 'bubble'){
				blowBubble(p)
			}
			

			
			if (p.audio) {
				var audioloop = p.audioLoop ? true : false;
				var paudio = this.game.add.audio(p.audioKey, 1, audioloop);
				panelaudio.push(paudio);
				paudio.play();
			}
			
			if (p.stopPageAudio){
				bgmusic.stop();
			}
			
		}
		
		createNextPanel();
		
		
		
		function blowBubble(p){
		
			var newbubb = this.game.add.group();
			
			var bubbtext = this.game.add.text(0,0,p.text.toUpperCase(),wordBubble);
			bubbtext.lineSpacing=-4;
			
			styleText(p.text.toUpperCase(), bubbtext);
			
			var bubb = this.game.add.graphics();
			bubb.beginFill(0xffffff);
			bubb.lineStyle(1,0x000000,1);
			bubb.drawRoundedRect(-40, -12, bubbtext.width + 80, bubbtext.height + 20, 20);
			bubb.endFill();
			
			var tail = this.game.add.image(0,0,'tail');
			tail.scale.setTo(p.scaleX, p.scaleY);
			switch (p.direction){
				case 'top':
					tail.angle = -90;
					tail.x = bubb.x + bubb.width/2;
					tail.y = bubb.y - 9;
					break;
					
				case 'right':
					tail.angle = 0;
					tail.x = bubb.x + bubb.width - 38;
					tail.y = bubb.y + bubb.height/2 - 28;
					break;
					
				case 'bottom': 
					tail.angle = 90; 
					tail.x = bubb.x + bubb.width/2;
					tail.y = bubb.y + bubb.height - 23;
					break;
					
				case 'left':
					tail.angle = 180;
					tail.x = bubb.x - 23;
					tail.y = bubb.y + bubb.height/2;
					break;
			}
			if (p.moveTailX){ tail.x += p.moveTailX };
			if (p.moveTailY){ tail.y += p.moveTailY };
			
			newbubb.add(bubb);
			newbubb.add(tail);
			newbubb.add(bubbtext);
			MID.add(newbubb);
			
			positionPanel(newbubb, p);
		
		}
		
		
		
		function paintPanel(p){
		
			var newitem;
			if ( p.animated ){
				newitem = this.game.add.sprite(0, 0, p.title);
				newitem.animations.add('playing', Phaser.Animation.generateFrameNames(p.framenames, p.animstart, p.animend, '', p.framelength), 24, p.animloop, false);
				if (!p.tween) { newitem.animations.play('playing') };
			} else {
				newitem = this.game.add.image(0, 0, p.title);		
			}
			
			if (p.sendtoback){
				MID.addAt(newitem, 0);
			} else {
				MID.add(newitem);
			}
			
			positionPanel(newitem, p);
			
		}
		
		
		
		function positionPanel(obj, p){
		
			obj.x = p.posX;
			obj.y = p.posY;
			
			if (p.tween){
				var time = p.tweentime;
				var tw = this.game.add.tween(obj).from(p.tweenprops, time, Phaser.Easing.Quadratic.InOut, true, 250);
				tw.onComplete.addOnce(function(){
					if (!p.autocontinue){
						createContinueButton(obj);
					} else {
						onpanel++;
						createNextPanel()
					}
					
					if (p.animated) { obj.animations.play('playing') };
				});
			} else {
				if (!p.autocontinue){
					createContinueButton(obj);
				} else {
					onpanel++;
					createNextPanel()
				}
			}
			
		}
		
		
		
		function renderBox(p){
		
			var boxfillcolor = p.fillColor ? p.fillColor : 0x000000;
			
			var newbox = this.game.add.group();

			var boxtext = this.game.add.text(0,0,p.text.toUpperCase(),plainText);
			
			boxtext.lineSpacing=-4;
			
			styleText(p.text.toUpperCase(), boxtext);
			
			var box = this.game.add.graphics();
			box.beginFill(boxfillcolor);
			box.fillAlpha = .95;
			box.lineStyle(2,0xffffff,.25);
			box.drawRect(-20,-17,boxtext.width + 40, boxtext.height + 30);
			box.endFill();
			
			newbox.add(box);
			newbox.add(boxtext);
			MID.add(newbox);
			
			positionPanel(newbox, p);
			
		}
		
		
		
		function styleText(txt, obj){
		
			var boldArray = [];
		
			while (txt.indexOf('|') > -1){
				// find first pipe
				var pipeA = txt.indexOf('|');
				
				// find second pipe
				var substr = txt.substring(pipeA + 1);
				var pipeB = pipeA + substr.indexOf('|');
				
				// remove those pipes
				var strA = txt.substring(0, pipeA);
				var strB = txt.substring(pipeA + 1, pipeB + 1);
				var strC = txt.substring(pipeB + 2);
				txt = strA + strB + strC; //console.log(txt);
				
				// push the pipe places into the array
				boldArray.push(pipeA);
				boldArray.push(pipeB);
			}
			
			obj.text = txt;
			
			for (var ba = 0; ba < boldArray.length; ba += 2){
				obj.addFontWeight('bold', boldArray[ba]);
				obj.addFontWeight('normal', boldArray[ba+1]);
			}
		
		}
		
		
		
		/**********************************************************************************************
		
		FUNCTION
		
		creates the continue button to move to the next panel
		
		**********************************************************************************************/
		
		var callGoToNextState = function(){
			this.game.sound.stopAll();
			this.gotoNextState();
		}.bind(this)
		
		
		function createContinueButton(pan){
			if (_gc.onpage < _gc.pages.length || onpanel < pagedata.panels.length - 1){
			
			var btncont = this.game.add.image(0,0,'btncont');
			FORE.add(btncont);
					btncont.x = window.innerWidth/2 - btncont.width/2 + 600;
		btncont.y = window.innerHeight/2 - btncont.height/2 -400;
			btncont.inputEnabled = true;
			btncont.events.onInputUp.addOnce(function(btn,pointer,isover){
				onpanel++;
				if (onpanel < pagedata.panels.length){
					createNextPanel();
				} else {
					console.log("next page");
					callGoToNextState();
				}
				//btn.destroy();			
			});
			
			} else {
			
				SCORMsetValue("cmi.core.lesson_status", "completed");
				
			}
		}
		
		
		
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
		
		window.onbeforeunload = function () {
			  this.game.sound.stopAll();
			};
				
	},
	
	gotoNextState: function(){
		this.state.start('LoadNextLevel', true);
	},
	
	update: function(){

	}
};