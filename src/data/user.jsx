const users = [
    {user : 'user',pass : 'pass',role:'user',token:'user'},
    {user:'admin',pass:'pass',role:'admmin',token:'admin'}
    
]


export function verifyUser(user,pass){
    const userFound = users.find((u)=>{
        return u.user === user && u.pass === pass
    })

    return userFound ? {role:userFound.role, token:userFound.token}: null

}