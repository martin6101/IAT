define(['pipAPI', 'https://martin6101.github.io/IAT/fullscriptimages.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'buitenlanders', //Will appear in the data. (this is a test)
		    title : {
		      media : {word : 'buitenlanders'}, //Name of the category presented in the task.
		      css : {color:'#cc0100','font-size':'1.8em', 'font-family': 'Times New Roman'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects // test
    		    	{image : 'https://uva.fra1.qualtrics.com/CP/Graphic.php?IM=IM_23MrmnlV9D3xvZI'}    	
		    ], 
		    //Stimulus css (style)
			//stimulusCss: {'max-height': '120px'},
		    css : {color:'#cc0100','font-size':'3em', 'font-family': 'Times New Roman'}
		  },	

  		attribute1 : 
			{
			name : 'bad', //Attribute label
			title : {
				media : {word : 'bad'}, //Name of the category presented in the task.
				css : {color:'#0099ff','font-size':'1.8em', 'font-family': 'Times New Roman'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'filthy'},
				{word: 'disease'},
				{word: 'failure'},
				{word: 'poison'},
				{word: 'disaster'},
				{word: 'damage'},
				{word: 'hostile'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0099ff','font-size':'3em', 'font-family': 'Times New Roman'}
			},
		attribute2 : 
			{
			name : 'good', //Attribute label
			title : {
				media : {word : 'good'}, //Name of the category presented in the task.
				css : {color:'#0099ff','font-size':'1.8em', 'font-family': 'Times New Roman'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'success'},
				{word: 'glory'},
				{word: 'hope'},
				{word: 'peace'},
				{word: 'happiness'},
				{word: 'paradise'},
				{word: 'joy'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#0099ff','font-size':'3em', 'font-family': 'Times New Roman'}
			},

  		//base_url : {//Where are your images at?
    	//	image : 'https://martin6101.github.io/IAT/Avatar.png'
  		//},
  		fullscreen:false
	});
});