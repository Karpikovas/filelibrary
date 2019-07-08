<template lang="pug">
  .content-wrapper
    section
      .container
        h1.vi-title-1 Tasks
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
      tasks: [
        {
          'id': 1,
          'title': 'SOME',
          'description': 'It is smth',
          'whatWatch': 'Фильм',
          'completed': false,
          'editing': false
        },
        {
          'id': 2,
          'title': 'SOME 2',
          'description': 'It is smth 2',
          'whatWatch': 'Сериал',
          'completed': false,
          'editing': false
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.task-item
  margin-bottom 28px
  &:last-child
    margin-bottom 0

.task-item__info
  display flex
  align-items center
  justify-content space-between
  margin-bottom 20px
    .button-close
      width 20px
      height @width

.task-item_header
  display flex
  align-items center
  margin-bottom 18px
  .ui-checkbox-wrapper
    margin-right 8px
  .ui-title-3
    margin-bottom 0
.ui-label
  margin-right 8px

</style>
