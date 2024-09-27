const allBlogs = `query MyQuery {
  blogs {
    title
    id
    slug
    content
    releaseDate
    images {
      fileName
      url
    }
  }
}`