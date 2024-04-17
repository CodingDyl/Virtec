useClient;
import { PortableText } from '@portabletext/react';
import { useClient } from 'sanity';

function FullBlogPost({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            <PortableText value={post.body} />
        </div>
    );
}