<template>
  <div class="home">
    <div v-for="(user, index) in users" :key="index" class="card -shadow">
      <img :src="user.picture.medium" alt="Photo" class="avatar">
      <div class="information">
        <p class="name">{{ user.name.first }}</p>
        <p class="surname">{{ user.name.last }}</p>
        <p class="email">{{ user.email }}</p>
        <p class="phone">{{ user.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      users:[]
    }
  },
  created() {
    axios
      .get("https://randomuser.me/api/?results=10000")
      .then((response)=>this.users = response.data.results)
  }
}
</script>

<style scoped>
.home {
  display: grid;
  margin: 0 auto;
  padding-top: 20px;
  max-width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
}
.information {
  padding-left: 10px;
}
</style>
