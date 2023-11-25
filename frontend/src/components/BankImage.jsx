//This component is used to send image to the BankingPartners.jsx file dynamically

function BankImage(props) {
  return (
    <div className={`bg-cover bg-center relative ${props.className}`}>
      <img
        className="z-30 hover:z-10 relative w-full h-full object-cover"
        src={props.src}
        alt="/"
      />
      <div className="z-20 hover:z-30 w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 bg-blue-900 bg-opacity-80">
        <a className="behind-style-one text-lg" href="/">
          {props.header}
        </a>{" "}
        <br />
        <a className="behind-style-two text-lg" href="/">
          {props.title}
        </a>
      </div>
    </div>
  );
}

export default BankImage;
