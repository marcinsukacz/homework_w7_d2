import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencieRates: {},
      myMoney: 0,
      // moneyConverted: 0,
      selectedCurrency: 0
    },
    // data: {
    //   object: {
    //     title: 'How to do lists in Vue',
    //     author: 'Jane Doe',
    //     publishedAt: '2016-04-10'
    //   }
    // },
    mounted(){
      this.getCurrencieRates()
    },
    methods: {
      getCurrencieRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencieRates => this.currencieRates = currencieRates)
      }
    },
    computed: {
      moneyConverted: function(){
        return (this.myMoney * this.selectedCurrency).toFixed(2);
      }
    }
  })



})
