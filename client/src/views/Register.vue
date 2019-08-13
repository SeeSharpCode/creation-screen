<template>
  <div>
    <h1>Register</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="emailGroup"
        label="Email address"
        label-for="email"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

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
      onSubmit(evt) {
        evt.preventDefault();

        axios.post('https://localhost:5001/api/accounts', {
            username: this.form.username,
            password: this.form.password
        })
        .then(response => {
            console.log(response);
            this.$router.push('/login');
        })
        .catch(error => {
            console.log(error);
        });
      },
      onReset(evt) {
        evt.preventDefault();
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