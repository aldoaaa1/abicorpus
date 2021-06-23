function getApiData(){
	return $.getJSON('https://api.db-ip.com/v2/free/self', function(data) {return data;});
}
getApiData().then(function(data){
	apiData = data;
	a = window.navigator; 
	b = window.screen; 
	var user = new Object(); 
	user.screenWidth = b.width; 
	user.screenHeight = b.height; 
	user.language = a.language; 
	user.vendor = a.vendor; 
	user.userAgent = a.userAgent; 
	user.ip = "<?= $_SERVER['REMOTE_ADDR'] ?>"; 
	user.paginaActual = document.URL;
	user.api_ip = apiData.ipAddress;
	user.api_continent = apiData.continentName;
	user.api_country = apiData.countryName;
	user.api_state = apiData.stateProv;
	user.api_city = apiData.city;
	$.post(base_url()+'rgv', {'user': user});
})