import { Link } from "react-router-dom";
import {CalcularDanio} from "../utils/CalcularDanio"
export const ModuloPage = () => {

    let saga:string="Saiyan Saga";
    let horasEntrenamiento:number=36;

    let guerrero:string="Goku";
    const ki: number=9001;
    const enCombate: boolean=true;


    const equipoZ: string[] =["Goku", "Vegeta", "Gohan", "Piccolo"];

    const coordenadas:[number,number,string]=[55,39,"hola"]

   /* function calcularDanio(base:number, multiplicador:number):number{
        return base*multiplicador
    }
    */
    /*function calcularDanioFlecha= (base:number, multiplicador:number):number =>{
        return base*multiplicador
    }
    */

    let transformacion: string | null=null;
    transformacion = "Super saiyan";
    let estrategia: string | undefined = undefined;
    estrategia ="Transformarse a ultra instinto";

    let variableLibre: any ="Semilla del Ermitanio";
    variableLibre= 35;

    let evento: unknown ="Refuerzo";
    let eventoMayus: string|null =null;

    if(typeof evento === "string"){
        eventoMayus = evento.toUpperCase();

    }
    return (

        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            <div className="mx-auto max-w-3x1 p-8">
                <header className="mb-8 border-b border-neutral-800 pb-4">
                    <Link to="/" className="px-4 py-2 bg-amber-600 hover: bg-amber-500 text-white rounded-lg shadow-md">
                    Volver a Home</Link>
                    <h1 className="text-3x1 font-semibold text-amber-400 mt-5">
                        React + TypeScript - Módulo 1
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Fundamentos_tipos básicos, arrays y tuplas
                    </p>
                </header>
                <section className="mb-8">
                    <h2 className="text-x1 font-medium text-amber-200 mb-2">
                        Inferencia y básicos 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                        <div>
                            Saga: {saga}
                        </div>
                        <div>
                            Horas de entrenamiento: {horasEntrenamiento}
                        </div>
                        <div> Guerrero: {guerrero}</div>
                        <div>ki: {ki}</div>
                        <div> En Combate: {enCombate? "SI":"NO"}</div>
                    </div>
                </section>
                <section className="mb-8">
                    <h2 className="text-x1 font-medium text-amber-200 mb-2">
                        Arrays 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                        <div>
                            Equipo Z: {equipoZ.join(",")}
                        </div>
                    </div>

                    <h2 className="text-x1 font-medium text-amber-200 mb-2">
                        Tuplas 
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                        <div>
                            Coordenadas [x,y,saludo]: X = {coordenadas[0]} Y = {coordenadas[1]}
                            Saludo = {coordenadas[2]}                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-x1 font-medium text-amber-200 mb-2">
                        Funciones Tipadas
                    </h2>
                    <div>
                        <p> Daño (base 640 * multi 2)</p>
                        <span> {CalcularDanio(640,2)}</span>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-x1 font-medium text-amber-200 mb-2">
                        Any y unknown
                    </h2>
                    <div>
                        Any: {variableLibre}
                    </div>
                    <div>
                        Evento: {eventoMayus}
                    </div>
                </section>
            </div>
            
        </main>
    );
};