export const singleBlog = `query MyQuery ($blogSlug: string) {
  blog(where: {slug: $blogSlug}) {
    content
    id
    slug
    title
    images {
      url
    }
  }
}`