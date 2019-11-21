<template>
<div class="qr-code-wrapper">
  <form @submit.prevent="createQr">
    <input required type="text" v-model="webUrl" :placeholder="placeholderText">
    <button type="submit" @click="createQr">Generate QR</button> 
    <button v-if="showQr" class="clear-qr" @click="clearQr">Clear</button> 
  </form>
  <transition name="slide-fade">
    <img v-show="showQr" class="qr-code-img" :src="finalUrl">
  </transition>
</div>
</template>
<script>
export default {
  name: 'qrCodeGenerator',
  props: {

  },
  data() {
    return {
      webUrl:"",
      finalUrl:"",
      showQr:false,
      placeholderText:"Your website url",
    };
  },
  methods:{
    createQr(){
      if(this.webUrl != ''){
        let apiUrl = "https://www.qrtag.net/api/qr_8.png?url=";
        this.finalUrl = apiUrl + this.webUrl;
        this.showQr = true;
      }
      else{
        this.placeholderText = "Please add your url";
      }
    },
    clearQr(){
      this.showQr=false;
      this.webUrl ="";
    }
  }
};

</script>