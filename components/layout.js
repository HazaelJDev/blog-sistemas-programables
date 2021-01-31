import Head from 'next/head'
import {useState, useEffect} from 'react';
import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useTheme } from "next-themes"

const name = 'Hazael Jiménez'
export const siteTitle = 'Sistemas Programables'

export default function Layout({ children, home, allPostsData, breadcrumb}) {
  const [darkMode, setDarkMode] = useState('dark_mode');
  const [menu, setMenu] = useState('menu');
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleDarkMode = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light")
      setDarkMode( theme === "dark" ? 'dark_mode' : 'light_mode')
    }
  }

  const handleMenu = () => {
    setMenu(menu === 'menu' ? 'close' : 'menu')
  }

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      
      setDarkMode(window.localStorage.getItem('theme') == 'dark' ? 'light_mode' : 'dark_mode')
    

      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
       <div className="contLayout">
        <div className="layout">
          {/* Movil Design - Header*/}
          { windowSize.width < 1024 &&
            <header className="titleMenuMovil">
              <button className="activeFocusElements buttonPadding" aria-label="Menu" onClick={handleMenu}><span class="material-icons md-48 text-darkShades-500">{menu}</span></button>
              <Link href="/"><a className="TitleMateria" tabIndex="0">Sistemas Programables</a></Link>
              <button className="activeFocusElements buttonPadding" aria-label="Dark Mode" onClick={handleDarkMode}><span class="material-icons md-48 text-lightShades-700 dark:text-lightAccents-500">{darkMode}</span></button>
            </header>          
          }
          <nav className={`NavMenu ${windowSize.width < 1024 ? (menu !== 'close' ? 'hidden' : 'grid') : 'grid'}`}>
            {/* Desktop Design - Header*/}
            { windowSize.width >= 1024 &&
              <header className="titleMenu">
                <img className="avatar" src="https://res.cloudinary.com/hazadev01/image/upload/v1609907719/microcontroladores_lymjpl.jpg" alt="imgMateria" />
                <Link href="/"><a className="TitleMateria" tabIndex="0">Sistemas Programables</a></Link>
              </header>
            }
            <section class="Menus">
              <menu class="cardMenu">
                <h2 class="UnidadTitle">Unidad 4.- Programación de Microcontroladores.</h2>
                <ul>
                  {allPostsData[0].map(({id,title,unidad}) => (
                    <li className="Text-BreadCrumbs" key={id}>
                      <Link href={`/${unidad}/${id}`}>
                        { windowSize.width <= 1024 
                          ? <a onClick={handleMenu} className={`activeFocusElements ${breadcrumb !== undefined ? (id === breadcrumb.substring(0,3)) ? 'itemLink activeLink':'itemLink' : 'itemLink'}`}>{title}</a> 
                          : <a className={`activeFocusElements ${breadcrumb !== undefined ? (id === breadcrumb.substring(0,3)) ? 'itemLink activeLink':'itemLink' : 'itemLink'}`}>{title}</a> 
                        }
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
                        { windowSize.width <= 1024 
                          ? <a onClick={handleMenu} className={`activeFocusElements ${breadcrumb !== undefined ? (id === breadcrumb.substring(0,3)) ? 'itemLink activeLink':'itemLink' : 'itemLink'}`}>{title}</a> 
                          : <a className={`activeFocusElements ${breadcrumb !== undefined ? (id === breadcrumb.substring(0,3)) ? 'itemLink activeLink':'itemLink' : 'itemLink'}`}>{title}</a> 
                        }
                      </Link>
                      <br />
                    </li>
                  ))}
                </ul>
              </menu>
            </section>
          </nav>
          <main className="contContenido">
            {/* Nav con Breadcrumbs y DarkMode Desktop*/}
            { windowSize.width >= 1024 &&
              <nav className="navContenido">
                <div className="Text-BreadCrumbs" aria-label="Breadcrumbs">{breadcrumb !== undefined ? `Home > Unidad ${breadcrumb[0]} > ${breadcrumb}` : 'Home'}</div>
                <button className="activeFocusElements buttonPadding" aria-label="Dark Mode" onClick={handleDarkMode}><span class="material-icons md-48 text-lightShades-700 dark:text-lightAccents-500">{darkMode}</span></button>
              </nav>
            }
            <section className="contenido">
              <main>{children}</main>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
