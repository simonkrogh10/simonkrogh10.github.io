const Footer = () => {
  return (
    <div className="footer grid grid-cols-12 mt-2">
      <div className="col-span-12 bg-custom-green">
        <div className="name text-white p-10">
          <h4 className="text-lg font-bold">Simon Krogh</h4>
          <p className="italic w-2/5 text-sm">
            Kontakt mig på en af nedenstående valgmuligheder og lad os starte et
            samarbejde allerede i dag.
          </p>
          <a href="mailto:simon_julius@hotmail.com">
          <svg
          className="w-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        </a>
        </div>
       
      </div>
      <div className="bottom col-span-12 bg-custom-yellow h-8 flex items-center justify-center">
        <span className="text-white text-sm">
          Copyright 2021 - All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
