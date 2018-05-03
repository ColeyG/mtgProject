var myApp = {
    vm : new Vue({
        el : "#app",
        data : {
            name : "Hello World!",
            results : [],
            imageLink : '',
            pool : [],
            goodCards : 0
        },
        methods : {
            getCard: function (event) {
                axios.get('https://api.scryfall.com/cards/random').then(response => {
                this.results.push(response.data)
                this.name = response.data.name
                this.imageLink = response.data.image_uris.border_crop
                var layout = response.data.layout;
                if(layout=='normal'||layout=='saga'||layout=='split'||layout=='leveler'||layout=='flip'){this.pool.push(response.data.name);this.goodCards++;}else {console.log(response.data.layout);}
              })
            },
            getSpecCard : function (event) {
                var card=document.getElementById('nameIn').value;
                card=card.toLowerCase().replace(/ /g,'');
                console.log(card);
                axios.get('https://api.scryfall.com/cards/named?exact='+card).then(response => {
                this.results = response.data
                this.name = response.data.name
                this.imageLink = response.data.image_uris.border_crop
                var layout = response.data.layout;
                if(layout=='normal'||layout=='saga'||layout=='split'||layout=='leveler'||layout=='flip'){this.pool.push(response.data.name);this.goodCards++;}else {console.log(response.data.layout);}
              })
            }
        }
    })
}

for(i=0;i<500;i++){
    myApp.vm.getCard();
}
// myApp.vm.getCard();