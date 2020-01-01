var tog = true;

var myApp = {
    vm : new Vue({
        el : "#app",
        data : {
            name : "Magic Cards",
            results : [],
            imageLink : '',
            pool : [],
            goodCards : 0,
            contPos : "contBox",
            cardClarity : "cardImage"
        },
        methods : {
            getCard: function (event) {
                tog = false;
                axios.get('https://api.scryfall.com/cards/random').then(response => {
                this.results.push(response.data)
                this.name = response.data.name
                this.imageLink = response.data.image_uris.normal
                var layout = response.data.layout;
                if(layout=='normal'||layout=='saga'||layout=='split'||layout=='leveler'||layout=='flip'){this.pool.push(response.data.name);this.goodCards++;}else {console.log(response.data.layout);}
                this.contPos = "contBoxMove";
                this.cardClarity = "cardImageClear";
              })
            },
            getSpecCard : function (event) {
                tog = false;
                var card=document.getElementById('nameIn').value;
                card=card.toLowerCase().replace(/ /g,'');
                console.log(card);
                axios.get('https://api.scryfall.com/cards/named?exact='+card).then(response => {
                this.results = response.data
                this.name = response.data.name
                this.imageLink = response.data.image_uris.normal
                var layout = response.data.layout;
                if(layout=='normal'||layout=='saga'||layout=='split'||layout=='leveler'||layout=='flip'){this.pool.push(response.data.name);this.goodCards++;}else {console.log(response.data.layout);}
                this.contPos = "contBoxMove";
                this.cardClarity = "cardImageClear";
              })
            },
            getLoopCard: function (event) {
                axios.get('https://api.scryfall.com/cards/random').then(response => {
                this.results.push(response.data)
                this.name = response.data.name
                this.imageLink = response.data.image_uris.small
                var layout = response.data.layout;
                if(layout=='normal'||layout=='saga'||layout=='split'||layout=='leveler'||layout=='flip'){this.pool.push(response.data.name);this.goodCards++;}else {console.log(response.data.layout);}
              })
            }
        }
    })
}

function cardCycle() {
    if (tog) {
        myApp.vm.getLoopCard();
        setTimeout(cardCycle, 1000);
    }
}

window.onload = cardCycle();