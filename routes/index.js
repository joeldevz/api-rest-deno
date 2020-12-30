import { Router } from "https://deno.land/x/oak/mod.ts"
import { getUser, getsUser } from "../controllers/index.js"
const router = new Router();
router.get('/', ({ response }) => {
    response.body = "Hello World"
})
router.post('/user', getUser)
router.get('/users', getsUser)

export default router