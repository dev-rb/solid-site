import { createResource } from 'solid-js';
import { RouteDataFunc } from 'solid-start';
import { articleList } from './index.data';

const fetchBlogMarkdown = async (slug: string) => (await fetch(`/articles/${slug}.md`)).text();

const BlogArticleData: RouteDataFunc = (props) => {
    const [article] = createResource(() => { console.log(props.params.slug); return props.params.slug }, fetchBlogMarkdown);
    // console.log("Articles: ")
    // fetchBlogMarkdown(props.params.slug).then((val) => console.log(val))
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