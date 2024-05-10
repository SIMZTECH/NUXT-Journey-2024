export default defineNuxtRouteMiddleware(()=>{
    const auth=useAuth(); //used to get the state of login user
    return auth.value.isAuthennticated; //return the access filed
});