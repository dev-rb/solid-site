import { createResource } from 'solid-js';
import { RouteDataFunc } from '@solidjs/router';
import { articleList } from './index.data';

const fetchBlogMarkdown = async (slug: string) => (await fetch(`/articles/${slug}.md`)).text();

const BlogArticleData: RouteDataFunc = (props) => {
    const [article] = createResource(() => props.params.slug, fetchBlogMarkdown);
    return {
        get loading() {
            return article.loading;
        },
        get details() {
            return articleList[props.params.slug];
        },
        get article() {
            return article();
        },
    };
};

export default BlogArticleData;