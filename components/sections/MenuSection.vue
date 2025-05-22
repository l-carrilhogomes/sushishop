<script setup>
import Card from "~/components/ui/Card.vue";
</script>
<template>
  <section id="menu" class="flex flex-col gap-4 bg-[#0a0a0a] py-10">
    <h2 class="text-4xl font-bold text-center text-white mt-10">
      <span class="border-b-2 border-[#F5C518]">La carte</span>
    </h2>
    <div class="mx-auto w-4/5 sm:w-3/5">
      <h2
        class="text-3xl font-bold mb-4 text-white mt-10 pb-2 border-b-2 border-[#F5C518] inline-block"
      >
        Les Bowls
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          :id="1"
          title="Bowl 1"
          description="Maïs, choux rouges, tomates cerises, croutons, céréales"
          image="/carte/bowl/1.jpg"
          :price="15"
          :bestSeller="true"
        />
        <Card
          :id="2"
          title="Bowl 2"
          description="Saumon, riz, algues, edamame, avocat, sésame, sauce soja"
          image="/carte/bowl/2.jpg"
          :price="15"
        />
        <Card
          :id="3"
          title="Bowl 3"
          description="Crevettes, algues, choux blanc, sésame, champignons, tomates"
          image="/carte/bowl/3.jpg"
          :price="15"
        />
      </div>
      <h2
        class="text-3xl font-bold mb-4 text-white mt-12 pb-2 border-b-2 border-[#F5C518] inline-block"
      >
        Les Sushis
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          :id="4"
          title="Sushi 1"
          description="Algues, riz, saumon"
          image="/carte/sushi/1.jpg"
          :price="15"
        />
        <Card
          :id="5"
          title="Sushi 2"
          description="Riz, saumon, fromage, algues, poudre spicy"
          image="/carte/sushi/2.jpg"
          :price="15"
        />
        <Card
          :id="6"
          title="Sushi 3"
          description="Riz, sésame, thon, avocat, mayonnaise spicy"
          image="/carte/sushi/3.jpg"
          :price="15"
          :bestSeller="true"
        />
      </div>
    </div>
  </section>
</template>
