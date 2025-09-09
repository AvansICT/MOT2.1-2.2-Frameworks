<template>
    <div class="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0 overflow-y-auto">
        <div class="p-4">
            <h1 class="text-xl font-bold mb-6">Avans Film verhuur</h1>
            <nav>
                <ul class="space-y-2">
                    <li>
                        <router-link to="/" class="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/movies" class="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                     
                            Movies
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/rentals" class="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    
                            Rentals
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/customers" class="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                        
                            Customers
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors">
                  
                            About
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
// You might need to install material icons or another icon library
// or replace the icon spans with your preferred icon components
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>