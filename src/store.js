import { reactive } from "vue";

export const store = reactive({
    contact: {
        open_hours: 'Mon-Sat - 9:00-18:00 ',
        phone_number: '+1(305)1234-5678',
        email: 'hello@example.com'
    },
    jumbotron_nav: {
        home: 'home',
        services: 'services',
        about: 'about',
        projects: 'projects',
        results: 'results'
    }
})