import { LitElement, html} from 'lit-element'; (1)

class TodoView extends LitElement {
    render() { (2)
       return html 
        ` 
        <p>todo-view<p> 
        `
    }
}

customElements.define('todo-view', TodoView); (4)

// (1) Import the LitElement base class and html template function 
// (2) Create a class for the component, extending LitElement
// (3) Define a template in the render() function using the html template function
// (4) Associate the component implementation with an HTML tag using the CustomElements registry

// note - tag names need to have a dash (-) to avoid naming collisions with native HTML elements