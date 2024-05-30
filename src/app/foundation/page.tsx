import Image from 'next/image';

import { foundationYears } from '@/app/lib/data';

export default function Foundation() {
  return (
    <main className="flex-1 w-full max-w-xl mx-auto py-4 px-3">
      <h1 className="text-lg md:text-2xl">ANOS DE FUNDAÇÃO</h1>

      <div className="py-2" />

      {foundationYears.map(foundationYear => (
        <div key={foundationYear.year} className="block">
          <div className="w-full px-4 py-1 rounded-sm bg-[#E5E7EB]">
            <p className="font-medium text-center text-sm md:text-base">
              {foundationYear.year}
            </p>
          </div>

          <div className="py-1" />

          <div className="flex justify-center gap-2 overflow-y-auto pb-2">
            {foundationYear.athletics.map(athletic => {
              return (
                <Image
                  key={athletic.id}
                  src={`/logos/${athletic.id}.png`}
                  width={40}
                  height={40}
                  alt={`Atlética ${athletic.name} fundada em ${foundationYear.year}`}
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
