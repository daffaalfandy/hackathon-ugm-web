<template>
  <div class="custom-navbar shadow" style="padding: 0rem">
    <b-navbar toggleable="md" type="light">
      <b-navbar-brand href="#">
        <img
          src="../assets/logo.png"
          alt="Hackathon Logo"
          class="navbar-logo custom-logo"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="custom-nav-item"
            ><div class="nav-text">Home</div></b-nav-item
          >
          <b-nav-item to="/subtema" class="custom-nav-item"
            ><div class="nav-text">Subtema</div></b-nav-item
          >
          <b-nav-item to="/timeline" class="custom-nav-item"
            ><div class="nav-text">Timeline</div></b-nav-item
          >
          <b-nav-item to="/prizes" class="custom-nav-item"
            ><div class="nav-text">Prizes</div></b-nav-item
          >
          <b-nav-item to="/judges" class="custom-nav-item"
            ><div class="nav-text">Judges</div></b-nav-item
          >
          <b-nav-item to="/sk" class="custom-nav-item"
            ><div class="nav-text">S&K</div></b-nav-item
          >
          <div class="custom-nav-item">
            <b-nav-item-dropdown right text="Pendaftaran & Pengumpulan">
              <!-- Using 'button-content' slot -->
              <b-dropdown-item href="#">Pendaftaran</b-dropdown-item>
              <b-dropdown-item href="#">Pengumpulan</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
