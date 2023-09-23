
# Home Page (index.js)

* Display a hero/banner section.
* Display featured products and featured categories sections.
* Each featured product/category card is clickable, leading to respective pages.
* Use Static Site Generation (SSG) for this page.

## PC Builder Page (builder/index.js)

* Display category sections (CPU, Motherboard, RAM, etc.).
* Each category section has a "Choose/Select" button.
* Clicking the button takes the user to the respective category page.
* Display selected components in each category section.
* Users can remove components and adjust quantities.
* "Complete Build" button is enabled when 5-6 components are added.
* Display a success alert when the user clicks the "Complete Build" button.
* Use Server-Side Rendering (SSR) for this page.

## Category Page (builder/category/[category].js)

* Display at least 3 components of the selected category.
* Each component card has an "Add to Builder" button.
* Clicking the button adds the component to the PC Builder page.
* Use Static Site Generation (SSG) for this page.

## Product Detail Page (product/[productId].js)

* Display detailed information about a specific PC component.
* Use Static Site Generation (SSG) for this page.
