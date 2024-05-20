import React from 'react';
import { motion, useCycle } from 'framer-motion';


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.5
            },
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.25,
                ease: 'easeInOut'
            }
        }
    },

    animationTwo: {

        y: [0, -40],
        x: 0,
        transition: {

            y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 0.4,
                ease: 'easeInOut'
            }
        }
    }
};

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
    return (
        <>
            <motion.div className='loader'
                variants={loaderVariants}
                animate={animation}>
            </motion.div>
            <div onClick={() => cycleAnimation()}>Cycle Loader</div>
        </>
    );
};

export default Loader;
