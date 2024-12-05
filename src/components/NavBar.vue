<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">PY00146</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 1
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab1/bai4">Bai 4</a></li>
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 2
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab2/bai1">Bai 1</a></li>
              <li><a class="dropdown-item" href="/lab2/bai2">Bai 2</a></li>
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 3
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab3/bai1">Bai 1</a></li>
             
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>



          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 5
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab5/bai1">Bai 1</a></li>
              <li><a class="dropdown-item" href="/lab5/bai2">Bai 2</a></li>
              <li><a class="dropdown-item" href="/lab5/bai3">Bai 3</a></li>
             
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>



          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 6
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab6/bai1">Bai 1</a></li>
              <li><a class="dropdown-item" href="/lab6/bai2">Bai 2</a></li>
              <li><a class="dropdown-item" href="/lab6/bai3">Bai 3</a></li>

              <li><a class="dropdown-item" href="/lab6/bai4">Bai 4</a></li>
             
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>


          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 7
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/lab7/bai1">Bai 1</a></li>
              <li><a class="dropdown-item" href="/lab7/bai2">Bai 2</a></li>
              <li><a class="dropdown-item" href="/lab5/bai3">Bai 3</a></li>
             
              <li><hr class="dropdown-divider" /></li>
            </ul>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
