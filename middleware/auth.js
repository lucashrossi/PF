export default function (context) {
  console.log('midd Auth')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/')
  }
}
