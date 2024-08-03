particlesJS('dot-particles-js', {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ['#ffffff', '#032b5c'],
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 6,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 2,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            out_mode: 'out',
        },
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});
