// for getting single items


const allBlogs = `query allBlogsQuery { 
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