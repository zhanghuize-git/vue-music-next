<template>
  <m-header></m-header>
  <MusicTabs/>
  <router-view></router-view>
</template>

<script>
import Header from '@/components/header/header'
import MusicTabs from '@/components/tab/tab'

export default {
  components: {
    MHeader: Header,
    MusicTabs: MusicTabs
  }
}
</script>
