import React, { useState,useEffect } from 'react'
import { collection,query,onSnapshot, DocumentData, CollectionReference, Query } from "firebase/firestore"
import { db } from '../../firebase';


interface Channals {
    id:string;
    channel:DocumentData;
}
const useCollection = (data:string) => {
    const [documents, setDocuments] = useState<Channals[]>([]);


    const collectionRef:Query<DocumentData> = query(
        collection(db,data));

    // 発火タイミングは一回のみの為空の引数
    useEffect(() => {
        onSnapshot(collectionRef, (querySnapshot) =>{
            const channelsResults:Channals[] = [];
            querySnapshot.docs.forEach((doc) => channelsResults.push({
                id: doc.id,
                channel: doc.data(),
            })
            );
            setDocuments(channelsResults)
        });
    },[])



  return {documents};
}

export default useCollection