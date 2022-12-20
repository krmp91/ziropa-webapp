import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import footimg from "../components/assets/footimg.png";
import "../App.css";

const fot = {
  position: "relative",
  left: "0",
  bottom: "0",
  right: "0",
  fontSize: "20px",
};
const FooterContact = () => {
  return (
    <Footer
      style={fot}
      columns={[
        {
          title: "Kontakt os",
          items: [
            {
              icon: <GoLocation />,
              title: "Universitetsbyen 14, 8000 Aarhus",
              openExternal: true,
            },
            {
              icon: <AiOutlineMail />,
              title: "info@ziropasirup.dk",
              openExternal: true,
            },
            {
              icon: <AiOutlinePhone />,
              title: "+4529130223",
            },
          ],
        },
        {
          title: "Følg os",
          items: [
            {
              icon: <BsFacebook />,
              title: "Facebook",
              url: "https://www.facebook.com/ziropasirup",
              openExternal: true,
            },
            {
              icon: <BsInstagram />,
              title: "Instagram",
              url: "https://mobile.ant.design/",
              openExternal: true,
            },
          ],
        },
      ]}
    />
  );
};

export default FooterContact;
