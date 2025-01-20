export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Ética institucional, laboral y profesional ',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ética profesional: un compromiso humanístico.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Manual y código ético del profesional en seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acevedo Acosta, J. (2011). Ética y humanismo en la educación: ( ed.). Aguascalientes, Ags. México: Universidad Autónoma de Aguascalientes. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/40729?page=20.',
    },
    {
      referencia:
        'Arredondo Trapero, F. G. (2011). La integridad del líder de empresa: ( ed.). México, D.F, Mexico: Ediciones y Gráficos Eón. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/40986?page=99.',
    },
    {
      referencia:
        'Instituto asturiano de prevención de riesgos laborales (2002). Código internacional de ética para los profesionales de la salud ocupacional. Marzo 2022 (España) ',
      link:
        'https://higieneyseguridadlaboralcvs.wordpress.com/wp-content/uploads/2012/08/codigo_etico.pdf',
    },
    {
      referencia:
        'Vallejo Dacosta, R. (2016). Marco jurídico de la seguridad y salud en el trabajo: (3 ed.). Prensas de la Universidad de Zaragoza. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/44818',
    },
  ],
  glosario: [
    {
      termino: 'Confidencialidad',
      significado:
        'protección de información sensible y personal de los trabajadores y la organización.',
    },
    {
      termino: 'Código ético',
      significado:
        'conjunto de principios y normas que guían la conducta profesional.',
    },
    {
      termino: 'Decálogo ético',
      significado:
        'lista de principios fundamentales para orientar la práctica profesional ética.',
    },
    {
      termino: 'Ética profesional',
      significado:
        'conjunto de valores y principios que guían la conducta en el ejercicio laboral.',
    },
    {
      termino: 'Imparcialidad',
      significado:
        'actuar de manera justa, sin favoritismos ni conflictos de interés.',
    },
    {
      termino: 'Integridad',
      significado:
        'mantener honestidad y consistencia en principios y acciones profesionales.',
    },
    {
      termino: 'Manual profesional',
      significado:
        'documento que establece funciones, responsabilidades y protocolos en una profesión.',
    },
    {
      termino: 'Prevención de riesgos',
      significado:
        'identificación y control de peligros para evitar accidentes laborales.',
    },
    {
      termino: 'Responsabilidad',
      significado:
        'obligación de asumir las consecuencias de las decisiones y acciones realizadas.',
    },
    {
      termino: 'Salud ocupacional',
      significado:
        'disciplina enfocada en proteger y promover el bienestar de los trabajadores.',
    },
  ],
}
