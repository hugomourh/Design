import Image from 'next/image'
import Logo from '@/app/assets/logo.png'
import Facebook from '@/app/assets/facebook.png'
import Google from '@/app/assets/google-plus.png'
import Linkedin from '@/app/assets/linkedin.png'
import X from '@/app/assets/twitter.png'
import Dribble from '@/app/assets/dribble.png'
import Behance from '@/app/assets/behance.png' 
import estilo from './Roda_pe.module.css'

export default function Roda_pe(props){
    return(
        <>
        <div className={props.alterarTema ? estilo['lua'] : estilo['sol']}>
        <div className={estilo.roda_pe}>
        <div>
      <Image src={Logo} alt='Logo' />
      <p className={estilo.roda_pe_descricao}>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
</p>
        </div>

        <div className={estilo.bloco_imagem}>
        <Image className={estilo.imagem} src={Facebook} />
        <Image className={estilo.imagem} src={Google}/>
        <Image className={estilo.imagem} src={Linkedin}/>
        <Image className={estilo.imagem} src={X}/>
        <Image className={estilo.imagem} src={Dribble} />
        <Image className={estilo.imagem} src={Behance} />
    

        </div>

        <p>Todos os direitos de imagem reservados.</p>
        
        </div>
        </div>
        </>
    )
}