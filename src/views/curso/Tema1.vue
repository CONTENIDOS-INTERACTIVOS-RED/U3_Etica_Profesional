<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Ética profesional: un compromiso humanístico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 El manual y el código ético del profesional en seguridad y salud en el trabajo (SST) son fundamentales para establecer principios y directrices en esta área, promoviendo la seguridad, salud y dignidad de los trabajadores.

    h2(data-aos="fade-left") Manual del profesional en SST
    p.mb-5 El manual tiene como objetivo proporcionar lineamientos claros y establecer procedimientos para garantizar un entorno laboral seguro. Sus contenidos principales incluyen:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Marco legal
              p Normas y leyes relacionadas con la seguridad y salud en el trabajo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Funciones y responsabilidades
              p Inspecciones, formación de personal y auditorías.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Identificación de riesgos
              p Métodos para evaluar peligros laborales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Medidas preventivas
              p Estrategias para evitar accidentes y enfermedades laborales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Protocolos de emergencia
              p Actuaciones en casos críticos, como evacuaciones y primeros auxilios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Capacitación y educación
              p Programas para concientizar a los empleados sobre seguridad y salud.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Evaluación continua
              p Herramientas para medir la efectividad de las medidas implementadas.
      
    h2(data-aos="fade-left") Código ético del profesional en SST
    p.mb-5 El código ético guía la conducta profesional, fomentando confianza y respeto hacia los trabajadores. Se basa en principios como:

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/8.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="74.5%" y="10.5%" numero="+")
                h5 Integridad
                p Actuar con honestidad y transparencia.
      
              .bg-color-white.box-shadow.p-3(x="96.5%" y="52.7%" numero="+")
                h5 Responsabilidad
                p Asumir las consecuencias de las decisiones y acciones.
      
              .bg-color-white.box-shadow.p-3(x="34.5%" y="96%" numero="+")
                h5 Respeto
                p Tratar a todos con dignidad y valorar sus derechos.
      
              .bg-color-white.box-shadow.p-3(x="3.5%" y="69.5%" numero="+")
                h5 Confidencialidad
                p Proteger información sensible.
      
              .bg-color-white.box-shadow.p-3(x="77.5%" y="89%" numero="+")
                h5 Competencia profesional
                p Mantener y mejorar habilidades y conocimientos.
              .bg-color-white.box-shadow.p-3(x="5.5%" y="28%" numero="+")
                h5 Imparcialidad
                p Evitar conflictos de interés y actuar de manera justa.
              .bg-color-white.box-shadow.p-3(x="40.5%" y="3.5%" numero="+")
                h5 Compromiso con la salud y seguridad
                p Priorizar el bienestar de los trabajadores.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La formación humanista se centra en el desarrollo integral del ser humano. Este enfoque abarca diversos conceptos como ética, valores y respeto por la dignidad humana. La ética humanista, en particular, resalta la importancia de considerar las necesidades emocionales, psicológicas y espirituales de los trabajadores.
    
    h2(data-aos="fade-left") Seguridad y salud en el trabajo (SST)
    p.mb-5 La SST se fundamenta en garantizar un entorno laboral seguro, minimizando riesgos y promoviendo el bienestar integral de los empleados. Incluye componentes esenciales como:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-2(data-aos="zoom-in-up")
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Prevención de riesgos
                p.text-center Identificación y evaluación de peligros, junto con medidas preventivas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cumplimiento normativo
                p.text-center Adherencia a leyes y regulaciones locales e internacionales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cultura de salud
                p.text-center Promoción de estilos de vida saludables y manejo del estrés y la salud mental.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Gestión de emergencias
                p.text-center Planificación y capacitación para situaciones críticas, como evacuaciones y primeros auxilios.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Equipos de protección personal
                p.text-center Uso adecuado de dispositivos como cascos, guantes y gafas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Vigilancia de la salud
                p.text-center Chequeos médicos periódicos y monitoreo continuo del estado de salud de los empleados.
    
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/9.png', alt='')
    
    h2(data-aos="fade-left") Conexión entre ética humanista y SST
    p.mb-5 La ética humanista proporciona un marco para implementar sistemas de SST que prioricen el bienestar físico, emocional y social de los trabajadores. Este enfoque implica:

    .row.align-items-start.mb-5
      .col-lg-4.order-2(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Valoración del ser humano")
            ul.lista-ul.mb-3
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Programas de bienestar físico y mental.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Políticas inclusivas que promuevan igualdad y respeto a la diversidad.
    
          .div(titulo="Participación de los empleados")
            ul.lista-ul.mb-3
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Mecanismos de retroalimentación para involucrar a los trabajadores en decisiones relacionadas con la SST.
              li.d-flex 
                i.fas.fa-check-circle.bg-color-6
                | Formación en valores como solidaridad y apoyo mutuo.
    
          .div(titulo="Impacto social")
            p Políticas éticas en SST que contribuyan al desarrollo de comunidades y entornos sociales más responsables y sostenibles.
    
    h2(data-aos="fade-left") Liderazgo ético en SST
    p.mb-5 El liderazgo ético desempeña un rol crucial para garantizar que los principios humanistas se reflejen en las políticas y prácticas organizacionales. Las estrategias incluyen:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src="@/assets/curso/tema1/18.svg", data-aos="zoom-in")
    
    p.mb-5 Un liderazgo comprometido transforma las políticas en prácticas concretas, promoviendo un ambiente laboral que prioriza el bienestar integral.
        
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La integración de la ética humanista en la SST no solo mejora el entorno laboral, sino que también fortalece la sostenibilidad y competitividad de las organizaciones. Este enfoque fomenta una fuerza laboral comprometida, motivada y resiliente, lo que impulsa el éxito organizacional a largo plazo.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/40223?page=8" target="_blank" rel="noopener noreferrer") Zaragoza Martínez, E. M. (2017). Ética y derechos humanos: ( ed.). IURE Editores. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/70131" target="_blank" rel="noopener noreferrer") Cuadros Contreras, R. (2012). Perspectivas sobre el humanismo: ( ed.). Universidad de Ibagué. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://wilfredosanguineti.wordpress.com/category/seguridad-y-salud-en-el-trabajo/ " target="_blank" rel="noopener noreferrer") Wsanguineti. (2010, 24 julio). Seguridad y salud en el trabajo – El blog de Wilfredo Sanguineti. El Blog de Wilfredo Sanguineti
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://integratedethicslabs.org/labs-overview/" target="_blank" rel="noopener noreferrer") ie:Labs Overview | Integrated Ethics Labs. (s. f.). 
    

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wms1M3P5h_k" target="_blank" rel="noopener noreferrer") Carlos Sánchez Sotomayor. (2021, 29 marzo). LA MORAL y LA ÉTICA CIENCIAS QUE ENSEÑAN 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
