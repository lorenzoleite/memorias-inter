import Image from 'next/image';

import { inters } from '@/app/lib/data';

export default function Committees() {
  return (
    <main className="flex-1 w-full max-w-xl mx-auto py-4 px-3">
      <h1 className="text-lg md:text-2xl">COMISSÕES ORGANIZADORAS</h1>

      <div className="py-2" />

      {inters.map(inter => (
        <div key={inter.year} className="block">
          <div className="w-full px-4 py-1 rounded-sm bg-[#E5E7EB]">
            <p className="font-medium text-center text-sm md:text-base">
              {inter.year}
            </p>
          </div>

          <div className="py-1" />

          <div className="flex justify-center gap-2">
            {inter.committees.map(committee => {
              return (
                <Image
                  key={committee.id}
                  src={`/logos/${committee.id}.png`}
                  width={40}
                  height={40}
                  alt={`Atlética ${committee.name} fundada em ${inter.year}`}
                />
              );
            })}
          </div>

          <div className="py-2" />
        </div>
      ))}
    </main>
  );
}
