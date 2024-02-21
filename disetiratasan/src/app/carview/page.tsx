

interface CarviewProps {
}

const Carview : React.FC<CarviewProps> = (props) => {
  return (
    <header className="bg-header py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="Logo.png"
            width={150}
            height={150}
            alt="Disetir Atasan Logo"
          />
          <nav className="ml-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Vehicles</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
            </ul>
          </nav>
        </div>
        <div>
          <a href="#" className="text-white hover:text-gray-300">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Carview;
