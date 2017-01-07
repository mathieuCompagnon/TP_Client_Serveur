var url = 'http://127.0.0.1:80'

function getDataFromAPI(page, param) {	
	var request = url + page
	if (param.length > 0){
		request += "?";
		for (i = 0; i < param.length-1; i++) { 
			request += param[i].id + "=" + param[i].val + "&";
		}
		request += param[param.length-1].id + "=" + param[param.length-1].val;
	}
	
	$.getJSON(request, function(data) {
		console.log(data);
		if (data.error){
			alert("Error: " + data.error); 
		}else{
			alert(data);
		}	
	}); 
}

function getVoiture(p_id){
	getDataFromAPI('/getVoiture', [{id: 'id',val: p_id}]);	
}