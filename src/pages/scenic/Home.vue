<template>
	<div>
 		<scenic-header></scenic-header>
 		<scenic-content></scenic-content>
 		<view-list></view-list>
 		<ticket-list></ticket-list>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ContentComponent from "./content";
import ViewComponent from "./View"
import TicketComponent from "./ViewList"
export default {
   components: {
		"scenic-header": HeaderComponent,
		"scenic-content": ContentComponent,
		"view-list": ViewComponent,
		"ticket-list": TicketComponent
   }
}
</script>
<style>
</style>