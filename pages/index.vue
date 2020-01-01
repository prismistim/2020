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
    section
      h2.section-title 2019
      ul.done-list
        li.list-item
          h3.list-item-title 音楽を作った
          p.description 2019年はBMS衆議院選とBOFXVという音楽ゲームのイベントに出ました。音楽もけっこう自分の作りたい音が作れるようになってきた
            | のでこの調子で頑張りたいですね。
          iframe(width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/635567031&color=%2364c6de&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")
          iframe(width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/685538011&color=%2364c6de&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true")
        li.list-item
          h3.list-item-title 寄せ書き用サイトを作った
          p.description 卒業アルバムの寄せ書き部分が非常に狭かったので、アルバムにQRコードを載せてWebサイトに上げることにしました。
            | 覚えたてのVueで作ったのですが、Googleフォームから投稿 -> スプレッドシートをVueで読み込みみたいな感じで、電気情報工学科らしい感じに
            | なったのではないかと思います。
        li.list-item
          h3.list-item-title 広報を作った
          p.description 某自治体の広報を縁あって作ることになりました。はじめてのDTP作業は本当に探りさぐりだったので、ド素人の出来ではあったものの
            | いい経験になりました。
    section
      h2.section-title 2020
      ul.done-list
        li.list-item
          h3.list-item-title 音楽ゲームを完成させる
          p.description 半年以上前からUnityをベースにした音楽ゲーム制作をチームで行っています。今年の春にはなんとかリリースしたいなと思っていますので、
            | 良かったら遊んでください。

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
