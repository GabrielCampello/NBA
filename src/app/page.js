import Titulo from "@/components/Titulo";

export default function Home() {
   return (
    <>

      <nav className="bg-slate-900 p-4">

        <h1 className="text-3xl font-bold uppercase text-white">FIAP Filmes
        
        </h1>

      </nav>

      <Titulo texto="TIMES DE BASQUETEBOL"/>
      <Titulo texto="West"/>
      <Titulo texto="East"/>
      <Titulo texto="Highlights da semana"/>

    </>
  );
}
