import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import ContactView from './views/ContactView.vue'
import AddContactView from './views/AddContactView.vue'
import EditContactView from './views/EditContactView.vue'
import './style.css'


const defaultContacts = [
  { id: '1', firstName: 'Andrea', lastName: 'Perez', email: 'andrea.perez@gmail.com' },
  { id: '2', firstName: 'William', lastName: 'James', email: 'william.james@hotmail.com' },
  { id: '3', firstName: 'John', lastName: 'Carpenter', email: 'john.carpenter@outlook.com' },
  { id: '4', firstName: 'Francisco', lastName: 'Obregon', email: 'francisco.obregon@yahoo.com' },
  { id: '5', firstName: 'Laura', lastName: 'Williams', email: 'laura.williams@gmail.com' },
  { id: '6', firstName: 'Peter', lastName: 'Brown', email: 'peter.brown@hotmail.com' },
  { id: '7', firstName: 'Wendy', lastName: 'Smith', email: 'wendy.smith@yahoo.com' },
  { id: '8', firstName: 'Gary', lastName: 'Moore', email: 'gary.moore@gmail.com' },
  { id: '9', firstName: 'Carmen', lastName: 'Donovan', email: 'carmen.donovan@algonquinlive.com' },
  { id: '10', firstName: 'Matt', lastName: 'Frank', email: 'matt.frank@outlook.com' }
];

if (!localStorage.getItem('contacts')) {
  localStorage.setItem('contacts', JSON.stringify(defaultContacts));
}

// Define routes
const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactView, props: true },
  { path: '/add', component: AddContactView },
  { path: '/edit/:id', component: EditContactView, props: true }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create and mount Vue app
const app = createApp(App)
app.use(router)
app.mount('#app')

