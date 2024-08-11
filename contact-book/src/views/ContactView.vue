<template>
    <div v-if="contact" class="contact-card">
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
      <div class="actions">
        <button @click="deleteContact" class="delete-btn">Delete</button>
        <router-link :to="`/edit/${contact.id}`" class="edit-link">Edit</router-link>
      </div>
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
  
  function deleteContact() {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || []
    contacts = contacts.filter(c => c.id !== contact.value.id)
    localStorage.setItem('contacts', JSON.stringify(contacts))
    router.push('/')
  }
  </script>
  
  <style scoped>
  .contact-card {
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: #333;
  }
  
  p {
    margin-bottom: 20px;
    font-size: 1rem;
    color: #555;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .delete-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .delete-btn:hover {
    background-color: #c0392b;
  }
  
  .edit-link {
    color: blueviolet;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 20px;
    border: 2px solid blueviolet;
    border-radius: 4px;
    transition: color 0.3s ease, background-color 0.3s ease;
  }
  
  .edit-link:hover {
    color: white;
    background-color: blueviolet;
  }
  
  .not-found {
    text-align: center;
    margin-top: 50px;
    font-size: 1.2rem;
    color: #666;
  }
  </style>
  


  
  