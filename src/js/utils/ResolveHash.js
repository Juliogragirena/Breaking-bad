const resolveHash = (route) =>  {
    if (route.length < 4) {
        console.log(route.length)
        let validateRoute = route ==='/' ? route : "/:id"
        return validateRoute;
    }

    return `/${route}`
}

export default resolveHash;
