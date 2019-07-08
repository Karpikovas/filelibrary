<template lang="pug">
  .content-wrapper
    section
      .container
        .task-list__header
          h1.ui-title-1 Задачи
          .buttons-list
            .button.button--round.button-warning(
              @click="filter = 'active'"
            ) Активные
            .button.button--round.button-success(
              @click="filter = 'completed'"
            ) Выполненные
            .button.button--round.button-light(
              @click="filter = 'all'"
            ) Все
        .task-list
          .task-item(
            v-for="task in tasksFilter"
            :key="task.id"
            :class="{ completed: task.completed }"
          )
            .ui-card.ui-card--shadow
              .task-item__info
                .task-item__main-info
                  span.ui-label.ui-label--light {{ task.whatWatch }}
                  span Общее время: {{ task.time }}
                span.button-close
              .task-item__content
                .task-item_header
                  .ui-checkbox-wrapper
                    input.ui-checkbox(
                      type='checkbox'
                      v-model="task.completed"
                    )
                  span.ui-title-2 {{ task.title }}
                .task-item__body
                  p.ui-text-regular {{ task.description }}
                .task-item__footer
                    .tag-list
                      .ui-tag__wrapper(
                        v-for="tag in task.tags"
                        :key="tag.title"
                      )
                        .ui-tag
                          span.tag-title {{ tag.title }}
</template>

<script>
export default {
  data () {
    return {
      filter: 'active'
    }
  },
  computed: {
    tasksFilter () {
      if (this.filter === 'active') {
        return this.$store.getters.taskNoCompleted
      } else if (this.filter === 'completed') {
        return this.$store.getters.taskCompleted
      } else if (this.filter === 'all') {
        return this.$store.getters.tasks
      }
      return this.filter === 'active'
    }
  }
}
</script>

<style lang="stylus" scoped>
.task-list__header
  display flex
  justify-content space-between
  align-items center
  margin-bottom 30px
  .ui-title-1
    margin-bottom 0
  .button
    margin-right 8px

.task-item
  margin-bottom 28px
  .ui-checkbox:checked:before
    border-color #909399
  &:last-child
    margin-bottom 0
  &.completed
   .ui-title-2,
   .ui-text-regular,
   .ui-tag
     text-decoration line-through
     color #909399

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
