import { useEffect, useState, useRef } from 'react'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase/firebase';


export const useUpload = (setData) => {

    const [file, setFile] = useState("")
    const [uploadStatus, setUploadStatus] = useState("")



    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, `email-images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            console.log(file)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                    setUploadStatus(`${Math.round(progress)} %`)
                },
                (error) => {
                    console.log(error);
                    setUploadStatus("Il y a une error. Réessayer après!")
                },
                () => {
                    setUploadStatus("C'est terminé")
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log(downloadURL)
                        setData((prev) => ({ ...prev, profile: downloadURL }));
                    });
                    setTimeout(() => {
                        setUploadStatus("")
                    }, 2000)

                    setFile(null)
                }
            );
        };
        file && uploadFile();


    }, [file]);

    return [uploadStatus ,setFile]
}
