ajaxCon = {
	
	READY_STATE_UNINITIALIZED: 0,
	READY_STATE_OPENED: 1,
	READY_STATE_SENT: 2,
	READY_STATE_LOADING: 3,
	READY_STATE_COMPLETE: 4,
	
	request:null,
	container: null,
	httpMethod:"GET",
	showLoaderTimer:null,
		
	readData: function(container, url)
	{
		if(!ajaxCon.initXMLHTTPRequest()) return false;	

		ajaxCon.container = document.getElementById(container);
	
		ajaxCon.request.onreadystatechange = ajaxCon.onReadyStateChangedHandler;
		
		ajaxCon.request.open(ajaxCon.httpMethod, url, true);
		
		ajaxCon.request.setRequestHeader('If-Modified-Since', 'Mon, 01 Sep 2007 00:00:00 GMT');
		
		ajaxCon.request.send(null);
		
		//ajaxCon.showLoaderTimer = setTimeout(ajaxCon.showTimeOut, 500);
		
		return true;
	},	
	
	dataRetrieved: function()
	{
		ajaxCon.container.innerHTML = ajaxCon.request.responseText;	
	},
	
	initXMLHTTPRequest: function()
	{
		try {
			ajaxCon.request = new XMLHttpRequest();	
		} catch (error)
		{
			try {
				ajaxCon.request = new ActiveXObject("Microsoft.XMLHTTP");	
			} catch (error)
			{
				// Can not create XHR-object.
				return false;
			}
		}

		return true;
	},
	
	onReadyStateChangedHandler: function(e)
	{
		
		if(ajaxCon.request.readyState == ajaxCon.READY_STATE_OPENED)
		{
			ajaxCon.container.innerHTML	= "Laddar....";
		}
		else if(ajaxCon.request.readyState == ajaxCon.READY_STATE_COMPLETE)
		{
				if(ajaxCon.request.status == 200 || ajaxCon.request.status == 304)
				{
					ajaxCon.dataRetrieved();				
				}
				else
				{
					ajaxCon.container.innerHTML = "Läsfel, status:"+ajaxCon.request.status+"<br />";	
				}
		}
	}
}
