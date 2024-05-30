type CardParams = {
  data: string | number;
  description: string;
};

export function Card({ data, description }: CardParams) {
  return (
    <div className="flex flex-col items-center text-white">
      <p className="text-xl md:text-3xl">{data}</p>
      <p className="text-xs md:text-sm">{description}</p>
    </div>
  );
}
