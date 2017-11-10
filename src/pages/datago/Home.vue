<template>
	<div id="boss">
		<home-header></home-header>
		<nav-content></nav-content>
		<content-list></content-list>
		<home-footer></home-footer>
	</div>
</template>
<script>
	import HeaderComponent from "./header";
	import NavComponent from "./Nav";
	import contentComponent from "./list";
	import footerComponent from "./footer";
	export default {
	    components: {
			"home-header": HeaderComponent,
			"nav-content": NavComponent,
			"content-list": contentComponent,
			"home-footer" : footerComponent
	   	},
	   	
	   	mounted(){
	   		if(this.$store.getters.getDatago){
   				this.$store.dispatch("getDataInfo")
   			}
	   	}
	}
</script>

<style>
</style>