export async function searchUser(search: string) {
    const response = await fetch(`https://api.github.com/users/${search}`)
    if (!response.ok) {
        throw new Error('Something went wrong')
    }
    return await response.json()
}
