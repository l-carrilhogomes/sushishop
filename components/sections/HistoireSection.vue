<script setup>
import { motion } from "motion-v";
</script>
<template>
  <section id="histoire" class="py-20 max-w-5xl mx-auto px-6">
    <div class="mb-16 max-w-2xl mx-auto">
      <h2 class="text-3xl font-light text-gray-900 text-center mb-6">
        <span class="border-b-2 border-[#F5C518]">Notre histoire</span>
      </h2>
      <p class="text-center text-gray-600">
        Découvrez l'histoire passionnante de Sushi Shop, de nos humbles débuts à
        notre position actuelle de référence dans la gastronomie japonaise
        traditionnelle à Paris.
      </p>
    </div>

    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <motion.img
          :whileHover="{ scale: 1.01 }"
          class="w-full h-[400px] object-cover rounded"
          src="/presentation1.jpg"
          alt="Notre Passion"
        />
        <div class="flex flex-col justify-center">
          <h3 class="text-xl font-light mb-4">
            <span class="border-b-2 border-[#F5C518]">Notre Passion</span>
          </h3>
          <p class="text-gray-600">
            Chez Sushi Shop, tout commence avec une fascination profonde pour
            l'art culinaire japonais. Dès le premier jour, notre ambition a été
            de respecter les traditions ancestrales du Japon tout en les rendant
            accessibles au cœur de Paris. Nos chefs, formés auprès de maîtres
            sushi, préparent chaque plat avec une rigueur artisanale, dans le
            respect des gestes séculaires. Riz vinaigré parfaitement calibré,
            poisson d'une fraîcheur irréprochable, gestes précis : chaque détail
            compte. Notre passion se retrouve dans chaque assiette, pensée comme
            une œuvre d'art éphémère.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div class="flex flex-col justify-center order-2 md:order-1">
          <h3 class="text-xl font-light mb-4">
            <span class="border-b-2 border-[#F5C518]">Notre Évolution</span>
          </h3>
          <p class="text-gray-600">
            L'aventure Sushi Shop débute en 2008 dans un petit local du quartier
            japonais de Paris, rue Sainte-Anne. Porté par une clientèle fidèle
            et curieuse, notre restaurant a grandi sans jamais renier ses
            valeurs : authenticité, qualité et excellence. Au fil des années,
            nous avons élargi notre carte pour y inclure des plats chauds, des
            ramens maison et des bentos saisonniers, tout en nouant des liens
            étroits avec des fournisseurs de confiance, aussi bien en France
            qu'au Japon. Aujourd'hui, Sushi Shop est devenu une adresse
            incontournable pour les amateurs de cuisine japonaise
            traditionnelle.
          </p>
        </div>
        <motion.img
          :whileHover="{ scale: 1.01 }"
          class="w-full h-[400px] object-cover rounded order-1 md:order-2"
          src="/presentation2.jpg"
          alt="Notre Évolution"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.img
          :whileHover="{ scale: 1.01 }"
          class="w-full h-[400px] object-cover rounded"
          src="/presentation3.jpg"
          alt="Notre Vision"
        />
        <div class="flex flex-col justify-center">
          <h3 class="text-xl font-light mb-4">
            <span class="border-b-2 border-[#F5C518]">Notre Vision</span>
          </h3>
          <p class="text-gray-600">
            Plus qu'un restaurant, Sushi Shop aspire à devenir un véritable pont
            culturel entre le Japon et Paris. Nous souhaitons faire découvrir la
            richesse du patrimoine culinaire japonais, tout en l'inscrivant dans
            une expérience parisienne chaleureuse et contemporaine. Demain, nous
            continuerons d'innover sans jamais trahir notre promesse : proposer
            une cuisine japonaise authentique, servie avec le cœur, dans un lieu
            où le raffinement et l'accueil sont à l'honneur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
