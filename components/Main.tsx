import React from "react";
import { motion } from "framer-motion";
import { Layout } from "./Index";
import Link from 'next/link';
import { Planet2, Planet3, Planet4, RocketImage, EarthPlanet, SaturnPlanet, darkPlanet, Moon, MeteoriteSmall } from "@/utilities/Image";
import Image from "next/image";

const planetsVariants = {
    textHidden: {
        opacity: 0,
    },
    textVisible: {
        opacity: 1,
        transition: {
            opacity: { delay: 4, duration: 1.5 }
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
                    repeat: Infinity,
                },
            }
        },
    },

    smallMeteoriteHidden: {
        x: "50vw",
        y: "0vh"
    },
    smallMeteoriteVisible: {
        x: "-60vw",
        y: "-40vh",
        opacity: [1, 0.7, 0.8, 0.5, 0.8, 0.7, 0.1],
        transition: {
            x: { duration: 120 },
            y: { duration: 120 },
            opacity: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }
        }
    },


    earthHidden: {
        x: "-0vw",
        y: '-100vh',
        transition: {
            duration: 2,
        },
    },
    earthVisible: {
        x: '30vw',
        y: '-30vh',
        transition: {
            x: {
                type: "spring",
                stiffness: 150,
                duration: 3,
            },
            y: {
                type: "spring",
                stiffness: 80,
                duration: 3,
            },
        },
    },
    earthMoveAfterStay: {
        rotate: [0, -360],
        transition: {
            rotate: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
            },
        },
    },

    moonMoveAfterStay: {
        rotate: [0, 360],
        transition: {
            rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
            }
        },
    },

    blueHidden: {
        x: "-100vw",
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
    blueVisible: {
        x: '-45vw',
        opacity: [0.8, 1.5, 0.8],
        scale: [1, 1.07, 1],
        transition: {
            x: {
                type: "spring",
                stiffness: 100,
                duration: 2,
            },
            opacity: {
                duration: 2,
                repeat: Infinity,
            },
            scale: {
                duration: 2,
            },
        },
    },
    blueMoveAfterStay: {
        y: ['10vh', '9.7vh'],
        rotate: [0, -360],
        transition: {
            y: {
                type: "spring",
                repeatType: "mirror",
                stiffness: 200,
                duration: 2,
                repeat: Infinity,
            },
            rotate: {
                repeat: Infinity,
                duration: 8,
                ease: "linear",
            }
        },
    },

    orangeHidden: {
        x: "-100vw",
        y: '-100vh',
        transition: {
            duration: 5,
        },
    },
    orangeVisible: {
        x: '-40vw',
        y: '-40vh',
        transition: {
            x: {
                type: "spring",
                stiffness: 50,
                duration: 1,
            },
            y: {
                type: "spring",
                stiffness: 50,
                duration: 1,
            },
        },
    },
    orangeMoveAfterStay: {
        opacity: [1, 0.4, 0.8, 1],
        scale: [1, 1.2, 1],
        transition: {
            opacity: {
                duration: 4,
                repeat: Infinity,
            },
            scale: {
                duration: 10,
                repeat: Infinity,
            },
        },
    },

    pinkHidden: {
        x: "50vw",
        y: '60vh',
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
    pinkVisible: {
        x: '40vw',
        y: '25vh',
        transition: {
            x: {
                type: "spring",
                stiffness: 100,
                duration: 2,
            },
            y: {
                type: "spring",
                stiffness: 150,
                duration: 2,
            },
        },
    },
    pinkMoveAfterStay: {
        opacity: [0.8, 1.5, 0.8],
        scale: [1, 1.1, 1],
        rotate: [0, 360],
        transition: {
            opacity: {
                duration: 2,
                repeat: Infinity,
            },
            scale: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
            },
            rotate: {
                repeat: Infinity,
                duration: 8,
                ease: "linear",
            }
        },

    },

    saturnHidden: {
        x: "-20vw",
        y: '60vh',
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
    saturnVisible: {
        x: '-10vw',
        y: '40vh',
        opacity: 0,
        transition: {
            x: {
                type: 'spring',
                stiffness: 30,
                duration: 2,
            },
            y: {
                type: 'spring',
                stiffness: 50,
                duration: 2,
            },
        },
    },
    saturnMoveAfterStay: {
        opacity: [1, 0.5, 1],
        transition: {
            opacity: {
                duration: 5,
                repeat: Infinity,
            },
        },
    },

    darkHidden: {
        x: "-100%",
        y: '-100vh',
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
    darkVisible: {
        x: '-20vw',
        y: '-25vh',
        transition: {
            x: {
                type: "spring",
                duration: 2,
                stiffness: 50,
            },
            y: {
                type: "spring",
                damping: 5,
                stiffness: 50,
                duration: 2,
            },
        },
    },
    darkMoveAfterStay: {
        opacity: 1,
        rotate: [0, 360],
        transition: {
            rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }
        },

    },
}

const rocketVariants = {
    RocketHidden: {
        y: "50vh",
        x: '-100vw',
    },
    RocketVisible: {
        y: "-50vh",
        x: '100vw',
        transition: {
            y: {
                type: 'tween',
                duration: 3,
                delay: 2
            },
            x: {
                type: 'tween',
                duration: 3,
                delay: 2
            },
        },
    },
};

const Main: React.FC = () => {
    return (
        <Layout >
            <div className="relative w-full h-screen flex justify-center items-center">
                {/* background  */}
                <motion.div id="stars"
                    className="absolute w-full h-full -z-30"
                    variants={planetsVariants}
                    initial="starsHidden"
                    animate="starsVisible"
                >
                </motion.div>
                {/* Planet 2 */}
                <motion.div
                    className="absolute"
                    variants={planetsVariants}
                    initial="blueHidden"
                    animate={["blueVisible", "blueMoveAfterStay"]}
                >
                    <Image alt="blue-planet" src={Planet2} className="" />
                </motion.div>

                {/* Planet 3 */}
                <motion.div
                    className="absolute"
                    variants={planetsVariants}
                    initial="orangeHidden"
                    animate={["orangeVisible", "orangeMoveAfterStay"]}
                >
                    <Image alt="orange-planet" src={Planet3} className="" />
                </motion.div>

                {/* Planet 4 */}
                <motion.div
                    className="absolute "
                    variants={planetsVariants}
                    initial="pinkHidden"
                    animate={["pinkVisible", "pinkMoveAfterStay"]}
                >
                    <Image alt="Pink-planet" src={Planet4} className="scale-110" />
                </motion.div>


                <motion.div
                    className="absolute"
                    variants={planetsVariants}
                    initial="darkHidden"
                    animate={["darkVisible", "darkMoveAfterStay"]}
                >
                    <Image alt="Pink-planet" src={darkPlanet} className="rotate-45" />
                </motion.div>

                <motion.div
                    className="absolute"
                    variants={planetsVariants}
                    initial="saturnHidden"
                    animate={["saturnVisible", "saturnMoveAfterStay"]}
                >
                    <Image alt="Pink-planet" src={SaturnPlanet} className="rotate-45" />
                </motion.div>

                {/* rocket */}
                <motion.div className="absolute z-30"
                    variants={rocketVariants}
                    initial="RocketHidden"
                    animate="RocketVisible"
                >
                    <Image alt='main-vector' src={RocketImage} className="hidden md:block rotate-[30deg]" width={400} />
                    <Image alt='main-vector' src={RocketImage} className="sm:block md:hidden rotate-12" width={200} />
                </motion.div>


                <motion.div className="absolute"
                    variants={planetsVariants}
                    initial="smallMeteoriteHidden"
                    animate="smallMeteoriteVisible">
                    <Image alt="" src={MeteoriteSmall} className="rotate-[60deg] -z-10" />
                </motion.div>

                {/* earth and moon part */}

                <motion.div
                    className="absolute"
                    variants={planetsVariants}
                    initial="earthHidden"
                    animate={["earthVisible", "moonMoveAfterStay"]}
                >
                    <Image alt="moon" src={Moon} />
                </motion.div>
                <motion.div
                    className="absolute"
                    variants={planetsVariants}
                    initial="earthHidden"
                    animate={["earthVisible", "earthMoveAfterStay"]}
                >
                    <Link href={'#about-me'} />
                    <Image alt="Pink-planet" src={EarthPlanet} />
                </motion.div>


                {/* 
                <motion.div className="w-full flex flex-col items-center justify-end gap-3 lg:gap-8"
                    variants={planetsVariants}
                    initial="textHidden"
                    animate="textVisible"
                >
                    <h2 className='flex flex-wrap items-center drop-shadow-md lg:text-6xl'>
                        <span className=' text-3xl md:text-3xl lg:text-8xl'>سلام</span>, من <span className=' text-[#5651e5] dark:text-[#736ffa] text-4xl md:text-4xl lg:text-8xl'>ماهان</span> هستم.
                    </h2>
                    <p className='text-gray-600 dark:text-white max-w-[90%] md:max-w-[70%] text-center text-sm md:text-sm lg:text-base'>فارغ التحصیل مهندسی کامپیوتر, گرایش نرم افزار, که در حال حاضر به عنوان طراح و توسعه دهنده وب سایت, مشغول کار هستم.
                    </p>
                    <Link href="/file/MahanAsadiResume-V2.2.pdf" className=''>
                        <button className='shadow-md shadow-gray-400 dark:shadow-none bg-gradient-to-r from-[#5651e5] to-[#709dff]  text-white py-3 px-16 rounded-md mt-4 hover:scale-110 w-full ease-in-out duration-500'>دانلود رزومه
                        </button>
                    </Link>
                </motion.div> */}


            </div>
        </Layout >

    );
};

export { Main };
