<template>
	<div >
		<home-header/>
		<home-footer  @change="change"/>
		<div class="footer-one" ref="vanish">
			<home-mask class="mask"/>
		</div>
		
	</div>
	
</template>

<script>
	import HeaderComponent from "./header";
	import FooterComponent from "./footer";
	import MaskComponent from "./mask";
	


	export default {
	    components: {
			"home-header": HeaderComponent,
				"home-footer": FooterComponent,
			"home-mask": MaskComponent
			
	   },
	   methods:{
	   	change: function(){
	   		
	   		
	   		if(this.$refs.vanish.style.display=="none"){
	   			this.$refs.vanish.style.display="block"
	   		}else{
	   			this.$refs.vanish.style.display="none"
	   		}
	   		
	   		
	   	}
	   }
	}
</script>

<style>
 .html{
 	position: relative;
 	
 }
 .footer-one{
  display: none;
 	position: fixed;
 	top: 0;
		height: 100%;
		width: 100%;
 }
 
</style>