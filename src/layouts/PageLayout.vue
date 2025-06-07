<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="bg-dark text-grey-3"
      style="backdrop-filter: blur(10px)"
    >
      <q-toolbar>
        <q-toolbar-title class="q-mr-md">
          CKTP Conference Hla Bu 2024
        </q-toolbar-title>
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="home"
          to="/"
          aria-label="Home"
        />
        <q-btn
          flat
          dense
          round
          icon="lock"
          to="/privacy"
          aria-label="Privacy Policy"
        />
        <q-btn
          flat
          dense
          round
          icon="description"
          to="/terms"
          aria-label="Terms of Service"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'PageLayout'
}
</script>


<style>
body {
  padding: 0 3vw;
  padding-bottom: 20px;
  padding-top: 70px;
}

h1 {
  margin-bottom: 0;
}

h2 {
  margin-top: 30px;
  margin-bottom: 0;
}

h3 {
  margin-top: 5px;
  margin-bottom: 0;
}

p {
  margin-top: 3px;
}

/* HEADER STYLES */
header {
  padding: 15px;
  /* Padding for content */
  position: fixed;
  /* Fix the header to the top */
  top: 0;
  /* Position it at the top of the page */
  left: 0;
  /* Position it at the left of the page */
  width: 100%;
  /* Make it full width */
  display: flex;
  /* Allow horizontal layout for navigation */
  justify-content: space-between;
  /* Space navigation links evenly */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* Add a slight shadow */
  border-bottom: 1px solid #dfdfdf;
}

header nav a {
  color: inherit;
  /* Inherit text color from header */
  text-decoration: none;
  /* Remove underline from links */
  padding: 10px;
  /* Padding for each navigation link */
}

header nav a:hover {
  background-color: #e0e0e0;
  /* Light gray hover effect */
  cursor: pointer;
  /* Change cursor to pointer on hover */
}

/* END HEADER STYLES */
</style>