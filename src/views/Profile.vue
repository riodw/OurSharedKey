<template>
  <div class="profile">
    <div id="menu" class="inline">
      <a class="account-option inline">
        <i class="material-icons">menu</i>
      </a>
    </div>
    <div id="account">
      <div class="top_nav-dropdown inline">
        <a class="account-option">
          <i class="material-icons account-option-icon">notifications</i>
        </a>
        <div id="menu-notifications" class="top_nav-dropdown-menu">
          <ul>
            <li>
              <a href="#">
                <span class="image"></span>
                <span class="text">Notifications</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="top_nav-dropdown inline">
        <a class="account-option">
          <i class="material-icons account-option-icon">apps</i>
        </a>
        <div id="menu-apps" class="top_nav-dropdown-menu">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://www.medtricslab.com/img/products/Medtrics_Icon.png"
                  alt="Medtrics"
                />
                <span class="text">Medtrics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://gitlab.com/uploads/-/system/project/avatar/5306776/Lightning_Logo.png"
                  alt="Thunderstorm"
                />
                <span class="text">Thunderstorm</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://gitlab.com/uploads/-/system/project/avatar/5406886/Storm_Logo.png"
                  alt="Account"
                />
                <span class="text">Account</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://www.medtricslab.com/img/products/PathFinder.png"
                  alt="PathFinder"
                />
                <span class="text">PathFinder</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://www.medtricslab.com/img/products/Attendance.png"
                  alt="Attendance"
                />
                <span class="text">Attendance</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="top_nav-dropdown inline">
        <a class="account-option">
          <i class="material-icons">account_circle</i>
        </a>
        <div id="menu-account_circle" class="top_nav-dropdown-menu">
          <ul>
            <li>
              <a href="#">
                <span class="image"></span>
                <span class="text">Account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Profile",
  inject: ["auth"],
  components: {},
};
</script>
