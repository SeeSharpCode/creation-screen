<template>
  <div>
    <h1>Log In</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="usernameGroup" label="Username" label-for="username">
        <b-form-input
          id="username"
          v-model="form.username"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup" label="Password" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        form: {
          email: '',
          username: '',
        },
        show: true
      };
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();

        axios.post('api/accounts/login', {
            username: this.form.username,
            password: this.form.password
        })
        .then(response => {
            localStorage.setItem('accessToken', response.data);
            localStorage.setItem('username', this.form.username);
            this.$router.push('/');
        })
        .catch(error => {
            console.log(error);
        });
      },
      onReset(event) {
        event.preventDefault();
        // Reset our form values
        this.form.email = '';
        this.form.username = '';
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        })
      }
    }
  }
</script>
