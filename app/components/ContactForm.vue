<template>
  <div class="contact-form">
    <h2 class="contact-title">{{ $t('contact.title') }}</h2>
    
    <p class="contact-description">
      {{ $t('contact.description') }}
    </p>

    <form class="contact-form-wrapper gform" @submit.prevent="handleSubmit">
      <div class="form-field">
        <label class="form-label" for="name">{{ $t('contact.nameLabel') }}</label>
        <input 
          v-model="formData.name"
          type="text" 
          id="name"
          class="form-input" 
          name="name"
          :placeholder="$t('contact.namePlaceholder')"
          :disabled="isSubmitting"
          required
        />
      </div>

      <div class="form-field">
        <label class="form-label" for="email">{{ $t('contact.emailLabel') }}</label>
        <input 
          v-model="formData.email"
          type="email" 
          id="email"
          class="form-input" 
          :placeholder="$t('contact.emailPlaceholder')"
          name="email"
          :disabled="isSubmitting"
          required
        />
      </div>

      <div class="form-field">
        <label class="form-label" for="link">{{ $t('contact.linkLabel') }}</label>
        <input 
          v-model="formData.link"
          type="url" 
          id="link"
          class="form-input" 
          name="link"
          :placeholder="$t('contact.linkPlaceholder')"
          :disabled="isSubmitting"
        />
      </div>

      <div class="form-field">
        <label class="form-label" for="message">{{ $t('contact.messageLabel') }}</label>
        <textarea 
          v-model="formData.message"
          id="message"
          class="form-textarea" 
          :placeholder="$t('contact.messagePlaceholder')"
          rows="6"
          name="message"
          :disabled="isSubmitting"
          required
        ></textarea>
      </div>

      <div v-if="submitStatus === 'success'" class="form-message form-message-success">
        {{ $t('contact.successMessage') }}
      </div>

      <div v-if="submitStatus === 'error'" class="form-message form-message-error">
        {{ $t('contact.errorMessage') }}
      </div>

      <button type="submit" class="form-submit" :disabled="isSubmitting">
        {{ isSubmitting ? $t('contact.submittingButton') : $t('contact.submitButton') }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Form data
const formData = ref({
  name: '',
  email: '',
  link: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const submitStatus = ref(null) // null, 'success', 'error'

// Google Apps Script URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbznHdaRve4562mPQhK9-8UezP9phVNjUZgiBblrwpK8DlecX7qwRsE1tzsIAjar8WJvwQ/exec'

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.value.name)
    formDataToSend.append('email', formData.value.email)
    formDataToSend.append('link', formData.value.link)
    formDataToSend.append('message', formData.value.message)

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formDataToSend,
      mode: 'no-cors' // Google Apps Script requires this
    })

    // With mode: 'no-cors', we can't read the response
    // So we assume success if no error is thrown
    submitStatus.value = 'success'
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      link: '',
      message: ''
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)

  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'

    // Hide error message after 5 seconds
    setTimeout(() => {
      submitStatus.value = null
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* ContactForm Component Variables */
.contact-form {
  --title-font-family: var(--font-heading);
  --title-font-size: clamp(3rem, 8vw, 8rem);
  --title-font-size-ka: clamp(1.8rem, 4vw, 3.5rem);
  --title-color: var(--color-white);
  --title-margin: 0 0 2rem 0;
  --title-letter-spacing: 0.05em;
  --title-letter-spacing-ka: 0.02em;
  
  --description-font-size: clamp(1.5rem, 3vw, 2.5rem);
  --description-color: var(--color-white);
  --description-line-height: 1.6;
  --description-margin: 0 0 3rem 0;
  
  --form-gap: 2rem;
  
  --field-gap: 0.8rem;
  
  --label-font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  --label-color: var(--color-green);
  --label-font-weight: bold;
  
  --input-font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  --input-padding: 1rem 1.2rem;
  --input-bg: rgba(255, 255, 255, 0.05);
  --input-border: 2px solid var(--color-white);
  --input-border-radius: 8px;
  --input-color: var(--color-white);
  --input-focus-border: var(--color-yellow);
  --input-focus-bg: rgba(255, 255, 255, 0.08);
  --input-transition: all 0.3s ease;
  
  --textarea-min-height: 150px;
  --textarea-resize: vertical;
  
  --button-font-size: clamp(1.5rem, 3vw, 2.5rem);
  --button-font-family: var(--font-heading);
  --button-padding: 1.2rem 3rem;
  --button-bg: var(--color-red);
  --button-color: var(--color-white);
  --button-border: none;
  --button-border-radius: 8px;
  --button-cursor: pointer;
  --button-transition: all 0.3s ease;
  --button-hover-bg: var(--color-yellow);
  --button-hover-color: var(--color-black);
  --button-letter-spacing: 0.05em;
  --button-letter-spacing-ka: 0.02em;
  
  --message-font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  --message-padding: 1rem 1.5rem;
  --message-border-radius: 8px;
  --message-margin: 0;
  
  --message-success-bg: rgba(76, 175, 80, 0.2);
  --message-success-border: 2px solid var(--color-green);
  --message-success-color: var(--color-green);
  
  --message-error-bg: rgba(244, 67, 54, 0.2);
  --message-error-border: 2px solid var(--color-red);
  --message-error-color: var(--color-red);
  
  /* Actual styles */
  color: var(--input-color);
}

/* Georgian language overrides */
html[lang="ka"] .contact-form,
html[lang="ka-GE"] .contact-form {
  --title-font-family: var(--font-body-ka);
  --title-font-size: var(--title-font-size-ka);
  --title-letter-spacing: var(--title-letter-spacing-ka);
  
  --button-font-family: var(--font-body-ka);
  --button-letter-spacing: var(--button-letter-spacing-ka);
}

.contact-title {
  font-family: var(--title-font-family);
  font-size: var(--title-font-size);
  color: var(--title-color);
  margin: var(--title-margin);
  text-transform: uppercase;
  letter-spacing: var(--title-letter-spacing);
  font-weight: normal;
  line-height: 1.1;
}

.contact-description {
  font-family: var(--font-body);
  font-size: var(--description-font-size);
  color: var(--description-color);
  line-height: var(--description-line-height);
  margin: var(--description-margin);
  font-weight: normal;
}

.contact-form-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--form-gap);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--field-gap);
}

