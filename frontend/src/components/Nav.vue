<template>
	<div id="nav">
		<nav class="navbar navbar-expand navbar-light fixed-top">
			<div id="container">
				<router-link class="navbrand" to="/">Home</router-link>
				<div class="collapse navbar-collapse">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link class="nav-link" to="/random"
								>Random</router-link
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: "Nav",
	components: {},
};
</script>
