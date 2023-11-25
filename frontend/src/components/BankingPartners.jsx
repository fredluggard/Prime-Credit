import BankImage from "./BankImage";

function BankingPartners() {
  return (
    <div className="flex flex-col justify-center mb-4 items-center">
      <div className="w-20 h-6 border-solid border-b-0 mt-24 mb-4 border-4 border-blue-400"></div>
      <div>
        <h1 className="text-5xl font-bold">Banking Partners</h1>
        <p className="text-center mt-2 opacity-50">
          As always, partners grows with you!
        </p>
      </div>
      <div className="w-20 border-solid mb-8 mt-4 border-t-4 border-blue-400"></div>

      <div className="grid h-[80vh] grid-cols-4 grid-rows-2 p-12">
        <BankImage
          className="col-start-1 col-end-3 row-start-1 row-end-3"
          src="/src/assets/images/pic-three.jpg"
          header="Savings"
          title="Savings"
        />
        <BankImage
          className="col-start-3 col-end-5 row-start-1 row-end-2"
          src="/src/assets/images/pic-four.jpg"
          header="Enterprise Loan"
          title="Accumulation"
        />
        <BankImage
          className="col-start-3 col-end-4 row-start-2 row-end-3"
          src="/src/assets/images/pic-two.jpg"
          header="Personal Banking"
          title="Direct Solutions"
        />
        <BankImage
          className="col-start-4 col-end-5 row-start-2 row-end-3"
          src="/src/assets/images/pic-one.jpg"
          header="Audit & Assurance"
          title="Assurance"
        />
      </div>
    </div>
  );
}

export default BankingPartners;
