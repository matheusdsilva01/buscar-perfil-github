export async function searchUser(search: string) {
    const response = await fetch(`https://api.github.com/users/${search}`)
    return response.json()
}
