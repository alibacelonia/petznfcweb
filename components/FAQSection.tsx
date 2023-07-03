"use client" // this is a client component
import React from "react"
import { HiArrowDown, HiChevronDown, HiOutlineArrowSmRight, HiOutlinePhoneOutgoing, HiOutlineChat } from "react-icons/hi"
import { Link } from "react-scroll/modules"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const { Fragment, useState } = React


const FAQSection = () => {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value:number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section id="faqs" className="overflow-hidden pt-5">
    
      <div className="flex flex-col animate-fadeIn animation-delay-2 pt-14 sm:pt-32 md:flex-row md:text-left">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mt-6 md:mt-0 md:text-4xl">Any questions?</h1>
          <h1 className="text-2xl font-semibold mt-6 md:mt-0 md:text-4xl">Check out the FAQs</h1>
          <p className="text-lg mt-6 mb-16 mb-6 md:text-lg">
          Still have unanswered questions and need to get in touch?
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-2">
                  <div className="shrink-0 bg-slate-100 rounded-lg p-3">
                    <HiOutlinePhoneOutgoing size={30} className="text-indigo-500 "></HiOutlinePhoneOutgoing>
                    <p className="my-4 text-sm">Still have questions?</p>
                    <div className="flex gap-1">
                      <span className="text-sm text-indigo-500 font-semibold">Call us </span><HiOutlineArrowSmRight size={20} className="text-indigo-500 "></HiOutlineArrowSmRight>
                    </div>
                  </div>
                  <div className="shrink-0 bg-slate-100 rounded-lg p-3">
                    <HiOutlineChat size={30} className="text-green-500 "></HiOutlineChat>
                    <p className="my-4 text-sm">Still have questions?</p>
                    <div className="flex gap-1">
                      <span className="text-sm text-green-500 font-semibold">Chat with us </span><HiOutlineArrowSmRight size={20} className="text-green-500 "></HiOutlineArrowSmRight>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="relative overflow-hidden pt-4 mx-auto me-md-0 max-w-xl min-h-screen">
            <div className="flex flex-col ">
            <Fragment>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making mistakes.
                  We&apos;re constantly trying to express ourselves and actualize our
                  dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making mistakes.
                  We&apos;re constantly trying to express ourselves and actualize our
                  dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making mistakes.
                  We&apos;re constantly trying to express ourselves and actualize our
                  dreams.
                </AccordionBody>
              </Accordion>
            </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
