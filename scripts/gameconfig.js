var _gc = {

	onpage: 0,
	pages: [
			
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////		
	
		{
			title: 'Page One',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#000000',
			pageH: window.innerHeight, 
			pageW: window.innerWidth,
			pageAudio: 'pg1/noah_scene_music.mp3',
			panels: [

			
			{
					title: 'p1',
					type: 'panel',
					url: 'pg1/openingshot.jpg',
					json: 'pg1/openingshot.json',
					animated: true,
					framenames: 'pg1_pn1',
					animstart: 0,
					animend: 72,
					framelength: 4,
					animloop: false,
					posX: 400,
					posY: 160,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				
				{
					title: 'box1',
					type: 'box',
					text: 'When time was new...',
					posX: 380,
					posY: 160,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					//audio: 'pg1/chaseman_pg1_pn1.mp3',
					audioKey: 'pg1pnl1'
				},
				

				{
					title: 'p2',
					type: 'panel',
					url: 'pg1/pg1_pn2.jpg',
					json: 'pg1/pg1_pn2.json',
					animated: true,
					framenames: 'pg1_pn2',
					animstart: 0,
					animend: 60,
					framelength: 4,
					animloop: false,
					posX: 360,
					posY: 360,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					fallback: 'pg1/p1_pnl2_fallback.png', 					
					//audio: 'pg1/chaseman_pg1_pn2.mp3',
					audioKey: 'pg1pnl2',
					autocontinue: true
					
				},
				
				{
					title: 'box2',
					type: 'box',
					text: 'in the world of |ARA|...',
					posX: 630,
					posY: 400,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500
				},
				
			
			
				{
					title: 'p3',
					type: 'panel',
					url: 'pg1/pg1_pn4.jpg',
					json: 'pg1/pg1_pn4.json',
					animated: true,
					framenames: 'pg1_pn4',
					animstart: 0,
					animend: 130,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: 500,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					audioKey: 'pg1pnl5',
					stopPageAudio: false,
					autocontinue: true
				},
					{
					title: 'box3',
					type: 'box',
					text: 'There were |GIANTS|.',
					posX: 700,
					posY: 670,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					//audio: 'pg1/chaseman_pg1_pn4.mp3',
					audioKey: 'pg1pnl4'
				},
				{
				title: 'p4',
					type: 'panel',
					url: 'pg1/pg1_pn3.png',
					json: 'pg1/pg1_pn3.json',
					animated: true,
					framenames: 'pg1_pn3',
					animstart: 0,
					animend: 35,
					framelength: 4,
					animloop: false,
					posX: 1180,
					posY: 480,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
					
				},
				{
					title: 'bubble1',
					type: 'bubble',
					text: "Found |you!|",
					posX: 1150,
					posY: 640,
					direction: 'right',
					scaleX: .6,
					scaleY: .6,
					moveTailX: -7,
					moveTailY: 6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 50
					},
					tweentime: 250,
					audio: 'pg1/found_you_noah.mp3',
					audioKey: 'pg1pnl3'
				},
								{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip1.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},
				
				
				
			]
		}, 
		
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////	
		{
			title: 'Page Two',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg2/chaseman_pg2_music.mp3',
			panels: [
			
				{
					title: 'p2p1',
					type: 'panel',
					url: 'pg2/pg2_pn1.jpg',		
					posX: 20,
					posY: 30,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					autocontinue: true
				},
				{
					title: 'bubble1',
					type: 'bubble',
					text: "|CHASEMAN!| City Hall has been |ROBBED!| All the |ART| has vanished without a trace! I’m sorry to interrupt your vacation… but |WE NEED YOU!|",
					posX: 35,
					posY: 40,
					direction: 'bottom',
					scaleX: .8,
					scaleY: .6,
					moveTailX: 70,
					moveTailY: -2,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 50
					},
					tweentime: 250,
					audio: 'pg2/chaseman_pg2_pn1.mp3',
					audioKey: 'pg2pnl1'
				},
												
				{
					title: 'p2p2',
					type: 'panel',
					url: 'pg2/pg2_pn2.jpg',	
					json: 'pg2/pg2_pn2.json',
					animated: true,
					framenames: 'pg2_pn2',
					animstart: 0,
					animend: 50,
					framelength: 4,
					animloop: true,				
					posX: 20,
					posY: 430,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
								{
					title: 'bubble2',
					type: 'bubble',
					text: "Hm— a |FINELY| arranged fine art abstraction you say?!  Have you reached out to |Major Save|? I’ve left the city in her proficient purview…",
					posX: 150,
					posY: 340,
					moveTailX: 80,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .6,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 360
					},
					tweentime: 250,
					audio: 'pg2/chaseman_pg2_pn2.mp3',
					audioKey: 'pg2pnl2'
				},

								
				{
					title: 'p2p3',
					type: 'panel',
					url: 'pg2/pg2_pn3.jpg',					
					posX: 530,
					posY: 30,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true,
					sendtoback: true
				},
				{
					title: 'bubble3',
					type: 'bubble',
					text: "Well, I left her a message but… she must be busy? Anyway- The |Zansibar Expo| is this weekend and I |NEED| it to go well! Zansibar is one of my biggest supporters… |Hurry!|",
					posX: 740,
					posY: 90,
					moveTailX: -30,
					moveTailY: -2,
					direction: 'bottom',
					scaleX: 1,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 110
					},
					tweentime: 250,
					audio: 'pg2/chaseman_pg2_pn3.mp3',
					audioKey: 'pg2pnl3'
				},
												{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip2.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},

			]
		},
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
			{
			title: 'Page Three',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg3/chaseman_pg3_music.mp3',
			panels: [
			
				{
					title: 'p3pn1',
					type: 'panel',
					url: 'pg3/pg3_pn1.jpg',
					json: 'pg3/pg3_pn1.json',
					animated: true,
					framenames: 'pg3_pn1',
					animstart: 0,
					animend: 30,
					framelength: 4,
					animloop: true,
					posX: 30,
					posY: 30,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				
				{
					title: 'box1',
					type: 'box',
					text: '|Chaseman| barrels \nback to |Bankopolis| \nbut notices nagging \nnotifications that his \nemail inbox has \n|inflated immensley!|',
					posX: 30,
					posY: 80,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg3/chaseman_pg3_pn1.mp3',
					audioKey: 'pg3pnl1'
				},
					{
					title: 'p3pn2',
					type: 'panel',
					url: 'pg3/pg3_pn2.jpg',
					json: 'pg3/pg3_pn2.json',
					animated: true,
					framenames: 'pg3_pn2',
					animstart: 0,
					animend: 30,
					framelength: 4,
					animloop: true,
					posX: 410,
					posY: 30,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},	
					{
					title: 'bubble1',
					type: 'bubble',
					text: "\n|LINCOLN'S BEARD!| \nThat's a lot of emails!\n",
					posX: 550,
					posY: 290,
					direction: 'top',
					moveTailX: -150,
					moveTailY: 0,
					scaleX: .6,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 240
					},
					tweentime: 250,
					audio: 'pg3/chaseman_pg3_pn2.mp3',
					audioKey: 'pg3pnl2'
				},
								{
					title: 'p3pn3',
					type: 'panel',
					url: 'pg3/pg3_pn3.jpg',
					json: 'pg3/pg3_pn3.json',
					animated: true,
					framenames: 'pg3_pn3',
					animstart: 0,
					animend: 30,
					framelength: 4,
					animloop: true,
					posX: 410,
					posY: 385,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},	
					{
					title: 'bubble2',
					type: 'bubble',
					text: "\nLet's see... I think I can clean a few of these out...\n",
					posX: 400,
					posY: 420,
					direction: 'right',
					moveTailX: 0,
					moveTailY: 10,
					scaleX: .7,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 420
					},
					tweentime: 250,
					audio: 'pg3/chaseman_pg3_pn3.mp3',
					audioKey: 'pg3pnl3'
				},
												{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip3.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},
								
			  
			]
},	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 4',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg4/chaseman_pg4_music.mp3',
			panels: [
			
				{
					title: 'p4pn1',
					type: 'panel',
					url: 'pg4/pg4_pn1.jpg',
					json: 'pg4/pg4_pn1.json',
					animated: true,
					framenames: 'pg4_pn1',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 16,
					posY: 30,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
					{
					title: 'box1',
					type: 'box',
					text: 'As Chaseman |races| \nback to the city, \nhe loses control and \n|WRECKS THE CHASEMOBILE!|',
					posX: 432,
					posY: 80,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg4/chaseman_pg4_pn1.mp3',
					audioKey: 'pg3pnl1'
				},

				{
					title: 'p4pn2',
					type: 'panel',
					url: 'pg4/pg4_pn2.jpg',
					json: 'pg4/pg4_pn2.json',
					animated: true,
					framenames: 'pg4_pn2',
					animstart: 0,
					animend: 35,
					framelength: 4,
					animloop: false,
					posX: 14,
					posY: 420,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				{
					title: 'bubble1',
					type: 'bubble',
					text: "\nSnap out of it Chaseman! You’re in some kind of |BRAINFOG!|\n",
					posX: 30,
					posY: 380,
					moveTailX: 80,
					moveTailY: 1,
					direction: 'bottom',
					scaleX: .5,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 380
					},
					tweentime: 250,
					audio: 'pg4/chaseman_pg4_pn2.mp3',
					audioKey: 'pg4pnl2'
				},
				
				{
					title: 'p4pn3',
					type: 'panel',
					url: 'pg4/pg4_pn3.png',
					json: 'pg4/pg4_pn3.json',
					animated: true,
					framenames: 'pg4_pn3',
					animstart: 0,
					animend: 18,
					framelength: 4,
					animloop: false,
					posX: 342,
					posY: 420,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 600
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
						

				{
					title: 'p4pn5',
					type: 'panel',
					url: 'pg4/pg4_pn5.jpg',
					json: 'pg4/pg4_pn5.json',
					animated: true,
					framenames: 'pg4_pn5',
					animstart: 0,
					animend: 70,
					framelength: 4,
					animloop: false,
					posX: 650.5,
					posY: 29,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 500
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
				{
					title: 'p4pn6',
					type: 'panel',
					url: 'pg4/pg4_pn6.jpg',
					json: 'pg4/pg4_pn6.json',
					animated: true,
					framenames: 'pg4_pn6',
					animstart: 0,
					animend: 40,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: 28,

					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
				{
					title: 'p4pn7',
					type: 'panel',
					url: 'pg4/pg4_pn7.jpg',
					json: 'pg4/pg4_pn7.json',
					animated: true,
					framenames: 'pg4_pn7',
					animstart: 0,
					animend: 40,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: 28,
		

					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
				{
					title: 'p4pn8',
					type: 'panel',
					url: 'pg4/pg4_pn8.jpg',
					json: 'pg4/pg4_pn8.json',
					animated: true,
					framenames: 'pg4_pn8',
					animstart: 0,
					animend: 25,
					framelength: 4,
					animloop: false,
					posX: 650,
					posY: 29,

					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
												{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip4.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 5',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg5/chaseman_pg5_music.mp3',
			panels: [
			
				{
					title: 'p5pn1',
					type: 'panel',
					url: 'pg5/pg5_pn1.jpg',
					json: 'pg5/pg5_pn1.json',
					animated: true,
					framenames: 'pg5_pn1',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 20,
					posY: 30,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1500,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
				{
					title: 'box1',
					type: 'box',
					text: 'After being |majorly saved| by \n|Major Save|, Chaseman and his \nteammate attempt to puzzle \ntogether the brainfog and \nart absconding.',
					posX: 80,
					posY: 320,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg5/chaseman_pg5_pn1.mp3',
					audioKey: 'pg5pnl1'
					
				},

				{
					title: 'p5pn2',
					type: 'panel',
					url: 'pg5/pg5_pn2.jpg',
					json: 'pg5/pg5_pn2.json',
					animated: true,
					framenames: 'pg5_pn2',
					animstart: 0,
					animend: 28,
					framelength: 4,
					animloop: false,
					sendtoback:true,
					posX: 470,
					posY: 27,
					tween: true,
					tweenprops: {
						y: -2000
					},
					tweentime: 600,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
					
				},
				{
					 title: 'bubble1',
					type: 'bubble',
					text: "I already met with the Head of \nsecurity at City Hall and got \naccess to their security \nfootage. I’ve calibrated a \nvirtual reenactment of \nthe art theft!",
					posX: 315,
					posY: 20,
					moveTailX: 90,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .7,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 30
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn2.mp3',
					audioKey: 'pg5pnl2'
				},	
				{
					 title: 'bubble2',
					type: 'bubble',
					text: "|LINCOLN’S BEARD!| Major Save, you’re the best crime fighting companion I could hope for!",
					posX: 580,
					posY: 25,
					moveTailX: -120,
					moveTailY: 1,
					direction: 'bottom',
					scaleX: .5,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 45
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn2a.mp3',
					audioKey: 'pg5pnl2a'
				},	
												{
					 title: 'bubble3',
					type: 'bubble',
					text: "They seem to |ALL| be glued to their mobile devices. Y’know, a lot of App and device companies use “slot Machine” tactics to make it harder to put the phone down. The thief slipped right past… |PLUS| look at that! He’s using some kind of |HypnoTech!|",
					posX: 750,
					posY: 250,
					moveTailX: 1,
					moveTailY: -60,
					direction: 'left',
					scaleX: 1.3,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 730
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn2b.mp3',
					audioKey: 'pg5pnl2b'
				},	
					{
					title: 'p5p3',
					type: 'panel',
					url: 'pg5/pg5_pn3.jpg',					
					posX: 20,
					posY: 395,
					sendtoback: true,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
								{
					 title: 'bubble4',
					type: 'bubble',
					text: "|COPPER PENNIES!| \nYou’re right. Not just any ol’ theif, but a |Digiwizard|.",
					posX: 40,
					posY: 680,
					moveTailX: -135,
					moveTailY: 0,
					direction: 'top',
					scaleX: 1,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 650
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn3.mp3',
					audioKey: 'pg5pnl3'
				},	

									{
					title: 'p5p4',
					type: 'panel',
					url: 'pg5/pg5_pn4.jpg',					
					posX: 350,
					posY: 280,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
												{
					 title: 'bubble5',
					type: 'bubble',
					text: "|Chaseman!| Come down to \nCity Hall. There’s someone \nhere that would really \nlike to meet you!",
					posX: 380,
					posY: 460,
					moveTailX: -110,
					moveTailY: -1,
					direction: 'top',
					scaleX: .4,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 440
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn4.mp3',
					audioKey: 'pg5pnl4'
				},	
				{
					title: 'p5p5',
					type: 'panel',
					url: 'pg5/pg5_pn5.jpg',					
					posX: 520,
					posY: 395,
					tween: true,
					sendtoback: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 800,
					autocontinue: true
				},
					{
					title: 'bubble6',
					type: 'bubble',
					text: "\nWe’re on our way Mayor!\n",
					posX: 520,
					posY: 690,
					moveTailX: 60,
					moveTailY: 1,
					direction: 'top',
					scaleX: .4,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 670
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn5.mp3',
					audioKey: 'pg5pnl5'
				},	
				{
					title: 'bubble7',
					type: 'bubble',
					text: "Ok, I’m gonna go on \npatrol and look for \nmore clues. You go \nmeet with the Mayor!",
					posX: 820,
					posY: 420,
					moveTailX: 10,
					moveTailY: 0,
					direction: 'bottom',
					scaleX: .4,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 440
					},
					tweentime: 200, 
					audio: 'pg5/chaseman_pg5_pn5b.mp3',
					audioKey: 'pg5pnl5b'
				},
												{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip5.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},
					
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
		{
			title: 'Activity One',
			activity: true,
			pageH: 726,
			pageW: 981,
			activityLoader: 'PreloadActivity1State',
			bgcolor: '#000000'
		},
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 6',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg6/chaseman_pg6_music.mp3',
			panels: [
			{
					title: 'p6p1',
					type: 'panel',
					url: 'pg6/pg6_pn1.jpg',					
					posX: 20,
					posY: 20,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 800,
					autocontinue: true
				},
					{
					title: 'box1',
					type: 'box',
					text: 'While Major Save may’ve just saved the city- Chaseman is about to find himself in major need of saving, |again!|',
					posX: 80,
					posY: 25,
					tween: true,
					tweenprops: {
						alpha: 0
					},
					tweentime: 500, 
					audio: 'pg6/chaseman_pg6_pn1.mp3',
					audioKey: 'pg6pnl1'
				},
								{
					title: 'p6pn1b',
					type: 'panel',
					url: 'pg6/pg6_pn1b.png',
					json: 'pg6/pg6_pn1b.json',
					animated: true,
					framenames: 'pg6_pn1b',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 50,
					posY: 250,
					autocontinue: true, 
					audio: 'pg6/chaseman_pg6_pn2.mp3',
					audioKey: 'pg6pnl2'
				},
				{
				    title: 'bubble1',
					type: 'bubble',
					text: "\nChaseman, this is \n|ZANDER ZANSIBAR|, CEO of \nZANSIBAR TECH.\n",
					posX: 100,
					posY: 130,
					moveTailX: -120,
					moveTailY: -1,
					direction: 'bottom',
					scaleX: .7,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 180
					},
					tweentime: 200,
					autocontinue: true
				},	
				
				{
					title: 'p6pn2',
					type: 'panel',
					url: 'pg6/pg6_pn2.jpg',
					json: 'pg6/pg6_pn2.json',
					animated: true,
					framenames: 'pg6_pn2',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: false,
					posX: 20,
					posY: 360,
					sendtoback:true,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 600,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},

										{
				    title: 'bubble2',
					type: 'bubble',
					text: "|HUGE| fan Chaseman! I was so bummed that your vacation had to be cut short...",
					posX: 140,
					posY: 680,
					moveTailX: -35,
					moveTailY: 1,
					direction: 'top',
					scaleX:  1.4,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 670
					},
					tweentime: 100, 
					audio: 'pg6/chaseman_pg6_pn3.mp3',
					audioKey: 'pg6pnl3'
				},	

														{
				    title: 'bubble3',
					type: 'bubble',
					text: "...as it was \nintended to \nkeep you |out| \n|of my hair.|",
					posX: 340,
					posY: 450,
					moveTailX:-4,
					moveTailY:0,
					direction: 'left',
					scaleX:  .3,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 330
					},
					tweentime: 400, 
					audio: 'pg6/chaseman_pg6_pn3b.mp3',
					audioKey: 'pg6pnl3b'
				},		
								{
					title: 'p6pn3',
					type: 'panel',
					url: 'pg6/pg6_pn3.jpg',
					json: 'pg6/pg6_pn3.json',
					animated: true,
					framenames: 'pg6_pn3',
					animstart: 0,
					animend: 24,
					framelength: 4,
					animloop: false,
					posX: 330,
					posY: 190,
					tween: true,
					tweenprops: {
						y: -2000
					},
					tweentime: 500, 
					audio: 'pg6/chaseman_pg6_pn3c.mp3',
					audioKey: 'pg6pnl3c'
				},
					
			{
					title: 'p6pn4',
					type: 'panel',
					url: 'pg6/pg6_pn4.png',
					json: 'pg6/pg6_pn4.json',
					animated: true,
					framenames: 'pg6_pn4',
					animstart: 0,
					animend: 20,
					framelength: 4,
					animloop: true,
					posX: 480,
					posY: 219,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 1500,
					autocontinue: true
				},
					{
				    title: 'bubble4',
					type: 'bubble',
					text: "|Stealing| the art from City Hall was just sort of a beta test. (and, I happen to be a pretty big fine art fan) \n\nBut the |REAL| demo will be when I use my hypnotech to walk into every business, bank and BBQ joint in the city and |rob’em blind!|(…I’m also a big BBQ fan)",
					posX: 700,
					posY: 20,
					moveTailX: 0,
					moveTailY: 2,
					direction: 'bottom',
					scaleX:  .7,
					scaleY: .5,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 40
					},
					tweentime: 100, 
					audio: 'pg6/chaseman_pg6_pn4.mp3',
					audioKey: 'pg6pnl4'
				},
												{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip6.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},
					
			]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 7',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg7/chaseman_pg7_music.mp3',
			panels: [
				
				{
					title: 'p7pn1',
					type: 'panel',
					url: 'pg7/pg7_pn1.png',
					json: 'pg7/pg7_pn1.json',
					animated: true,
					framenames: 'pg7_pn1',
					animstart: 0,
					animend: 11,
					framelength: 4,
					animloop: false,
					posX: 0,
					posY: -70,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 1000,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true,
					audio: 'pg7/chaseman_pg7_pn1.mp3',
					audioKey: 'pg7pnl1'
				},
				{
				    title: 'bubble1',
					type: 'bubble',
					text: "…AND |BOOM|- Uploaded \nto facetube. You really \nshouldn’t monologue \nyour evil plans out \nloud. You never know \nwho’s recording.",
					posX: 30,
					posY: 30,
					moveTailX:3,
					moveTailY:35,
					direction: 'right',
					scaleX:  .3,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 50
					},
					tweentime: 600
				},	
								{
				    title: 'bubble2',
					type: 'bubble',
					text: "\Now, |release Chaseman| \nfrom the Brainfog \nand give up!",
					posX: 370,
					posY: 360,
					moveTailX:-120,
					moveTailY:-2,
					direction: 'top',
					scaleX:  .8,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 340
					},
					tweentime: 200,
					audio: 'pg7/chaseman_pg7_pn1b.mp3',
					audioKey: 'pg7pnl1b'
				},	

				{
					title: 'p7pn2',
					type: 'panel',
					url: 'pg7/pg7_pn2.jpg',
					json: 'pg7/pg7_pn2.json',
					animated: true,
					framenames: 'pg7_pn2',
					animstart: 0,
					animend: 28,
					framelength: 4,
					animloop: true,
					sendtoback: true,
					posX: 560,
					posY: 30,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 800,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},
					{
				    title: 'bubble3',
					type: 'bubble',
					text: "Pfft. The people of this city were |ALREADY| slaves to their devices… I didn’t NEED to use my tech to slip past- they’re so |distracted|! \n\nIf you want to save them— you’ll have to stop me, |MAJOR SAVE!|",
					posX: 745,
					posY: 30,
					moveTailX:-80,
					moveTailY:3,
					direction: 'bottom',
					scaleX: .4,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 10
					},
					tweentime: 250,
					audio: 'pg7/chaseman_pg7_pn2.mp3',
					audioKey: 'pg7pnl2'
				},	
					
{
					title: 'p7p3',
					type: 'panel',
					url: 'pg7/pg7_pn3.jpg',					
					posX: 820,
					posY: 520,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 600,
					autocontinue: true
				},
				{
				    title: 'bubble4',
					type: 'bubble',
					text: "\nI thought you’d never ask! Let’s |DANCE, Zansibarf!|\n",
					posX: 500,
					posY: 600,
					moveTailX:-4,
					moveTailY:8,
					direction: 'right',
					scaleX: 1.2,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 520
					},
					tweentime: 250,
					audio: 'pg7/chaseman_pg7_pn3.mp3',
					audioKey: 'pg7pnl3'

				},	
												{
					title: 'TIP',
					type: 'panel',
					url: 'pg1/tip7.png',
					posX: 0,
					posY: 0,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 0
					},
					tweentime: 200
				},
					
			]
},
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{
			title: 'Activity Two',
			activity: true,
			pageH: 726,
			pageW: 981,
			activityLoader: 'PreloadActivity2State',
			bgcolor: '#000000'
		},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 8',
			bg: 'chaseman_html_bg_dark.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg8/chaseman_pg8_music.mp3',
			panels: [
				
				{
					title: 'p8pn1',
					type: 'panel',
					url: 'pg8/pg8_pn1.png',
					json: 'pg8/pg8_pn1.json',
					animated: true,
					framenames: 'pg8_pn1',
					animstart: 0,
					animend: 15,
					framelength: 4,
					animloop: true,
					posX: 20,
					posY: 20,
					tween: true,
					tweenprops: {
						x: -2000
					},
					tweentime: 600,
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
					autocontinue: true
				},	
				{
					title: 'bubble1',
					type: 'bubble',
					text: "|GREAT JOB MAJOR SAVE!| I’ll say it again— you’re the best crusading comrade a crime fighter could have!",
					posX: 30,
					posY: 20,
					moveTailX:-1,
					moveTailY:40,
					direction: 'right',
					scaleX: .2,
					scaleY: .4,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 40
					},
					tweentime: 150,
					audio: 'pg8/chaseman_pg8_pn1.mp3',
					audioKey: 'pg8pnl1'
				},	
{
					title: 'p8pn2',
					type: 'panel',
					url: 'pg8/pg8_pn2.jpg',					
					posX: 550,
					posY: 20,
					sendtoback: true,
					tween: true,
					tweenprops: {
						x: 2000
					},
					tweentime: 600,
					autocontinue: true
				},
								{
					title: 'bubble2',
					type: 'bubble',
					text: "|Here here!| I didn’t \nthink anyone could \nfill Chaseman’s shoes… \nbut I was wrong. \nYou were the |LEAST| \ndistracted of us all.",
					posX: 510,
					posY: 30,
					moveTailX:2,
					moveTailY:30,
					direction: 'right',
					scaleX: .4,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 530
					},
					tweentime: 150,
					audio: 'pg8/chaseman_pg8_pn2.mp3',
					audioKey: 'pg8pnl2'
				},	
				
				{
					title: 'p8pn3',
					type: 'panel',
					url: 'pg8/pg8_pn3.jpg',
					json: 'pg8/pg8_pn3.json',
					animated: true,
					framenames: 'pg8_pn3',
					animstart: 0,
					animend: 15,
					framelength: 4,
					animloop: true,
					posX: 20,
					posY: 310,
					tween: true,
					tweenprops: {
						y: 2000
					},
					tweentime: 1000,
					autocontinue: true
					//fallback: 'pg1/p1_pnl1_fallback.jpg',
				},
								{
					title: 'bubble3',
					type: 'bubble',
					text: "\nThanks Mayor! Y’know, Zansibar wasn’t |CAUSING| the addiction—he was just using it. It doesn’t take a supervillain to cause |unhealthy habits|. \n\nWe |ALL| can get distracted… even |addicted to our devices|. But, if we can learn to take |breaks|, |organize| and |prioritize| both our devices |AND| our time. We all can avoid digital addiction in our lives.\n",
					posX: 30,
					posY: 260,
					moveTailX:-6,
					moveTailY:80,
					direction: 'right',
					scaleX: 1.5,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 50
					},
					tweentime: 250,
					audio: 'pg8/chaseman_pg8_pn3.mp3',
					audioKey: 'pg8pnl3'
				},	
												{
					title: 'bubble4',
					type: 'bubble',
					text: "\nWell said Major! Now, who's up for BBQ?\n",
					posX: 380,
					posY: 350,
					moveTailX:-3,
					moveTailY:15,
					direction: 'right',
					scaleX: 1,
					scaleY: .6,
					tween: true,
					tweenprops: {
						alpha: 0,
						x: 400
					},
					tweentime: 250,
					audio: 'pg8/chaseman_pg8_pn3_b.mp3',
					audioKey: 'pg8pnl3b'
				},	
			]
},

///////////////////////////////////////////////////////////////////////////////////////////////////////////////			
			{
			title: 'Page 9',
			bg: 'chaseman_html_bg.jpg',
			bgcolor: '#c3f5fe',
			pageH: 768,
			pageW: 1024,
			pageAudio: 'pg0/chaseman_theme.mp3',
			panels: [
				
				{
					title: 'p9pn1',
					type: 'panel',
					url: 'pg9/wrap_page.png',
					posX: 60,
					posY: -20,
					tween: true,
					tweenprops: {
						alpha: 0,
						y: 1
					},
					tweentime: 300
				},
				]
},
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
	]
}