window.addEventListener('load', ()=>{
    let userSession = localStorage.getItem('session')
    if(window.location.pathname === '/index.html'){
        if(!userSession){
            window.location = 'signup.html'
        }
    }
})
// ---------------signup page--------------
const handleSignup = (e)=>{
    e.preventDefault()
    // grab form elements
    const ourForm = document.forms['signUp']
    let data = new FormData(ourForm)
    const userInfo = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        userame: data.get('userame'),
        email: data.get('email'),
        password: data.get('password'),
    }
    // save user to local storage
    localStorage.setItem(userInfo.email, JSON.stringify(userInfo))
    // reroute to signin page
    window.location = 'signin.html'
}

// ---------------signin page--------------
const handleSignin = (event)=>{
    event.preventDefault()
    const ourForm = document.forms['signin']
    let data = new FormData(ourForm)
    const userInfo = {
        email: data.get('email'),
        password: data.get('password'),
    }
    //----------fetch userData----------
    const fetchUser = localStorage.getItem(userInfo.email)
    if (fetchUser){
        let passord = JSON.parse(fetchUser).password
        if(passord === userInfo.password){
            localStorage.setItem('session', true)
            window.location = 'index.html'
        }else{
            document.querySelector('.error_password').style.display = 'inline'
        }
    }else{
        document.querySelector('.error_mail').style.display = 'inline'
    }
}
// ---------------signOut account--------------
const handleSignOut = ()=>{
    localStorage.setItem('session', false)
    console.log({ses: localStorage.getItem('session')})
    window.location = 'signin.html'
}
const handleDelete = ()=>{
    // localStorage.setItem('session', false)
    localStorage.clear()
    window.location = 'signin.html'
}