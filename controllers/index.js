export const getUser = async ({ request, response }) => {
    const body = await request.body();
    const name = await body.value
    response.body = `el Usuario ${name.name}`
}
export const getsUser = ({ response }) => {
    response.body = "aqui hay varios usuario"

}
export const createUser = () => {

}
