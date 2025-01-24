import React from "react";
import { motion, } from "framer-motion";
import { Layout } from "./Index";
import Link from 'next/link';
import { Planet1, Planet2, Planet3, Planet4, RocketImage } from "@/utilities/Image";
import Image from "next/image";

const containerVariants = {
    textHidden: {
        opacity: 0,
    },
    textVisible: {
        opacity: 1,
        transition: {
            opacity: { delay: 2, duration: 1 }
        },
    },

    starsHidden: {
        opacity: 1,
    },
    starsVisible: {
        opacity: [1, 0.8, 0.1, 0.6, 0.2, 0.8, 0.4, 0.7, 1],
        transition: {
            opacity: {
                opacity: {
                    duration: 5,
                    repeat: Infinity, // Repeats sparkling effect
                },
            }
        },
    },

    whiteHidden: {
        x: "-0vw", // Starts off-screen on the left
        y: '-100vh',
        opacity: 0, // Initially hidden
        transition: {
            duration: 2,
        },
    },
    whiteVisible: {
        x: '-10vw', // The final position on the screen
        y: '-20vh',
        opacity: [0.8, 1.5, 0.8], // Sparkling effect (opacity changes)
        scale: [1, 1.07, 1], // Slight scaling
        transition: {
            x: {
                // type: "spring",
                // stiffness: 200,
                duration: 2, // Time it takes to get to its final position
            },
            y: {
                // type: "spring",
                // stiffness: 200,
                duration: 2, // Time it takes to get to its final position
            },
            opacity: {
                duration: 2,
                repeat: Infinity, // Repeats sparkling effect
            },
            scale: {
                duration: 2,
            },
        },
    },
    whiteMoveAfterStay: {
        y: ["-20vh", "-20.5vh"],
        transition: {
            y: {
                type: "spring",
                stiffness: 100,
                duration: 2,
                repeat: Infinity, // Repeat back and forth indefinitely
                repeatType: "mirror", // Move back and forth
            },
        },
    },
    blueHidden: {
        x: "-100vw", // Starts off-screen on the left
        opacity: 0, // Initially hidden
        transition: {
            duration: 2,
        },
    },
    blueVisible: {
        x: '-90vw', // The final position on the screen
        opacity: [0.8, 1.5, 0.8], // Sparkling effect (opacity changes)
        scale: [1, 1.07, 1], // Slight scaling
        transition: {
            x: {
                type: "spring",
                stiffness: 200,
                duration: 2, // Time it takes to get to its final position
            },
            opacity: {
                duration: 2,
                repeat: Infinity, // Repeats sparkling effect
            },
            scale: {
                duration: 2,
            },
        },
    },
    blueMoveAfterStay: {
        y: ['10vh', '9.7vh'], // Moves slightly back and forth horizontally
        rotate: [0, -360],
        transition: {
            y: {
                type: "spring",
                stiffness: 100,
                duration: 2,
                repeat: Infinity, // Repeat back and forth indefinitely
                repeatType: "mirror", // Move back and forth
            },
            rotate: {
                repeat: Infinity, // Infinite loop
                duration: 8, // Duration for a full spin
                ease: "linear", // Constant speed
            }
        },
    },

    orangeHidden: {
        x: "-100vw", // Starts off-screen on the left
        y: '-100vh',
        transition: {
            duration: 5,
        },
    },
    orangeVisible: {
        x: '-80vw', // The final position on the screen
        y: '-40vh',
        transition: {
            x: {
                type: "spring",
                stiffness: 50,
                duration: 1, // Time it takes to get to its final position
            },
            y: {
                type: "spring",
                stiffness: 50,
                duration: 1, // Time it takes to get to its final position
            },
        },
    },
    orangeMoveAfterStay: {
        opacity: [1, 0.4, 0.8, 1],
        scale: [1, 1.2, 1], // Moves slightly back and forth horizontally
        transition: {
            opacity: {
                duration: 4,
                repeat: Infinity, // Repeats sparkling effect
            },
            scale: {
                // type: "spring",
                duration: 10,
                repeat: Infinity, // Repeat back and forth indefinitely
            },
        },
    },
    pinkHidden: {
        x: "0vw", // Starts off-screen on the left
        y: '60vh',
        opacity: 0, // Initially hidden
        transition: {
            duration: 2,
        },
    },
    pinkVisible: {
        x: '-10vw', // The final position on the screen
        y: '20vh',
        transition: {
            x: {
                stiffness: 200,
                duration: 2, // Time it takes to get to its final position
            },
            y: {
                stiffness: 200,
                duration: 2, // Time it takes to get to its final position
            },
        },
    },
    pinkMoveAfterStay: {
        opacity: [0.8, 1.5, 0.8], // Sparkling effect (opacity changes)
        scale: [1, 1.07, 1], // Slight scaling
        rotate: [0, 360],
        transition: {
            opacity: {
                duration: 2,
                repeat: Infinity, // Repeats sparkling effect
            },
            scale: {
                duration: 2,
            },
            rotate: {
                repeat: Infinity, // Infinite loop
                duration: 8, // Duration for a full spin
                ease: "linear", // Constant speed
            }
        },

    },
}

