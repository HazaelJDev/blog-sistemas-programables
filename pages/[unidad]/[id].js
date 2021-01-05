
import Layout from '../../components/layout'
//import Date from '../../components/date'
//import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id,params.unidad)
  return {
    props: {
      postData
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

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
}  
  

