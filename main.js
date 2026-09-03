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
      hero_lead: "Soy Branco, desarrollador web. Diseño y construyo sitios, paneles y sistemas a medida para PyMEs y emprendedores — con código claro, prácticas ordenadas y foco en que la solución funcione desde el día uno.",
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
      service_2_desc: "Paneles internos, catálogos y sistemas que se adaptan a cómo trabaja tu negocio, no al revés.",
      service_3_title: "Mantenimiento y mejoras",
      service_3_desc: "Soporte continuo sobre sitios y sistemas existentes: correcciones, nuevas funciones y actualizaciones.",
      projects_eyebrow: "Proyectos",
      projects_title: "Sistemas resueltos.",
      proj_techstore_title: "Ecommerce de Productos Tecnologicos",
      proj_techstore_desc: "Tienda online para venta de productos tecnologicos con catálogo, carrito y checkout. <br/> <b>Desarrollado en PHP y MySQL</b> siguiendo un patrón MVC limpio y ordenado. Incluye: CRUD de productos, carrito de compras persistente y flujo de checkout completo con envío de pedidos por WhatsApp. También incluye un área completa de administración: gestión de productos, gestión de categorías y marcas, gestión de pedidos y gestión de stock completo con historial y movimientos por producto.",
      proj_ecommerce_title: "Ecommerce de Ropa",
      proj_ecommerce_desc: "Tienda online para venta minorista de ropa con catálogo, carrito y checkout. <br/>\n            Realizado enteramente con PHP y MySQL, siguiendo un patrón MVC limpio y ordenado. Implementé: CRUD de productos, carrito de compras persistente y un flujo de checkout completo con cálculo de totales y envío de pedidos por WhatsApp.",
      proj_inmobiliaria_title: "Sistema para Inmobiliarias",
      proj_inmobiliaria_desc: "Sistema integral para gestión de propiedades, clientes y operaciones inmobiliarias. Incluye módulo de propiedades, administración de vendedores, subida de blogs y un panel de control para agentes inmobiliarios.",
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
      techstore_problem: "Las tiendas minoristas de informática enfrentan el desafío constante de gestionar su inventario de manera eficiente. La falta de visibilidad en tiempo real sobre los niveles de stock, sumado a la complejidad de realizar pedidos y hacer un seguimiento de los mismos, genera pérdidas económicas y frustración tanto en el personal como en los clientes. Además, la ausencia de estadísticas claras sobre los productos más vendidos o con bajo rendimiento dificulta la toma de decisiones estratégicas para optimizar el negocio.",
      techstore_solution: "Desarrollé una plataforma integral que centraliza la gestión de inventario, ventas y productos para tiendas de informática. El sistema permite a los administradores tener visibilidad en tiempo real de los niveles de stock, gestionar categorías y marcas, y en especial gestión de productos con variaciones como CPU, ram y almacenamiento. Para los clientes, ofrece una experiencia de compra fluida con un catálogo de productos organizado, filtros inteligentes y un proceso de checkout simplificado con pedidos por WhatsApp.",
      techstore_result: "La plataforma permitió al cliente gestionar su inventario de forma eficiente, automatizando procesos que antes eran manuales y propensos a errores. La gestión de productos con variaciones facilitó enormemente la venta de equipos personalizados, permitiendo ofrecer diferentes configuraciones según las necesidades de cada cliente. El sistema de pedidos por WhatsApp simplificó la comunicación con los clientes y agilizó el proceso de venta, mejorando la experiencia general tanto para el personal como para los compradores.",
      barbershop_title: "Sistema de Gestión para Barbería",
      barbershop_lead: "Sistema integral para la gestión de una barbería, incluyendo reserva de turnos, gestión de peluqueros servicios y turnos. <br>\n   Desarrollado con PHP y MySQL, siguiendo un patrón MVC limpio y ordenado. Implementé: gestión de turnos, historial de clientes, control de peluqueros y servicios. Autenticación de usuarios y roles (Cliente, Peluquero y Administrador)",
      barbershop_problem: "La barbería necesitaba un sistema para gestionar sus turnos, clientes y servicios de manera eficiente, pero no contaba con una solución adecuada.",
      barbershop_solution: "Desarrollé un sistema integral para la gestión de una barbería, incluyendo reserva de turnos, gestión de peluqueros, servicios y turnos. El sistema fue desarrollado con PHP y MySQL, siguiendo un patrón MVC limpio y ordenado. Implementé funcionalidades para gestionar turnos, historial de clientes, control de peluqueros y servicios. También se incluyó autenticación de usuarios y roles (Cliente, Peluquero y Administrador).",
      barbershop_result: "El resultado fue un sistema funcional y profesional, que la barbería pudo utilizar desde el primer día. Pudo gestionar sus turnos de forma autónoma y ofrecer sus servicios a sus clientes de manera eficiente. El sistema fue un éxito y la barbería pudo mejorar su operación gracias a la implementación del sistema.",
      ecommerce_title: "Ecommerce de Ropa",
      ecommerce_lead: "Tienda online para venta minorista de ropa con catálogo, carrito y checkout. <br/> \n      Realizado enteramente con PHP y MySQL, siguiendo un patrón MVC limpio y ordenado. Implementé: CRUD de productos, carrito de compras persistente y un flujo de checkout completo con cálculo de totales y envío de pedidos por WhatsApp.",
      ecommerce_btn_1: "Visitar sitio",
      ecommerce_btn_2: "Ver código fuente",
      ecommerce_cap_1: "Vista principal del sistema.",
      ecommerce_cap_2: "Grid de productos.",
      ecommerce_cap_3: "Panel de gestión interno. Gestión de productos.",
      ecommerce_cap_4: "Panel de gestión interno. Gestión de pedidos.",
      ecommerce_cap_5: "Carrito de Compras.",
      ecommerce_cap_6: "Checkout de Compras.",
      ecommerce_problem: "El cliente tenía un negocio minorista y queria vender sus productos de manera online, pero no tenia un medio para hacerlo. Queria algo simple, que pueda gestionar el mismo sin necesidad de tener conocimientos tecnicos, y que le permita mostrar sus productos de manera atractiva y facil de navegar para sus clientes.",
      ecommerce_solution: "Desarrollé un e-commerce completo con PHP y MySQL, siguiendo una arquitectura MVC limpia y ordenada. El sistema incluye un catálogo de productos con categorías, un panel de administración para gestionar productos, autenticación de usuarios (login de administrador), un carrito de compras persistente y un flujo de checkout completo. El objetivo fue entregar una solución lista para usar, que el cliente pudiera gestionar de forma autónoma desde el primer día.",
      ecommerce_result: "El resultado fue un e-commerce funcional y profesional, que el cliente pudo utilizar desde el primer día. Pudo gestionar sus productos de forma autónoma y ofrecer sus productos a sus clientes de manera online. El sistema fue un éxito y el cliente pudo aumentar sus ventas gracias a la implementación del e-commerce.",
      inmobiliaria_title: "Sistema para Inmobiliaria",
      inmobiliaria_lead: "Sistema para gestión de propiedades de una inmobiliaria. <br/> \n      Sistema integral para gestión de propiedades, clientes y operaciones inmobiliarias. Incluye módulo de propiedades, administración de vendedores, subida de blogs y un panel de control para agentes inmobiliarios.",
      inmobiliaria_cap_1: "Vista principal del sistema.",
      inmobiliaria_cap_2: "Inicio. Muestra de propiedades.",
      inmobiliaria_cap_3: "Blog y Footer.",
      inmobiliaria_cap_4: "Página de propiedades.",
      inmobiliaria_cap_5: "Página de Contacto.",
      inmobiliaria_cap_6: "Panel de gestión interno.",
      inmobiliaria_problem: "La inmobiliaria no tenia un medio para mostrar sus propiedades de manera atractiva y facil de navegar para sus clientes. Tampoco tenia un medio para gestionar sus propiedades y clientes de manera organizada y eficiente.",
      inmobiliaria_solution: "Desarrollé un sistema completo con PHP y MySQL, siguiendo una arquitectura MVC limpia y ordenada. El sistema incluye un catálogo de propiedades, un panel de administración para gestionar propiedades, vendedores y blogs.",
      inmobiliaria_result: "El resultado fue una página web funcional y profesional, que el cliente pudo utilizar desde el primer día. Pudo gestionar sus propiedades de forma autónoma y ofrecer sus propiedades a sus clientes de manera online. El sistema fue un éxito y el cliente pudo aumentar sus ventas gracias a la implementación de este sistema."
    },
    en: {
      nav_about: "About",
      nav_stack: "Stack",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_contact: "Let's talk",
      hero_eyebrow: "// available for projects",
      hero_title: "I build web systems your business can actually use.",
      hero_lead: "I'm Branco, a web developer. I design and build custom websites, dashboards and systems for small and medium businesses — with clean code, solid practices, and a focus on solutions that work from day one.",
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
      service_2_desc: "Internal dashboards, catalogs, and systems that adapt to how your business works, not the other way around.",
      service_3_title: "Maintenance and improvements",
      service_3_desc: "Ongoing support for existing sites and systems: fixes, new features, and updates.",
      projects_eyebrow: "Projects",
      projects_title: "Systems shipped.",
      proj_techstore_title: "Tech Products Ecommerce",
      proj_techstore_desc: "Online store for tech products with catalog, cart, and checkout. <br/> <b>Built with PHP and MySQL</b> following a clean, organized MVC pattern. Includes: product CRUD, persistent shopping cart, and a full checkout flow with order requests sent via WhatsApp. It also includes a complete admin area: product management, category and brand management, order management, and full stock management with history and per-product movements.",
      proj_ecommerce_title: "Clothing Ecommerce",
      proj_ecommerce_desc: "Online store for retail clothing sales with catalog, cart, and checkout. <br/>\n            Built entirely with PHP and MySQL, following a clean, organized MVC pattern. Implemented: product CRUD, persistent shopping cart, and a full checkout flow with total calculation and order requests sent via WhatsApp.",
      proj_inmobiliaria_title: "Real Estate System",
      proj_inmobiliaria_desc: "Comprehensive system for managing properties, clients, and real estate operations. Includes a properties module, agent administration, blog uploads, and a dashboard for real estate agents.",
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
      techstore_problem: "Retail computer stores constantly struggle to manage their inventory efficiently. The lack of real-time visibility into stock levels, combined with the complexity of placing and tracking orders, causes financial losses and frustration for both staff and customers. On top of that, the absence of clear statistics on best- and worst-selling products makes it harder to make strategic decisions to optimize the business.",
      techstore_solution: "I developed a comprehensive platform that centralizes inventory, sales, and product management for computer stores. The system gives admins real-time visibility into stock levels, lets them manage categories and brands, and in particular manage products with variations like CPU, RAM, and storage. For customers, it offers a smooth shopping experience with an organized product catalog, smart filters, and a simplified checkout process with orders placed via WhatsApp.",
      techstore_result: "The platform let the client manage their inventory efficiently, automating processes that used to be manual and error-prone. Managing products with variations made it much easier to sell custom-built equipment, offering different configurations based on each customer's needs. The WhatsApp order system streamlined communication with customers and sped up the sales process, improving the overall experience for both staff and buyers.",
      barbershop_title: "Barbershop Management System",
      barbershop_lead: "Comprehensive barbershop management system, including appointment booking, barber, service, and schedule management. <br>\n   Built with PHP and MySQL, following a clean, organized MVC pattern. Implemented appointment management, customer history, barber and service management, plus user authentication and roles (Customer, Barber, and Administrator).",
      barbershop_problem: "The barbershop needed a system to manage appointments, customers, and services efficiently, but did not have a suitable solution.",
      barbershop_solution: "I developed a comprehensive barbershop management system, including appointment booking, barber, service, and schedule management. The system was built with PHP and MySQL, following a clean, organized MVC pattern. I implemented appointment management, customer history, barber and service management, as well as user authentication and roles (Customer, Barber, and Administrator).",
      barbershop_result: "The result was a functional, professional system the barbershop could use from day one. They were able to manage appointments independently and offer their services to customers more efficiently. The system was a success and helped improve the barbershop's operations.",
      ecommerce_title: "Clothing Ecommerce",
      ecommerce_lead: "Online store for retail clothing sales with catalog, cart, and checkout. <br/> \n      Built entirely with PHP and MySQL, following a clean, organized MVC pattern. Implemented: product CRUD, persistent shopping cart, and a full checkout flow with total calculation and order requests sent via WhatsApp.",
      ecommerce_btn_1: "Visit site",
      ecommerce_btn_2: "View source code",
      ecommerce_cap_1: "Main view of the system.",
      ecommerce_cap_2: "Product grid.",
      ecommerce_cap_3: "Internal dashboard. Product management.",
      ecommerce_cap_4: "Internal dashboard. Order management.",
      ecommerce_cap_5: "Shopping cart.",
      ecommerce_cap_6: "Checkout.",
      ecommerce_problem: "The client had a retail business and wanted to sell their products online, but had no way to do it. They wanted something simple, that they could manage themselves without technical knowledge, and that would let them showcase their products in an appealing, easy-to-browse way for their customers.",
      ecommerce_solution: "I developed a complete ecommerce site with PHP and MySQL, following a clean, organized MVC architecture. The system includes a product catalog with categories, an admin dashboard for managing products, user authentication (admin login), a persistent shopping cart, and a full checkout flow. The goal was to deliver a ready-to-use solution the client could manage independently from day one.",
      ecommerce_result: "The result was a functional, professional ecommerce site the client could use from day one. They were able to manage their products independently and offer them to their customers online. The system was a success, and the client was able to increase their sales thanks to the ecommerce implementation.",
      inmobiliaria_title: "Real Estate System",
      inmobiliaria_lead: "System for managing a real estate agency's properties. <br/> \n      Comprehensive system for managing properties, clients, and real estate operations. Includes a properties module, agent administration, blog uploads, and a dashboard for real estate agents.",
      inmobiliaria_cap_1: "Main view of the system.",
      inmobiliaria_cap_2: "Home. Property listings.",
      inmobiliaria_cap_3: "Blog and footer.",
      inmobiliaria_cap_4: "Properties page.",
      inmobiliaria_cap_5: "Contact page.",
      inmobiliaria_cap_6: "Internal dashboard.",
      inmobiliaria_problem: "The real estate agency had no way to showcase their properties in an appealing, easy-to-browse way for their clients. They also had no way to manage their properties and clients in an organized, efficient manner.",
      inmobiliaria_solution: "I developed a complete system with PHP and MySQL, following a clean, organized MVC architecture. The system includes a property catalog and an admin dashboard for managing properties, agents, and blog posts.",
      inmobiliaria_result: "The result was a functional, professional website the client could use from day one. They were able to manage their properties independently and offer them to their clients online. The system was a success, and the client was able to increase their sales thanks to this implementation."
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