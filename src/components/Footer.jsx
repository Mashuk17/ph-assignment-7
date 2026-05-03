import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10 text-white ">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col items-center text-center pb-6">
          <div>
            <div className="flex flex-col items-center">
              <Image
                src="/logo-xl.png"
                alt="footer logo"
                height={200}
                width={300}
              ></Image>
            </div>
            <p className="py-3 text-white/50">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <p className="pb-3">Social Links</p>
          </div>
          <div className="flex gap-3">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/facebook.png"
              alt="instagram"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/twitter.png"
              alt="instagram"
              width={30}
              height={30}
            ></Image>
          </div>
        </div>
        <div className="border border-green-900"></div>
        <div className="flex justify-between text-white/50 pt-5">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex justify-around gap-5">
            <p>Privacy Policy </p>
            <p>Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
<div>
  <div>
    <h1></h1>
  </div>
</div>;
