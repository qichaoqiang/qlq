<template>
	<div>
 		<home-header/>
 		<home-Div/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import DivComponent from "./div";

export default {
	components: {
		"home-header": HeaderComponent,
		"home-Div": DivComponent

	}
}
</script>

<style>
</style>
