var EPM_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_token","type":"address"}],"name":"NewSmartToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevOwner","type":"address"},{"indexed":false,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
var EPM_contract = '0x54Ca18daa0ab4B2BA56ab321F77efbAE0D02A0CB'
var ABI = [{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getUserFromAddr","outputs":[{"name":"ipfsRoot","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"usrs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ipfs","type":"string"}],"name":"updateUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ipfs","type":"string"}],"name":"addUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_$web","type":"uint256"}],"name":"set$Web","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_newEpocum","type":"address"}],"name":"resetEpocum","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"customer","type":"address"}],"name":"countWebsite","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countAllWebsite","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"webs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isEpocum","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_smartHash","type":"bytes32"},{"name":"_dLink","type":"string"}],"name":"Accept","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"destroyUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"customer","type":"address"},{"name":"index","type":"uint256"}],"name":"getWebsite","outputs":[{"name":"website","type":"string"},{"name":"cert","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"smartCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ip","type":"string"},{"name":"website","type":"string"},{"name":"smartContract","type":"address"}],"name":"addVirtualConnection","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"$web","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isAlreadyIn","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_smartHash","type":"bytes32"}],"name":"getAcceptance","outputs":[{"name":"dLink","type":"string"},{"name":"web","type":"string"},{"name":"nConn","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countAllSmartSharingContract","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_website","type":"string"},{"name":"_target","type":"uint256"}],"name":"NewSmartSharingContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"inWebAddr","type":"address"},{"name":"x","type":"uint256"}],"name":"Certify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getUserFromId","outputs":[{"name":"ipfsRoot","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_epocum","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getSmartSharingByID","outputs":[{"name":"smartOwner","type":"address"},{"name":"smartHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"hash","type":"bytes32"}],"name":"getSmartSharingByHash","outputs":[{"name":"smartOwner","type":"address"},{"name":"smartWebsite","type":"string"},{"name":"smartHash","type":"bytes32"},{"name":"target","type":"uint256"},{"name":"ipfs","type":"string"},{"name":"numAcc","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countAllUsers","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_dLink","type":"string"}],"name":"getSmartHash","outputs":[{"name":"smartHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"myWebsite","type":"string"}],"name":"addWeb","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"countSmartSharingContract","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"ipfsRedirectLink","type":"string"},{"indexed":false,"name":"smartAd","type":"address"}],"name":"UserAcceptance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ip","type":"string"},{"indexed":false,"name":"website","type":"string"},{"indexed":false,"name":"smartContract","type":"address"}],"name":"addConnection","type":"event"}]
var contract = '0x646b65C1d946dC1168c871eCb90FCb2Aa2CD0a7d'

var lastCount = 0;
var doNothing = true;
var isActive = false;
var alreadyGen = false;
var hashLink = '';
var TotConnImported = '';
var y = 'y';
var actualNumConn = 0;
	var bool = false;
		var numAccept = 0;
	var AccContent = '';
	var smartWeb = '';

                if (typeof web3 !== 'undefined') {
                // Use Mist/MetaMask's provider
                window.web3 = new Web3(web3.currentProvider);
                
		             web3.version.getNetwork((err, netId) => {
		                switch (netId) {
		                    case "1":
		                        console.log('This is mainnet')
		                        break
		                    case "2":
		                        console.log('This is the deprecated Morden test network.')
		                        break
		                    case "3":
		                        console.log('This is the ropsten test network.')
		                        break
		                    default:
		                        console.log('This is an unknown network.')
		                }
		
		
		            })


            } else {
                console.log('No web3? You should consider trying MetaMask!');
				console.log('Now epocum will use infura implementation!');

    			var Web3 = require('web3');
    			var web3 = new Web3();
   				web3.setProvider(new web3.providers.HttpProvider("https://ropsten.infura.io/KWdoko3z2LEwyjnvEAoW"));
    			//console.log(web3);   
            }



function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function addUser(ipfsRoot) {
	
	var epocum = web3.eth.contract(ABI).at(contract);
	
	return epocum.addUser(ipfsRoot,
	 function (error, result) {
	    if (!error) {
	    
	    		HoldOn.open({
			        theme:"sk-cube-grid",
			        message:"<h5>Epocum is saving data into smartcontract ... </h5>"
			     });
		                                
			    setTimeout(function(){
			      HoldOn.close();
				  //document.getElementById("showsettingdata").style.display = "block";
				  window.location.replace("http://localhost/");
			    },15000);

	      console.log(result);
	    } else {
	      console.error(error);
	    }
	
	  })

}

function addWeb() {
	
	var epocum = web3.eth.contract(ABI).at(contract);
	
	var website = document.getElementById("web").value;
	console.log(website);
	return epocum.addWeb(website,
	 function (error, result) {
	    if (!error) {
	    
	    		HoldOn.open({ 
			        theme:"sk-cube-grid",
			        message:"<h5>Epocum is waiting for client side validation ... </h5>"
			     });
		                                
			    setTimeout(function(){
			      HoldOn.close();
				  //document.getElementById("showsettingdata").style.display = "block";
				  window.location.replace("http://localhost");
			    },15000);

	      console.log(result);
	    } else {
	      console.error(error);
	    }
	
	  })
}

function createSmartAdv() {
	
	var epocum = web3.eth.contract(ABI).at(contract);
	var website = document.getElementById("mywebsite2").value;
	var amountshare = 0;
	var token = '0x3266308bfF84c7CCB2e20E4A3558d60DCE8c72cb';
	var target = document.getElementById("target").value;
	localWallet = readCookie('EpocumWallet');
    
    if (website != '') {
    
        if (localWallet == '') {
				$('#newSmartModal').modal('hide');
				return epocum.NewSmartSharingContract(website,target,
				 function (error, result) {
				    if (!error) {
				    		
				    		HoldOn.open({
						        theme:"sk-cube-grid",
						        message:"<h5>Epocum is saving data into smartcontract ... </h5>"
						     });
					                                
						    setTimeout(function(){
						      HoldOn.close();
						    },15000);
			
				      console.log(result);
				    } else {
				      console.error(error);
				    }
				
				  })
		
		}else {
		
		var Jparse = JSON.parse(localWallet);

      	//check if a user is previously inserted in the smartcontract
      							var epocum = web3.eth.contract(ABI).at(contract);

								gasPrice = web3.eth.gasPrice;
								
								gasPriceHex = web3.toHex(gasPrice);
								gasLimitHex = web3.toHex(2500000);
						
								console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);
						
								nonce =  web3.eth.getTransactionCount('0x' + Jparse.address);
								nonceHex = web3.toHex(nonce);
								
								var pass =	document.getElementById('passwdLocal').value;
								console.log('website smart:'+website);

								var rowData = epocum.NewSmartSharingContract.getData(website, target);
						
								var privateKey = keythereum.recover(pass, Jparse);
								
								var rawTx = {
								   
									nonce: nonceHex,
								    gasLimit: gasLimitHex,
								    gasPrice: gasPriceHex,
								    to: contract,
								    from:Jparse.address,
								    value: 0*10**18,
								    data: rowData
								
								}
						
								try {
									//Retrieve private key and signed new transaction to send 
									
									const tx = new EthJS.Tx(rawTx)
									tx.sign(privateKey)
									const sTx= tx.serialize('hex')
									 
									web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
						    				if (err) { 
						    				
						    				console.log(err); 
						    				return; 
						    				}else {
												$('#newSmartModal').modal('hide');
						    				// Log the tx, you can explore status manually with eth.getTransaction()
						   					//	 console.log('web added');
												 waitingValidation()
											}
										});
						
								}
									catch (errorMessage) {
						  			console.error("Password error: " + errorMessage);
								}

		
		
		
		
		}


	}else {
	
		$('#newSmartModal').modal('hide');
		document.getElementById('infonotify').innerHTML = 'Before generating a smartcontract you need to complete the info box request, if there is something to do and to add at least on webservice.';
		$('#someIsNeed').modal('show');

	
	
	}
}


