'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { CaretDown, CaretRight } from 'phosphor-react';
import { useState } from 'react';

const Questions =
    [
        {
            question: 'What is Wizardshot?',
            answer: 'Wizardshot is a web app & chrome extension . that allows you to create step-by-step tutorials simply by capturing your screen.',
        },
        {
            question: 'How is Wizardshot Free?',
            answer: 'The costs to run a service is really inexpensive as most of the processing happens in the Chrome extension. Really - all that we have to pay for is super- secure hosting, awesome 24 / 7 support and that’s it. We built Wizardshot as a stand - alone product with a deep Helpjuice Knowledge Base integration.',
        },
        {
            question: 'Is my data secure?',
            answer:
                'Wizardshot is a web app & chrome extension . that allows you to create step-by-step tutorials simply by capturing your screen.',
        },
    ]


const faqVariants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
};

const faqTransition = {
    duration: 0.3,
    ease: [0.04, 0.62, 0.23, 0.98],
};

const Faq = () => {
    const [expanded, setExpanded] = useState();

    const toggleExpand = (index) => {
        if (expanded === index) return setExpanded(undefined);
        return setExpanded(index);
    };

    return (
        <div id="faq" className='max-w-3xl px-2 sm:px-7 mx-5 md:mx-auto mt-32'>
            <h1 className='text-center text-2xl md:text-5xl pb-10'>Common Questions</h1>
            {Questions.map((item, index) => {
                const isOpen = expanded === index;
                return (
                    <motion.button
                        key={index}
                        className={`w-full mb-5 py-5 border-[#E2E8F0] border-b`}
                        onClick={() => toggleExpand(index)}>
                        <div className="flex gap-5">
                            <div className="flex-1">
                                <div className="text-left font-medium">{item.question}</div>
                                <AnimatePresence initial={false}>
                                    {isOpen ? (
                                        <motion.div
                                            key="content"
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={faqVariants}
                                            transition={faqTransition}
                                            className="overflow-hidden">
                                            <div className="pt-2 text-sm text-gray-600 text-left">{item.answer}</div>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                            {!isOpen ? <CaretRight weight="bold" /> : <CaretDown weight="bold" />}
                        </div>
                    </motion.button>
                );
            })}
            <div className='flex flex-col md:flex-row items-center justify-center md:justify-between mt-5'>
                <div className="text-left font-medium">Curious to learn more?</div>
                <button className="flex text-sm md:text-xl gap-2 items-center bg-black text-white rounded-lg px-5 py-2">
                    Visit Help & Community Center
                </button>
            </div>
        </div>
    );
};

export default Faq;
