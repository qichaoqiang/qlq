<template>
<div>
		<detail-header/>
		<detail-base/>
		<detail-comments/>
		<detail-mpticket/>
		</div>
</template>

<script>
	import  Header from "./components/Header" ;
	import  Base from "./components/Base" ;
	import  Comments from "./components/Comments" ;
	import Mpticket from "./components/Mpticket"
	
	export default{
		components: {
			"detail-header":Header,
			"detail-base":Base,
			"detail-comments":Comments,	
			"detail-mpticket":Mpticket
  },
  mounted(){
  		this.$store.dispatch("getDetailInfo");

  }
	}
</script>

<style>
</style>