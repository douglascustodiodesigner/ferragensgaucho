<template>
    <ul>
        <li>
            <n-link to="/">Home</n-link>
        </li>
        <li>
            <n-link to="/about">Sobre</n-link>
        </li>
        <li>
            <n-link to="/service">Servicos</n-link>
            <ul class="sub-menu">
                <li>
                    <n-link to="/service">Service</n-link>
                </li>
                <li>
                    <n-link to="/service-details">Service Details</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/project">Project</n-link>
            <ul class="sub-menu">
                <li>
                    <n-link to="/project">Project</n-link>
                </li>
                <li>
                    <n-link to="/project-details">Project Details</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="">Pages</n-link>
            <ul class="sub-menu">
                <li>
                    <n-link to="/our-team">Our Team</n-link>
                </li>
                <li>
                    <n-link to="/our-clients">Our Clients</n-link>
                </li>
                <li>
                    <n-link to="/our-working-process">Our Working Process</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/blog-left-sidebar">Blog</n-link>
        </li>
        <li>
            <n-link to="/contact">Contato</n-link>
        </li>
    </ul>
</template>