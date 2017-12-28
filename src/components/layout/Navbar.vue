<template>
    <section class="hero is-bold app-navbar">
        <div class="hero-head">
            <nav class="navbar">
                <div class="navbar-item">
                    <a class="hero-brand" href="/">
                        <div>
                            <span class="vue">Vuex</span><strong class="admin">CRUD</strong>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    </section>
</template>

<style lang="scss">
    .app-navbar {
        position: fixed;
        min-width: 100%;
        z-index: 1024;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
        .container {
            margin: auto 10px;
        }
    }
    .hero-brand {
        .vue {
            margin-left: 10px;
            color: #36AC70;
        }
        .admin {
            color: #28374B;
        }
    }
</style>