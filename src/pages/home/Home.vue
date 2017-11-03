<template>
	<div>
 		<home-header/>
 		<weekend-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import WeenkendComponent from "./Weekend";
export default {
   components: {
		"home-header": HeaderComponent,
        "weekend-contend": WeenkendComponent
	}
}
</script>

<style>
</style>
