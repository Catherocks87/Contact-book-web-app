<template>
    <div v-if="contact" class="edit-contact">
      <h2>Edit Contact</h2>
      <form @submit.prevent="updateContact" class="edit-form">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input v-model="contact.firstName" id="firstName" required />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input v-model="contact.lastName" id="lastName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input v-model="contact.email" id="email" type="email" required />
        </div>
        <button type="submit" class="update-btn">Update Contact</button>
      </form>
    </div>
    <div v-else class="not-found">
      <p>Contact not found</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const contact = ref(null)
  
  onMounted(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contact.value = contacts.find(c => c.id === route.params.id)
  })
  
  function updateContact() {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts = contacts.map(c =>
      c.id === contact.value.id ? { ...contact.value } : c
    )
    localStorage.setItem('contacts', JSON.stringify(contacts))
    router.push(`/contact/${contact.value.id}`)
  }
  </script>
  
  <style scoped>
  .edit-contact {
    background-color: #f8f8f8;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #333;
  }
  
  .edit-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: #333;
  }
  
  input:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
  }
  
  .update-btn {
    background-color: blueviolet;
    color: white;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .update-btn:hover {
    background-color: white;
    color: blueviolet; /* Change text color to match the original background color */
    border-color: blueviolet;
    
  }
  
  .not-found {
    text-align: center;
    margin-top: 50px;
    font-size: 1.2rem;
    color: #666;
  }
  </style>
  
  
  