function getBigInt() {

	var epocum = web3.eth.contract(ABI).at(contract);
	return epocum.getBigInt( 
	 function (error, result) {
	    if (!error) {
	      var NoDigits = result.replace(/[0-9]/g, '');
	      var b = NoDigits.substr(NoDigits.length - 16);
	      document.getElementById("secret").value = b.toUpperCase();
	    } else {
	      console.error(error);
	    }
	
	  })

}

function countMySmartSharingContract() {
	var epocum = web3.eth.contract(ABI).at(contract);
	
	myIpfsRoot = readCookie('ipfsEpocumData');
	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
	dataSplit = data.split("!#:#!");
	wallet = dataSplit[0];

	epocum.countSmartSharingContract.call({from:wallet},	
					function (error, nS) { 

					document.getElementById("numSmart").innerHTML = nS;
					
					if (lastCount != nS){
						getAllMySmartSharingContract();
					}
					
	});
	
}

function getAllMySmartSharingContract() {
	var epocum = web3.eth.contract(ABI).at(contract);
	var SmartContent = ''
	myIpfsRoot = readCookie('ipfsEpocumData');
	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
	dataSplit = data.split("!#:#!");
	wallet = dataSplit[0];

	var a = 0;


		epocum.countAllSmartSharingContract.call({from:wallet},function (error, num) { 
			lastCount = num;

				for (v = 0; v < num; v++) { 
					console.log(v);
					epocum.getSmartSharingByID(v,	
									function (error, smartTotal) { 

												console.log(smartTotal);	
												
												smartOwner = smartTotal[0];
												smartHash = smartTotal[1];
												
												if (smartOwner == wallet) {
												
													epocum.getSmartSharingByHash(smartHash,	
																function (error, smartByHash) { 

												
												
												
													a = a + 1;
													console.log(smartHash);
													console.log(smartOwner);
													SmartContent += '<div class="col-md-4 col-sm-6">';
													SmartContent += '<div class="card card-with-shadow" style="text-align:center">';
													SmartContent += '<div class="card-block">';
													SmartContent += '<h4 id="Smart'+a +'" class="card-title" id="suggestionTitle" style="float: left;margin-top:12px; "></h4>';
													SmartContent += '<img src="Dapp/asset/img/smartcontract.svg" alt="Wallet">';
													SmartContent += '<h7 class="card-title" id="suggestionTitle"><small>Website: </small><small><a href="#" class="link-info"> '+ smartByHash[1]+'</a></small></h7>';
													SmartContent += '<br >';
													SmartContent += '<a href="#" id="'+smartByHash[2]+'" onClick="getSmartInfo(this.id);"><h7 class="card-title"><small>Open</small></h7></a>';
													SmartContent += '</div>';
													SmartContent += '</div>';
													SmartContent += '</div>';
													
													$('#populateSmartAd').html(SmartContent);
			
													//getSmartInfo(smartHash);
													
													//
													lastCount = a;
													});
											
											}
		
										
								
								});
				}
			});
}


function getAllInNetwork() {
	
	var epocum = web3.eth.contract(ABI).at(contract);
	var AccContent = '';
	var smartHash = '';
	myIpfsRoot = readCookie('ipfsEpocumData');
	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
	dataSplit = data.split("!#:#!");
	wallet = dataSplit[0];

	epocum.countAllSmartSharingContract(function (error, n) { 
	
		for (i = 0; i < n; i++) { 
	
			smartWeb = '';
			
			epocum.getSmartSharingByID(i,	
				function (error, SmartContract) { 
								
						smartHash = SmartContract[1];
						
				epocum.getAcceptance.call(smartHash,{from:wallet},
					function (error, Acceptance) { 
						console.log(Acceptance);
								
					if (Acceptance[0] == ''){
						console.log('non eseguita acceptance');											
					}else{
						
						numConn = 0;
						var numConn = httpGet("https://broadcast.epocum.io:8888/getNumConnectionsFromPost/" + Acceptance[0]);
						
						numAccept = numAccept + 1;				    	    	
						AccContent += '<div class="col-md-4 col-sm-6">';
						AccContent += '<div class="card card-with-shadow" style="text-align:center">';
						AccContent += '<div class="card-block">';
						AccContent += '<img src="Dapp/asset/img/acceptance.svg" style="width:35px;" alt="Wallet">';
						AccContent += '<h7 class="card-title"><small>'+Acceptance[1]+'</small></h7>';
						AccContent += '<br >';
						AccContent += '<h7 class="card-title"><strong>dLink</strong></h7>';
						AccContent += '<br >';
						AccContent += '<h7 class="card-title" style="font-size:x-small"><small><a href="#" id="'+Acceptance[0]+'"  onClick="getSmartHash(this.id);" class="link-info">'+Acceptance[0]+'</a></small></h7>';
						AccContent += '<br >';
						AccContent += '<h7 class="card-title"><strong>Visitors: </strong></h7>';
						AccContent += '<h5 id="visitor'+i+'" style="font-size:medium;" class="card-title" >'+numConn+'</h5>';
						AccContent += '<br >';
						AccContent += '</div>';
						AccContent += '</div>';
						AccContent += '</div>';
						$('#populateAcceptance').html(AccContent);
						document.getElementById("numAcceptance").innerHTML = numAccept;
										    		
					}

			});
		});
		}
		
	});
		
		
}

function getUserFromIndex () {
			
			try {
			  	myIpfsRoot = readCookie('ipfsEpocumData');
			  	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
			    dataSplit = data.split("!#:#!");
				var data = httpGet("https://ipfs.infura.io/ipfs/" + dataSplit[3]);
			    $("#retrymyimage").css("background-image", "url('" + data + "')");
			    $("#retrymyimage1").css("background-image", "url('" + data + "')");
			    document.getElementById("retrymyimage").style.display = 'inline';
			    document.getElementById("welcome").style.display = 'none';
			    //document.getElementById("welcome").innerHTML = 'Hey welcome back ' + dataSplit[2] + ', login to check your service connectivity status!';
			}catch(e){
				document.getElementById("getstarted1").style.display = 'block';
				document.getElementById("getstarted2").style.display = 'block';
				console.log('non esiste');
			}
}

function getUserFromSetting () {

	var epocum = web3.eth.contract(ABI).at(contract);
	return epocum.getUserFromAddr(web3.eth.coinbase,
	
	 function (error, result) {
	    if (!error) {
	    console.log(result);
		  var data = httpGet("https://ipfs.infura.io/ipfs/" + result[2]);
		  $("#retrymyimage").css("background-image", "url('" + data + "')");

		  document.getElementById("imageprofile").src = data;
		  document.getElementById("name").value = result[0];
		  document.getElementById("surname").value = result[1];
		  document.getElementById("btnDestroyUser").style.display = "inline";
		  document.getElementById("btnSaveUser").style.display = "none";
		  document.getElementById("changePhoto").style.display = "none";	

	      console.log(result);
	    } else {
	      console.error(error);
	      
	    }
	
	  })

}

function getUserFromProfile () {


	var epocum = web3.eth.contract(ABI).at(contract);
	return epocum.getUserFromAddr(web3.eth.coinbase,
	
	 function (error, result) {
	    if (!error) {
	    console.log(result);
		  var data = httpGet("https://ipfs.infura.io/ipfs/" + result[2]);
		  $("#retrymyimage").css("background-image", "url('" + data + "')");

		  document.getElementById("imageprofile").src = data;
   		  document.getElementById("name").innerHTML = result[0];
		  document.getElementById("surname").innerHTML = result[1];	  
		  //var myweb = result[3];
		  //if (myweb == '') {
		  //document.getElementById("webTab").style.display = "none";
		  //} else {
		  //document.getElementById("mywebsite").innerHTML = myweb;
		  //mywebclean = myweb.replace('http://','');
		  //mywebclean2 = mywebclean.replace('https://','');

		  //getVisitors(mywebclean2);
		  //}
		  //console.log(result);
		  getMyWeb();
	    } else {
	      console.error(error);
	      
	    }
	
	  })

}

