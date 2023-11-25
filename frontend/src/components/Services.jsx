import { LuPencil } from "react-icons/lu";
import { PiCertificateLight } from "react-icons/pi";
import { PiNut } from "react-icons/pi";
import { HiOutlineChartPie } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { BiBriefcaseAlt2 } from "react-icons/bi";

function Services() {
  return (
    <div className="flex flex-col justify-center mb-24 items-center">
      <div className="w-20 h-6 border-solid border-b-0 mt-24 mb-4 border-4 border-blue-400"></div>
      <div>
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-center opacity-50">We have everything for you!</p>
      </div>
      <div className="w-20 border-solid mb-24 mt-4 border-t-4 border-blue-400"></div>

      <div className="grid grid-cols-3 pr-20 pl-20">
        <div className="flex flex-col justify-center text-center items-center cursor-pointer p-8 w-90 h-80 bg-gray-100 hover:bg-primary-color hover:text-white">
          <LuPencil className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-4">Investing Basics</h3>
          <p className="text-center text-sm opacity-50">
            Our Investment Banking teams deliver high-quality strategic advice
            and creative financing solutions to our clients, including mergers
            and acquisitions, financing, and risk management transactions.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center items-center cursor-pointer p-8 w-90 h-80 hover:bg-primary-color hover:text-white">
          <PiCertificateLight className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-4">Credit Card</h3>
          <p className="text-center text-sm opacity-50">
            Get the financial freedom you deserve. Credit cards offer
            exceptional benefits, rewards, services and spending power that can
            help make your financial and personal dreams come true.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center items-center cursor-pointer p-8 w-90 h-80 bg-gray-100 hover:bg-primary-color hover:text-white">
          <PiNut className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-4">Payment Technologies</h3>
          <p className="text-center text-sm opacity-50">
            We offer an array of products that make it possible to pay anywhere,
            on any device. We’re bringing solutions to life to change the way
            you pay – through our innovative digital wallet service.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center items-center cursor-pointer p-8 w-90 h-80 hover:bg-primary-color hover:text-white">
          <HiOutlineChartPie className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-4">Card Benefits</h3>
          <p className="text-center text-sm opacity-50">
            Escape from the daily routine and relax at a spa, go on a
            thrill-seeking adventure, or take in a round of golf with pro
            instruction. Access restaurant reviews and make dining reservations
            online.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center items-center cursor-pointer p-8 w-90 h-80 bg-gray-100 hover:bg-primary-color hover:text-white">
          <IoCalendarOutline className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-4">Digital Wallets</h3>
          <p className="text-center text-sm opacity-50">
            Easy – Load credit, debit, reloadable prepaid or small business
            cards from participating issuers. Any of your cards can be used
            across hundreds of thousands of supported merchants.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center items-center cursor-pointer p-8 w-90 h-80 hover:bg-primary-color hover:text-white">
          <BiBriefcaseAlt2 className="text-blue-400 text-5xl mb-4" />
          <h3 className="text-xl font-bold mb-4">Business Planning</h3>
          <p className="text-center text-sm opacity-50">
            Business plans can help you get funding or bring on new business
            partners. Investors want to feel confident they’ll see a return on
            their investment. Your business plan is the tool you’ll use to
            convince people that working with you — or investing in your company
            — is a smart choice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
