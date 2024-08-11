<template>
    <div>
      <input v-model="searchQuery" placeholder="Search contacts" />
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const searchQuery = ref('')
  const contacts = ref(JSON.parse(localStorage.getItem('contacts')) || [])
  
  const filteredContacts = computed(() => {
    const query = searchQuery.value.toLowerCase()
    return contacts.value
      .filter(contact =>
        (contact.firstName + ' ' + contact.lastName).toLowerCase().includes(query)
      )
      .sort((a, b) => a.lastName.localeCompare(b.lastName))
  })
  </script>
  
  <style scoped>
  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
  ul {
    list-style-type: none;
    padding: 1rem;
  
    
  }
  li {
    margin: 1rem 0;
    
  }

  a {
  text-decoration: none; /* Removes the underline */
  color: black; /* Optional: set link color */
  font-weight: bold;
}
a:hover {
  text-decoration: none; /* Optional: add underline on hover */
  color:blueviolet;
}


  </style>
  
  