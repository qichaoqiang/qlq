<template>
	<div class="view-box" @scroll="xxx">
		<ul class="view-list">
			<li class="view-detail" v-for="content in contents">
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				contents: [1,2,3,4]
			}
		},
		methods: {
			xxx: function() {
				console.log(1);
			}
		}
	}
</script>

<style>
	
</style>