.form-label {
  font-family: var(--font-body);
  font-size: var(--label-font-size);
  color: var(--label-color);
  font-weight: var(--label-font-weight);
}

.form-input,
.form-textarea {
  font-family: var(--font-body);
  font-size: var(--input-font-size);
  padding: var(--input-padding);
  background: var(--input-bg);
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  color: var(--input-color);
  transition: var(--input-transition);
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.4;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--input-focus-border);
  background: var(--input-focus-bg);
}

.form-textarea {
  min-height: var(--textarea-min-height);
  resize: var(--textarea-resize);
  font-family: var(--font-body);
}

.form-submit {
  font-family: var(--button-font-family);
  font-size: var(--button-font-size);
  padding: var(--button-padding);
  background: var(--button-bg);
  color: var(--button-color);
  border: var(--button-border);
  border-radius: var(--button-border-radius);
  cursor: var(--button-cursor);
  transition: var(--button-transition);
  text-transform: uppercase;
  letter-spacing: var(--button-letter-spacing);
  font-weight: bold;
  align-self: flex-start;
}

.form-submit:hover {
  background: var(--button-hover-bg);
  color: var(--button-hover-color);
  transform: translateY(-2px);
}

.form-submit:active {
  transform: translateY(0);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-message {
  font-family: var(--font-body);
  font-size: var(--message-font-size);
  padding: var(--message-padding);
  border-radius: var(--message-border-radius);
  margin: var(--message-margin);
  line-height: 1.4;
}

.form-message-success {
  background: var(--message-success-bg);
  border: var(--message-success-border);
  color: var(--message-success-color);
}

.form-message-error {
  background: var(--message-error-bg);
  border: var(--message-error-border);
  color: var(--message-error-color);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-form {
    --form-gap: 1.5rem;
    --field-gap: 0.6rem;
  }
  
  .form-submit {
    align-self: stretch;
  }
}
</style>
