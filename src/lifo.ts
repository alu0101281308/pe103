interface PilaDSI<T> {
    push(newItem: T): void;
    pop(): T ;
    pseek(): T ;
    size(): number;
    print(): T[];
}

/**
 * Clase para crear pilas Lifo.
 */
export class Lifo<T> implements PilaDSI<T>{
    constructor(private items: T[]) {
    }
    /**
     * Metodo que agrega un nuevo item a la pila.
     * @param newItem Item a agregar.
     */
    push(newItem: T) {
        this.items.push(newItem);
    }
     /**
     * Metodo que devuelve el ultimo valor de la pila y lo elimina.
     */
    pop(): T  {
       let item = this.items[this.items.length-1];
       this.items = this.items.slice(0, this.items.length-1);
       return item
    }
    /**
     * Metodo que devuelve el ultimo valor de la pila sin eliminarlo.
     */
    pseek(): T {
        return this.items[this.items.length-1]
    }
    /**
     * Metodo que regresa el tamaño de la pila.
     */
    size(): number {
        return this.items.length;
    }
    /**
     * Metodo que muestra por consola los elementos de la pila.
     */
    print() : T[]{
        //console.log(this.items);
        return this.items;
    }
}