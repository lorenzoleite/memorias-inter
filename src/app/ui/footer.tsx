import { FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#E66E25]">
      <div className="w-full max-w-xl mx-auto flex items-center justify-between p-3">
        <p className="text-xs md:text-sm text-white">
          Todos direitos reservados, {new Date().getFullYear()}. ©
        </p>
        <a
          href="https://www.instagram.com/memoriasinter/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400"
        >
          <FaInstagram className="size-5" />
        </a>
      </div>
    </footer>
  );
}
