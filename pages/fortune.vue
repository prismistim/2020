<template lang="pug">
  .container
    section
      h2.section-title Omikuji 2020
      .fortune-panel(v-if="result")
        h3.sub-title 結果
        .fortune-section
          .fortune-title あなたの運勢は、たぶん
          .fortune-result#result {{ result }}
          .fortune-result-detail#detail {{ detail }}
        h3.sub-title おすすめの音楽
        .fortune-section
          .fortune-music(v-if="result")
            iframe(width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" v-bind:src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + trackId + '&color=%2364c6de&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'")
        h3.sub-title 結果をシェアする
        .share-btn-group
          a.twitter-share-button(v-bind:href="'https://twitter.com/intent/tweet?text=おみくじを引いたら「' + result + '」が出ました！あなたもくだらないおみくじにチャレンジ！ https://prismistim.github.io/2020'" data-size="large") ツイート
          .line-it-button(data-lang="ja" data-type="share-a" data-ver="3" data-url="https://prismistim.github.io/2020/" data-color="default" data-size="large" data-count="false" style="display: none;")
      button.try-btn(@click="loadFortune()") 引く

      script(src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer")
</template>

<script>
import fortune_data from '@/static/data.json'

function getRand(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  data() {
    return {
      result: null,
      detail: null,
      trackId: null
    }
  },
  methods: {
    loadFortune: function() {
      let rand = getRand(0, 6)
      this.result = fortune_data[rand].fortune
      this.detail = fortune_data[rand].detail
      this.trackId = fortune_data[rand].music
    }
  }
}
</script>