function getUserFromIpfs () {
			
		  
		  myIpfsRoot = readCookie('ipfsEpocumData');
		  //console.log(myIpfsRoot);
		  var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
		  //console.log(data);
		  dataSplit = data.split("!#:#!");
		  //console.log(dataSplit);

		  var myPhoto = httpGet("https://ipfs.infura.io/ipfs/" + dataSplit[3]);
		  $("#retrymyimage").css("background-image", "url('" + myPhoto + "')");
		  document.getElementById("imageprofile").src = myPhoto;
   		  document.getElementById("name").innerHTML = dataSplit[1];
		  document.getElementById("surname").innerHTML = dataSplit[2];	  
		  document.getElementById("wallet").innerHTML = dataSplit[0];
		  document.getElementById("walletAddr").innerHTML = dataSplit[0];

		  //var myweb = result[3];
		  //if (myweb == '') {
		  //document.getElementById("webTab").style.display = "none";
		  //} else {
		  //document.getElementById("mywebsite").innerHTML = myweb;
		  //mywebclean = myweb.replace('http://','');
		  //mywebclean2 = mywebclean.replace('https://','');

		  //getVisitors(mywebclean2);
		  //}
		  //console.log(result);
		  
		  getMyWeb(dataSplit[0]);
	    
}

function getUserFromChart () {

		  myIpfsRoot = readCookie('ipfsEpocumData');
		  //console.log(myIpfsRoot);
		  var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
		  //console.log(data);
		  dataSplit = data.split("!#:#!");
		  console.log(dataSplit);

		  var myPhoto = httpGet("https://ipfs.infura.io/ipfs/" + dataSplit[3]);
		  $("#retrymyimage").css("background-image", "url('" + myPhoto + "')");
		  document.getElementById("imageprofile").src = myPhoto;
   		  document.getElementById("name").innerHTML = dataSplit[1];
		  document.getElementById("surname").innerHTML = dataSplit[2];	  
		  document.getElementById("wallet").innerHTML = dataSplit[0];

		  getMyWeb(dataSplit[0]);

	    
}


function getSmartInfo(smartHash) {

	var isAccepted = false;
	localWallet = readCookie('EpocumWallet');
	
	myIpfsRoot = readCookie('ipfsEpocumData');
	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
	dataSplit = data.split("!#:#!");
	wallet = dataSplit[0];

        
	var epocum = web3.eth.contract(ABI).at(contract);

	console.log(smartHash);
	
		epocum.getSmartSharingByHash(smartHash,	
			function (error, allSmartSharing) { 
			
			console.log(allSmartSharing);
			document.getElementById('acceptanceCount').innerHTML = allSmartSharing[5];
			document.getElementById('ActualWebsiteAcceptance').innerHTML = allSmartSharing[1];
			document.getElementById('smartAddr').innerHTML = allSmartSharing[2];


		});
		
		epocum.getAcceptance.call(smartHash,{from:wallet},	
			function (error, SmartContract) { 
			
				if (SmartContract[0] != ''){
				console.log('esiste');
				isAccepted = true;

							document.getElementById('alreadyAcceptedLbl').style.display = 'inline';
							document.getElementById('alreadyAccepted1').style.display = 'none';
							$('#smartData').modal('show');
							
				}else{
				
					
						if (localWallet != '') {
						console.log('password on');
						try{
								document.getElementById('alreadyAcceptedLbl').style.display = 'none';
								document.getElementById('alreadyAccepted1').style.display = 'inline';
								document.getElementById('passToSignBox').style.display = 'inline';
								$('#smartData').modal('show');
						} catch(e){
						
								document.getElementById('alreadyAcceptedLbl').style.display = 'none';
								document.getElementById('alreadyAccepted1').style.display = 'inline';
								$('#smartData').modal('show');
						}
						
						}else {
					console.log('password off');
							
							document.getElementById('alreadyAcceptedLbl').style.display = 'none';
							document.getElementById('alreadyAccepted1').style.display = 'inline';
			
							$('#smartData').modal('show');
	
					}		  
				}						  
		});

	

}


function getSmartHash(ipfsHash) {

	localWallet = readCookie('EpocumWallet');
	
	myIpfsRoot = readCookie('ipfsEpocumData');
	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
	dataSplit = data.split("!#:#!");
	wallet = dataSplit[0];

	var epocum = web3.eth.contract(ABI).at(contract);

	epocum.getSmartHash(ipfsHash,	
		function (error, smartHash) { 
			
		console.log(smartHash);

		epocum.getSmartSharingByHash.call(smartHash,{from:wallet},	
			function (error, smartTotal) { 
			
			console.log(smartTotal);

		});
		
	});

		

}



function getMyHashShareOf(smartHash) {

	localWallet = readCookie('EpocumWallet');
	
	myIpfsRoot = readCookie('ipfsEpocumData');
	var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
	dataSplit = data.split("!#:#!");
	wallet = dataSplit[0];

	var epocum = web3.eth.contract(ABI).at(contract);

	epocum.getAcceptance.call(smartHash,{from:wallet}, function (error, myIpfsHash) {
		console.log(myIpfsHash[0]);
		hashLink = myIpfsHash[0];

		})
	
	$('#shareModal').modal('show');

}



function ShareFb() {

	if (hashLink != '') {
	
	 // FB.ui({
	 //   method: 'share',
	 //   mobile_iframe: true,
	 //   href: 'https://ipfs.io/ipfs/'+hashLink,
	 // }, function(response){console.log(response);});
	console.log("https://ipfs.io/ipfs/"+hashLink);
    var fbpopup = window.open("https://www.facebook.com/sharer/sharer.php?u=" + "https://ipfs.io/ipfs/"+hashLink, "pop", "width=600, height=400, scrollbars=no");
	
	}else {
		
		$('#shareModal').modal('hide');
		document.getElementById('infonotify').innerHTML = 'Before you will able to share a webservice you need to complete the acceptance, click on the smart contract address and make accept.';
		$('#someIsNeed').modal('show');
	
	}

}


function getMyWeb (wallet) {


	var epocum = web3.eth.contract(ABI).at(contract);
	var numW;
	//console.log(wallet);
	epocum.countWebsite(wallet, function (error, numWeb) { 
		//console.log(numWeb);
		var xWeb = JSON.parse(numWeb);
		//console.log(xWeb);

		for (i = 0; i <= xWeb+1; i++) { 
				
				epocum.getWebsite(wallet,i, function (error, result) {
			    if (!error) {
					
				  var myweb = result[0];
				  //console.log(myweb);

				  if (myweb != '') {
				  //document.getElementById("webTab").style.display = "none";
				  //} else {
				  //document.getElementById("mywebsite").innerHTML = myweb;
				  try {
				  	  mywebclean = myweb.replace('http://','');
					  mywebclean2 = mywebclean.replace('https://','');
		 			 
					  var select = document.getElementById('mywebsite');
					  var el = document.createElement('option');
		      	      el.textContent = mywebclean2 ;
	        	      el.value = mywebclean2 ;
	        		  select.appendChild(el);
	
					  var select2 = document.getElementById('mywebsite2');
					  var el2 = document.createElement('option');
	        			el2.textContent = mywebclean2 ;
	        			el2.value = mywebclean2 ;
	        			select2.appendChild(el2);
	
					  getVisit();
				}catch(e){
				console.log(e);
				}
					  //SHOW web tab change with fast copy icon
					  //document.getElementById("webTab").style.display = 'block';

				  }
				  //console.log(result);
			    } else {
			      console.error(error);
			      
			    }
			
			  })
	
		}
	//document.getElementById("webTab").style.display = 'inline';
	});
		

}


function getUserFromSearch () {

		  myIpfsRoot = readCookie('ipfsEpocumData');
		  //console.log(myIpfsRoot);
		  var data = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);
		  //console.log(data);
		  dataSplit = data.split("!#:#!");
		  console.log(dataSplit);

		  var myPhoto = httpGet("https://ipfs.infura.io/ipfs/" + dataSplit[3]);
		  $("#retrymyimage").css("background-image", "url('" + myPhoto + "')");
		  document.getElementById("imageprofile").src = myPhoto;

}





