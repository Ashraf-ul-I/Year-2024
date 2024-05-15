import React from 'react';
import CallToAction from '../components/CallToAction';

const ProjectsPage = () => {
    return (
        <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
            <h1 className='text-3xl font-semibold'>Projects</h1>
            <p className='text-md text-gray-500'>
                Build fun and engaging projects while learning HTML, CSS, JavaScript, React, and Node.js. Each project is designed to challenge and enhance your coding skills, helping you become a more proficient developer.
            </p>
            <blockquote className='text-md text-gray-600 italic'>
                "The best way to learn is by doing. Dive into these projects and discover the joy of creating something from scratch."
            </blockquote>
            <CallToAction />
        </div>
    );
}

export default ProjectsPage;
