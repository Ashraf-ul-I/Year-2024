import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Modal, TextInput } from 'flowbite-react';
import { getDownloadURL, getStorage, uploadBytesResumable, ref } from 'firebase/storage'; // Import 'ref' here
import { app } from '../firebase.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UpdateSuccess, deleteFailure, deleteStart, deleteSuccess, signoutFail, signoutSuccess, updateFailure, updateStart } from '../redux/user/userSlice.js';
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';

const DashProfile = () => {
    const { currentUser, error, loading } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [formData, setFormdata] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
    const [imageFileUploadError, setImageFileUploadError] = useState(null);
    const filePickerRef = useRef();
    const [imageFileUploading, setImageFileUploading] = useState({});
    const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
    const [updateUserFail, setUpdateUserFail] = useState(null);
    const [showModal, setshowModal] = useState(false);
    const navigate = useNavigate();


    console.log(imageFileUploadProgress, imageFileUploadError);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    }

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.id]: e.target.value });

    }



    const handleUpdate = async (e) => {
        setUpdateUserFail(null);
        setUpdateUserSuccess(null);
        e.preventDefault();
        console.log(currentUser);
        if (Object.keys(formData).length === 0) {
            setUpdateUserFail('No changes made');
            return;
        }
        // Check if an image is selected for upload and if it's not currently uploading
        if (!imageFile || !imageFileUploading) {
            try {
                dispatch(updateStart());
                const updateProfile = await fetch(`/api/user/update/${currentUser._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const data = await updateProfile.json();

                if (!updateProfile.ok) {
                    dispatch(updateFailure(data.message));
                    setUpdateUserFail(data.message);
                } else {
                    dispatch(UpdateSuccess(data));
                    setUpdateUserSuccess(`User's Profile update Successfully`);
                    navigate('/dashboard?tab=profile');
                }
            } catch (error) {
                dispatch(updateFailure(error.message));
                setUpdateUserFail(error.message);
            }
        } else {
            // Handle the case when an image is uploading
            setUpdateUserFail('Please Wait for Image Upload');
        }
    };


    useEffect(() => {
        if (imageFile) {
            uploadImage();
        }
    }, [imageFile]);

    const uploadImage = async () => {
        setImageFileUploading(true);
        setImageFileUploadError(null);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + (imageFile.name);
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImageFileUploadProgress(progress.toFixed(0));
            }, (error) => {
                setImageFileUploadError('Could not upload image (file must be less than 2MB)');
                setImageFileUploadProgress(null);
                setImageFile(null);
                setImageFileUrl(null);
                setImageFileUploading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    setImageFileUrl(downloadUrl);
                    setFormdata({ ...formData, profilePicture: downloadUrl });
                    setImageFileUploading(false)
                });
            }
        );
    }

    const handleDeleteUser = async () => {
        setshowModal(false);
        try {
            dispatch(deleteStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                method: 'DELETE'
            })
            const data = await res.json();
            if (!res.ok) {
                dispatch(deleteFailure(data.message));
            } else {
                dispatch(deleteSuccess(data));
            }

        } catch (error) {
            dispatch(deleteFailure(error.message))
        }
    }

    const handleSignout = async () => {

        try {
            const res = await fetch(`/api/user/signout`, {
                method: 'POST'
            });
            const data = res.json();
            if (res.ok) {
                dispatch(signoutSuccess(data))
            } else {
                dispatch(signoutFail(data.message))
            }

        } catch (error) {
            dispatch(signoutFail(error.message))
        }
    }
    console.log(currentUser.isAdmin);

    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4' onSubmit={handleUpdate}>
                <input type="file" accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden />
                <div className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={() => filePickerRef.current.click()}>
                    {imageFileUploadProgress && (
                        <CircularProgressbar value={imageFileUploadProgress || 0} text={`${imageFileUploadProgress}%`} strokeWidth={5} styles={{
                            root: {
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }, path: {
                                stroke: `rgba(62,152,199,${imageFileUploadProgress / 100})`
                            }
                        }} />
                    )}
                    <img src={imageFileUrl || currentUser.profilePicture} alt="user" className={`rounded-full w-full h-full object-cover border-8 border-[lightgray]  ${imageFileUploadProgress && imageFileUploadProgress < 100 && 'opacity-60'}`} />
                </div>
                {imageFileUploadError && <Alert color='failure' >{imageFileUploadError}</Alert>}
                <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} onChange={handleChange} />
                <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} onChange={handleChange} />
                <TextInput type='password' id='password' placeholder='Password' onChange={handleChange} />
                <Button type='submit' gradientDuoTone='purpleToBlue' outline disabled={loading || imageFileUploading}>{loading ? 'Loading' : 'Update'}</Button>
                {
                    currentUser.isAdmin && (
                        <Link to='/create-post'>
                            <Button type='button' gradientDuoTone='purpleToPink' className='w-full'  >Create Post</Button>
                        </Link>
                    )
                }
            </form>
            <div className='text-red-500 flex justify-between mt-5'>
                <span className='cursor-pointer' onClick={() => setshowModal(true)}>Delete Account</span>
                <span className='cursor-pointer' onClick={handleSignout}>Sign Out</span>
            </div>
            {updateUserSuccess && (<Alert color={'success'} className='mt-5'>{updateUserSuccess}</Alert>)}
            {updateUserFail && (<Alert color={'failure'} className='mt-5'>{updateUserFail}</Alert>)}
            {error && (<Alert color={'failure'} className='mt-5'>{error}</Alert>)}
            <Modal show={showModal} onClose={() => setshowModal(false)} popup size='md'>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
                        <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>Are you sure you wnat to delete your account</h3>
                        <div className='flex justify-center gap-4'>
                            <Button color={'failure'} onClick={handleDeleteUser} >Yes I'm Sure</Button>
                            <Button color={'gray'} onClick={() => setshowModal(false)} >No Cancel</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DashProfile;
