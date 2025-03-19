"use client";

import ContactForm from "@/app/pagesComponents/formEmail";
import ShapesDisplayer from "@/app/pagesComponents/shapesDisplayer";
import ContactUsCard from "@/app/pagesComponents/contactUsCard";
import ThreeBackground from "@/app/components/ThreeBackground";
import { motion } from "framer-motion";

export default function ContactUs() {
    return (
        <div className="hidden md:flex flex-col justify-center items-center w-full relative">
            <ThreeBackground />
            <div className="
                grid gap-[1vw] md:my-[5vw]
                grid-cols-[repeat(48,_minmax(0,_1vw))]
                grid-rows-[repeat(22,_minmax(0,_1vw))]
                relative z-10
            ">
                <motion.h1 
                    className="row-[1/6] col-[3/20] text-[6vw] text-blue-dark h-full"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contattaci
                </motion.h1>

                <div className="row-[3/13] col-[46/48] bg-blue-light" />
                <div className="row-[2/4] col-[20/48] bg-blue-dark">
                    <ShapesDisplayer numShapes={1} imgName1="/decorations/light-8.png" position="start" spin={true} />
                </div>

                <div className="row-[20/22] col-[2/19] bg-blue-medium">
                    <ShapesDisplayer
                        numShapes={3}
                        imgName1="/decorations/dark-8.png"
                        imgName2="/decorations/light-4.png"
                        imgName3="/decorations/dark-8.png"
                        position="start"
                        spin={true}
                    />
                </div>

                <div className="row-[7/12] col-[39/41] bg-blue-medium" />
                <div className="row-[6/8] col-[39/45] bg-blue-light" />
                <div className="row-[6/12] col-[43/45] bg-orange" />
                <div className="row-[10/12] col-[39/45] bg-blue-dark" />
                <div className="row-[10/12] col-[39/41] bg-blue-medium" />

                <div className="row-[16/22] col-[41/43] bg-blue-medium" />
                <div className="row-[15/17] col-[41/48] bg-blue-light" />
                <div className="row-[15/22] col-[46/48] bg-orange" />
                <div className="row-[20/22] col-[41/48] bg-blue-dark" />
                <div className="row-[20/22] col-[41/43] bg-blue-medium" />

                <motion.div 
                    className="row-[6/18] col-[3/18]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <ContactUsCard />
                </motion.div>
                
                <motion.div 
                    className="row-[5/21] col-[22/37]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
}