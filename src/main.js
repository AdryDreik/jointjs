'use strict';

// Creando el modelo
const graph = new joint.dia.Graph;

// Creando el lienzo donde se graficara el elemento
const paper = new joint.dia.Paper({
    el: $('#canvas'),
    width: window.screen.width,
    height: window.screen.height,
    model: graph,
    gridSize: 1
});

// Creando un rectangulo persona
/**
 * @attribute {position} Es la posicion del elemento respecto al lienzo 
 * @attribute {size} Es el tamaño del objeto creado i.e. (rect)
 * @attribute {attrs} Los atributos del objeto creado i.e (rect)
 */
const persona = new joint.shapes.basic.Rect({
    position: {
        x: 100,
        y: 30
    },
    size: {
        width: 100,
        height: 50
    },
    attrs: {
        rect: {
            fill: 'orange'
        },
        text: {
            text: 'Persona',
            fill: 'white'
        }
    }
});

// Creando un rectangulo Empresa
const empresa = new joint.shapes.basic.Rect({
    position: {
        x: 500,
        y: 30
    },
    size: {
        width: 100,
        height: 50
    },
    attrs: {
        rect: {
            fill: '#2C3E50',
            stroke: 'black',
            rx:5,
            ry:5,
            'stroke-width':2,
            stroke:'black'
        },
        text: {
            text: 'Empresa',
            fill: 'white'
        }
    }
});

// Agrupador
const link = new joint.dia.Link({
    source: {
        id: persona.id
    },
    target: {
        id: empresa.id
    }
});

graph.addCells([persona, empresa, link]);
empresa.on('change', (element) => {
    console.log('------------------------------------');
    console.log(element);
    console.log('------------------------------------');
})
