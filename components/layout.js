import Head from 'next/head'
import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Hazael Jiménez'
export const siteTitle = 'Sistemas Programables'

export default function Layout({ children, home, allPostsData}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sistemas Programables unidad 4 y unidad 5"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="contLayout">
        <div className="layout">
          <nav className="NavMenu">
            <header className="titleMenu">
              <img className="avatar" src="https://res.cloudinary.com/hazadev01/image/upload/v1609907719/microcontroladores_lymjpl.jpg" alt="imgMateria" />
              <h1 className="TitleMateria">Sistemas Programables</h1>
            </header>
            <section class="Menus">
              <menu class="cardMenu">
                <h2 class="UnidadTitle">Unidad 4.- Programación de Microcontroladores.</h2>
                <ul>
                  {allPostsData[0].map(({id,title,unidad}) => (
                    <li className="Text-BreadCrumbs" key={id}>
                      <Link href={`/${unidad}/${id}`}>
                        <a>{title}</a>
                      </Link>
                      <br />
                    </li>
                  ))}
                </ul>
              </menu>
              <menu class="cardMenu">
                <h2 class="UnidadTitle">Unidad 5.- Puertos y buses de comunicación para microcontroladores.</h2>
                <ul>
                  {allPostsData[1].map(({ id,title,unidad}) => (
                    <li className="Text-BreadCrumbs" key={id}>
                      <Link href={`/${unidad}/${id}`}>
                        <a>{title}</a>
                      </Link>
                      <br />
                    </li>
                  ))}
                </ul>
              </menu>
            </section>
          </nav>
          <main className="contContenido">
            <nav className="navContenido">
              <div className="">breadcrumbs</div>
              <button className="">dark</button>
            </nav>
            <section className="contenido">
              <main>{children}</main>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
