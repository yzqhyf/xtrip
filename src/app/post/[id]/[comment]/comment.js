import { useRouter } from "next/router"

function Comment() {
    const router = useRouter()
    const query = router.query
    return (
        <>
            <p>This is pages/post/{query.id}/{query.comment}.js</p>
        </>
    )
}

export default Comment
