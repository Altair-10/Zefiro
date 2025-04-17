"use client";

import ContactForm from "@/components/contactUs/formEmail";
import ShapesDisplayer from "../shapesDisplayer";
import ContactUsCard from "@/components/contactUs/card";
import AnimatedTitle from "../AnimatedTitle";

export default function ContactUs() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="
                grid gap-[0.5vw] md:gap-[1vw] my-[5vw]
                grid-rows-[repeat(110,_minmax(0,_2vw))] md:grid-rows-[repeat(22,_minmax(0,_1vw))]
                grid-cols-[repeat(31,_minmax(0,_2vw))] md:grid-cols-[repeat(48,_minmax(0,_1vw))]
            ">
                <div className="flex justify-center items-center row-[2] col-[1/32] md:row-[2] md:col-[1/49]">
                    <AnimatedTitle text="Contattaci" />
                </div>

                <div className="row-[10/40] col-[2/31] md:row-[7/19] md:col-[3/18]">
                    <ContactUsCard />
                </div>
                <div className="row-[75] col-[2/31] md:row-[7/20] md:col-[22/37]">
                    <ContactForm />
                </div>

                { /* RETTANGOLI DECORATIVI */}
                <div className="hidden md:block row-[20/22] col-[2/19] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={3}
                        imgName1="/formeSVG/blue-8.svg"
                        imgName2="/formeSVG/orange-12.svg"
                        imgName3="/formeSVG/blue-8.svg"
                        position="start"
                        spin={true}
                    />
                </div>
                <div className="hidden md:block row-[7/12] col-[39/41] bg-blue-medium" />
                <div className="hidden md:block row-[6/8] col-[39/45] bg-blue-light" />
                <div className="hidden md:block row-[6/12] col-[43/45] bg-orange" />
                <div className="hidden md:block row-[10/12] col-[39/45] bg-blue-dark" />
                <div className="hidden md:block row-[10/12] col-[39/41] bg-blue-medium" />

                <div className="hidden md:block row-[16/22] col-[41/43] bg-blue-medium" />
                <div className="hidden md:block row-[15/17] col-[41/48] bg-blue-light" />
                <div className="hidden md:block row-[15/22] col-[46/48] bg-orange" />
                <div className="hidden md:block row-[20/22] col-[41/48] bg-blue-dark" />
                <div className="hidden md:block row-[20/22] col-[41/43] bg-blue-medium" />
            </div>
        </div>
    );
}