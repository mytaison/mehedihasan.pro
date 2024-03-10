"use client";
import { useEffect, useRef } from "react";
import { SiMinutemailer } from "react-icons/si";
import ContactForm from "./ContactForm";
import sendEmail from "@/app/actions/sendEmail";
import { MdConnectWithoutContact } from "react-icons/md";
import ConnectBlock from "./ConnectBlock";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto">
      <div className="w-full p-4 mt-[102px] md:pt-[102px] md:mt-0 min-h-[calc(100dvh-87.19px)] lg:min-h-[calc(100dvh-102px)] flex flex-col gap-16 lg:gap-8">
        <div className="xl:pt-5 2xl:pt-10">
          <h1 className="text-3xl tracking-widest">CONTACT</h1>
          <h5 className="">Get in Touch!</h5>
        </div>
        <div className="flex flex-col md:flex-row gap-16 lg:gap-8 w-full">
          <div className="flex-1 w-full md:w-3/6 form">
            <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2 flex flex-col">
              <span className="inline-flex items-center gap-2">
                <SiMinutemailer size={30} />
                SAY HELLO! OR
              </span>
              <span>
                INVITE FOR <span className="text-xl">☕</span> MEETING!
              </span>
            </h3>
            <ContactForm></ContactForm>
          </div>
          <div className="flex-1 w-full md:w-3/6 sns">
            <h3 className="font-roboto font-bold text-gray-950 dark:text-gray-50 tracking-[.2em] text-xl mb-2 flex flex-col">
              <span className="inline-flex items-center gap-2">
                <MdConnectWithoutContact size={30} />
                BE CONNECTED
              </span>
              <span>IN ANY WAY!</span>
            </h3>
            <ConnectBlock></ConnectBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
