import Image from 'next/image';
import { Card } from '@/app/ui/card';

import { inters, athletics, modalities } from '@/app/lib/data';

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-xl mx-auto py-4 px-3">
      <h1 className="text-lg md:text-2xl">MEMÓRIAS INTER</h1>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify">
        Todo evento esportivo que se preze merece ter a suas memórias guardadas!
        Com o Inter*** não deve ser diferente. É com este intuito que
        apresentamos o Memórias Inter, uma página criada por fãs que tem como
        objetivo guardar a memória esportiva, curiosidades e dados importantes
        do maior Evento Esportivo Universitário de Atléticas do Centro-Oeste!
      </p>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify">
        Vale ressaltar que este projeto está apenas iniciando, são inúmeros
        dados históricos que desejamos disponibilizar para que mais fãs dessa
        competição possam se debruçar e interpretá-los de forma dinâmica e
        simplificada.
      </p>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify">
        Nesse primeiro momento, começamos por todas as classificações gerais e
        comissões organizadoras de cada edição, além do ano de fundação de cada
        atlética. Utilize o menu acima para navegar entre os dados.
      </p>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify">
        *Caso encontre dados inconsistentes, contate-nos pelo direct do
        Instagram:&nbsp;
        <a
          href="https://www.instagram.com/memoriasinter/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E66E25] underline"
        >
          @memoriasinter
        </a>
        .
      </p>

      <div className="py-4" />

      <div className="grid grid-cols-4 gap-2 p-2 rounded-md bg-[#E66E25]">
        <Card data={inters.length} description="Edições" />
        <Card data={athletics.length} description="Atléticas" />
        <Card data={modalities.length} description="Modalidades" />
        <Card data="∞" description="Memórias" />
      </div>

      <div className="py-4" />

      <Image
        src="/resenha-liga.jpg"
        width={5012}
        height={3341}
        className="rounded-md"
        alt="Representantes das atléticas reunidos na Resenha da Liga Inter 2023."
      />
    </main>
  );
}
