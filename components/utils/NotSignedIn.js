const NotSignedIn = () => {
	return (
		<>
			<section class="px-3 text-center">
				<h1>Oops! You are not signed in</h1>
				<p class="lead">
					Please login or signuo through the following button to continue to this page and get a feel of our apps.
				</p>
				<p class="lead">
					<a
						href="/api/auth/login"
						class="btn btn-lg btn-secondary fw-bold border-white"
					>
						Sign In
					</a>
				</p>
			</section>
		</>
	);
};

export default NotSignedIn;