function getChart (website) {

$.get("https://epocum.com:8888/getWeb/"+website, function (res) {
		
		var count = Object.keys(res).length;
		var date = [''];
		var a  = 1;
		var lastDate = '';
		var end = 0;
		
		for (i = 0; i <= count-1; i++) { 

				strData = res[i].data
				strSplit = strData.split('T');
				strDataFinal = strSplit[0];
				
				date[i] = strDataFinal;

			}
   
  	date.sort();
  	var newCount = 0;
	var arrChart = [];
	var stringArr = '';
	
    var current = null;
    var cnt = 0;

    for (var i = 0; i < date.length; i++) {
        if (date[i] != current) {
            if (cnt > 0) {

            myObj = {
    		 "x":current,
    		 "y":cnt
    		}

    		arrChart[newCount] = myObj;
            newCount++;
            }
            current = date[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {

            myObj = {
    		 "x":current,
    		 "y":cnt
    		}

        arrChart[newCount] = myObj;
        newCount++;
        
    }
    
				var tt = document.getElementById('charFigure'),
				  leftOffset = -(~~$('html').css('padding-left').replace('px', '') + ~~$('body').css('margin-left').replace('px', '')),
				  topOffset = -32;
				tt.className = 'ex-tooltip';
				document.body.appendChild(tt);
				var addData = '';
					//console.log(addData);
					
					var data = {
					  "xScale": "time",
					  "yScale": "linear",
					  "main": [
					    {
					      "className": ".connections",
					      "data":  arrChart
						 }
					  ]
					};
				
				
						var opts = {
						  "dataFormatX": function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
						  "tickFormatX": function (x) { return d3.time.format('%A')(x); },
						  "mouseover": function (d, i) {
						    var pos = $(this).offset();
						    $(tt).text(d3.time.format('%A')(d.x) + ': ' + d.y)
						      .css({top: topOffset + pos.top, left: pos.left + leftOffset})
						      .show();
						  },
						  "mouseout": function (x) {
						    $(tt).hide();
						  }
						};
						var myChart = new xChart('line-dotted', data, '#myChart', opts);                              
				
	})
	
}



function getVisit () {
	var website = document.getElementById("mywebsite").value;
	$.get("https://www.epocum.com:8888/getnumvisit/"+website, function (res) {
		//var objNvisit = JSON.parse(res);
		//var visits = objNvisit.TotConn[0].TotalVisitors;
		document.getElementById("nvisit").innerHTML = res;
	})
	
	
}

function getVisitors () {
	var website = document.getElementById("mywebsite").value;
	$.get("https://www.epocum.com:8888/getnumvisit/"+website, function (res) {
		//var objNvisit = JSON.parse(res);
		//var visits = objNvisit.TotConn[0].TotalVisitors;
		document.getElementById("nvisit").innerHTML = res;
		getChart(website);
	})
	
	
}

function getUserFromSetup () {

	var epocum = web3.eth.contract(ABI).at(contract);
	return epocum.getUserFromAddr(web3.eth.coinbase,
	
	 function (error, result) {
	    if (!error) {

		  var data = httpGet("https://ipfs.infura.io/ipfs/" + result[2]);
		  $("#retrymyimage").css("background-image", "url('" + data + "')");
		  
		  document.getElementById("name").value = result[0];
		  document.getElementById("surname").value = result[1];
		  document.getElementById("imageprofile").src = data;
		  document.getElementById("showsettingdata").style.display = "block";
		  document.getElementById("btnDestroyUser").style.display = "inline";
		  document.getElementById("btnSaveUser").style.display = "none";

		  var myweb = result[3];
		  if (myweb == '') {
		  document.getElementById("webTab").style.display = "none";
		  } else {
		  document.getElementById("webTab").style.display = "block";
		  mywebclean = myweb.replace('http://','');
		  mywebclean2 = mywebclean.replace('https://','');
		  }

		  
	      //console.log(result);
	    } else {
	      console.error(error);
	      
	    }
	
	  })

}


function deleteLocal () {

	createCookie("ipfsEpocumData", '', -1);
	createCookie("EpocumWallet", '', -1);
	window.location.href = "/";


}

function getCurrentURL () {
	console.log(window.location.href);
	return window.location.href;
}


function setPhotoEPM(name) {

	$.get("https://www.epocum.com:8888/getFriend/"+name, function (res) {
		
		//console.log(res[0].idSocial);
		document.getElementById("idFbEPM").innerHTML = res[0].idSocial;
		document.getElementById("myTransactionPhotoEPM").src = '//graph.facebook.com/'+res[0].idSocial+'/picture';
		document.getElementById("friendWalletEPM").innerHTML = res[0].wallet;
		//console.log(res);
	})
	
}

function setPhotoETH(name) {

	$.get("https://www.epocum.com:8888/getFriend/"+name, function (res) {

		document.getElementById("idFbETH").innerHTML = res[0].idSocial;
		document.getElementById("myTransactionPhotoETH").src = '//graph.facebook.com/'+res[0].idSocial+'/picture';
		document.getElementById("friendWalletETH").innerHTML = res[0].wallet;
		//console.log(res);
	})
	
}

function getWalletBySocialID(id,n) {

	$.get("https://www.epocum.com:8888/getFriendByID/"+id, function (res) {
	
		console.log(res,n);
		try{
		document.getElementById("friendWallet"+n).innerHTML = res[0].wallet;
		}catch(e){
		console.log('no div social friends');
		}

	})
	
}


function newSmartAds(myPost,pKey,fullName,coinbase,website) {
	//dalla private key e coinbase deve risire alla photo e nome completo per evitare double identity
	url="https://www.epocum.com:8888/newSmartAds/"+myPost+"/PrivateKey/"+pKey+"/name/"+fullName+"/wallet/"+coinbase+"/website/"+website;
	$.get(url, function (res) {
			console.log(res);
	})
	
}

function newTransaction(pKey,tHash,fullName,toxID,coinbase,nameTo,toxWallet,curr,amount) {
	//dalla private key e coinbase deve risalire alla photo e nome completo per evitare double identity
	$.get("https://www.epocum.com:8888/newTransaction/"+tHash+"/PrivateKey/"+pKey+"/name/"+fullName+"/toID/"+toxID+"/fromWallet/"+coinbase+"/toName/"+nameTo+"/toWallet/"+toxWallet+"/currency/"+curr+"/amount/"+amount, function (res) {
			console.log(res);
	})
	
}

function sendEPMCurrency(toWallet,amount,fromWallet,myName,idFbTo,nameTo) {
	 
	var token = web3.eth.contract(EPM_ABI).at(EPM_contract);
	  return token.transfer(toWallet,amount*10**18, function (error, result) {
	    if (!error) {
	      console.log(result);
	      newTransaction('testkey',result,myName,idFbTo,fromWallet,nameTo,toWallet,'EPM',amount)
		  waitingValidation()

	    } else {
	      console.error(error);
	   
	    }
	
	  })
	
}

function waitingValidation() {

     HoldOn.open({
        theme:"sk-cube-grid",
        message:"<h5>Epocum is waiting blockchain transaction validation</h5>"
     });
                                
    setTimeout(function(){
      HoldOn.close();
	  populateTransactionsIn();
	  populateTransactionsOut();
	  closeTransactions();
    },8000);

}

function waitingAndClose() {

     HoldOn.open({
        theme:"sk-cube-grid",
        message:"<h5>Epocum is waiting blockchain transaction validation</h5>"
     });
                                
    setTimeout(function(){
      HoldOn.close();
      $('#smartData').modal('hide');

    },4000);

}

function waitingAndGenLink() {


     HoldOn.open({
        theme:"sk-cube-grid",
        message:"<h5>Epocum is generating your decentralized link ...</h5>"
     });
     
                                
    setTimeout(function(){
      HoldOn.close();
	  $('#smartData').modal('hide');
	  smartContractAcceptanceSign();

    },4000);

}


function wait() {

	document.getElementById("ajaxETH").style.display = 'none';
	document.getElementById("ajaxEPM").style.display = 'none';	
	document.getElementById("amountETH").style.display = 'none';	
	document.getElementById("amountEPM").style.display = 'none';
	document.getElementById("loaderETH").style.display = 'block';
	document.getElementById("loaderEPM").style.display = 'block';
	document.getElementById("buttonEPM").style.display = 'none';
	document.getElementById("buttonETH").style.display = 'none';
	document.getElementById("passwdETH").style.display = 'none';
	document.getElementById("passwdEPM").style.display = 'none';
}


function define() {

		document.getElementById('passwd').style.display = 'none';
		document.getElementById('passwd').style.display = 'none';

    myLocalWallet = readCookie('EpocumWallet');
    if (myLocalWallet) {
		document.getElementById('passwd').style.display = 'inline';
		document.getElementById('passwd').style.display = 'inline';
	}


}


function prepare() {

	document.getElementById("ajaxETH").style.display = 'inline';
	document.getElementById("ajaxEPM").style.display = 'inline';	
	document.getElementById("amountETH").style.display = 'inline';	
	document.getElementById("amountEPM").style.display = 'inline';
	document.getElementById("loaderETH").style.display = 'none';
	document.getElementById("loaderEPM").style.display = 'none';
	document.getElementById("buttonEPM").style.display = 'inline';
	document.getElementById("buttonETH").style.display = 'inline';


    myLocalWallet = readCookie('EpocumWallet');
    if (myLocalWallet) {
		document.getElementById('passwdEPM').style.display = 'inline';
		document.getElementById('passwdETH').style.display = 'inline';

	}
}

//ETHSIGN- Send sign transactions with ETHER

function getNakedAddress(address) {
    return address.toLowerCase().replace('0x', '');
};

function padLeft(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

function genInputData(toAdd, value) {
	var transferHex = "0xa9059cbb";
    try {
        var value = padLeft(new BigNumber(value).times(new BigNumber(10)).toString(16), 64);
        var toAdd = padLeft(getNakedAddress(toAdd), 64);
        var data = transferHex + toAdd + value;
        return {
            isError: false,
            data: data
        };
    } catch (e) {
        return {
            isError: true,
            error: e
        };
    }
};

function sendMyToken(localWallet,pass,to,amount) {

    
        console.log(localWallet);
        var Jparse = JSON.parse(localWallet);
        console.log(Jparse.address);

		gasPrice = web3.eth.gasPrice;
		gasPriceHex = web3.toHex(gasPrice);
		gasLimitHex = web3.toHex(100000);

		console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);

		nonce =  web3.eth.getTransactionCount('0x' + Jparse.address) ;
		console.log(nonce);
		nonceHex = web3.toHex(nonce);
		console.log('nonce (transaction count on fromAccount): ' + nonce + '(' + nonceHex + ')');

		//var amount = document.getElementById('amount').value;
		//var to = document.getElementById('to').value;
		console.log('amount : ' + amount);
		console.log('to : ' + to);
		var amountsetted = amount * 100000000000000000;
		var privateKey = keythereum.recover(pass, Jparse);
		inputData = genInputData(to, amountsetted);
		
		var rawTx = {
    		nonce: nonceHex,
    		gasPrice: gasPriceHex,
    		gasLimit: gasLimitHex,
    		to: EPM_contract,
    		from: '0x' + Jparse.address.toString('hex'),
    		value: '0x00',
    		data: inputData.data
		};

		try {
			//Retrieve private key and signed new transaction to send 
			
			const tx = new EthJS.Tx(rawTx)
			tx.sign(privateKey)
			const sTx= tx.serialize('hex')
			console.log(sTx.toString('hex'));
			
			web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
    				if (err) { console.log(err); return; }

    				// Log the tx, you can explore status manually with eth.getTransaction()
   						 console.log('Sent:  ' + hash);
				});

		}
			catch (errorMessage) {
  			console.error("Password error: " + errorMessage);
		}

}


function sendMyEth(localWallet,pass,to,amount) {

        console.log(localWallet);
        var Jparse = JSON.parse(localWallet);
        console.log(Jparse.address);

		gasPrice = web3.eth.gasPrice;
		gasPriceHex = web3.toHex(gasPrice);
		gasLimitHex = web3.toHex(100000);

		console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);

		nonce =  web3.eth.getTransactionCount('0x' + Jparse.address) ;
		console.log(nonce);
		nonceHex = web3.toHex(nonce);
		console.log('nonce (transaction count on fromAccount): ' + nonce + '(' + nonceHex + ')');
		console.log('amount: '+amount);
		
		var epocum = web3.eth.contract(ABI).at(contract);
		var newData = epocum.addWeb.getData('webtest');

		var privateKey = keythereum.recover(pass, Jparse);
		
		var rawTx = {
		   
			nonce: nonceHex,
		    gasLimit: gasLimitHex,
		    gasPrice: gasPriceHex,
		    to: to,
		    from:Jparse.address,
		    value: amount*10**18
		}

		try {
			//Retrieve private key and signed new transaction to send 
			
			const tx = new EthJS.Tx(rawTx)
			tx.sign(privateKey)
			const sTx= tx.serialize('hex')
			console.log(sTx.toString('hex'));
			
			
			//$.getJSON('https://api.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=0x'+sTx.toString('hex')+'&apikey=2P4DXVI9PHT9TH5RSAPIW7WWNBQEZZ2EK7', function (data) {
   			//		 var contractABI = "";
    		//		contractABI = JSON.parse(data.result);
    		//		if (contractABI != ''){
        	//				console.log("result2 : " + result);
   			//		 } else {
       		//				 console.log("Error" );
    		//}            
			//	});
//var token = '2P4DXVI9PHT9TH5RSAPIW7WWNBQEZZ2EK7';

//$.ajax({
				        			//url: 'https://kovan.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=0x' + sTx.toString('hex') + '&apikey=' + token,
				       			    //beforeSend: function(xhr) {
				        			//}, success: function(hash){
				           		 	//	
				           		 	//	console.log('Sent:  ' + hash);
   						 			//	myName = document.getElementById("name").innerHTML + ' ' + document.getElementById("surname").innerHTML;
            			 			//		idFbTo = document.getElementById("idFbETH").innerHTML;
						 			//		toName = document.getElementById("ajaxETH").value;
						 			//	console.log('testkey', hash, myName, idFbTo, '0x'+Jparse.address, toName, to, 'ETH', amount);
   						 			//	newTransaction('testkey', hash, myName, idFbTo, '0x'+Jparse.address, toName, to, 'ETH', amount);
						 			//	waitingValidation()


														
				        			//	}
									//})

			 console.log(sTx.toString('hex'));
			 
			web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
    				if (err) { 
    				
    				console.log(err); 
    				return; 
    				}else {

    				// Log the tx, you can explore status manually with eth.getTransaction()
   						 console.log('Sent:  ' + hash);
   						 myName = document.getElementById("name").innerHTML + ' ' + document.getElementById("surname").innerHTML;
            			 idFbTo = document.getElementById("idFbETH").innerHTML;
						 toName = document.getElementById("ajaxETH").value;
						 console.log('testkey', hash, myName, idFbTo, '0x'+Jparse.address, toName, to, 'ETH', amount);
   						 newTransaction('testkey', hash, myName, idFbTo, '0x'+Jparse.address, toName, to, 'ETH', amount);
						 waitingValidation()
					}
				});

		}
			catch (errorMessage) {
  			console.error("Password error: " + errorMessage);
		}

}

