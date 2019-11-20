<template>
  <div class="currency-conveter">
  <p class="fromCurrency">1</p>
 <select v-model="countrySelectValue">
   <option v-for="countries in countriesList">{{countries.id}}</option>
  </select>
  <p class="fromCurrency">=</p>
  <p class="results" v-for="result in conversionResults.results">{{result.val}}</p>
  <p class="fromCurrency">INR</p>
 <button @click="getCurrencyRate">CONVERT</button>
</div>
</template>
<script>
export default {
  name: 'currencyConverter',
  props: {
   
  },
  data() {
    return {
      countriesList:[],
      countrySelectValue:"USD",
      conversionResults:[]
    };
  },
  methods:{
    loadCountries(){
      let apiUrl = "https://free.currconv.com/api/v7/currencies?apiKey=";
      let apiKey = "99079bc8268414d2969b";
      let finalUrl = apiUrl + apiKey;
      fetch(finalUrl)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(data => this.countriesList = data.results)
    },
    getCurrencyRate(){
      let fromCurrency = this.countrySelectValue;
      let toCurrency = "INR";
      let apiUrl = "https://free.currconv.com/api/v7/convert?apiKey=";
      let apiKey = "99079bc8268414d2969b";
      let finalUrl = apiUrl + apiKey + '&q=' + fromCurrency + '_' + toCurrency;
      console.log(finalUrl);
      fetch(finalUrl)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    });
                }
            })
            .then(data => this.conversionResults = data)
    }
  },
  created(){
    this.loadCountries();
    //this.loadData();
  }
};

</script>