<template>
  <div>
    <avans-hero
      v-bind="AvansHeroPropMapped"
      @favorite-toggled="SetFavoriteCourse"
      @enroll-clicked="EnrollInCourse"
    ></avans-hero>
  </div>
</template>

<script lang="ts" setup>
import type { AvansCourse } from '@/interfaces/AvansCourse'
import AvansHero, { type AvansHeroProps } from '../components/AvansHero.vue'
import { computed } from 'vue'
import router from '@/router'

const course: AvansCourse = {
  id: '159',
  code: 'M04337-02',
  name: 'Kennismaking met Psychologie,Brein, gedragsbeinvloeding, ontwikkelingspsychologie, gespreksvoering en ontwikkelingsfasen.',
  studycredit: 15,
  location: 'Den Bosch',
  level: 'NLQLF5',
  interests_match_score: 0.54,
  available_spots: 79,
  start_date: '2025-12-24',
  description:
    'De module bevat drie leeruitkomsten: Productieautomatisering (7 EC), Productietechnieken (4 EC) en Continu Verbeteren (4 EC). De module heeft een technisch karakter.',
  period: 'P3',
  image_url: '/M04337-02_Card.webp',
  favourite: false,
  language: 'NL',
}

const AvansHeroPropMapped = computed(() => {
  const AvansHeroProps: AvansHeroProps = {
    period: ' P3',
    studypoints: course.studycredit + ' ECTS',
    language: course.language || 'NL',
    location: course.location,
    courseCode: course.code,
    courseTitle: course.name,
    courseDescription: course.description,
    imgSrcs: course.image_url,
  }
  return AvansHeroProps
})

const SetFavoriteCourse = (isFavorite: boolean) => {
  course.favourite = isFavorite
  console.log(`Course ${course.code} favorite status: ${course.favourite}`)
}

const EnrollInCourse = () => {
  console.log(`Enrolling in course ${course.code}`)
  window.open('https://nu.nl', '_blank')
}
</script>

<style lang="scss" scoped></style>