////END ETHSIGN

function smartWebSign() {

      	localWallet = readCookie('EpocumWallet');
        console.log(isActive);
   if (isActive != false) {
        
        if (localWallet !== '') {

       							 var Jparse = JSON.parse(localWallet);

      	//check if a user is previously inserted in the smartcontract
      							var epocum = web3.eth.contract(ABI).at(contract);

								gasPrice = web3.eth.gasPrice;
								gasPriceHex = web3.toHex(gasPrice);
								gasLimitHex = web3.toHex(1000000);
						
								console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);
						
								nonce =  web3.eth.getTransactionCount('0x' + Jparse.address);
								nonceHex = web3.toHex(nonce);
								
								var website = document.getElementById("web").value;
								var pass =	document.getElementById('passwd').value;
						
								var rowData = epocum.addWeb.getData(website);
						
								var privateKey = keythereum.recover(pass, Jparse);
								
								var rawTx = {
								   
									nonce: nonceHex,
								    gasLimit: gasLimitHex,
								    gasPrice: gasPriceHex,
								    to: contract,
								    from:Jparse.address,
								    value: 0*10**18,
								    data: rowData
								
								}
						
								try {
									//Retrieve private key and signed new transaction to send 
									
									const tx = new EthJS.Tx(rawTx)
									tx.sign(privateKey)
									const sTx= tx.serialize('hex')
									 
									web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
						    				if (err) { 
						    				
						    				console.log(err); 
						    				return; 
						    				}else {
												$('#addWebModal').modal('hide');
						    				// Log the tx, you can explore status manually with eth.getTransaction()
						   					//	 console.log('web added');
												 waitingValidation()
											}
										});
						
								}
									catch (errorMessage) {
						  			console.error("Password error: " + errorMessage);
								}
								
		}else {
							$('#addWebModal').modal('hide');
							addWeb();
		
		}

	}else {
	
		$('#addWebModal').modal('hide');
		document.getElementById('infonotify').innerHTML = 'Before insert a webservice you need to complete the info box request, if there is something to do before. Like activate your account.';
		$('#someIsNeed').modal('show');

	}

}


