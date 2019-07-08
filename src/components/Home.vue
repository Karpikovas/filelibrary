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
        .total-time
          .total-time__film(
            v-if="whatWatch === 'Фильм'"
          )
            span Total Film Times
          .total-time__serial(
            v-if="whatWatch === 'Сериал'"
          )
            span Total Сериал Times
          .tag-list
          .ui-tag__wrapper
            .ui-tag
              span.tag-title
              span.button-close
    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .ui-card.ui-card--shadow
              .task-item__info
                .task-item__main-info
                  span.ui-label.ui-label--light {{ task.whatWatch }}
                  span Total Time:
                span.button-close
              .task-item__content
                .task-item_header
                  .ui-checkbox-wrapper
                    input.ui-checkbox(
                      type='checkbox'
                      v-model="task.completed"
                    )
                  span.ui-title-3 {{ task.title }}
                .task-item__body
                  p.ui-text-regular {{ task.description }}
</template>

<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskId: 3,
      taskDescription: '',
      whatWatch: 'Фильм'

    }
  },
  methods: {
    newTask () {
      if (this.taskTitle === '') {
        return
      }
      const task = {
        id: this.taskId,
        title: this.taskTitle,
        description: this.taskDescription,
        whatWatch: this.whatWatch,
        completed: false,
        editing: false
      }
      console.log(task)
      // Reset
      this.taskId += 1
      this.taskTitle = ''
      this.taskDescription = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.option-list
  display flex
  .what-watch--radio
    margin-right 12px
  label
    margin-right 20px
    &:last-child
      margin-right 0
</style>
