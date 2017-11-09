<template>
<div>
		<detail-header/>
		<detail-base/>
		<detail-comments/>
		</div>
</template>

<script>
	import  Header from "./components/Header" ;
	import  Base from "./components/Base" ;
	import  Comments from "./components/Comments" ;
	
	export default{
		data(){
			return {
				headerInfo:[],
				baseInfo:[],
				commentsInfo:[],
				evaluateInfo:[],
				openInfo:[]
			}
		},
		components: {
			"detail-header":Header,
			"detail-base":Base,
			"detail-comments":Comments		
  },
  mounted(){
  		this.$store.dispatch("getDetailInfo");

  }
	}
</script>

<style>
</style>