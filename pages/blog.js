import { createClient } from "contentful"
import BlogCard from '../components/BlogCard';

export default function BlogsList({blogsList}) {
    /* console.log(blogsList) */
    return(
        <div className="blogs-list">
            <section className="breadcrumbs">
				<div className="container">
					<ol>
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>Blog</li>
					</ol>
					<h2>Blog</h2>
				</div>
			</section>
            {blogsList.map(blog => (
                /* add blog card to manage blogs greatly */
                <BlogCard key={blog.sys.id} blog={blog} />
            ))}
        </div>
    )
}

export async function getStaticProps(){
    const client = createClient({
        space: process.env.ATC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.ATC_CONTENTFUL_ACCESS_TOKEN
    })

    const res = await client.getEntries({
        content_type: 'blogPost'
    })

    return {
        props: {
            blogsList : res.items,
            revalidate: 1000
        }
    }
}