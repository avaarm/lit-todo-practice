import { LitElement, html} from 'lit-element'; (1)

const VisibilityFilters = { 
    SHOW_ALL: 'ALL',
    SHOW_ACTIVE: 'Active',
    SHOW_COMPLETED: 'Completed'
}


class TodoView extends LitElement {

    static get properties() {
        return{
            todos: {type:Array},
            filter: {type: String},
            task: {type: String}
        };
    }

    constructor() {
        super();
        this.todos = [];
        this.filter = VisibilityFilters.SHOW_ALL;
        this.task = '';
    }


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
// (5) Define an object with the different filter options
// (6) Define a static getter for properties that returns an object that defines the peroperty names and types 
// note - tag names need to have a dash (-) to avoid naming collisions with native HTML elements