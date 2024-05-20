import React from 'react'
import { motion, AnimatePresence, animate, transform, delay } from 'framer-motion';
import { Link } from 'react-router-dom';


const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: '400px',
        opacity: 1,
        transistion: { delay: 0.5 }

    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence mode='wait'>
            {
                showModal && (
                    <motion.div className='backdrop'
                        variants={backdrop}
                        initial='hidden'
                        animate='visible'
                        exit={'hidden'}
                    >

                        <motion.div className='modal'
                            variants={modal}
                        >
                            <p>Want to make another pizza?</p>
                            <Link to={'/'}>
                                <button >
                                    Start Again
                                </button>
                            </Link>

                        </motion.div>

                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Modal