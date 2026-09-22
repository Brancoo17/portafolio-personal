document.addEventListener('DOMContentLoaded', function () {
    // --- Toggle menú móvil ---
    var navToggle = document.getElementById('navToggle');
    var siteNav = document.getElementById('siteNav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', function () {
            var isOpen = siteNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        siteNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                siteNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    var modal = document.getElementById('imgModal');
    var modalImg = document.getElementById('imgModalImg');
    var modalClose = document.getElementById('imgModalClose');

    if (modal && modalClose && modalImg) {
        document.querySelectorAll('.gallery-trigger').forEach(function (trigger) {
            trigger.addEventListener('click', function () {
                modalImg.src = trigger.getAttribute('data-modal-img');
                modalImg.alt = trigger.querySelector('img').alt;
                modal.classList.add('open');
                modal.setAttribute('aria-hidden', 'false');
            });
        });

        var closeModal = function () {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        };

        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    // --- Copiar email ---
    var copyBtn = document.getElementById('copyEmailBtn');
    var emailText = document.getElementById('emailText');

    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(emailText.textContent).then(function () {
                copyBtn.textContent = 'Copiado';
                setTimeout(function () { copyBtn.textContent = 'Copiar'; }, 2000);
            });
        });
    }

  // --- Traducciones ---
  var translations = {
    es: {
      nav_about: "Sobre mí",
      nav_stack: "Stack",
      nav_services: "Servicios",
      nav_projects: "Proyectos",
      nav_contact: "Hablemos",
      hero_eyebrow: "// disponible para proyectos",
      hero_title: "Construyo sistemas web que tu negocio realmente puede usar.",
      hero_lead: "Diseño y desarrollo paneles de gestión, tiendas online y sistemas a medida para PyMEs y emprendedores — pensados para que los uses desde el día uno, no para impresionar a otro programador.",
      hero_contact: "Contame tu proyecto",
      hero_projects: "Ver proyectos",
      about_eyebrow: "Sobre mí",
      about_title: "Código con un objetivo claro: resolver un problema concreto.",
      about_text: "Me dedico a construir software para pequeños y medianos negocios: sitios institucionales, sistemas de gestión, catálogos, paneles internos y todo lo que un negocio necesita para funcionar mejor online. Trabajo principalmente con PHP bajo un enfoque MVC y MySQL, complementado con JavaScript donde hace falta — sin depender de frameworks pesados cuando la solución no lo requiere.",
      about_fact_1: "Desarrollo a medida, no plantillas genéricas",
      about_fact_2: "Comunicación directa durante todo el proyecto",
      about_fact_3: "Foco en negocios argentinos y de habla hispana",
      stack_eyebrow: "Stack técnico",
      stack_title: "Las herramientas con las que construyo.",
      stack_1_title: "Backend",
      stack_2_title: "Frontend",
      stack_3_title: "Herramientas",
      stack_4_title: "En aprendizaje",
      services_eyebrow: "Servicios",
      services_title: "En qué puedo ayudar a tu negocio.",
      service_1_title: "Sitios web para negocios",
      service_1_desc: "Sitios institucionales y landing pages pensadas para convertir visitas en clientes: diseño, código, dominio y puesta online.",
      service_2_title: "Sistemas de gestión a medida",
      service_2_desc: "Paneles internos, catálogos, control de stock y cobros online — sistemas que se adaptan a cómo trabaja tu negocio, no al revés.",
      service_3_title: "Mantenimiento y mejoras",
      service_3_desc: "Soporte continuo sobre sitios y sistemas existentes: correcciones, nuevas funciones y actualizaciones.",
      projects_eyebrow: "Proyectos",
      projects_title: "Sistemas resueltos.",
      proj_gimnasio_title: "Sistema de Gestión para Gimnasios",
      proj_gimnasio_desc: "Antes: membresías en planillas y cobros manuales. Ahora: pagos automáticos con Mercado Pago, reserva de turnos, planes de entrenamiento y un panel único para cliente, entrenador y administrador.",
      proj_gym_title: "Sistema de Gestión para Gimnasios",
      proj_gym_desc: "Antes: membresías en planillas y cobros manuales. Ahora: pagos automáticos con Mercado Pago, reserva de turnos, planes de entrenamiento y un panel único para cliente, entrenador y administrador.",
      proj_barbershop_title: "Sistema de Gestión para Barbería",
      proj_barbershop_desc: "Antes, la barbería manejaba turnos por WhatsApp y agenda de papel: horarios pisados, clientes perdidos y ningún control sobre qué hacía cada peluquero. <br/> Armé un sistema con reservas online, roles separados para cliente, peluquero y administrador, y un panel para ver todo de un vistazo.",
      proj_delivery_title: "Sistema de Gestión para Comercios de Comida con Delivery",
      proj_delivery_desc: "Antes: pedidos por teléfono, sin control de stock ni de repartidores. Ahora: pedidos online con seguimiento en tiempo real, cálculo automático del costo de envío según distancia, control de stock por receta y panel para cocina, caja y repartidores.",
      proj_inmobiliaria_title: "Sistema para Inmobiliarias",
      proj_inmobiliaria_desc: "Sistema integral para gestión de propiedades, clientes y operaciones inmobiliarias. Incluye módulo de propiedades, administración de vendedores, subida de blogs y un panel de control para agentes inmobiliarios.",
      proj_techstore_title: "Ecommerce de Productos Tecnologicos",
      proj_techstore_desc: "Antes: ventas únicamente en el local físico y stock anotado a mano. Ahora: tienda online 24/7 con catálogo filtrable por marcas y especificaciones, pedidos directos por WhatsApp y panel interno para controlar inventario y ventas en tiempo real.",
      proj_ecommerce_title: "Ecommerce de Ropa",
      proj_ecommerce_desc: "Antes: venta presencial sin vidriera digital fuera del horario de atención. Ahora: tienda online con catálogo organizado por categorías, carrito de compras, pedidos directos por WhatsApp con total calculado y panel simple para actualizar productos y precios.",
      proj_recibos_title: "Sistema de Recibos de Sueldo",
      proj_recibos_desc: "Sistema para gestión de recibos de sueldo con autenticación de usuarios, administración de empleados, generación de recibos por período y un panel de control para administradores. Incluye funcionalidades de importación/exportación de recibos.",
      contact_eyebrow: "Contacto",
      contact_title: "¿Tenés un proyecto en mente?",
      contact_lead: "Contame qué necesita tu negocio. Te respondo con una propuesta clara de alcance y tiempos.",
      whatsapp_btn: "Escribime por WhatsApp",
      email_label: "Mi e-mail",
      copy_btn: "Copiar",
      footer_rights: "&copy; 2026 Branco. Todos los derechos reservados.",
      footer_email: "Email",
      back_link: "&larr; Volver a proyectos",
      recibos_title: "Sistema de recibos de sueldo",
      recibos_lead: "Sistema para la subida/descarga de recibos de sueldo. <br/> \n      Sistema para gestión de recibos de sueldo con autenticación de usuarios, administración de empleados, generación de recibos por período y un panel de control para administradores. Incluye funcionalidades de importación/exportación de recibos.",
      gallery_eyebrow: "Capturas",
      gallery_title: "Visuales del proyecto",
      recibos_cap_1: "Inicio de Sesión.",
      recibos_cap_2: "Crear Cuenta.",
      recibos_cap_3: "Panel de Empleado.",
      recibos_cap_4: "Muestra de recibos.",
      recibos_cap_5: "Datos y Acualización de Contraseña.",
      recibos_cap_6: "Panel de Administración.",
      recibos_cap_7: "Formulario de carga de recibos.",
      detail_eyebrow: "Detalles",
      detail_title: "El proyecto",
      problem_title: "El problema",
      recibos_problem: "Las empresas no siempre cuentan con un sistema eficiente para la gestión de recibos de sueldo, lo que puede generar problemas de organización, seguridad y acceso a la información. La falta de un sistema centralizado dificulta el control de los recibos, la gestión de empleados y la generación de reportes. Además, la falta de un sistema de autenticación puede comprometer la seguridad de la información.",
      solution_title: "La solución",
      recibos_solution: "Diseñe una plataforma integral que permite a las empresas gestionar sus recibos de sueldo de manera eficiente y segura. El sistema cuenta con autenticación de usuarios, administración de empleados, generación de recibos por período y un panel de control para administradores. Incluye funcionalidades de importación/exportación de recibos para facilitar la gestión de los mismos.",
      result_title: "Resultado",
      recibos_result: "El resultado fue una plataforma funcional y profesional, que el cliente pudo utilizar desde el primer día. Pudo gestionar sus recibos de sueldo de forma autónoma y ofrecer sus recibos a sus clientes de manera online. El sistema fue un éxito y el cliente pudo aumentar su eficiencia gracias a la implementación de este sistema.",
      cta_eyebrow: "¿Tenés un proyecto parecido?",
      cta_title: "Hablemos de tu sistema.",
      cta_contact_btn: "Contactar",
      cta_projects_btn: "Ver más proyectos",
      techstore_title: "Ecommerce de tecnología",
      techstore_lead: "Ecommerce de productos tecnológicos con carrito de compras, autenticación de usuarios y panel de administración. <br/>\n      Ecommerce de productos tecnológicos con carrito de compras, autenticación de usuarios y panel de administración. Incluye: CRUD de productos, carrito de compras persistente y flujo de checkout completo con envío de pedidos por WhatsApp. También incluye un área completa de administración: gestión de productos, gestión de categorías y marcas, gestión de pedidos y gestión de stock completo con historial y movimientos por producto.",
      techstore_cap_1: "Página principal.",
      techstore_cap_2: "Inicio. Productos destacados.",
      techstore_cap_3: "Info del local.",
      techstore_cap_4: "Datos y Mapa del local.",
      techstore_cap_5: "Catálogo de productos y filtros.",
      techstore_cap_6: "Detalle del producto.",
      techstore_cap_7: "Carrito de compras.",
      techstore_cap_8: "Página del Checkout.",
      techstore_cap_9: "Panel de administración.",
      techstore_cap_10: "Gestión de Productos.",
      techstore_cap_11: "Gestión de categorías y marcas.",
      techstore_cap_12: "Gestión de Pedidos.",
      techstore_cap_13: "Gestión de Stock. Resumen.",
      techstore_cap_14: "Gestión de Stock. Historial.",
      techstore_problem: "El negocio vendía solo en el local físico, sin catálogo online ni forma de recibir pedidos fuera del horario de atención, y sin ningún control automatizado de stock.",
      techstore_solution: "Desarrollé una plataforma integral que centraliza la gestión de inventario, ventas y productos para tiendas de informática. El sistema permite a los administradores tener visibilidad en tiempo real de los niveles de stock, gestionar categorías y marcas, y en especial gestión de productos con variaciones como CPU, ram y almacenamiento. Para los clientes, ofrece una experiencia de compra fluida con un catálogo de productos organizado, filtros inteligentes y un proceso de checkout simplificado con pedidos por WhatsApp.",
      techstore_result: "El sistema le da al negocio presencia de venta online 24/7, con pedidos automatizados por WhatsApp y control de stock que reemplaza las planillas manuales.",
      barbershop_title: "Sistema de Gestión para Barbería",
      barbershop_lead: "Antes, la barbería manejaba turnos por WhatsApp y agenda de papel: horarios pisados, clientes perdidos y ningún control sobre qué hacía cada peluquero. Armé un sistema con reservas online, roles separados para cliente, peluquero y administrador, y un panel para ver todo de un vistazo.",
      barbershop_problem: "La barbería coordinaba los turnos por WhatsApp y una libreta física. Esto generaba horarios superpuestos, pérdida de datos de clientes y ningún registro de cuántos turnos atendía cada peluquero ni qué servicios se repetían más.",
      barbershop_solution: "Desarrollé un sistema con tres roles diferenciados: el cliente reserva su turno online eligiendo peluquero y horario disponible; el peluquero ve su agenda del día y el historial de cada cliente; el administrador controla todos los turnos, gestiona los servicios ofrecidos y da de alta o baja peluqueros. Todo con autenticación propia y una base de datos que evita que dos personas reserven el mismo horario.",
      barbershop_result: "La barbería dejó de depender de WhatsApp para coordinar turnos: los clientes reservan solos, sin llamadas ni mensajes de ida y vuelta, y el dueño tiene visibilidad total de la agenda y de cada peluquero sin tener que preguntar.",
      ecommerce_title: "Ecommerce de Ropa",
      ecommerce_lead: "Tienda online para venta minorista de ropa con catálogo, carrito y checkout. <br/> \n      Realizado enteramente con PHP y MySQL, siguiendo un patrón MVC limpio y ordenado. Implementé: CRUD de productos, carrito de compras persistente y un flujo de checkout completo con cálculo de totales y envío de pedidos por WhatsApp.",
      ecommerce_btn_1: "Visitar sitio",
      ecommerce_btn_2: "Ver código fuente",
      ecommerce_cap_1: "Vista principal del sistema.",
      ecommerce_cap_2: "Info y Categorías.",
      ecommerce_cap_3: "Catálogo de Prodcutos.",
      ecommerce_cap_4: "Carrito de Compras.",
      ecommerce_cap_5: "Checkout de Compras.",
      ecommerce_cap_6: "Panel de Gestión Interno.",
      ecommerce_problem: "El negocio vendía solo en el local físico, sin catálogo online ni forma de recibir pedidos fuera del horario de atención, y sin ningún control automatizado de stock.",
      ecommerce_solution: "Desarrollé un e-commerce completo con PHP y MySQL, siguiendo una arquitectura MVC limpia y ordenada. El sistema incluye un catálogo de productos con categorías, un panel de administración para gestionar productos, autenticación de usuarios (login de administrador), un carrito de compras persistente y un flujo de checkout completo. El objetivo fue entregar una solución lista para usar, que el cliente pudiera gestionar de forma autónoma desde el primer día.",
      ecommerce_result: "El sistema le da al negocio presencia de venta online 24/7, con pedidos automatizados por WhatsApp y control de stock que reemplaza las planillas manuales.",
      inmobiliaria_title: "Sistema para Inmobiliaria",
      inmobiliaria_lead: "Antes, la inmobiliaria no tenía una forma atractiva de mostrar sus propiedades ni de gestionarlas de forma ordenada. Armé un sistema con catálogo público de propiedades, blog y panel de administración para gestionar propiedades y vendedores.",
      inmobiliaria_cap_1: "Vista principal del sistema.",
      inmobiliaria_cap_2: "Inicio. Muestra de propiedades.",
      inmobiliaria_cap_3: "Blog y Footer.",
      inmobiliaria_cap_4: "Página de propiedades.",
      inmobiliaria_cap_5: "Página de 'Nostros'.",
      inmobiliaria_cap_6: "Panel de gestión interno.",
      inmobiliaria_problem: "La inmobiliaria no contaba con un catálogo online atractivo y fácil de navegar para mostrar sus propiedades a clientes, ni con una forma centralizada de gestionar propiedades, vendedores y contenido de blog.",
      inmobiliaria_solution: "Desarrollé un sistema con catálogo público de propiedades con filtros, sección de blog y panel de administración desde el cual se gestionan propiedades, vendedores y publicaciones sin tocar código.",
      inmobiliaria_result: "El sistema le dio a la inmobiliaria un catálogo profesional y navegable para mostrar sus propiedades, y un panel simple para mantenerlo actualizado sin depender de un desarrollador para cada cambio.",
      gym_title: "Sistema de Gestión para Gimnasios",
      gym_lead: "Gestionar un gimnasio a mano significa planillas para las membresías, cobros que hay que perseguir y horarios que se arman a ojo. Armé un sistema con pagos automáticos vía Mercado Pago, paneles separados para cliente, entrenador y administrador, y gestión completa de planes, turnos y ejercicios.",
      gym_problem: "Los gimnasios suelen controlar membresías y pagos en planillas de Excel o cuadernos, sin aviso automático de quiénes están al día y quiénes no. Armar los horarios de clases y asignar entrenadores se hace a mano, y no hay un lugar único donde el cliente vea sus planes, sus turnos y su estado de pago.",
      gym_solution: "Desarrollé un sistema con tres roles: el cliente se registra, elige su plan (Crossfit, Musculación o Funcional), paga su membresía online con Mercado Pago y reserva sus turnos; el entrenador ve los horarios y ejercicios asignados a sus clases; el administrador controla membresías, pagos, planes y horarios desde un panel central, sin depender de planillas externas.",
      gym_result: "El sistema centraliza toda la gestión del gimnasio en una sola plataforma, automatizando pagos, control de acceso y comunicación con los clientes. El administrador ahorra tiempo en tareas manuales, mientras que los clientes tienen claridad sobre sus suscripciones y horarios, mejorando la experiencia general y profesionalizando el negocio.",
      delivery_title: "Sistema de Gestión para Comercios de Comida con Delivery",
      delivery_lead: "Un local de comida con delivery propio suele coordinar pedidos por teléfono o WhatsApp, sin saber en tiempo real cuánto stock queda ni dónde está cada repartidor. Armé un sistema que centraliza pedidos, calcula el costo de envío automáticamente según la distancia, controla el stock por receta y da seguimiento completo desde que se hace el pedido hasta que se entrega.",
      delivery_problem: "Los locales de comida con reparto propio (pizzerías, rotiserías, hamburgueserías) suelen tomar pedidos por teléfono o WhatsApp sin un sistema central, calculan el costo de envío a ojo, y no tienen forma de saber cuánta materia prima consumieron ni cuánto stock les queda hasta que se les termina en medio de un pedido.",
      delivery_solution: "Desarrollé un sistema con roles para dueño, empleado de cocina/caja, repartidor y cliente. El cliente arma su pedido online (con cuenta o como invitado), marca su ubicación en un mapa y el sistema calcula el costo de envío automáticamente según la distancia real al local. Cada venta descuenta el stock de insumos según la receta del producto, con alertas cuando algo está por agotarse. Cocina y caja ven los pedidos entrantes en tiempo real y los repartidores reciben las asignaciones y actualizan el estado de entrega desde su propia vista. Incluye pagos con Mercado Pago o efectivo, comprobantes internos y reportes de ventas y consumo de insumos.",
      delivery_result: "El resultado es un sistema integral que centraliza toda la operación del negocio de comida, desde la toma de pedidos hasta la entrega final. Automatiza tareas manuales, mejora la comunicación entre los roles, optimiza el control de stock y proporciona información valiosa para la toma de decisiones."
    },
    en: {
      nav_about: "About",
      nav_stack: "Stack",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Let's talk",
      hero_eyebrow: "// available for projects",
      hero_title: "I build web systems your business can actually use.",
      hero_lead: "I design and build management dashboards, online stores, and custom systems for small businesses and entrepreneurs — built to be used from day one, not to impress another developer.",
      hero_contact: "Tell me about your project",
      hero_projects: "See projects",
      about_eyebrow: "About me",
      about_title: "Code with a clear goal: solving a real problem.",
      about_text: "I build software for small and medium businesses: institutional sites, management systems, catalogs, internal dashboards, and everything a business needs to work better online. I work mainly with PHP under an MVC approach and MySQL, complemented with JavaScript where needed — without relying on heavy frameworks when the solution doesn't call for it.",
      about_fact_1: "Custom development, not generic templates",
      about_fact_2: "Direct communication throughout the project",
      about_fact_3: "Focused on Argentine and Spanish-speaking businesses",
      stack_eyebrow: "Tech stack",
      stack_title: "The tools I build with.",
      stack_1_title: "Backend",
      stack_2_title: "Frontend",
      stack_3_title: "Tools",
      stack_4_title: "Currently learning",
      services_eyebrow: "Services",
      services_title: "How I can help your business.",
      service_1_title: "Business websites",
      service_1_desc: "Institutional sites and landing pages built to convert visits into clients: design, code, domain, and deployment.",
      service_2_title: "Custom management systems",
      service_2_desc: "Internal dashboards, catalogs, stock control, and online payments — systems that adapt to how your business works, not the other way around.",
      service_3_title: "Maintenance and improvements",
      service_3_desc: "Ongoing support for existing sites and systems: fixes, new features, and updates.",
      projects_eyebrow: "Projects",
      projects_title: "Systems shipped.",
      proj_gimnasio_title: "Gym Management System",
      proj_gimnasio_desc: "Before: memberships tracked in spreadsheets, payments chased by hand. Now: automatic payments via Mercado Pago, class bookings, training plans, and one dashboard for clients, trainers, and admins.",
      proj_gym_title: "Gym Management System",
      proj_gym_desc: "Before: memberships tracked in spreadsheets, payments chased by hand. Now: automatic payments via Mercado Pago, class bookings, training plans, and one dashboard for clients, trainers, and admins.",
      proj_barbershop_title: "Barbershop Management System",
      proj_barbershop_desc: "Before, the barbershop managed appointments over WhatsApp and a paper agenda: overlapping bookings, lost client data, and no way to track how many appointments each barber handled. <br/> I built a system with online booking, separate roles for client, barber, and admin, and a dashboard that shows everything at a glance.",
      proj_delivery_title: "Management System for Food Businesses with Delivery",
      proj_delivery_desc: "Before: phone orders, no stock or delivery driver tracking. Now: online ordering with real-time tracking, automatic delivery cost calculation by distance, recipe-based stock control, and a dashboard for kitchen, register, and delivery staff.",
      proj_inmobiliaria_title: "Real Estate System",
      proj_inmobiliaria_desc: "Comprehensive system for managing properties, clients, and real estate operations. Includes a properties module, agent administration, blog uploads, and a dashboard for real estate agents.",
      proj_techstore_title: "Tech Products Ecommerce",
      proj_techstore_desc: "Before: in-store sales only and inventory tracked by hand. Now: a 24/7 online store with a catalog filterable by brand and specs, direct orders via WhatsApp, and an internal dashboard to manage stock and orders in real time.",
      proj_ecommerce_title: "Clothing Ecommerce",
      proj_ecommerce_desc: "Before: in-person sales with no digital storefront outside business hours. Now: an online store with categorized catalog, shopping cart, direct WhatsApp checkout with automatic totals, and a simple panel to update products and pricing.",
      proj_recibos_title: "Payroll Receipts System",
      proj_recibos_desc: "System for managing payroll receipts with user authentication, employee administration, receipt generation by period, and an admin dashboard. Includes receipt import/export functionality.",
      contact_eyebrow: "Contact",
      contact_title: "Got a project in mind?",
      contact_lead: "Tell me what your business needs. I'll get back to you with a clear proposal on scope and timeline.",
      whatsapp_btn: "Message me on WhatsApp",
      email_label: "My e-mail",
      copy_btn: "Copy",
      footer_rights: "&copy; 2026 Branco. All rights reserved.",
      footer_email: "Email",
      back_link: "&larr; Back to projects",
      recibos_title: "Payroll receipts system",
      recibos_lead: "System for uploading/downloading payroll receipts. <br/> \n      System for managing payroll receipts with user authentication, employee administration, receipt generation by period, and an admin dashboard. Includes receipt import/export functionality.",
      gallery_eyebrow: "Screenshots",
      gallery_title: "Project visuals",
      recibos_cap_1: "Login.",
      recibos_cap_2: "Sign up.",
      recibos_cap_3: "Employee dashboard.",
      recibos_cap_4: "Receipts view.",
      recibos_cap_5: "Profile data and password update.",
      recibos_cap_6: "Admin dashboard.",
      recibos_cap_7: "Receipt upload form.",
      detail_eyebrow: "Details",
      detail_title: "The project",
      problem_title: "The problem",
      recibos_problem: "Companies don't always have an efficient system for managing payroll receipts, which can lead to organization, security, and information access issues. The lack of a centralized system makes it harder to control receipts, manage employees, and generate reports. On top of that, the lack of an authentication system can compromise the security of the information.",
      solution_title: "The solution",
      recibos_solution: "I designed a comprehensive platform that lets companies manage their payroll receipts efficiently and securely. The system includes user authentication, employee administration, receipt generation by period, and an admin dashboard. It includes receipt import/export functionality to make managing them easier.",
      result_title: "Result",
      recibos_result: "The result was a functional, professional platform the client could use from day one. They were able to manage their payroll receipts independently and offer them to their employees online. The system was a success, and the client was able to increase their efficiency thanks to this implementation.",
      cta_eyebrow: "Got a similar project?",
      cta_title: "Let's talk about your system.",
      cta_contact_btn: "Get in touch",
      cta_projects_btn: "See more projects",
      techstore_title: "Tech Ecommerce",
      techstore_lead: "Tech products ecommerce with shopping cart, user authentication, and admin dashboard. <br/>\n      Tech products ecommerce with shopping cart, user authentication, and admin dashboard. Includes: product CRUD, persistent shopping cart, and a full checkout flow with order requests sent via WhatsApp. It also includes a complete admin area: product management, category and brand management, order management, and full stock management with history and per-product movements.",
      techstore_cap_1: "Homepage.",
      techstore_cap_2: "Home. Featured products.",
      techstore_cap_3: "Store info.",
      techstore_cap_4: "Store details and map.",
      techstore_cap_5: "Product catalog and filters.",
      techstore_cap_6: "Product detail.",
      techstore_cap_7: "Shopping cart.",
      techstore_cap_8: "Checkout page.",
      techstore_cap_9: "Admin dashboard.",
      techstore_cap_10: "Product management.",
      techstore_cap_11: "Category and brand management.",
      techstore_cap_12: "Order management.",
      techstore_cap_13: "Stock management. Overview.",
      techstore_cap_14: "Stock management. History.",
      techstore_problem: "The business only sold in-store, with no online catalog or way to take orders outside business hours, and no automated stock control.",
      techstore_solution: "I developed a comprehensive platform that centralizes inventory, sales, and product management for computer stores. The system gives admins real-time visibility into stock levels, lets them manage categories and brands, and in particular manage products with variations like CPU, RAM, and storage. For customers, it offers a smooth shopping experience with an organized product catalog, smart filters, and a simplified checkout process with orders placed via WhatsApp.",
      techstore_result: "The system gives the business 24/7 online sales presence, with automated WhatsApp orders and stock control that replaces manual spreadsheets.",
      barbershop_title: "Barbershop Management System",
      barbershop_lead: "Before, the barbershop managed appointments over WhatsApp and a paper agenda: overlapping bookings, lost client data, and no way to track how many appointments each barber handled. I built a system with online booking, separate roles for client, barber, and admin, and a dashboard that shows everything at a glance.",
      barbershop_problem: "The barbershop coordinated appointments through WhatsApp and a physical notebook. This led to double-booked time slots, lost client records, and no way to track how many appointments each barber handled or which services were most requested.",
      barbershop_solution: "I built a system with three distinct roles: clients book their own appointment online, choosing barber and available time slot; barbers see their daily schedule and each client's history; admins manage all appointments, control the services offered, and add or remove barbers. Everything runs on custom authentication with a database that prevents double bookings.",
      barbershop_result: "The barbershop no longer depends on WhatsApp to coordinate appointments — clients book on their own, with no back-and-forth messaging, and the owner has full visibility into the schedule and each barber's activity without having to ask.",
      ecommerce_title: "Clothing Ecommerce",
      ecommerce_lead: "Online store for retail clothing sales with catalog, cart, and checkout. <br/> \n      Built entirely with PHP and MySQL, following a clean, organized MVC pattern. Implemented: product CRUD, persistent shopping cart, and a full checkout flow with total calculation and order requests sent via WhatsApp.",
      ecommerce_btn_1: "Visit site",
      ecommerce_btn_2: "View source code",
      ecommerce_cap_1: "Main view of the system.",
      ecommerce_cap_2: "Info & Categories.",
      ecommerce_cap_3: "Products Catalogue.",
      ecommerce_cap_4: "Shopping cart.",
      ecommerce_cap_5: "Checkout.",
      ecommerce_cap_6: "Internal Dashboard.",
      ecommerce_problem: "The business only sold in-store, with no online catalog or way to take orders outside business hours, and no automated stock control.",
      ecommerce_solution: "I developed a complete ecommerce site with PHP and MySQL, following a clean, organized MVC architecture. The system includes a product catalog with categories, an admin dashboard for managing products, user authentication (admin login), a persistent shopping cart, and a full checkout flow. The goal was to deliver a ready-to-use solution the client could manage independently from day one.",
      ecommerce_result: "The system gives the business 24/7 online sales presence, with automated WhatsApp orders and stock control that replaces manual spreadsheets.",
      inmobiliaria_title: "Real Estate System",
      inmobiliaria_lead: "The real estate agency had no attractive way to showcase its properties or manage them in an organized way. I built a system with a public property catalog, a blog, and an admin panel to manage properties and agents.",
      inmobiliaria_cap_1: "Main view of the system.",
      inmobiliaria_cap_2: "Home. Property listings.",
      inmobiliaria_cap_3: "Blog and footer.",
      inmobiliaria_cap_4: "Properties page.",
      inmobiliaria_cap_5: "'About Us' page.",
      inmobiliaria_cap_6: "Internal dashboard.",
      inmobiliaria_problem: "The agency had no easy-to-navigate online catalog to show properties to clients, and no centralized way to manage properties, agents, and blog content.",
      inmobiliaria_solution: "I built a system with a filterable public property catalog, a blog section, and an admin panel to manage properties, agents, and posts without touching code.",
      inmobiliaria_result: "The system gave the agency a professional, browsable catalog to showcase its properties, plus a simple panel to keep it updated without depending on a developer for every change.",
      gym_title: "Gym Management System",
      gym_lead: "Running a gym by hand means spreadsheets for memberships, payments you have to chase down, and schedules built by guesswork. I built a system with automatic payments via Mercado Pago, separate dashboards for clients, trainers, and admins, and full management of plans, schedules, and exercises.",
      gym_problem: "Gyms typically track memberships and payments in spreadsheets or notebooks, with no automatic way to see who's paid and who hasn't. Class schedules and trainer assignments are built manually, and there's no single place for a client to see their plan, their bookings, and their payment status.",
      gym_solution: "I built a system with three roles: clients sign up, choose their plan (Crossfit, Strength Training, or Functional), pay their membership online via Mercado Pago, and book classes; trainers see the schedules and exercises assigned to their classes; admins control memberships, payments, plans, and schedules from a central dashboard, with no external spreadsheets needed.",
      gym_result: "The system automated payments, eliminated spreadsheet-based tracking, and gave the gym a professional online presence with easy management for clients, trainers, and admins.",
      delivery_title: "Management System for Food Businesses with Delivery",
      delivery_lead: "Running a food delivery business by phone or WhatsApp means no real-time visibility into stock or driver location. I built a system that centralizes orders, automatically calculates delivery cost by distance, tracks stock by recipe, and follows each order from placement to delivery.",
      delivery_problem: "Food businesses with their own delivery (pizzerias, delis, burger joints) typically take orders by phone or WhatsApp with no central system, estimate delivery cost by guesswork, and have no way to know how much raw material was used or how much stock is left until it runs out mid-order.",
      delivery_solution: "I built a system with roles for owner, kitchen/register staff, delivery driver, and customer. Customers place orders online (as guests or with an account), pin their location on a map, and the system calculates delivery cost automatically based on real distance. Every sale deducts ingredient stock based on the product's recipe, with low-stock alerts. Kitchen and register staff see incoming orders in real time, and drivers receive assignments and update delivery status from their own view. Includes Mercado Pago or cash payments, internal receipts, and sales/stock reports.",
      delivery_result: "The result is a comprehensive system that centralizes the entire operation of the food business, from taking orders to final delivery. It automates manual tasks, improves communication between roles, optimizes stock control, and provides valuable information for decision-making."
    }
  };


  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('siteLang', lang);
  }

  var langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    var savedLang = localStorage.getItem('siteLang') || 'es';
    applyLanguage(savedLang);
    langSwitch.querySelectorAll('.lang-option').forEach(function (opt) {
      if (opt.getAttribute('data-lang-label') === savedLang) opt.classList.add('lang-active');
      else opt.classList.remove('lang-active');
    });

    langSwitch.addEventListener('click', function () {
      var current = localStorage.getItem('siteLang') || 'es';
      var next = current === 'es' ? 'en' : 'es';
      applyLanguage(next);
      langSwitch.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.classList.toggle('lang-active', opt.getAttribute('data-lang-label') === next);
      });
    });
  }
});