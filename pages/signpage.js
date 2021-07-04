import { signIn, signOut, useSession } from "next-auth/client";

export default function Signpage() {
	const [session, loading] = useSession();

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<>
			{!session && (
				<>
					Not Signed in
					<br />
					<button onClick={signIn}>Sign In</button>
				</>
			)}
			{session && (
				<>
					Signed in as {session.user.email} <br />
					<button onClick={signOut}>Sign Out</button>
				</>
			)}
		</>
	);
}
