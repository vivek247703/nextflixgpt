export const Validation = (email,password)=>{
        const emailid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
        const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

        if(!emailid) return "Email id not valid"
        if(!Password) return "Password not valid"

        return null
}