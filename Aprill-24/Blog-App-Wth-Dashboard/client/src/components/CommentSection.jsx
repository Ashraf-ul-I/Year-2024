import { Alert, Button, TextInput, Textarea } from 'flowbite-react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const CommentSection = ({ postId }) => {
    const { currentUser } = useSelector(state => state.user);
    const [comment, setComment] = useState('');
    const [exceededLimit, setExceededLimit] = useState(false); // State to track if comment length exceeds the limit
    const [commentError, setCommentError] = useState(null)
    const handleCommentChange = (e) => {
        const newComment = e.target.value;
        setComment(newComment);

        if (newComment.length >= 200) {
            setExceededLimit(true);
        } else {
            setExceededLimit(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (comment.length > 200) {
            return;
        }
        try {

            const res = await fetch(`/api/comment/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: comment, postId, userId: currentUser._id })
            });
            const data = await res.json();

            if (res.ok) {
                setComment('');
                setCommentError(null)
            }
        } catch (error) {
            setCommentError(error.message)
        }
    }


    const limitWarning = 'You exceeded the limit';

    return (
        <div className='max-w-2xl mx-auto w-full p-3'>
            {
                currentUser ? (
                    <div className='flex items-center gap-1 my-5 text-gray-500'>
                        <p>Signed in as:</p>
                        <img className='h-5 w-5 object-cover rounded-full' src={currentUser.profilePicture} alt="" />
                        <Link to={'/dashboard?tab=profile'} className='text-xs text-cyan-600 hover:underline'>@{currentUser.username}</Link>
                    </div>
                ) : (
                    <div className='text-sm text-teal-500 my-5 flex gap-1'>
                        You must be signed in to comment
                        <Link className='text-blue-500 hover:underline' to={'/sign-in'}>Sign In</Link>
                    </div>
                )
            }
            {
                currentUser && (
                    <form className='border border-teal-500 rounded-md p-3' onSubmit={handleSubmit}>
                        <Textarea
                            placeholder='Add a comment....'
                            rows='3'
                            maxLength={'200'}
                            onChange={handleCommentChange} // Modified onChange handler
                        />
                        <div className='flex justify-between items-center mt-5'>
                            {
                                exceededLimit ? (
                                    <p className='text-red-500 text-xs'>{limitWarning}</p>
                                ) : (
                                    <p className='text-gray-500 text-xs'>{200 - comment.length} characters remaining</p>
                                )
                            }
                            <Button outline gradientDuoTone={'purpleToBlue'} type='submit'>Submit</Button>
                        </div>
                        {
                            commentError &&
                            (<Alert color='failure' className='mt-5'>{commentError}</Alert>)
                        }
                    </form>

                )

            }
        </div>
    )
}

export default CommentSection;
