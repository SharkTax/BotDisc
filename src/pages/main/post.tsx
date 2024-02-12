import { addDoc, getDocs,collection, query, where, deleteDoc, doc} from "firebase/firestore"
import { db , auth } from "../../config/firebase"
import { Post as Ipost} from "./main"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect, useState } from "react"

interface Props{
    post: Ipost
}

interface Like{
    likeId: string;
    userId : string;
}

export const Post = (props : Props)=>{
    const {post} = props
    const [user, loading, error] = useAuthState(auth)

    const [like, setLike] = useState<Like[] | null>(null)

    const likesRef = collection(db, "likes")

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const getLikes = async ()=>{
        const data = await getDocs(likesDoc)
        setLike(data.docs.map((doc) =>{
            return(
                {userId: doc.data().userId, likeId: doc.id}
            )
        }))
    }


    const addLike = async ()=>{
        try{
        const newDoc = await addDoc(likesRef, {userId: user?.uid, postId: post.id})
        if(user) {
            setLike((prev)=>{
                return prev ? [...prev, {userId: user.uid, likeId: newDoc.id}] : [{userId: user.uid, likeId: newDoc.id}]
            })
        }
        }catch(e){
            console.log(e)
        }
    }

    const removeLike = async ()=>{
        try{
        const likeToDeletquery = query(likesRef, where("postId", "==", post.id), where("userId", "==", user?.uid))
        
        const likeToDeleteData = await getDocs(likeToDeletquery)
        const likeId = likeToDeleteData.docs[0].id
        const likeToDelete = doc(db, "likes", likeToDeleteData.docs[0].id)
        await deleteDoc(likeToDelete)
        if(user) {
            setLike((prev)=>{
                 return prev && prev.filter((like)=>{
                    return like.likeId !== likeId 
                })
            })
        }
        }catch(e){
            console.log(e)
        }
    }

    const hasUserLiked = like?.find((likes)=>{
        return likes.userId == user?.uid
    })

    useEffect(()=>{
        getLikes()
    }, [])

    return (<div>
        <div className="title">
            <h1>{post.title}</h1>
        </div>
        <div className="body">
            <p>{post.description}</p>
        </div>
        <div className="footer">
            <p>{post.username}</p>
            <button onClick={hasUserLiked ? removeLike : addLike}> 
            {hasUserLiked ? <>&#128078;</> : <>&#128077;</>}
            </button>
            {like && <p>Likes: {like?.length} </p>}
        </div>
    </div>)

}

//7:42:05