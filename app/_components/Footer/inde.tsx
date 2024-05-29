import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center bg-gray-950">
      <span className="font-mono flex items-center gap-1.5 text-xs text-gray-400 sm:text-sm">
        Made with
        <IoMdHeart size={13} className="text-red-500" />
        by
        <strong className="font-medium">João Marcos Neves da Silva</strong>
      </span>
    </footer>
  );
};

export default Footer;
