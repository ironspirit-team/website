export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/docs' || to.path === '/docs/') {
    return navigateTo('/docs/smartcar/', { redirectCode: 301 })
  }

  if (to.path.startsWith('/docs/') && !to.path.startsWith('/docs/smartcar/')) {
    const target = `/docs/smartcar${to.path.slice('/docs'.length)}`
    return navigateTo(target, { redirectCode: 301 })
  }
})
