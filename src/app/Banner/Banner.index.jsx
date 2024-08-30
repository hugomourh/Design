import Banner from '@/app/assets/banner.png'
import Image from 'next/image'
import estilo from './Banner.module.css'

export default function Banne(props){
    return(
  <>
  <section className={props.alterarTema ? estilo['lua'] : estilo['sol']}>
  <div className={estilo.banner}>
    <Image className={estilo.imagem} src={Banner}  alt="Banner"/>
    <div className={`${estilo.titulo} ${estilo['titulo-branco']}`}>
        <p >BRANDING / UI / UX / TECNOLOGIA</p>
        <h2 className={estilo.tamanho_fonte} >Agência de Branding</h2>
        <span className={estilo.tamanho_fonte_span}>e design digital</span>
    </div>
  </div>
  </section>
  </>



    )
}