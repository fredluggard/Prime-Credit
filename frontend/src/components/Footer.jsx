function Footer() {
  return (
    <div className="flex justify-between h-16 bg-black text-white px-4 opacity-90 items-center text-sm ">
      <div className="flex justify-evenly gap-5">
        <a className="opacity-50 hover:opacity-100" href="/">
          Home
        </a>
        <a className="opacity-50 hover:opacity-100" href="/">
          Saving Account
        </a>
        <a className="opacity-50 hover:opacity-100" href="/">
          Checking Account
        </a>
        <a className="opacity-50 hover:opacity-100" href="/">
          Offshore Accounts
        </a>
        <a className="opacity-50 hover:opacity-100" href="/">
          Contact
        </a>
      </div>
      <div>
        <p className="opacity-50 hover:opacity-100">
          © 2019 - 2022 Prime Credit Bank.
        </p>
      </div>
    </div>
  );
}

export default Footer;
