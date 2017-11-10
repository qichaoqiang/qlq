<template>
		<search-content/>
</template>

<script>
	import SearchComponent from './SearchList'
	export default {
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