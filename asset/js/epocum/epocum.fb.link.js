//###  SDK - facebook ###


window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '506526716375279', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        } else {
        try{
                document.getElementById('Friends_suggestions').style.display = 'none';
        }catch(e){console.log('friends suggestion not present');}
		}
    });
};

// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}

// Fetch the user profile data from facebook
function getFbUserData(){
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
    function (response) {
   		wallet = document.getElementById("wallet").innerHTML;
    	socialCookie(response.id,wallet,response.email);
    	idFb = readCookie('FB_id');
    	//if (idFb != 'undefined'){
	    	var URL = "https://www.epocum.com:8888/rootbase/"+wallet+"/id/"+idFb+"/name/"+response.first_name + ' ' + response.last_name;
			console.log(URL);
		    var xmlHttp = new XMLHttpRequest();
		    xmlHttp.open( "GET", URL, false ); // false for synchronous request
		    xmlHttp.send( null );
	    //}
		getFriends();
		try{
        document.getElementById('fbLink').setAttribute("onclick","fbLogout()");
        document.getElementById('fbLink').innerHTML = 'Logout from Facebook';
        document.getElementById('fbLink').style.color = 'red';
        document.getElementById('Friends_suggestions').style.display = 'inline';
		        }catch(e){console.log('friends suggestion not present');}

        //document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.first_name + '!';
        //document.getElementById('userData').innerHTML = '<p><b>FB ID:</b> '+response.id+'</p><p><b>Name:</b> '+response.first_name+' '+response.last_name+'</p><p><b>Email:</b> '+response.email+'</p><p><b>Gender:</b> '+response.gender+'</p><p><b>Locale:</b> '+response.locale+'</p><p><b>Picture:</b> <img src="'+response.picture.data.url+'"/></p><p><b>FB Profile:</b> <a target="_blank" href="'+response.link+'">click to view profile</a></p>';
    });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="Dapp/asset_alfa/img/facebook-icon.png"  style="width:15%"/>';
        try{
        document.getElementById('Friends_suggestions').style.display = 'none';
        }catch(e){console.log('friends suggestion not present');}
		

        //document.getElementById('userData').innerHTML = '';
        //document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
    });
}


function notification(personid){

var personid = '10214521698980812';
  var address = "https://graph.facebook.com/" + personid + "/notifications";
  var tempdata = {};
  tempdata['access_token'] = appId + "|" + appSecret;
  tempdata['href'] = "";
  tempdata['template'] = "You have earned 5 credits, Click here to redeem";
  jQuery.post(address, tempdata , function(data){
      console.log(data);
  });
}


//### Messaging Fb SDK

function getFriends() {
   
    FB.api(
  '/me/friends',
  'GET',
  {"fields":"id,name,email"},
  function(response) {
  		 n=0;
  		 var friendArray = [];

         if(response.data) {
            $.each(response.data,function(index,friend) {

                //console.log(friend.name + ' has id:' + friend.id);
                try {
                
                friendArray[n] = [friend.id + '-' + friend.name];
            	myFriendsCookie(n,friendArray[n]);
            	socialNumFriendsCookie(n);
            	var friendWallet = getWalletBySocialID(friend.id,n);
            	n=n+1;
            
                document.getElementById("friendName"+n).innerHTML = friend.name;
                document.getElementById("imageId"+n).src = '//graph.facebook.com/'+friend.id+'/picture';
                //document.getElementById("friendWallet"+n).innerHTML = friendWallet;
                document.getElementById("friendDiv"+n).style.display = "block";
                } catch(e){ console.log('no field to store info on this page'); }
            });
        genDatalist();           
        } else {
            console.log(response);
        }
         
		
  }
);

}


function send_fb_payment(to) {
FB.ui({
  method: 'send',
  caption: 'Epocum- latform',
  to: to,
  message: 'I ve sent you x EPM/ETH',
  link: 'https://www.epocum.com/',
});}


function genDatalist() {

var dataList = document.getElementById('datalist');
var input = document.getElementById('ajax');
var n = readCookie('friendsNum');

for (i = 0; i <= n; i++) { 
    	friend = readCookie('Friend'+i);
    	console.log(friend);
		var option = document.createElement('option');
        option.innerHTML = friend.split('-')[1];
        //console.log(friend.split('-')[1]);
        try{
        dataList.appendChild(option);
        }catch(e){
        console.log('No tab userfriends');
        }
 }       
}

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function socialCookie(id,wallet,email) {
	createCookie('FB_id', id, 30);
	createCookie('FB_wallet', wallet, 30);
	createCookie('FB_mail', email, 30);
}

function myFriendsCookie(n,friend) {
	createCookie("Friend" + n, friend, 30);
}
function socialNumFriendsCookie(totalNum) {
	createCookie("friendsNum", totalNum, 30);
}


