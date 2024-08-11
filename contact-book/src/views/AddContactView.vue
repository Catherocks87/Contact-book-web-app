<template>
    <div>
      <h2>Add New Contact</h2>
      <form @submit.prevent="addContact">
        <div>
          <label for="firstName">First Name:</label>
          <input v-model="firstName" id="firstName" required />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input v-model="lastName" id="lastName" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" id="email" type="email" required />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const router = useRouter()
  
  function addContact() {
    const newContact = {
      id: Date.now().toString(),
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value
    }
    let contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts.push(newContact)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    router.push(`/contact/${newContact.id}`)
  }
  </script>
  