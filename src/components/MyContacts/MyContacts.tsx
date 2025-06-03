import type { FC } from "react";
import cl from "./MyContacts.module.css";

interface MyContactsProps {}

const MyContacts: FC<MyContactsProps> = () => {
  return (
    <section className={cl.container} id="contacts">
      <div className={cl.subContainer}>
        <div className={cl.emailLine}>
          <span>ARTYOMTULYAKOV@GMAIL.COM&nbsp;•&nbsp;</span>
          <span>ARTYOMTULYAKOV@GMAIL.COM&nbsp;•&nbsp;</span>
          <span>ARTYOMTULYAKOV@GMAIL.COM&nbsp;•&nbsp;</span>
          <span>ARTYOMTULYAKOV@GMAIL.COM&nbsp;•&nbsp;</span>
          <span>ARTYOMTULYAKOV@GMAIL.COM&nbsp;•&nbsp;</span>
          <span>ARTYOMTULYAKOV@GMAIL.COM&nbsp;•&nbsp;</span>
        </div>
        <div className={cl.footer}>
          <span className={cl.copyright}>©2024</span>
          <div className={cl.links}>
            <a className={cl.link} href="https://vk.com/artyomtula">
              ВКОНТАКТЕ
            </a>
            <a className={cl.link} href="https://t.me/artyomtula">
              TELEGRAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyContacts;
