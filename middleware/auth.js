export default function (context) {
  console.log('midd Auth')
  console.log(context.route.path)
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/')
  }
}
