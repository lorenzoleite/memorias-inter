'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TiArrowUp } from 'react-icons/ti';
import { TiArrowDown } from 'react-icons/ti';

import { inters } from '@/app/lib/data';

export default function Standings() {
  const [selectedYear, setSelectedYear] = useState<string>('2024');
  const [selectedDivision, setSelectedDivision] = useState<number>(1);

  const years = inters.map(inter => inter.year);
  const inter = inters.filter(inter => inter.year === selectedYear)[0];
  const standings = inter.standings.filter(standing => {
    if (!standing.division) return inter.standings;
    return standing.division === selectedDivision;
  });

  function hasPoints(): boolean {
    for (const standing of standings) {
      if (standing.points) return true;
    }
    return false;
  }

  function hasDivision(): boolean {
    for (const standing of standings) {
      if (standing.division) return true;
    }
    return false;
  }

  return (
    <main className="flex-1 w-full max-w-xl mx-auto py-4 px-3">
      <h1 className="text-lg md:text-2xl">CLASSIFICAÇÕES GERAIS</h1>

      <div className="py-2" />

      <div className="flex gap-2">
        <select
          name="year"
          onChange={e => setSelectedYear(e.target.value)}
          value={selectedYear}
          className="block w-full text-sm md:text-base text-center mx-auto rounded-sm duration-300 cursor-pointer bg-[#E5E7EB] hover:bg-gray-300 focus:outline-black"
        >
          {years
            .map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))
            .reverse()}
        </select>

        {hasDivision() && (
          <>
            <select
              name="division"
              onChange={e => setSelectedDivision(Number(e.target.value))}
              value={selectedDivision}
              className="block w-full text-sm md:text-base text-center mx-auto rounded-sm duration-300 cursor-pointer bg-[#E5E7EB] hover:bg-gray-300 focus:outline-black"
            >
              <option key={1} value={1}>
                1ª divisão
              </option>
              <option key={2} value={2}>
                2ª divisão
              </option>
              <option key={3} value={3}>
                3ª divisão
              </option>
            </select>

            <div className="py-2" />
          </>
        )}
      </div>

      <div className="py-2" />

      <table className="w-full text-center text-sm md:text-base">
        <thead>
          <tr>
            <th className="py-1 px-2 text-left">#</th>
            <th className="py-1 px-2 text-left">Atlética</th>
            {hasPoints() && <th className="py-1 px-2">Pontos</th>}
          </tr>
        </thead>

        {standings.map((standing, index) => {
          return (
            <tbody key={index}>
              <tr className="border-b-2 border-gray-200">
                <td className="flex items-center gap-1 py-1 px-2 text-left">
                  {standing.rank}
                  {hasDivision() && (
                    <>
                      {standing.division === 1 &&
                        [14, 15, 16].includes(standing.rank) && (
                          <TiArrowDown className="text-red-600" />
                        )}
                      {standing.division === 2 && (
                        <>
                          {[1, 2, 3].includes(standing.rank) && (
                            <TiArrowUp className="text-green-700" />
                          )}
                          {[15, 16].includes(standing.rank) && (
                            <TiArrowDown className="text-red-600" />
                          )}
                        </>
                      )}
                      {standing.division === 3 &&
                        [1, 2].includes(standing.rank) && (
                          <TiArrowUp className="text-green-600" />
                        )}
                    </>
                  )}
                </td>
                <td className="py-1 px-2 text-left">
                  <div className="flex items-center gap-4 md:gap-6">
                    <Image
                      key={standing.athletic.id}
                      src={`/logos/${standing.athletic.id}.png`}
                      width={30}
                      height={30}
                      alt={`Atlética ${standing.athletic.name} fundada em ${inter.year}`}
                    />
                    <p>{standing.athletic.name}</p>
                  </div>
                </td>
                {standing.points && (
                  <td className="py-1 px-2">{standing.points}</td>
                )}
              </tr>
            </tbody>
          );
        })}
      </table>
    </main>
  );
}
