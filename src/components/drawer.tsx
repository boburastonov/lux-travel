// components/Drawer.tsx
import { FC } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-red-800 bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 h-full w-[378px] bg-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="p-4 text-gray-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="p-4">
          
        </div>
      </div>
    </div>
  );
};

export default Drawer;