function smartCheckUser() {
	
        var epocum = web3.eth.contract(ABI).at(contract);
	    localWallet = readCookie('EpocumWallet');
        
        if (localWallet !== '') {

		        var Jparse = JSON.parse(localWallet);
		
		      	return epocum.getUserFromAddr('0x'+Jparse.address,
			
					 function (error, result) {
					    if (!error) {
					    	if (result == ''){
					    	
					    		//request password to sign this user in the smart contract
					    		
					    			isActive = false;
					    	        $('#providePassword').modal('show');
					    	  
		
					    	}else{console.log('gia in');isActive = true;}				  
					    } else {
					      console.error(error);
					      
					    }
				
				  })

		}else {
				
				myIpfsRoot = readCookie('ipfsEpocumData');
				
				var dataRoot = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);

		  		rootSplit = dataRoot.split("!#:#!");
		  	    wallet = rootSplit[0];
		 		console.log(wallet);
				return epocum.getUserFromAddr(wallet,
				
					 function (error, result) {
					    if (!error) {
					    	if (result == ''){
					    		
					    			isActive = false;

					    		//With plugin metamask
					    			addUser(myIpfsRoot);
					    	
					    				
					    	}else{console.log('gia in');isActive = true;}				  
					    } else {
					      console.error(error);
					      
					    }
				
				  })

		
		}

}


function easyCheckUser() {
	
        var epocum = web3.eth.contract(ABI).at(contract);
	    localWallet = readCookie('EpocumWallet');
        
        if (localWallet !== '') {

		        var Jparse = JSON.parse(localWallet);
		
		      	return epocum.getUserFromAddr('0x'+Jparse.address,
			
					 function (error, result) {
					    if (!error) {
					    	if (result == ''){
					    	
					    		//request password to sign this user in the smart contract
					    		
					    			isActive = false;
					    	  
		
					    	}else{console.log('gia in');isActive = true;}				  
					    } else {
					      console.error(error);
					      
					    }
				
				  })

		}else {
				
				myIpfsRoot = readCookie('ipfsEpocumData');
				
				var dataRoot = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);

		  		rootSplit = dataRoot.split("!#:#!");
		  	    wallet = rootSplit[0];
		 		//console.log(wallet);
				return epocum.getUserFromAddr(wallet,
				
					 function (error, result) {
					    if (!error) {
					    	if (result == ''){
					    		
					    			isActive = false;

					    		//With plugin metamask
					    	
					    				
					    	}else{console.log('gia in');isActive = true;}				  
					    } else {
					      console.error(error);
					      
					    }
				
				  })

		
		}

}


function smartAddUser() {

        localWallet = readCookie('EpocumWallet');
		ipfsRoot = readCookie('ipfsEpocumData');
			
		if (localWallet !== '') {
		
		        var Jparse = JSON.parse(localWallet);
		      	var epocum = web3.eth.contract(ABI).at(contract);
		
				gasPrice = web3.eth.gasPrice;
				gasPriceHex = web3.toHex(gasPrice);
				gasLimitHex = web3.toHex(1500000);
		
				console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);
		
				nonce =  web3.eth.getTransactionCount('0x' + Jparse.address);
				nonceHex = web3.toHex(nonce);
				
				var pass =	document.getElementById('passwdProvided').value;
				
				var rowData = epocum.addUser.getData(ipfsRoot);
		
				var privateKey = keythereum.recover(pass, Jparse);
				
				var rawTx = {
				   
					nonce: nonceHex,
				    gasLimit: gasLimitHex,
				    gasPrice: gasPriceHex,
				    to: contract,
				    from:Jparse.address,
				    value: 0*10**18,
				    data: rowData
				
				}
		
				try {
					//Retrieve private key and signed new transaction to send 
					
					const tx = new EthJS.Tx(rawTx)
					tx.sign(privateKey)
					const sTx= tx.serialize('hex')
		
					 console.log(sTx.toString('hex'));
					 
					web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
		    				if (err) { 
		    				
		    				console.log(err); 
		    				return; 
		    				}else {
		
		    				// Log the tx, you can explore status manually with eth.getTransaction()
		   						 console.log('Sent:  ' + hash);
								 waitingValidation()
							}
						});
		
				}
					catch (errorMessage) {
		  			console.error("Password error: " + errorMessage);
				}
				
		}else {
		
			addUser(ipfsRoot)
		
		}

}

function preCheckUser() {

        var epocum = web3.eth.contract(ABI).at(contract);
	    localWallet = readCookie('EpocumWallet');
        
        if (localWallet !== '') {
				
				document.getElementById('isLocal').style.display = 'block';

		        var Jparse = JSON.parse(localWallet);
		
		      	return epocum.getUserFromAddr('0x'+Jparse.address,
			
					 function (error, result) {
					    if (!error) {
					    	if (result == ''){
					    	
					    			isActive = false;

					    		console.log(result);
					    		
					    	       document.getElementById("accountInfo").style.display = "block";
					    	    
		
					    	}else{
					    	//console.log('gia in');
					    	isActive = true;
					    	//document.getElementById("activateMe").style.display = "none";
							}				  
					    } else {
					      console.error(error);
					      
					    }
				
				  })

		}else {
				
				myIpfsRoot = readCookie('ipfsEpocumData');
				
				var dataRoot = httpGet("https://ipfs.infura.io/ipfs/" + myIpfsRoot);

		  		rootSplit = dataRoot.split("!#:#!");
		  	    wallet = rootSplit[0];
		 		//console.log(wallet);
				return epocum.getUserFromAddr(wallet,
				
					 function (error, result) {
					    if (!error) {
					    	if (result == ''){
					    		
					    		
					    		isActive = false;
					    			document.getElementById("accountInfo").style.display = "block";
					    		
					    				
					    	}else{
					    	//console.log('gia in');
					    	isActive = true;
}				  
					    } else {
					      console.error(error);
					      
					    }
				
				  })

		
		}

}




