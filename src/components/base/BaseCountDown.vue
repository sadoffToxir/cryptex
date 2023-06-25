<template>
  <h4>{{ title }}</h4>
  <div>
    <span>{{ formatMonthDay }}</span>
    <span>{{ formatTimer }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, type Ref } from 'vue';
interface Props {
  date: number
  title: string
}

const props = defineProps<Props>()

const currentTime = ref(new Date());
const timeLeft = ref(getTimeRemaining(props.date));
const intervalId = ref<Ref<null | number>>(null)

const formatTimer = computed(() => {
  const { hours, minutes, seconds } = timeLeft.value;
  let displayCount = ''
  displayCount += hours < 10 ? '0' + hours + ':' : hours + ':'
  displayCount += minutes < 10 ? '0' + minutes + ':' : minutes + ':'
  displayCount += seconds < 10 ? '0' + seconds : seconds

  return displayCount
});

const formatMonthDay = computed(() => {
  const { months, days } = timeLeft.value;


  return `${months} months ${days} days,`
})

function getTimeRemaining(endTime: number) {
  const total = endTime - currentTime.value.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24) % 30);
  const months = Math.floor(total / (1000 * 60 * 60 * 24 * 30));

  return {
    months,
    days,
    hours,
    minutes,
    seconds
  };
}

const updateCountdown = () => {
  currentTime.value = new Date();
  timeLeft.value = getTimeRemaining(props.date);
};

onMounted(() => {
  intervalId.value = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => clearInterval(intervalId.value!));
</script>
