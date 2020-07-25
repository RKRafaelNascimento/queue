export default {
    key: 'UserReport',
    options: {
        delay: 15000
    },
    async handle({data}){
        console.log(data.user)
    }
}