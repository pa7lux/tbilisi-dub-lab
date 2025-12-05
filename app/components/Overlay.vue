<script setup lang="ts">
import { watch } from 'vue'

interface Props {
  isOpen: boolean
  direction: 'left' | 'right'
  overlayType?: string  // 'donate' or 'contact'
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
}>()

const { posthog } = usePostHog()

// Block/unblock page scroll when overlay is open/closed
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Close on backdrop click
const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    // Track overlay close
    if (import.meta.client && props.overlayType) {
      posthog.capture('overlay_closed', {
        overlay_type: props.overlayType,
        close_method: 'backdrop_click'
      })
    }
    emit('close')
  }
}

// Close on close button click
const handleCloseClick = () => {
  // Track overlay close
  if (import.meta.client && props.overlayType) {
    posthog.capture('overlay_closed', {
      overlay_type: props.overlayType,
      close_method: 'close_button'
    })
  }
  emit('close')
}

// Close on Escape key
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) {
    // Track overlay close
    if (import.meta.client && props.overlayType) {
      posthog.capture('overlay_closed', {
        overlay_type: props.overlayType,
        close_method: 'escape_key'
      })
    }
    emit('close')
  }
}

// Add/remove escape key listener
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    window.addEventListener('keydown', handleEscape)
  } else {
    window.removeEventListener('keydown', handleEscape)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div 
        v-if="isOpen"
        class="overlay-backdrop"
        @click="handleBackdropClick"
      >
        <Transition :name="`overlay-slide-${direction}`">
          <div 
            v-if="isOpen"
            class="overlay-panel"
            :class="`overlay-panel--${direction}`"
          >
            <button 
              class="overlay-close"
              @click="handleCloseClick"
              :aria-label="$t('overlay.close')"
            >
              ✕
            </button>
            
            <div class="overlay-content">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Overlay Component Variables */
.overlay-backdrop {
  --backdrop-bg: rgba(0, 0, 0, 0.7);
  --backdrop-z-index: 9999;
  
  --panel-bg: var(--color-dark);
  --panel-width-desktop: 42%;
  --panel-width-tablet: 50%;
  --panel-width-mobile: 100%;
  --panel-padding: 4rem 2rem;
  --panel-padding-mobile: 3rem 1.5rem;
  
  --close-size: 3rem;
  --close-color: var(--color-white);
  --close-top: 2rem;
  --close-side: 2rem;
  --close-hover-color: var(--color-red);
  --close-transition: color 0.2s;
  
  --transition-duration: 0.3s;
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Actual styles */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--backdrop-bg);
  z-index: var(--backdrop-z-index);
  display: flex;
}

.overlay-panel {
  position: absolute;
  top: 0;
  height: 100%;
  background: var(--panel-bg);
  padding: var(--panel-padding);
  overflow-y: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.overlay-panel--left {
  left: 0;
}

.overlay-panel--right {
  right: 0;
}

/* Width based on breakpoints */
@media (min-width: 1201px) {
  .overlay-panel {
    width: var(--panel-width-desktop);
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .overlay-panel {
    width: var(--panel-width-tablet);
  }
}

@media (max-width: 768px) {
  .overlay-panel {
    width: var(--panel-width-mobile);
    padding: var(--panel-padding-mobile);
  }
}

.overlay-close {
  position: absolute;
  top: var(--close-top);
  background: transparent;
  border: none;
  font-size: var(--close-size);
  color: var(--close-color);
  cursor: pointer;
  transition: var(--close-transition);
  line-height: 1;
  padding: 0;
  z-index: 10;
}

.overlay-panel--left .overlay-close {
  right: var(--close-side);
}

.overlay-panel--right .overlay-close {
  left: var(--close-side);
}

.overlay-close:hover {
  color: var(--close-hover-color);
}

.overlay-content {
  margin-top: 5rem;
}

/* Backdrop fade transition */
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity var(--transition-duration) var(--transition-timing);
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}

/* Slide from left transition */
.overlay-slide-left-enter-active,
.overlay-slide-left-leave-active {
  transition: transform var(--transition-duration) var(--transition-timing);
}

.overlay-slide-left-enter-from,
.overlay-slide-left-leave-to {
  transform: translateX(-100%);
}

/* Slide from right transition */
.overlay-slide-right-enter-active,
.overlay-slide-right-leave-active {
  transition: transform var(--transition-duration) var(--transition-timing);
}

.overlay-slide-right-enter-from,
.overlay-slide-right-leave-to {
  transform: translateX(100%);
}
</style>

