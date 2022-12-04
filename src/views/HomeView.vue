<script setup>
import { SchemaOrgDebug, SchemaOrgQuestion } from "@vueuse/schema-org/runtime";
import { computed } from "vue";

const questions = computed(() => {
  return [
    {
      question: "Question 1",
      answer: `Answer ${String(Math.round(Math.random() * (10 - 0) + 0))}`,
    },
    {
      question: "Question 2",
      answer: `Answer ${String(Math.round(Math.random() * (10 - 0) + 0))}`,
    },
    {
      question: "Question 3",
      answer: `Answer ${String(Math.round(Math.random() * (10 - 0) + 0))}`,
    },
    {
      question: "Question 4",
      answer: `Answer ${String(Math.round(Math.random() * (10 - 0) + 0))}`,
    },
  ];
});
</script>

<template>
  <main>
    <SchemaOrgDebug />
    <SchemaOrgQuestion
      v-for="faq in questions"
      :key="faq.answer"
      :name="faq.question"
      :accepted-answer="faq.answer"
    >
    </SchemaOrgQuestion>

    <ul>
      <li v-for="faq in questions" :key="faq.answer">
        {{ faq.question }}
        <br />
        {{ faq.answer }}
        <hr />
      </li>
    </ul>
  </main>
</template>
