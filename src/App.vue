<template>
<div>
    <!-- <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Offcanvas dark navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    </nav> -->
    <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container-fluid">
        <a class="navbar-brand float-left">Firebase Vue</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item p-3">
            <router-link class="nav-link pr-3 " to="/views">View Users</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link class="nav-link pr-3 " to="/list">Add User</router-link>
          </li>
          <li class="nav-item p-3">
            <router-link class="nav-link pr-3 " to="/"><button>logout</button></router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
        <router-view></router-view>
    </div>
</div>
</template>

<style>

  li, a, ul, div{
    font-family: 'Courier New', monospace;
    font-size: small;
  }
</style>