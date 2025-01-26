<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Manual y código ético del profesional en seguridad y salud en el trabajo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El manual y el código ético son instrumentos esenciales que proporcionan un marco normativo y ético para los profesionales dedicados a garantizar la salud y seguridad en el entorno laboral.
        p(data-aos="fade-left") El manual establece directrices claras para las funciones y responsabilidades de los profesionales en seguridad y salud en el trabajo, abarcando los siguientes aspectos principales:
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0(data-aos="zoom-in-up")
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Marco legal
                p.text-center Normativas y leyes relacionadas con la seguridad y salud en el trabajo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Funciones del profesional
                p.text-center Realización de inspecciones, formación de personal, auditorías y asesoramiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Identificación de riesgos
                p.text-center Métodos para evaluar peligros en el lugar de trabajo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Medidas preventivas
                p.text-center Estrategias y programas de capacitación para evitar accidentes y enfermedades laborales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protocolos de emergencia
                p.text-center Acciones específicas ante situaciones críticas, como evacuaciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Seguimiento y evaluación
                p.text-center Herramientas para medir la efectividad de las medidas implementadas.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 El propósito fundamental del manual es salvaguardar el bienestar de los trabajadores, garantizando un entorno laboral seguro y saludable. Esto incluye la evaluación de riesgos, la implementación de medidas preventivas y la supervisión constante de su efectividad.
    
    h2(data-aos="fade-left") Código ético del profesional en SST
    p.mb-5 El código ético del profesional en seguridad y salud en el trabajo establece un marco de principios fundamentales que orienta la conducta y las prácticas en este campo, fortaleciendo la confianza y credibilidad en sus acciones.

    .bg-full-width.bg-h85-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema2/10.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Código ético del profesional en SST"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    .bg-full-width-1.bg-fondo-3.mb-3
      .p-4.p-md-5
        h2(data-aos="fade-left") Efectos del riesgo laboral
        p.mb-5 Los riesgos laborales pueden generar diferentes tipos de patologías que afectan la salud de los trabajadores, dependiendo de su naturaleza y relación con las actividades desempeñadas
        
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Específicas	
                p.mb-0 Asociadas a accidentes de trabajo y enfermedades profesionales.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Inespecíficas
                p.mb-0 Condiciones comunes y accidentes no relacionados directamente con la actividad laboral.
    
    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-7.mb-3.mb-lg-0.order-1
        p(data-aos="fade-left") El entendimiento y aplicación rigurosa de estas directrices permiten gestionar los riesgos laborales y proteger tanto la salud como la seguridad de los trabajadores.
        h2(data-aos="fade-left") Rol y obligaciones de los profesionales en SST
        p.mb-5 Para garantizar un entorno laboral seguro, los profesionales deben:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-2.order-lg-1(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/14.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1.order-lg-2.mb-3.mb-lg-0
        AcordionA(tipo="b")
          .div(titulo="Evaluar riesgos laborales")
            ul.lista-ul.mb-3
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Identificar peligros y desarrollar políticas de salud y seguridad basadas en evidencia científica.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Proponer medidas preventivas técnicamente válidas.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Verificar la efectividad de las acciones implementadas.
    
          .div(titulo="Asesorar a empleadores y trabajadores")
            ul.lista-ul.mb-3
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Ofrecer información clara sobre riesgos y medidas de prevención.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Mantener comunicación directa con comités de salud y seguridad.
    
          .div(titulo="Promover la participación de los empleados")
            ul.lista-ul.mb-3
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Involucrar a los trabajadores en la detección de riesgos y creación de soluciones.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Implementar programas educativos y de promoción de la salud.
          .div(titulo="Respetar la confidencialidad")
            ul.lista-ul.mb-3
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Garantizar la privacidad de la información médica de los trabajadores.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Informar únicamente sobre aptitudes laborales y adaptaciones necesarias.
    
    h2(data-aos="fade-left") Fundamentos éticos de la salud ocupacional
    p.mb-5 El Código Internacional de Ética para los Profesionales de la Salud Ocupacional, desarrollado por la CISO, resalta la misión de promover la salud y el bienestar social de los trabajadores, alineándose con altos estándares éticos y profesionales. Los pilares fundamentales incluyen:

    .bg-full-width.bg-color-5.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema2/15.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            ul.lista-ul.mb-3
              li.d-flex.mb-4 
                i.fas.fa-check-circle.bg-color-6
                | Salvaguardar la vida y dignidad humana.
              li.d-flex.mb-4 
                i.fas.fa-check-circle.bg-color-6
                | Promover estándares éticos en políticas y programas.
              li.d-flex.mb-4 
                i.fas.fa-check-circle.bg-color-6
                | Actuar con integridad e imparcialidad.
              li.d-flex.mb-4 
                i.fas.fa-check-circle.bg-color-6
                | Proteger la confidencialidad de los trabajadores.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El manual y el código ético son pilares esenciales para garantizar una práctica profesional ética, un ambiente laboral seguro y el bienestar integral de los trabajadores. Estos documentos no solo establecen lineamientos normativos, sino que también promueven una cultura de prevención y compromiso organizacional con la seguridad y salud en el trabajo.
        p(data-aos="fade-left") Su implementación efectiva no solo beneficia a los empleados, sino que también contribuye al éxito y sostenibilidad de las organizaciones, reforzando la confianza de empleadores y trabajadores.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/9060?page=13" target="_blank" rel="noopener noreferrer") Aníbal Rodríguez, C. (2009). Salud y seguridad en el trabajo: desafíos de la formación profesional: ( ed.). Organización Internacional del Trabajo.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/74723?page=10" target="_blank" rel="noopener noreferrer") Arellano Díaz, J. (2008). Seguridad industrial y salud en el trabajo a bajo costo: (un enfoque práctico): ( ed.). Instituto Politécnico Nacional.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://zyght.com/blog/es/la-etica-profesional-en-seguridad-y-salud-ocupacional/ " target="_blank" rel="noopener noreferrer") Zyght. (2022, 18 agosto). La ética profesional en seguridad y salud ocupacional. ZYGHT. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cfainstitute.org/insights/professional-learning/ethics-resources/learning-lab" target="_blank" rel="noopener noreferrer") Ethics Learning Lab | CFA Institute. (s. f.). CFA Institute. 
    

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Z9xyYiv1OO4 " target="_blank" rel="noopener noreferrer") Universidad Continental - Modalidad a Distancia. (2021, 29 abril). Ética en la Vida Profesional.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=jirP8EIVdqU " target="_blank" rel="noopener noreferrer") Mtro. Luis Eduardo Perez Ortiz Cancino. (2022, 27 julio). La Ética en la Gestión Integral de Riesgos de Desastre. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Manual y código ético del profesional en seguridad y salud en el trabajo',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'La confidencialidad es un principio ético que deben seguir los profesionales en salud ocupacional.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Un entorno laboral seguro fomenta la productividad y el compromiso de los empleados.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Es importante que los profesionales en salud ocupacional se mantengan actualizados sobre el entorno laboral.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Es importante que los profesionales en salud ocupacional se mantengan actualizados sobre el entorno laboral',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Los profesionales en SST no deben estar enterados de la estrategia ni se deben alinear a ella.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
