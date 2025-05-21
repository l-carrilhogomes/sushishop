<script setup>
import { Phone, Mail, MapPin } from "lucide-vue-next";
</script>

<template>
  <section id="contact" class="py-16">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-4xl font-bold text-[#0a0a0a] text-center mb-10">
        Contactez-nous
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p class="text-gray-700 mb-4">
          Nous sommes là pour répondre à toutes vos questions et vous aider à
          planifier votre prochaine visite.
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <Phone class="w-6 h-6 text-[#0a0a0a]" />
            <p class="text-gray-700">+33 1 23 45 67 89</p>
          </div>
          <div class="flex items-center gap-2">
            <Mail class="w-6 h-6 text-[#0a0a0a]" />
            <p class="text-gray-700">contact@sushi-restaurant.com</p>
          </div>
          <div class="flex items-center gap-2">
            <MapPin class="w-6 h-6 text-[#0a0a0a]" />
            <p class="text-gray-700">123 Rue de la Paix, 75000 Paris, France</p>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <h3 class="text-2xl font-bold text-[#0a0a0a] mb-6">
          Notre emplacement
        </h3>
        <div class="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342988!2d2.3354330155963347!3d48.87456857928884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2s123%20Rue%20de%20la%20Paix%2C%2075000%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1621536234051!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>
