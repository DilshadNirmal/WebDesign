var css = new Object();

css.library = 'bootstrap';
css.advanced = 'openprops';

let framework = {};
framework['latest'] = 'astro';
framework['alwaysUsed'] = 'react';

let js3d = {
    framework: 'three.js',
    framework1: 'matter.js'
};

let outerobject = {},
innerObject = {};

outerobject = {
    text: 'there is an inner Object',
    innerObject : {
        value: true
    }
}

outerobject.innerObject.number = 34;