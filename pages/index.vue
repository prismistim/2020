<template lang="pug">
  .container
    section
      p.akeome あけましておめでとうございます。
        br
        | 昨年は大変お世話になりました。
        br
        | 昨年自分にとっては空気で揺れた年でした。
        br
        | 何もかも何となくな一年でした。
        br
        | 今年はもっと実りある一年にしたいです。
        br
        | 今年もどうぞよろしくお願いします。
        br
        | snowsphere / スタのん / ユキソラ / 海月
    section
      h2.section-title Omikuji 2020
      p.description 運勢とおすすめの音楽を勝手に押し付けます(くだらないので注意)
      nuxt-link.link-btn(to="/fortune") おみくじを引く
    //- section
    //-   h2.section-title 2019
    //-   ul.done-list
    //-     li.list-item
    //-       h3.list-item-title 音楽を作った
    //-     li.list-item
    //-       h3.list-item-title 寄せ書き用サイトを作った
    //-     li.list-item
    //-       h3.list-item-title 広報を作った
    //- section
    //-   h2.section-title 2020
    //-   ul.done-list
    //-     li.list-item
    //-       h3.list-item-title 音楽ゲームを完成させる
    //-     li.list-item
    //-       h3.list-item-title 寄せ書き用サイトを作った
    //-     li.list-item
    //-       h3.list-item-title 広報を作った


</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
