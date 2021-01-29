
import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id,params.unidad)
  const allPostsData = getSortedPostsData()
  return {
    props: {
      postData,
      allPostsData
    }
  }
}

export async function getStaticPaths() {
  const paths =  [...getAllPostIds('U4'),...getAllPostIds('U5')]
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData, allPostsData }) {
  return (
      <Layout allPostsData={allPostsData} breadcrumb={postData.title} btnTheme={'dark_mode'}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className="Titles">{postData.title}</h1>
          <br />
          <div className="Text-BreadCrumbs bodyPost" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
}  
  