const rocketVariants = {
    RocketHidden: {
        y: "100vh", // Starts off-screen below
        x: '-200vw',
        transition: {
            duration: 2,
        },
    },
    RocketVisible: {
        y: "-150vh", // Move up in stages (simulate launch)
        x: '100vw',
        transition: {
            y: {
                stiffness: 100,
                damping: 25,
                duration: 4,
            },
            x: {
                stiffness: 100,
                damping: 25,
                duration: 4,
            },
        },
    },
};

const Main: React.FC = () => {
    return (
        <Layout >

            <div className="">
                {/* Planet 1 */}
                <motion.div
                    className="absolute"
                    variants={containerVariants}
                    initial="whiteHidden"
                    animate={["whiteVisible", "whiteMoveAfterStay"]}
                >
                    <Image alt="Planet 1" src={Planet1} className="" />
                </motion.div>

                {/* Planet 2 */}
                <motion.div
                    className="absolute"
                    variants={containerVariants}
                    initial="blueHidden"
                    animate={["blueVisible", "blueMoveAfterStay"]}
                >
                    <Image alt="blue planet" src={Planet2} className="" />
                </motion.div>

                {/* Planet 3 */}
                <motion.div
                    className="absolute"
                    variants={containerVariants}
                    initial="orangeHidden"
                    animate={["orangeVisible", "orangeMoveAfterStay"]}
                >
                    <Image alt="Planet 3" src={Planet3} className="" />
                </motion.div>

                {/* Planet 4 */}
                <motion.div
                    className="absolute"
                    variants={containerVariants}
                    initial="pinkHidden"
                    animate={["pinkVisible", "pinkMoveAfterStay"]}
                >
                    <Image alt="Pink-planet" src={Planet4} className="" />
                </motion.div>
                <motion.div className="absolute z-30"
                    variants={rocketVariants}
                    initial="RocketHidden"
                    animate="RocketVisible"
                >
                    <Image alt='main-vector' src={RocketImage} className="rotate-12" width={400} />
                </motion.div>

            </div>

            <motion.div className="w-full flex flex-col items-center justify-end  gap-3 lg:gap-8"
                variants={containerVariants}
                initial="textHidden"
                animate="textVisible"
            >
                <h2 className='flex flex-wrap items-center drop-shadow-md lg:text-6xl'>
                    <span className=' text-3xl md:text-3xl lg:text-8xl'>سلام</span>, من <span className=' text-[#5651e5] dark:text-[#736ffa] text-4xl md:text-4xl lg:text-8xl'>ماهان</span> هستم.
                </h2>
                <p className='text-gray-600 dark:text-white max-w-[90%] md:max-w-[70%] text-center text-sm md:text-sm lg:text-xl'>فارغ التحصیل مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول کار هستم.
                </p>
                <Link href="file/MahanAsadiResume-V2.2.pdf" className='lg:w-2/5'>
                    <button className='shadow-md shadow-gray-400 dark:shadow-none bg-gradient-to-r from-[#5651e5] to-[#709dff]  text-white py-3 px-16 rounded-md mt-4 hover:scale-110 w-full ease-in-out duration-500'>دانلود رزومه
                    </button>
                </Link>
            </motion.div>
            <motion.div id="stars"
                className="absolute w-full h-full -z-30"
                variants={containerVariants}
                initial="starsHidden"
                animate="starsVisible"
            >
            </motion.div>
        </Layout >

    );
};

export { Main };
