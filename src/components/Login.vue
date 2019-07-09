<template lang="pug">
  .content-wrapper
    section
      .container
        .auth
          .auth__banner
            h1.ui-title-2 banner
          .auth__form
            span.ui-title-2 Вход
            form(@submit.prevent="onSubmit")
              .form-item(:class="{ errorInput: $v.email.$error }")
                input(
                type="email"
                placeholder="Email"
                v-model="email"
                :class="{ error: $v.email.$error }"
                @change="$v.email.$touch()"
                )
                .error(v-if="!$v.email.required") Введите email
                .error(v-if="!$v.email.email") Некорректный email
              .form-item(:class="{ errorInput: $v.password.$error }")
                input(
                type="password"
                placeholder="Пароль"
                v-model="password"
                :class="{ error: $v.password.$error }"
                @change="$v.password.$touch()"
                )
                .error(v-if="!$v.password.minLength") Пароль должен быть не менее 6 символов
                .error(v-if="!$v.password.required") Введите пароль
              .buttons-list
                button.button.button-primary(
                type="submit"
                :disabled="submitStatus === 'PENDING'"
                ) Войти
              .buttons-list.button-list--info
                span Создать аккаунт?
                router-link(to="/registration")    Создать

</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .auth
    display flex

  .auth__banner
  .auth__form
    width 50%

  .form-item
    .error
      display none
      margin-bottom 8px
      font-size 13.4px
      color #fc5c65
    &.errorInput
      .error
        display block

  input
    &.error
      border-color #fc5c65

  .buttons-list
    text-align right
    margin-bottom 20px
    &.buttons-list--info
      text-align ccenter
      &:last-child
        margin-bottom 0
</style>
