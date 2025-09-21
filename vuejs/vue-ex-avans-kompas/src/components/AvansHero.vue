<template>
  <div class="hero-container">
    <div class="hero-image">
      <img :src="props.imgSrcs" />
    </div>
    <div class="hero-content">
      <div class="tags">
        <span class="tag p3">{{ props.period }}</span>
        <span class="tag ects">{{ props.studypoints }}</span>
        <span class="tag nl">{{ props.language }}</span>
      </div>

      <div class="location">
        <span class="location-icon">📍</span>
        <span>{{ props.location }}</span>
      </div>

      <div class="course-info">
        <p class="course-code">{{ props.courseCode }}</p>
        <h1 class="course-title">{{ props.courseTitle }}</h1>
        <p class="course-description">
          {{ props.courseDescription }}
        </p>
      </div>

      <div class="action-buttons">
        <button class="info-button">Meer info</button>
        <button class="enroll-button" @click="EnrollButtonClicked">Aanmelden via Osiris</button>
        <button class="favorite-button" :style="FavoriteIconStyle" @click="FavoriteButtonClicked">
          ❤
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

export interface AvansHeroProps {
  period: string
  studypoints: string
  language: string
  location: string
  courseCode: string
  courseTitle: string
  courseDescription: string
  imgSrcs?: string
}

//event emitters
const emit = defineEmits(['favoriteToggled', 'enrollClicked'])
//props
const props = defineProps<AvansHeroProps>()

//reactive data
const favorite = ref(false)

//computed properties
const FavoriteIconStyle = computed(() => {
  return favorite.value ? 'color: red;' : 'color: black;'
})

//methods
const FavoriteButtonClicked = (): void => {
  favorite.value = !favorite.value
  console.log('Favorite button clicked. New state:', favorite.value)
  emit('favoriteToggled', favorite.value)
}

const EnrollButtonClicked = (): void => {
  console.log('Enroll button clicked.')
  emit('enrollClicked', props.courseCode)
}

// Component logic can be added here
</script>

<style scoped>
.hero-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  display: flex;
  flex: 1;
}

.hero-content {
  padding: 24px;
}

.hero-image {
  padding: 24px;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.tags {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
}

.p3 {
  background-color: #e6d5ff;
  color: #6b21a8;
}

.ects {
  background-color: #e6d5ff;
  color: #6b21a8;
}

.nl {
  background-color: #e6d5ff;
  color: #6b21a8;
}

.location {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-color: #6b21a8;
  width: fit-content;
}

.course-info {
  margin-bottom: 24px;
}

.course-code {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.course-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.course-description {
  color: #4a4a4a;
  line-height: 1.5;
}

.action-buttons {
  display: flex;
  gap: 12px;
  align-items: center;
}

.info-button {
  padding: 8px 24px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.enroll-button {
  padding: 8px 24px;
  background-color: white;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.favorite-button {
  padding: 8px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

button:hover {
  opacity: 0.9;
}
</style>
