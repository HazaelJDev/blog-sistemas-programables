import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectoryU4 = path.join(process.cwd(), 'posts\\U4')
const postsDirectoryU5 = path.join(process.cwd(), 'posts\\U5')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNamesU4 = fs.readdirSync(postsDirectoryU4)
  const fileNamesU5 = fs.readdirSync(postsDirectoryU5)
  const allPostsDataU4 = fileNamesU4.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectoryU4, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      unidad: 'U4',
      id,
      ...matterResult.data
    }
  })

  const allPostsDataU5 = fileNamesU5.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectoryU5, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      unidad: 'U5',
      id,
      ...matterResult.data
    }
  })
  // Sort posts by title
  allPostsDataU4.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })
  allPostsDataU5.sort((a, b) => {
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  })

  return [allPostsDataU4,allPostsDataU5]
}

export function getAllPostIds(uni) {
  const fileNames =  fs.readdirSync((uni ==='U4') ? postsDirectoryU4 : postsDirectoryU5)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
        unidad: (uni ==='U4') ? 'U4' : 'U5'
      }
    }
  })
}

//get data of 
export async function getPostData(id,unidad) {
  const fullPath = path.join((unidad ==='U4') ? postsDirectoryU4 : postsDirectoryU5, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}


