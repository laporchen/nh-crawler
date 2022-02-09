<template>
	<div id="nav">
		<div class="container">
			<nav id="navbar" class="navbar navbar-dark bg-dark navbar-expand fixed-top">
				<a class="navbar-brand" href="#"> NH-Crawler </a>
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<button class="btn btn-primary btn-block" @click="changeView(2)">
							Two-Page
						</button>
					</li>
					<li class="nav-item">
						<button
							class="btn btn-primary btn-block"
							@click="this.changeView(1)"
						>
							One-Page
						</button>
					</li>
					<li class="nav-item">
						<button class="btn btn-primary btn-block" :onclick="getRandom">
							GetRandom
						</button>
					</li>
					<li class="nav-item">
						<form v-on:submit.prevent="getInput">
							<input
								class="input"
								type="number"
								v-model="number"
								placeholder="Sauce Number"
								required
							/>
							<button class="btn btn-primary btn-block">Go</button>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	name: "Nav",
	components: {},
	data() {
		return {
			number: null,
		};
	},
	methods: {
		getRandom() {
			this.$store.dispatch("setRandom");
		},
		getInput() {
			this.$store.dispatch("setPages", this.number);
		},
		changeView(view) {
			console.log(view);
			this.$store.dispatch("setView", view);
		},
	},
	watch: {
		randomNumber: function () {
			this.number = this.randomNumber;
		},
	},
	computed: {
		...mapGetters({
			randomNumber: "getId",
		}),
	},
};
</script>
<style>
.btn,
.input {
	margin-left: 5px;
}
.navbar-brand {
	font-size: 1.5em;
	padding: 5px;
}
#navbar {
	width: 100%;
}
</style>
