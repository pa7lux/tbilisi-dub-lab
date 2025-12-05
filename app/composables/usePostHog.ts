import posthog from 'posthog-js'

export function usePostHog() {
  // Initialize PostHog (only once)
  if (import.meta.client && !posthog.__loaded) {
    posthog.init('phc_TPJ7c7QsHGRy8RxO8xhO8hJpKMg0E6UwOMOKaeUThiC', {
      api_host: 'https://us.i.posthog.com',
      loaded: (posthog) => {
        if (import.meta.env.DEV) {
          console.log('PostHog loaded')
        }
      },
      capture_pageview: true,
      capture_pageleave: true,
      persistence: 'localStorage',
    })
  }

  return { posthog }
}
