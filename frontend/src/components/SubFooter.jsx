import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";

function SubFooter() {
  return (
    <div className="flex w-full pr-4 pl-4 bg-primary-color text-white">
      <div className="flex flex-col w-1/3 p-8 items-start justify-center ">
        <img src="/src/assets/images/logo.png" alt="/" />
        <p className="text-sm text-blue-400 w-96 mt-8">
          Our values define who we are as an organisation and what makes us
          distinctive. They are vital to fulfilling our purpose of helping
          businesses to thrive, economies to prosper and people to realise their
          ambitions.
        </p>
        <div className="w-auto h-10 pt-4 flex content-center justify-between gap-5">
          <a href="/">
            <TiSocialFacebook className="cursor-pointer text-2xl" />
          </a>
          <a href="/">
            <FaTwitter className="cursor-pointer text-xl" />
          </a>
          <a href="/">
            <FaGooglePlusG className="cursor-pointer text-xl" />
          </a>
          <a href="/">
            <FaYoutube className="cursor-pointer text-xl" />
          </a>
        </div>
      </div>

      <div className="flex flex-col w-1/3 p-8 bg-blue-900 items-start justify-start">
        <h1 className="text-lg font-bold">Working Hours</h1>
        <div className="w-8 border-solid mb-8 mt-4 border-t-4 border-blue-400"></div>
        <p className="text-sm text-blue-400 w-96 mt-4 pb-8">
          We work all days a week, Please contact us for any inquiry.
        </p>

        <table>
          <tbody>
            <tr>
              <td className="pr-12 text-blue-400">Monday - Friday</td>
              <td>8.00 am - 16.00 pm</td>
            </tr>
            <tr>
              <td className="text-blue-400">Saturday</td>
              <td>10.00 am - 14.00 pm</td>
            </tr>

            <tr>
              <td className="text-blue-400">Sunday</td>
              <td>9.00 am - 12.00 pm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col w-1/3 p-8 items-start justify-start">
        <h1 className="text-lg font-bold">Newsletter</h1>
        <div className="w-8 border-solid mb-8 mt-4 border-t-4 border-blue-400"></div>
        <p className="text-sm text-blue-400 w-96 mt-4 pb-4">
          Subscribe to our newsletter for latest updates about our bank
        </p>
        <input
          className="bg-primary-color text-white w-full rounded-lg p-2 border-2 focus:outline-none"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <button
          className="bg-blue-400 text-white rounded-lg p-2 mt-4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SubFooter;
