$(function(){
    
    var active = true;
    
    $.ajax({
	url: 'ajax.html',
	type: 'GET',
	async: false,
	success: function(data) {
	    //$('.qr-code').hide();
	    $('.ajax-modal').append(data);
	    eoymodal();
	    }
    });
    
    
    function eoymodal() {
	 // define an enddate for this script
    var enddate=new Date();
    enddate.setFullYear(2015,0,1);
    
    // define a date when to switch behaviour 
    var switchdate=new Date();
    switchdate.setFullYear(2014,11,30);
    
    var today = new Date();
    if (active === true) {
	if (switchdate>today) {
        // until today is switchdate show 3 random options
        switch (Math.floor(Math.random()*3)) {
        case 0:
          console.log(0);
          $('.eoy-donate-img').attr('src',"image1.jpg");
          $('.eoy-donate').attr("href", "https://link.to/donate1")
          break;
        case 1:
          console.log(1);
          $('.eoy-donate-img').attr('src',"image2.jpg");
          $('.eoy-donate').attr("href", "https://link.to/donate2")
          break;
        case 2:
          console.log(2);
          $('.eoy-donate-img').attr('src',"image3.jpg");
          $('.eoy-donate').attr("href", "https://https://link.to/donate3")
          break;
        default:
          console.log("default");
          $('.eoy-donate-img').attr('src',"image-default.jpg");
          $('.eoy-donate').attr("href", "https://link.to/donate-default")
        }
    } else {
        // after passing switchdate do this
        $('.eoy-donate-img').attr('src',"image-last-minute.jpg");
        $('.eoy-donate').attr("href", "https://link.to/donate-last-minute")
    }
  
    // If the cookie does not exist show modal & set a cookie with expiration time
    if (($.cookie('YEmodal') == null) && (enddate>today)) {
            $('#fundraisemodal').modal('show');
            var expiryDate = new Date();
            if (switchdate>today) {
                // until today is switchdate set cookie expiration to number of hours
                var hours = 6; 
            } else {
                // after passing switchdate set cookie expiration to new frequency
                var hours = 1; // 1
            }
            // set cookie 
            expiryDate.setTime(expiryDate.getTime() + (hours * 3600 * 1000));
            $.cookie("YEmodal", "false", { path: '/', expires: expiryDate });
       } 
    }
    }
    
   
    });