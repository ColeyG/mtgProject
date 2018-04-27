var myApp = {
    vm : new Vue({
        el : "#app",
        data : {
            name : "Hello World!",
            results : [],
            imageLink : ''
        },
        methods : {
            getCard: function (event) {
                axios.get('https://api.scryfall.com/cards/random').then(response => {
                this.results.push(response.data)
                this.name = response.data.name
                this.imageLink = response.data.image_uris.small
              })
            },
            getSpecCard : function (event) {
                var card=document.getElementById('nameIn').value;
                card=card.toLowerCase().replace(/ /g,'');
                console.log(card);
                axios.get('https://api.scryfall.com/cards/named?exact='+card).then(response => {
                this.results = response.data
                this.name = response.data.name
                this.imageLink = response.data.image_uris.small
              })
            }
        }
    })
}

// for(i=0;i<90;i++){
//     myApp.vm.getCard();
// }
myApp.vm.getCard();