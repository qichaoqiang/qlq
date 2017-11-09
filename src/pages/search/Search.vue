<template>
		<search-content/>
</template>

<script>
	import SearchComponent from './SearchList'
	export default {
		data(){
		return {
			searchInfo:[],
			cityInfo:[]
		}
		},
		components:{
			"search-content":SearchComponent
		},
		mounted(){
			this.$store.dispatch("getSearchInfo");
		}
	}
</script>

<style>
</style>