function smartContractAcceptanceSign() {

	SmartHash = document.getElementById("smartAddr").innerHTML;

	var web =	document.getElementById('ActualWebsiteAcceptance').innerHTML;

      	localWallet = readCookie('EpocumWallet');
   
	if (isActive != false) {    
	 
        if (localWallet !== '') {

       							 var Jparse = JSON.parse(localWallet);

      	//check if a user is previously inserted in the smartcontract
      							var epocum = web3.eth.contract(ABI).at(contract);

								gasPrice = web3.eth.gasPrice;
								gasPriceHex = web3.toHex(gasPrice);
								gasLimitHex = web3.toHex(1000000);
						
								console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);
						
								nonce =  web3.eth.getTransactionCount('0x' + Jparse.address);
								nonceHex = web3.toHex(nonce);
								
								var pass =	document.getElementById('passwdToSign').value;
							
						    	var privateKey = keythereum.recover(pass, Jparse);
						    	
								genIpfsPage = '';
								
								genIpfsPage += '<html>';
								genIpfsPage += '<head>';
								
								console.log("https://epocum.com:8888/getMeta/" + web);
														
							  	var srcMeta = httpGet("https://epocum.com:8888/getMeta/" + web );
							  	
							  	console.log(srcMeta);
							  	
								if (srcMeta == '"Meta invalid"') {
									genIpfsPage += '<meta property="og:url" content="http://'+ web +'" />';
									genIpfsPage += '<meta property="og:type" content="'+ web +'" />';
									genIpfsPage += '<meta name="twitter:card" content="summary">';
									genIpfsPage += '<meta name="twitter:title" content="'+ web +'">';
								}else{
								genIpfsPage += srcMeta;
								
								}
								
								
								console.log(srcMeta);
								
							    genIpfsPage += ' <script src="https://www.epocum.com/web3/bignumber.min.js"type = "text/javascript"></script>';
								genIpfsPage += ' <script src="https://www.epocum.com/web3/web3.min.js"type = "text/javascript"></script>';
								genIpfsPage += ' <script src="https://www.epocum.com/web3/id.js"type = "text/javascript"></script>';
								genIpfsPage += ' <script src="https://www.epocum.com/web3/jquery-3.2.1.min.js"type = "text/javascript"></script>';
							    genIpfsPage += ' <script>';			
							    //genIpfsPage += ' var Web3 = require("web3");';
								//genIpfsPage += ' var web3 = new Web3();';
								//genIpfsPage += ' web3.setProvider(new web3.providers.HttpProvider("https://broadcast.epocum.io"));';
								//genIpfsPage += ' var shh = web3.shh;';
								//genIpfsPage += ' kp = shh.newKeyPair();';
								//genIpfsPage += ' privKey = shh.getPrivateKey(kp);';
								//genIpfsPage += ' pubKey = shh.getPublicKey(kp);';
								//genIpfsPage += ' topic = shh.newMessageFilter({ privateKeyId: kp });';
							    //genIpfsPage += ' setTimeout(function(){';
							    
							    genIpfsPage += ' var ipfsLocationUrl = document.location.href;';
							    genIpfsPage += ' var ipfsLocationUrl = ipfsLocationUrl.replace("https://ipfs.io/ipfs/","");';
							    genIpfsPage += ' url="https://broadcast.epocum.io:8888/connectivity/' + web + '" + "epocumunder" + ipfsLocationUrl + "epocumunder" + b;';
							    genIpfsPage += ' 	$.get(url, function (res) {';
								genIpfsPage += ' 			console.log(res);';
								genIpfsPage += ' 	});';
								
							    //genIpfsPage += ' var message = web3.toHex("' + website + '" + "#!#" + ipfsLocationUrl + "#!#" + b);';
							    //genIpfsPage += ' shh.post({';
								//genIpfsPage += ' 	pubKey: pubKey,';
								//genIpfsPage += ' 	ttl: 10,';
								//genIpfsPage += ' 	payload: message,';
								//genIpfsPage += ' 	powTime: 3,';
								//genIpfsPage += ' 	powTarget: 0.5';
								//genIpfsPage += ' }, function(err,res){';
								//genIpfsPage += ' console.log(res);';
								//genIpfsPage += ' console.log(topic);';
								//genIpfsPage += ' url="https://broadcast.epocum.io:8888/filter/"+topic.filterId;';
								//genIpfsPage += ' 	$.get(url, function (res) {';
								//genIpfsPage += ' 			console.log(res);';
								//genIpfsPage += ' 	});';
								genIpfsPage += ' window.location = "http://' + web + '";';
								//genIpfsPage += ' });';
								//genIpfsPage += ' }, 500);';
								genIpfsPage += ' </script>';
							    genIpfsPage += ' </head>';
								genIpfsPage += ' </html>';

							
								ipfs.add(genIpfsPage, function(err, resHash) {

								    	console.log(resHash);
								    	
										var rowData = epocum.Accept.getData(SmartHash, resHash);
		
										var rawTx = {
										   
											nonce: nonceHex,
										    gasLimit: gasLimitHex,
										    gasPrice: gasPriceHex,
										    to: contract,
										    from:Jparse.address,
										    value: 0*10**18,
										    data: rowData
										
										}
								
										try {
											//Retrieve private key and signed new transaction to send 
											
										
											const tx = new EthJS.Tx(rawTx)
											tx.sign(privateKey)
											const sTx= tx.serialize('hex')
											 
											web3.eth.sendRawTransaction('0x' + sTx.toString('hex'), (err, hash) => {
								    				if (err) { 
								    				
								    				console.log(err); 
								    				return; 
								    				}else {
								
								    				// Log the tx, you can explore status manually with eth.getTransaction()
								   					//	 console.log('web added');
														 waitingAndClose();
													}
												});
								
										}
											catch (errorMessage) {
								  			console.error("Password error: " + errorMessage);
										}
									
								})

					}else {
					
										//with metamask
									genIpfsPage = '';

									genIpfsPage += '<html>';
									genIpfsPage += '<head>';
									
									console.log("https://epocum.com:8888/getMeta/" + web);
															
								  	var srcMeta = httpGet("https://epocum.com:8888/getMeta/" + web );
								  	
								  	console.log(srcMeta);
								  	
									if (srcMeta == '"Meta invalid"') {
										genIpfsPage += '<meta property="og:url" content="http://'+ web +'" />';
										genIpfsPage += '<meta property="og:type" content="'+ web +'" />';
										genIpfsPage += '<meta name="twitter:card" content="summary">';
										genIpfsPage += '<meta name="twitter:title" content="'+ web +'">';
									}else{
									genIpfsPage += srcMeta;
									
									}
									
									
									console.log(srcMeta);
									
									genIpfsPage += ' <script src="https://www.epocum.com/web3/bignumber.min.js"type = "text/javascript"></script>';
									genIpfsPage += ' <script src="https://www.epocum.com/web3/web3.min.js"type = "text/javascript"></script>';
									genIpfsPage += ' <script src="https://www.epocum.com/web3/id.js"type = "text/javascript"></script>';
									genIpfsPage += ' <script src="https://www.epocum.com/web3/jquery-3.2.1.min.js"type = "text/javascript"></script>';
								    genIpfsPage += ' <script>';			
								    //genIpfsPage += ' var Web3 = require("web3");';
									//genIpfsPage += ' var web3 = new Web3();';
									//genIpfsPage += ' web3.setProvider(new web3.providers.HttpProvider("https://broadcast.epocum.io"));';
									//genIpfsPage += ' var shh = web3.shh;';
									//genIpfsPage += ' kp = shh.newKeyPair();';
									//genIpfsPage += ' privKey = shh.getPrivateKey(kp);';
									//genIpfsPage += ' pubKey = shh.getPublicKey(kp);';
									//genIpfsPage += ' topic = shh.newMessageFilter({ privateKeyId: kp });';
								    //genIpfsPage += ' setTimeout(function(){';
								    
								    genIpfsPage += ' var ipfsLocationUrl = document.location.href;';
								    genIpfsPage += ' var ipfsLocationUrl = ipfsLocationUrl.replace("https://ipfs.io/ipfs/","");';
								    genIpfsPage += ' url="https://broadcast.epocum.io:8888/connectivity/' + web + '" + "epocumunder" + ipfsLocationUrl + "epocumunder" + b;';
								    genIpfsPage += ' 	$.get(url, function (res) {';
									genIpfsPage += ' 			console.log(res);';
									genIpfsPage += ' 	});';
									
								    //genIpfsPage += ' var message = web3.toHex("' + website + '" + "#!#" + ipfsLocationUrl + "#!#" + b);';
								    //genIpfsPage += ' shh.post({';
									//genIpfsPage += ' 	pubKey: pubKey,';
									//genIpfsPage += ' 	ttl: 10,';
									//genIpfsPage += ' 	payload: message,';
									//genIpfsPage += ' 	powTime: 3,';
									//genIpfsPage += ' 	powTarget: 0.5';
									//genIpfsPage += ' }, function(err,res){';
									//genIpfsPage += ' console.log(res);';
									//genIpfsPage += ' console.log(topic);';
									//genIpfsPage += ' url="https://broadcast.epocum.io:8888/filter/"+topic.filterId;';
									//genIpfsPage += ' 	$.get(url, function (res) {';
									//genIpfsPage += ' 			console.log(res);';
									//genIpfsPage += ' 	});';
									genIpfsPage += ' window.location = "http://' + web + '";';
									//genIpfsPage += ' });';
									//genIpfsPage += ' }, 500);';
									genIpfsPage += ' </script>';
								    genIpfsPage += ' </head>';
									genIpfsPage += ' </html>';

								
								ipfs.add(genIpfsPage, function(err, resHash) {
									
									AcceptanceWithMetamask(resHash);
									console.log(resHash);
									})
									
					}

	}else {
	
		$('#smartData').modal('hide');
		document.getElementById('infonotify').innerHTML = 'Before accepting a smartcontract sharing you need to complete the info box request, if there is something to do like activate or charge your account.';
		$('#someIsNeed').modal('show');
	
	
	}

}


