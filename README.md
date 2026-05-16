# Angular Core Concepts

## 1. SPA vs. MPA

### Single Page Application (SPA)

- The application loads a single HTML page and dynamically updates content using JavaScript.
- Navigation does **not trigger full page reloads**; instead, routing is handled on the client side.
- Improves performance after the initial load and provides a smoother user experience.

### Multi Page Application (MPA)

- Each user action (navigation, form submission) requests a **new HTML page from the server**.
- Leads to full page reloads and higher latency.
- Simpler architecture but less interactive compared to SPAs.

---

## 2. MVC vs. MVVM in Angular

### MVC (Model-View-Controller)

- **Model:** Manages data and business logic.
- **View:** Displays the UI.
- **Controller:** Handles user input and updates the Model/View.

### MVVM (Model-View-ViewModel)

- **Model:** Represents application data.
- **View:** UI layer.
- **ViewModel:** Acts as a bridge, exposing data and behavior to the View.

### Angular Perspective

- Angular follows an **MVVM-inspired pattern**:
  - The **component class (.ts)** acts as the ViewModel.
  - The **template (.html)** acts as the View.
  - Data binding connects both layers automatically.

---

## 3. Angular Component Files

Each Angular component is composed of multiple files working together:

### `.ts` (TypeScript)

- Defines the component class.
- Handles logic, state, and interaction with services.
- Uses decorators like `@Component()` to configure metadata.

### `.html` (Template)

- Defines the structure of the UI.
- Uses Angular syntax like directives (`*ngIf`, `*ngFor`) and bindings.

### `.css` (Styles)

- Contains styles scoped to the component.
- Helps maintain modular and reusable UI design.

### `.spec.ts` (Testing)

- Used for unit testing with frameworks like Jasmine/Karma.
- Ensures component logic behaves as expected.

---

## 4. Interpolation `{{ }}`

- A form of **one-way data binding** from the component to the template.
- Evaluates a TypeScript expression and renders its result in the DOM.

**Example:**

```html id="ex1"
<p>{{ userName }}</p>
```

- If `userName = "Yousef"` in the component, it will be displayed in the UI.
- Supports expressions (e.g., `{{ 2 + 2 }}`), but should avoid complex logic for maintainability.

---
