<template>
	<div id="app">
		<div class="container">
			<Nav />
			<div class="page-wrapper">
				<pageComponent />
			</div>
		</div>
	</div>
</template>
<script>
import Nav from "./components/Nav.vue";
import pageComponent from "./components/pages.vue";
export default {
	name: "App",
	components: { Nav, pageComponent },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700&display=swap");
* {
	font: sans-serif;
	box-sizing: border-box;
}
body {
	background-color: #5665a6;
	min-height: 100vh;
	display: flex;
}
nav {
	background-color: #f3f3f3;
}
body,
html,
#app,
#root {
	width: 100%;
	height: 100%;
}
#app {
	text-align: center;
}
.page-wrapper {
	padding: 70px 0 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>
