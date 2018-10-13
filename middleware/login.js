export default function (context) {
    console.log('midd login')
    console.log(context.route.path)
    if (context.route.path != '/') {
        context.redirect('/')
        console.log('midd login if')
    }
    // if (this.$route.path !== "/") {
    //     this.$router.push("/")
    //     console.log('midd login iff')
    // }
  }