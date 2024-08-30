'use client'
import { useState } from "react";
import Topo from "./Topo/Topo.index";
import Banner from "./Banner/Banner.index";
import Experiencia from "./Experiencia_Trabalho/Experiencia_trab.index";
import Roda_pe from "./Roda_pe/Roda_pe.index";
export default function Home(props) {


  const [alterarTema, setAlterarTema] = useState (false)

    function trocarTemaPagina() {
      setAlterarTema(!alterarTema)
    }


  return (
   <>
   <Topo  trocarTemaPagina={trocarTemaPagina} alterarTema={alterarTema}/>
   <Banner  alterarTema={alterarTema}/>
   <Experiencia  alterarTema={alterarTema}/>
   <Roda_pe  alterarTema={alterarTema}/>
   </>

  
  );
}
