# BCS Prueba Técnica

Aplicación web construida con **Next**, **TypeScript** y **Tailwind CSS**.

## Arquitectura

El proyecto implementa una arquitectura **Feature-Based (orientada a dominio)** +  **Component-Based (orientada a componentes)**, donde cada feature es autónoma y contiene todo lo que necesita.

Cada feature contiene sus propios recursos organizados así:

feature/
components/     # Componentes de la feature. En esta carpeta se organiza todo basado en los componentes
constants/      # Constantes y datos estáticos
hooks/          # Hooks propios
type/           # Tipos TypeScript
page.tsx        # Página de Next.js

De esta forma es mucho más facil y rápido escalar, modificar o eliminar cosas innecesarias. El codigo se mantiene limpio y se evitan
dependencias cíclicas.


## Store (Zustand/Context)

Se utiliza **Zustand** como manejador de estado global para persistir los datos del flujo de afiliación entre pasos.
Zustan con persist guarda directamente los datos con session store o en el lugar indicado, haciendo que recuperar los datos sea muy facil. El set up, es sencillo.

Adicionalmente se hace uso de **Context** con el fin de crear providers que permiten gestionar y compartir el estado ui global de la aplicación, evitando el codigo duplicado y mejorando la escalabilidad.

## Front rutas

/home                      → Home — landing con hero y botón de inicio.

/datos-personales          → Afiliación — tipo de cliente, retoma de afiliación.

/datos-personales          → Formulario — datos básicos, financieros y términos.

/verificacion              → Verificación — simulación de oferta y resumen de datos.

/consulta-afiliacion       → Consulta — buscar solicitud por número de documento y filtro por estado.

/eventos/[id]              → Detalle — detalle de la solicitud y los eventos de la misma.

## CI/CD (Github Actions)

El proyecto cuenta con un pipeline de GitHub Actions que:

1. Obtiene el codigo
2. Descarga y cachea los node modules
3. Revisa el linter
4. Corre los tests
5. Ejecuta el build donde se levanta la imagen de Docker

## Variables de entorno

Se hizo uso de variables de entorno para simular los diferentes estados de respuesta de la api

**scenario types**

success
rejected
empty

Antes de iniciar la aplicación sera necesario crear un archivo .env.local con las siguientes variables

NEXT_PUBLIC_API_URL                                   →  ubicación del servidor de next por defecto es http://localhost:3000
NEXT_PUBLIC_API_EVENTS                                →  usar los estados del scenario
NEXT_PUBLIC_API_APPLICATIONS_ID                       →  usar los estados del scenario
NEXT_PUBLIC_API_GET_APPLICATIONS                      →  usar los estados del scenario
NEXT_PUBLIC_API_PATCH_APPLICATIONS                    →  usar los estados del scenario
NEXT_PUBLIC_API_POST_APPLICATIONS_SIMULATE            →  usar los estados del scenario
NEXT_PUBLIC_API_POST_APPLICATIONS_FINALIZE            →  usar los estados del scenario
NEXT_PUBLIC_API_POST_APPLICATIONS_ABANDON             →  usar los estados del scenario
NEXT_PUBLIC_API_POST_APPLICATIONS_CREATE              →  usar los estados del scenario



## Instalación

1. git clone del repositorio
2. Instalar dependencias **(npm run install/ npm run install --legacy-peer-deps)**