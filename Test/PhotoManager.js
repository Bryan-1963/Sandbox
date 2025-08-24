		
	//==========================================================================================
	// ReadJSONFile
	//==========================================================================================	
	async function ReadJSONFile(){
		console.log("Made it to ReadJSONFile, da doo doo doo");
		var resultsDisplay = document.getElementById("testResults");
		//var tstContnt = document.getElementById("testContent");
		let myObject = await fetch("https://bryan-1963.github.io/Sandbox/Test/Test_Files/AnnotatedPhotos_LloydCopeland.json");
		let myText = await myObject.text();
		resultsDisplay.innerText = "<br><br>" + myText;
		console.log("myText = |" + myText + "|");
		let testObj = JSON.parse(myText);
		//console.log("testObj = " + JSON.stringify(testObj));
		//console.log("testObj[0] = " + JSON.stringify(testObj[0]));
		/*
		var myHTML = "";
		myHTML=myHTML + "<figure class='myFigure'>";
		myHTML=myHTML + "<img src='" + testObj[0]['photoFilePath'];
		myHTML=myHTML + "' style='max-height: 400px;'>";
		myHTML=myHTML + "<figcaption>" + testObj[0]['annotation'];
		myHTML=myHTML + "</figcaption>";
		myHTML=myHTML + "</figure>";
		console.log("myHTML=" + myHTML);
		tstContnt.innerHTML=myHTML;
		*/
	}