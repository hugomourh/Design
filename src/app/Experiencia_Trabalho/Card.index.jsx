import estilo from './Experiencia.module.css'



export default function card(props){
    return(

        <div id='card' className={props.alterarTema ? estilo['lua'] : estilo['sol']}>
         <div className={estilo.bloco}>
        <p >{props.data}</p>
        <h4>{props.titulo}</h4>
        <p >{props.empresa}</p>
        <p>{props.paragrafo}</p>
      </div>
</div> 
    )
}