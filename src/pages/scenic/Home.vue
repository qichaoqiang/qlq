<template>
	<div>
 		<scenic-header></scenic-header>
 		<scenic-content></scenic-content>
 		<view-list></view-list>
 		<ticket-list :ViewInfo="ViewInfo"></ticket-list>
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import ContentComponent from "./components/content";
import ViewComponent from "./components/View";
import TicketComponent from "./components/ViewList";
import axios from 'axios';
export default {
	data() {
		return {
			ViewInfo: []
		}
	},
   	components: {
		"scenic-header": HeaderComponent,
		"scenic-content": ContentComponent,
		"view-list": ViewComponent,
		"ticket-list": TicketComponent
   	},
   	methods: {
   		getViewInfoData() {
   			axios.get('static/scenic/viewList.json')
   			.then(this.handleGetDataSucc.bind(this))
   			.catch(this.handleGetDataErr.bind(this))
   		},
   		handleGetDataSucc(response) {
   			if(response.status === 200) {
   				const {data} = response.data;
   				this.ViewInfo = data.viewList;
   			}
   		},
   		handleGetDataErr(err) {
   			console.log(err);
   		}
   	},
   	mounted() {
   		this.getViewInfoData();
   	}
}
</script>
<style>
</style>