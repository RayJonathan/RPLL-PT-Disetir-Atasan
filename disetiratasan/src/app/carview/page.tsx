interface CarviewProps {}

const Carview: React.FC<CarviewProps> = (props) => {
  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="flex-1 flex">
        <div id="target" className="rollerblade">
          <img
            src="car360/download.png"
            alt="360 Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Carview;
