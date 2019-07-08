<template lang="pug">
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home
        input(
          type="text"
          placeholder="Что я хочу посмотреть?"
          v-model="taskTitle"
          @keyup.enter="newTask"
        )
        textarea(
          type="text"
          v-model="taskDescription"
          @keyup.enter="newTask"
        )
        .option-list
          input.what-watch--radio(
            type="radio"
            id="radioFilm"
            value="Фильм"
            v-model="whatWatch"
          )
          label(
            for="radioFilm"
          ) Фильм
          input.what-watch--radio(
            type="radio"
            id="radioSerial"
            value="Сериал"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Сериал
        // TOTAL TIME
        .total-time
          // Film Time
          .total-time__film(
            v-if="whatWatch === 'Фильм'"
          )
            span.time-title Часы
            input.time-input(
              type="number"
              v-model="filmHours"
            )
            span.time-title Минуты
            input.time-input(
              type="number"
              v-model="filmMinutes"
            )
            // Show time
            p {{ filmTime }}

          // Serial Time
          .total-time__serial(
            v-if="whatWatch === 'Сериал'"
          )
            span.time-title Сколько сезонов?
            input.time-input(
              type="number"
              v-model="serialSeason"
            )
            span.time-title Сколько серий?
            input.time-input(
              type="number"
              v-model="serialSeries"
            )
            span.time-title Сколько длится одна серия? (в минутах)
            input.time-input(
              type="number"
              v-model="serialSeriesMinutes"
            )
            // Show time
            p {{ serialTime }}

        .tag-list.tag-list--add
          .ui-tag__wrapper(
            @click="tagMenuShow = !tagMenuShow"
          )
            .ui-tag
              span.tag-title Добавить тэг
              span.button-close(
                :class="{ active: !tagMenuShow }"
              )
        .tag-list.tag-list--menu(
          v-if="tagMenuShow"
        )
          input.tag-add--input(
            type="text"
            placeholder="Новый тэг"
            v-model="tagTitle"
            @keyup.enter="newTag"
          )
          .button.button-default(
            @click="newTag"
          ) Добавить
        .tag-list
          .ui-tag__wrapper(
            v-for="tag in tags"
            :key="tag.title"
          )
            .ui-tag(
              @click="addTagUsed(tag)"
              :class="{used: tag.use}"
            )
              span.tag-title {{ tag.title }}
              span.button-close
        p {{ tagsUsed }}
        .button-list
            button.button.button--round.button-primary(
              @click="newTask"
            ) Добавить

</template>

<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Фильм',

      // Total Time
      // Film
      filmHours: 1,
      filmMinutes: 30,
      // Serial
      serialSeason: 1,
      serialSeries: 11,
      serialSeriesMinutes: 40,

      tagTitle: '',
      tagMenuShow: false,
      tagsUsed: [],
      tags: [
        {
          title: 'Мелодрама',
          use: false
        },
        {
          title: 'Комедия',
          use: false
        },
        {
          title: 'Приключения',
          use: false
        }
      ]

    }
  },
  methods: {
    newTag () {
      if (this.tagTitle === '') {
        return
      }
      this.tags.push({
        title: this.tagTitle,
        used: false
      })
    },
    newTask () {
      if (this.taskTitle === '') {
        return
      }
      let time
      if (this.whatWatch === 'Фильм') {
        time = this.filmTime
      } else {
        time = this.serialTime
      }
      const task = {
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        time,
        tags: this.tagsUsed,
        completed: false,
        editing: false
      }
      this.$store.dispatch('newTask', task)
      console.log(task)
      // Reset
      this.taskTitle = ''
      this.taskDescription = ''
      this.tagsUsed = []
    },
    addTagUsed (tag) {
      tag.use = !tag.use
      if (tag.use) {
        this.tagsUsed.push({
          title: tag.title
        })
      } else {
        this.tagsUsed.splice(tag.title, 1)
      }
    },
    getHoursAndMinutes (minutes) {
      let hours = Math.trunc(minutes / 60)
      let min = minutes % 60
      return hours + ' Hours ' + min + ' Minutes '
    }
  },
  computed: {
    filmTime () {
      let min = (this.filmHours * 60) + (this.filmMinutes * 1)
      return this.getHoursAndMinutes(min)
    },
    serialTime () {
      let min = this.serialSeason * this.serialSeries * this.serialSeriesMinutes
      return this.getHoursAndMinutes(min)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tag-list
  margin-bottom 20px

.ui-tag__wrapper
  margin-right 18px
  margin-bottom 10px
  &:last-child
   margin-right 0

.ui-tag
  &.used
    background-color: #444ce0
    color #fff
    .button-close
      &:before,
      &:after
        background-color: #fff
  .button-close
    &.active
      transform: rotate(45deg)

.tag-list--menu
  display flex
  justify-content space-between
  align-items center

.tag-add--input
  margin-bottom 0
  margin-right 10px
  height 42px

.option-list
  display flex
  .what-watch--radio
    margin-right 12px
  label
    margin-right 20px
    &:last-child
      margin-right 0

.total-time
  margin-bottom 20px

.time-title
  display block
  margin-bottom 6px

.time-input
  max-width 80px
  margin-right 10px

.total-time
  p
    margin-bottom 6px
  span
    margin-right 16px
  .task-input
    max-width 80px
    margin-bottom 28px
    margin-right 10px
.button-list
   display flex
   justify-content flex-end
</style>
