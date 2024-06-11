import Image from 'next/image';
import clsx from 'clsx';

import { Card } from '@/app/ui/card';
import { inters, athletics, modalities } from '@/app/lib/data';

export default function Home() {
  const years = inters.map(inter => inter.year);
  const lastEdition = years[years.length - 1];
  const inter = inters.find(inter => inter.year === lastEdition)!;
  const champions = inter.standings.filter(standing => standing.rank === 1);

  return (
    <main className="flex-1 w-full max-w-xl mx-auto py-4 px-3">
      <h1 className="text-lg md:text-2xl">CAMPEÕES {lastEdition}</h1>

      <div className="py-2" />

      <div className="grid grid-cols-3 gap-2">
        {champions.map(champion => (
          <div
            key={champion.athletic.id}
            className={clsx(
              'flex flex-col items-center p-2 rounded-lg',
              { 'bg-yellow-500': champion.division === 1 },
              { 'bg-gray-400': champion.division === 2 },
              { 'bg-orange-800 text-white': champion.division === 3 }
            )}
          >
            <Image
              src={`/logos/${champion.athletic.id}.png`}
              width={50}
              height={50}
              alt={`Atlética ${champion.athletic.name} fundada em ${inter.year}`}
              className="mb-1"
            />
            <p className="text-xs md:text-base">{champion.athletic.name}</p>
            <p className="text-xs md:text-sm">{champion.division}ª divisão</p>
          </div>
        ))}
      </div>

      <div className="py-3" />

      <h1 className="text-lg md:text-2xl">MEMÓRIAS INTER</h1>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify indent-5">
        Todo evento esportivo que se preze merece ter a suas memórias guardadas!
        Com o Inter*** não deve ser diferente. É com este intuito que
        apresentamos o Memórias Inter, uma página criada por fãs que tem como
        objetivo guardar a memória esportiva, curiosidades e dados importantes
        do maior Evento Esportivo Universitário de Atléticas do Centro-Oeste!
      </p>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify indent-5">
        Vale ressaltar que este projeto está apenas iniciando, são inúmeros
        dados históricos que desejamos disponibilizar para que mais fãs dessa
        competição possam se debruçar e interpretá-los de forma dinâmica e
        simplificada.
      </p>

      <div className="py-2" />

      <p className="text-xs md:text-base text-justify">
        * Caso encontre dados inconsistentes, contate-nos pelo direct do
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
