<template>
	<div>
 		<home-header/>
 		<home-div/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import DivComponent from "./div";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-div": DivComponent
	}
}
</script>

<style>
</style>
