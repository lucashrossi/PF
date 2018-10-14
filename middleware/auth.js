export default function (context) {
  console.log('midd Auth')
  console.log(context.route.path)
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/')
  }
  // if (!this.$store.getters.isAuthenticated) {
  //     this.$router.push("/")
  //     console.log('mid Auth push')
  // }
}
