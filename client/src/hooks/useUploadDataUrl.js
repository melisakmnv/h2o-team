import { useEffect, useState, useRef } from 'react'
import { ref, getDownloadURL, uploadString, deleteObject } from 'firebase/storage'
import { storage } from '../firebase/firebase';
import { useToggle } from './useToggle';


export const useUploadDataUrl = (setData, toggleCrop) => {
    const [loading, toggleLoading] = useToggle(false)
    const [uploadStr, setUploadStr] = useState(null)


    const name = new Date().getTime()
    // const imageBucket = `email-images/${name}`;
    const imageBucket = `test/${name}`;


    const deleteImage = async (imageUrl) => {
        try {
            const imageRef = ref(storage, imageUrl);
            await deleteObject(imageRef);
            console.log('Image deleted successfully');
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    useEffect(() => {
        const uploadFile = () => {
            console.log("uploading...")
            toggleLoading(true)
            const storageRef = ref(storage, imageBucket);
            uploadString(storageRef, uploadStr, 'data_url').then((snapshot) => {
                console.log("uploaded a raw string")
            }).then(() => {
                getDownloadURL(storageRef).then((url) => {
                    console.log("finished")
                    toggleLoading(false)
                    setData((prev) => ({ ...prev, profile: url }));
                    toggleCrop(false)
                })
            })
        };
        uploadStr && uploadFile();
    }, [uploadStr]);

    return [loading, setUploadStr, deleteImage]
}
