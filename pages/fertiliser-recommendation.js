import { getSession } from "next-auth/client";
//example server side protection

export default function FertilserRecommendation({user}) {
    return(
        <div>
            <h1>Fertiliser Recommendation</h1>
            <p>Welcome {user.email}</p>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if(!session) {
        context.res.writeHead(302, { Location: '/' })
        context.res.end()
        return {}
    }

    return {
        props:{
            user: session.user
        }
    }
}