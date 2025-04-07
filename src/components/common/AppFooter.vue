<template>
    <footer class="bg-black text-white rounded-3xl mt-28 mb-8 p-16 w-[90%] mx-auto">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Tools & API Column -->
                <div>
                    <h3 class="text-xl font-medium mb-6">Tools & API</h3>
                    <ul class="space-y-4">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">API Documentation</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Desktop App</a></li>
                    </ul>

                    <h3 class="text-xl font-medium mt-12 mb-6">Company</h3>
                    <ul class="space-y-4">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Blog</a></li>
                    </ul>
                </div>

                <!-- How To Use Column -->
                <div>
                    <h3 class="text-xl font-medium mb-6">How To Use</h3>
                    <ul class="space-y-4">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Car Dealers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Developers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Designers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Individuals</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Marketers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Media</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Ecommerce</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Photographers</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Enterprises</a></li>
                    </ul>
                </div>

                <!-- Support Column -->
                <div>
                    <h3 class="text-xl font-medium mb-6">Support</h3>
                    <ul class="space-y-4">
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Refund Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition">Cancellation Policy</a></li>
                    </ul>
                </div>

                <!-- Get Updates Column -->
                <div>
                    <h3 class="text-3xl font-semibold mb-4">Get Updates</h3>
                    <p class="text-gray-300 mb-8">Sign up for our mailing list and we will let you know when we release
                        new features or updates.</p>

                    <div class="mb-4">
                        <label for="email" class="block text-gray-300 mb-2">Email address</label>
                        <div class="flex gap-4">
                            <input type="email" id="email" placeholder="Input your email address"
                                class="w-full bg-gray-900 bg-opacity-50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <button
                                class="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-3 flex items-center transition">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Horizontal Line -->
            <div class="border-t border-gray-700 my-12"></div>

            <!-- Footer Bottom -->
            <div class="flex flex-col md:flex-row md:justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-gray-500">Copyright 2019 - 2025 Removal.AI - All rights reserved.</p>
                </div>
                <div class="flex gap-8">
                    <a href="#" class="text-gray-400 hover:text-white transition">Twitter</a>
                    <a href="#" class="text-gray-400 hover:text-white transition">Pinterest</a>
                    <a href="#" class="text-gray-400 hover:text-white transition">Facebook</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup></script>