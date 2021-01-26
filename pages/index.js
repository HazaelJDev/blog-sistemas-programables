import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { useEffect } from 'react'
//import Date from '../components/date'
//import utilStyles from '../styles/utils.module.css'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home allPostsData={allPostsData} btnTheme={'dark_mode'}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="Text-BreadCrumbs">{`El microcontrolador ejecuta el programa cargado en la memoria Flash. Esto se
          denomina el código ejecutable y está compuesto por una serie de ceros y unos,
          aparentemente sin significado. Dependiendo de la arquitectura del microcontrolador, el código binario está compuesto por palabras de 12, 14 o 16
          bits de anchura. Cada palabra se interpreta por la CPU como una instrucción a ser
          ejecutada durante el funcionamiento del microcontrolador. Todas las instrucciones
          que el microcontrolador puede reconocer y ejecutar se les denominan
          colectivamente Conjunto de instrucciones. Como es más fácil trabajar con el
          sistema de numeración hexadecimal, el código ejecutable se representa con
          frecuencia como una serie de los números hexadecimales denominada código
          Hex. En los microcontroladores PIC con las palabras de programa de 14 bits de
          anchura, el conjunto de instrucciones tiene 35 instrucciones diferentes.`}
        </p>
        <br />
        <p className="Text-BreadCrumbs">{`La operación de escritura, utilizando los puertos puede ser realizada por cualquiera de ellos, no
            obstante, el puerto PO es el que presenta una mayor cargabilidad, permitiendo comandar ocho
            cargas TTL - LS, mientras que los otros tres permiten cuatro cargas TTL – LS.
            Para comandar cargas de mayor consumo energético, como relés, se recomienda utilizar, entre el
            puerto y la carga drivers no inversores. Para la operación de
            ESCRITURA en el puerto, la instrucción más habitual es la siguiente:
            MOV PX , <dato> ; PX<- dato.
            X toma valores 0, 1, 2 y 3 según el puerto.
            Admitiendo <dato> todos los tipos de direccionamiento.
            Si se necesita activar o desactivar un bit de un puerto ( se puede hacer extensivo a todos los
            registros direccionales bit a bit del SFR), puede hacerlo utilizando las instrucciones booleanas.`}
        </p>
      </section>
    </Layout>
  )
}

