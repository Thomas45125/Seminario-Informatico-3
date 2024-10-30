class Contador {
    static cuentaTotal = 0;

    constructor(nombre, responsable) {
        this.nombre = nombre;
        this.responsable = responsable;
        this.cuentaIndividual = 0;
    }

    obtenerResponsable() {
        return this.responsable;
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual;
    }

    obtenerCuentaGlobal() {
        return Contador.cuentaTotal;
    }

    contar() {
        this.cuentaIndividual += 1;
        Contador.cuentaTotal += 1;
    }
}

const contador1 = new Contador("Contador1", "Juan");

contador1.contar();
contador1.contar();

console.log("Cuenta Total:", Contador.cuentaTotal); 
console.log("Responsable:", contador1.obtenerResponsable());
console.log("Cuenta Global:", contador1.obtenerCuentaGlobal());
console.log("Cuenta Individual:", contador1.obtenerCuentaIndividual()); 
