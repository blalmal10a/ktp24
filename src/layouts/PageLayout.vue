<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="bg-dark text-grey-3"
      style="backdrop-filter: blur(10px)"
    >
      <q-toolbar>
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
      <h1>CKTP Conference Hla Bu - 2024</h1>
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
/* Heading 1: Approximately 32px (2 * 16px) */
h1 {
  font-size: 2rem;
  line-height: 1.2;


  /* Default margin-top */
  margin-bottom: 0.67em;
  /* Default margin-bottom */
}

/* Heading 2: Approximately 24px (1.5 * 16px) */
h2 {
  font-size: 1.5rem;
  line-height: 1.3;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
}

/* Heading 3: Approximately 18.72px (1.17 * 16px) */
h3 {
  font-size: 1.17rem;
  line-height: 1.4;
  margin-top: 1em;
  margin-bottom: 1em;
}

/* Heading 4: Approximately 16px (1 * 16px) - often the same as body text */
h4 {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
}

/* Heading 5: Approximately 13.28px (0.83 * 16px) - smaller than body text */
h5 {
  font-size: 0.83rem;
  line-height: 1.6;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
}

/* Heading 6: Approximately 10.72px (0.67 * 16px) - significantly smaller */
h6 {
  font-size: 0.67rem;
  line-height: 1.7;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
}

body {
  padding: 0 3vw;
  padding-bottom: 20px;
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

html {
  font-size: 16px !important;
  /* 1rem = 16px */
}
</style>