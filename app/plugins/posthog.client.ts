export default defineNuxtPlugin(() => {
  // Initialize PostHog on client side
  const { posthog } = usePostHog()
  
  return {
    provide: {
      posthog
    }
  }
})