function AcceptanceWithMetamask(ipfsHash) {

	var epocum = web3.eth.contract(ABI).at(contract);

	SmartHash = document.getElementById("smartAddr").innerHTML;
	var ipfsLink = document.getElementById('ipfsLink').innerHTML;
	
	return epocum.Accept(SmartHash, ipfsHash, { from: web3.eth.coinbase},

	 function (error, result) {
	    if (!error) {
	      console.log(result);
	      //document.getElementById('response').innerHTML = result;
	    } else {
	      console.error(error);
	    }
	
	  })

}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

function getCode() {
	code1 = "&lt;!--LINK--&gt&lt;script src='https://www.epocum.com/epocum.js'&gt&lt;/script&gt&lt;script&gtepocum('";
	code1 += web3.eth.accounts[0];
	code1 += "')&lt;/script&gt&lt;!--LINK--&gt";
	document.getElementById("precode").innerHTML = code1;
	document.getElementById("precode").style.visibility = 'visible';
	copyToClipboard('#precode');
}

//###  NOTIFICATION - google browser ###

// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Epocum', {
      icon: 'asset/img/logo.png',
      body: "Notification System and framework activated !",
    });

    notification.onclick = function () {
      window.open("http://www.epocum.com/profile");      
    };
    
  }

}


//CREATE WALLET
function generateMyWallet() {
		
			var params = { keyBytes: 32, ivBytes: 16 };
			var dk = keythereum.create(params);
			
			var password = document.getElementById('password').value;
			var kdf = "scrypt"; // or "scrypt" to use the scrypt kdf
			var options = {
			    kdf: "scrypt",
			    cipher: "aes-128-ctr",
			    kdfparams: {
			        c: 262144,
			        dklen: 32,
			        prf: "hmac-sha256"
			    }
			};
			
			// CREATE synchronous KEYOBJECT
			var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);
			
			//console.log(keyObject);
			
			var json = JSON.stringify(keyObject);
			//console.log(json);
			// this is a test to return to the old object 'keyObject' from json);
			var objWallet = jQuery.parseJSON(json);
			document.getElementById('generatedWallet').innerHTML = json;
			console.log(objWallet);
			// END TEST
			var blob = new Blob([json], {type: "application/json"});
			var url  = URL.createObjectURL(blob);
			outfile = "UTC--" + new Date().toISOString() + "--" + keyObject.address;
			document.getElementById('addr').innerHTML = '0x'+keyObject.address;
			//GENERATE LINK TO STORE CLIENT-SIDE
			var a = document.createElement('a');
			a.download    = outfile;
			a.href        = url;
			a.textContent = "Download wallet";
			
			document.getElementById('addrDnld').appendChild(a);


	        setTimeout(function() {
				document.getElementById('loader').style.display = 'none';
				document.getElementById('addr').style.display = 'block';
				document.getElementById('addrDnld').style.display = 'block';
				document.getElementById('buttonGen').style.display = 'none';
				document.getElementById('buttonGetStarted').style.display = 'block';
				HoldOn.close();
				document.getElementById('tellMore0').style.display = 'block';
				document.getElementById('tellMore1').style.display = 'block';
				alreadyGen = true;
	
				 }, 3000);
	
}

function hideBefore() {

		if (alreadyGen !== true) {
		
			document.getElementById('password').style.display = 'none';
			document.getElementById('loader').style.display = 'block';
			document.getElementById('notePass').style.display = 'none';
			document.getElementById('infoStart').style.display = 'none';
			
				HoldOn.open({
	                theme: "sk-cube-grid",
	                message: "<h5>Epocum is generating your local wallet</h5>"
	            });


			setTimeout(function() {
				
				generateMyWallet();
			 }, 500);

	}

			
}

function checkIfNothing() {

    localWallet = readCookie('EpocumWallet');
 	myIpfsRoot = readCookie('ipfsEpocumData');
 
         if (localWallet == null && myIpfsRoot == null) {
         	console.log('Genera account');       
         	$('#generateAccount').modal('show');
         	
         	if (typeof web3 !== 'undefined') {
				
				document.getElementById('onMetamask').style.display = 'block';
				document.getElementById('offMetamask').style.display = 'none';
				try {
				if (web3.eth.coinbase == null) {
	         		document.getElementById('addrMetamask').innerHTML = 'Unlock your metamask and reload the page please';
	         		document.getElementById('buttonReload').style.display = 'block';
	         		document.getElementById('buttonGen').style.display = 'none';
	         	} else {
	         		document.getElementById('addr').innerHTML = web3.eth.coinbase;
	         		document.getElementById('addrMetamask').innerHTML = web3.eth.coinbase;
	         		document.getElementById('buttonGen').style.display = 'none';
	         		document.getElementById('buttonGetStarted').style.display = 'block';
	         		document.getElementById('tellMore0').style.display = 'block';
					document.getElementById('tellMore1').style.display = 'block';
	         	}
	         	}catch(e){

	         		document.getElementById('buttonGen').style.display = 'block';
	         		document.getElementById('buttonGetStarted').style.display = 'none';
	         		document.getElementById('offMetamask').style.display = 'block';
         	
	         	}
         	
         	} else {
         	
				document.getElementById('offMetamask').style.display = 'none';

         	}
         	
         	doNothing = true;

         } else {
         	doNothing = false;
			getUserFromIpfs();

         }

}

function addUserProfile() {
    
        var canvas = document.getElementById('imageCanvas');
        var fullQuality = canvas.toDataURL('image/jpeg', 1.0);
        
        console.log(fullQuality);
		
		HoldOn.open({
	        theme: "sk-cube-grid",
	        message: "<h5>Epocum is generating your local wallet</h5>"
	    });

        ipfs.add(fullQuality, function(err, resHash) {
        
        	if (resHash != 'QmQAuEYzApDXTTKSJP249Gn8GgJ9CqVsY3tCjLqUHK6DDG') { //se immagine non nera
	            addRemainData(resHash);
	        }else {
	        	addRemainData('QmR6Z7sFxFVsnL5EDjtCBp7nEhZXnpwDpaksSUkMqraPme'); //setta immagine user default
	        }
        });
    
}

function addRemainData(ipfsPhotoHash) {

        var lifeString = document.getElementById('addr').innerHTML + '!#:#!' + document.getElementById('nameReg').value + '!#:#!' + document.getElementById('surnameReg').value + '!#:#!' + ipfsPhotoHash;           
		console.log(lifeString);
		
 		ipfs.add(lifeString, function(err, resHash) {
			
			genWallet = document.getElementById('generatedWallet').innerHTML;
					    
		    storeData(resHash);
		    storeWallet(genWallet);
		    
  			window.location.href = "/";

        });
        
}

function setBackup() {

		    localWallet = readCookie('EpocumWallet');
		    
		try{
		
			var blob = new Blob([localWallet], {type: "application/json"});
			var url  = URL.createObjectURL(blob);
			outfile = "UTC--" + new Date().toISOString() + "--" + keyObject.address;
			document.getElementById('addr').innerHTML = '0x'+keyObject.address;
			//GENERATE LINK TO STORE CLIENT-SIDE
			var a = document.createElement('a');
			a.download    = outfile;
			a.href        = url;
			a.textContent = "Backup";
			
			document.getElementById('backup').appendChild(a);
		}catch(e){ console.log('wallet metamask');}

}

function storeData(hash) {
	createCookie('ipfsEpocumData', hash, 30);
}

function storeWallet(wallet) {
	createCookie('EpocumWallet', wallet, 30);
}

