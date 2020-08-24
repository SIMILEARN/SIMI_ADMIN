const _estrategiaMap = [
  {
    mapId: 'estrategiaMap',
    idProperty: 'id_estrategia',
    properties: ['nombre_estrategia'],
    collections: [
      { name: 'respuestas', mapId: 'respuestasMap', columnPrefix: 'actividad_' },
    ]
  }, 
  {
    mapId: 'actividadMap',
    idProperty: 'id_actividad',
    properties: ['actividad']
  },

]

module.exports = _estrategiaMap

