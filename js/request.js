(function(){
    
//     var request = require('request');
//     request('https://api.scryfall.com/cards/search?q=AetherfluxReservoir', function (error, response, body) {
//     console.log('error:', error);
//     console.log('statusCode:', response && response.statusCode);
//     console.log('body:', body);
// });

var getRandomCard = document.querySelectorAll('.getRandomCard');
var getNamedCard = document.getElementById('getNamedCard');
//var card = ""
function cardGetterRandom(){
  fetch('http://localhost:3000/card/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        imageURI=data.data.image_uris.art_crop
        //console.log(imageURI)
        document.getElementById('cardImage').src=imageURI
        //document.getElementById('aCardImage').href=imageURI
        document.body.style.backgroundImage='url('+imageURI+')';
        document.body.style.backgroundRepeat='no-repeat';
        document.body.style.backgroundSize='cover';
        document.body.style.backgroundPosition='center top';
        //document.body.style.filter='blur(5px)';
      })
      .catch((err) => console.log(err))

      
    }

function cardGetterNamed(){
  //window.location.href="?=aetherfluxreservoir"
}

  // fetch('http://localhost:3000/scryfall.js',{headers: {
  //   'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  // }})
  // .then(
  //   function(response) {
  //     if (response.status !== 200) {
  //       console.log('Looks like there was a problem. Status Code: ' +
  //         response.status);
  //       return;
  //     }

  //     // Examine the text in the response
  //     console.log(response);
  //     response.json().then(function(data) {
  //       console.log(data);
  //     });
  //   }
  // )
  // .catch(function(err) {
  //   console.log('Fetch Error :-S', err);
  // });
  // var data="";

  // const httpRequest = new XMLHttpRequest();
  // function loading(){
  //     if(!httpRequest){
  //         alert('failed');
  //         return false;
  //     }
  //     console.log('beeper');
  //     httpRequest.onreadystatechange = processRequest;
  //     httpRequest.open("GET",'http://localhost:3000/scryfall.js',true);
  //     httpRequest.send();
  // }

  // function processRequest(){
  //     if(httpRequest.readyState == XMLHttpRequest.DONE){
  //         if(httpRequest.status === 200){
  //             console.log(httpRequest.responseText);
  //             let data = JSON.parse(httpRequest.responseText);
  //             processResult(data);
  //         }else{
  //             console.log('fail');
  //         }
  //     }
  // }
  // loading(); 
  // }

getRandomCard.forEach(function(element,index){
    element.addEventListener('click',cardGetterRandom,false);
  });
  getNamedCard.addEventListener('click',cardGetterNamed,false);
  cardGetterRandom();
  
  //console.log(card)
})();