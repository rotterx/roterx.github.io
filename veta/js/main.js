if ($(window).width() > 1024) {
    $('body').parallax({
        'elements': [
            {
                'selector': '.line_snow',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.1,
                            'invert': false
                        }
                    }
                }
            },
            {
                'selector': '.oleni',
                'properties': {
                    'x': {
                        'background-position-x': {
                            'initial': 0,
                            'multiplier': 0.009,
                            'invert': true
                        }
                    }
                }
            },
            {
                'selector': '.santa',
                'properties': {
                    'x': {
                        left: {
                            'initial': 0,
                            'multiplier': 0.5,
                            'invert': false
                        }
                    }
                }
            },
        ]
    });
} else {
    // change functionality for larger screens
}