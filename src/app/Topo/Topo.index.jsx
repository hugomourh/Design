
import Image from "next/image"
import LogoM from '@/app/assets/logo.png'
import estilo from './Topo.module.css'
import { BsSun, BsMoon } from "react-icons/bs";

export default function Topo(props){
    
  


    return(
   <>
   
   <header >
                <div className={props.alterarTema ? estilo['lua'] : estilo['sol']}>
                    <div className={estilo.bloco}>
                    <Image src={LogoM} alt="logo M" />
                    <button className={estilo.icone} onClick={props.trocarTemaPagina}>
                        {props.alterarTema ? <BsMoon /> : <BsSun />}
                    </button>
                    </div>
                </div>
            </header>
   
   
   </>



    )
}