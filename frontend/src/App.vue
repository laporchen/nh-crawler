<template>
	<div id="app">
		<div class="container">
			<button :onclick="getRandom">GetRandom</button>
			<div :v-model="id" class="godNumber">{{ id }}</div>
			<div class="row">
				<img
					class="col col-md-6 image"
					referrerpolicy="no-referrer"
					v-for="(image, index) in images"
					:src="image"
					:key="index"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
const blacklist = [
	"snuff",
	"eye penetration",
	"cum in eye",
	"vore",
	"piss drinking",
	"ear fuck",
	"gyaru-oh",
	"smegma",
	"necrophilia",
	"guro",
	"bbm",
	"males only",
	"yaoi",
];
export default {
	name: "App",
	components: {},
	data() {
		return {
			images: [],
			id: null,
		};
	},
	methods: {
		async getRandom() {
			const url = "http://localhost:3000/random";
			const response = await axios.get(url);
			if (response.status === 200) {
				const tags = response.data.details.tags;
				blacklist.forEach((element) => {
					if (tags.includes(element)) {
						console.log("This no gud");
						return;
					}
				});
				this.id = response.data.id;
				this.images = response.data.pages;
			}
		},
	},
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
#root,
.auth-wrapper {
	width: 100%;
	height: 100%;
}
#app {
	text-align: center;
}
.auth-wrapper {
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: left;
}
.auth-inner {
	max-height: 80%;
	width: 600px;
	margin: auto;
	background-color: #fff;
	box-shadow: 0px 14px 80px #ccc rgba(0, 0, 0, 0.5);
	padding: 20px;
	border-radius: 15px;
	overflow: scroll;
}
.auth-wrapper .form-control:focus {
	box-shadow: none;
}
.auth-wrapper h3 {
	text-align: center;
	margin: 0;
	line-height: 1;
	padding-bottom: 20px;
}
.custom-control-label::before {
	font-weight: 400;
}

.image {
	padding: 10px;
}
.godNumber {
	color: white;
	font-size: large;
}
</style>
