<template>
	<div>
 		<scenic-header></scenic-header>
 		<scenic-content></scenic-content>
 		<view-list></view-list>
 		<ticket-list></ticket-list>
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import ContentComponent from "./components/content";
import ViewComponent from "./components/View";
import TicketComponent from "./components/ViewList";
export default {
   	components: {
		"scenic-header": HeaderComponent,
		"scenic-content": ContentComponent,
		"view-list": ViewComponent,
		"ticket-list": TicketComponent
   	},
   	mounted() {
   		if(this.$store.getters.shouldGetData1){
   			this.$store.dispatch("getViewInfoData");
   		}
   	}
}
</script>
<style>
</style>