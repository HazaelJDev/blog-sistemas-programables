
import Layout from '../../components/layout'
//import Date from '../../components/date'
//import utilStyles from '../../styles/utils.module.css'
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
      <Layout allPostsData={allPostsData} breadcrumb={postData.title}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className="Titles">{postData.title}</h1>
          <div className="Text-BreadCrumbs" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
}  
  

