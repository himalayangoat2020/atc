import Link from 'next/link';

const NotSignedIn = () => {
	return (
		<>
			<section className="px-3 text-center">
				<h1>Oops! You are not signed in</h1>
				<p className="lead">
					Please login or signuo through the following button to continue to this page and get a feel of our apps.
				</p>
				<p className="lead">
					<Link
						href="/api/auth/login"
						className="btn btn-lg btn-secondary fw-bold border-white"
					>
						<a>Sign In</a>
					</Link>
				</p>
			</section>
		</>
	);
};

export default NotSignedIn;
