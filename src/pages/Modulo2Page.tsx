import {useState} from "react";
import { Link } from "react-router-dom";

type ContadorProps = {
    initial?:number;
    step?:number
}

export const Modulo2Page = ({initial=0, step=1}:ContadorProps) =>{
    const [count,setCount]=useState<number>(initial)
    const inc=()=>setCount((c)=>c+step)   
    const dec=()=>setCount((c)=>c-step)

    const[tazas,setTazas]=useState<number>(1);
    type Ingredientes = "agua" |"cafe" | "azucar"
    
    type RecetaCafe ={
        agua: number;
        cafe: number;
        azucar: number;
    };

    type CafePreparado ={
        mensaje: string;
        intensidad: "suave" | "fuerte"
    }

    const [intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]>("suave")

    const[ulyimoCafe, setUltimoCafe] = useState<CafePreparado | null> (null);

    const[azucarIn, setAzucarIn]=useState<number | undefined>(undefined);
    // DIFERENCIA ENTRE TYPE E INTERFACE

    /*type CardProps ={title:string};
    interface CardPropsI {
        title:string;
    }
    interface Battle{arena:string}
    interface Battle{ki:number}
    const peleaOk:Battle={arena:"Namek",ki:1500}
    */

    interface RecetaBase{
        agua: number;
        cafe:number;
    }
    interface RecetaAzucar extends RecetaBase {
        azucar:number;
    }
    interface MaquinaCafe {
        modelo:string;
    }
    interface MaquinaCafe {
        //aguaMax?:number; si se le pone ? se convierte en opcional
        aguaMax?:number; 
    }
    const maquina:MaquinaCafe = {modelo:"Kame-500", aguaMax:2000};

    function prepararCafe ({agua=0,cafe=0,azucar=0}: RecetaCafe):CafePreparado{
        const intensidad = cafe>10?"fuerte":"suave";
        return{
            mensaje:
            `Cafe listo con ${agua}ml de agua y ${cafe}g de cafe` + (azucar ? `+ ${azucar}g de azucar`: ""),
            intensidad,
        };
    }
    interface CafePreparadoI{mensaje:string; intensidad:"suave"|"fuerte"}
    function prepararCafeI(receta:RecetaAzucar):CafePreparadoI{
        const intensidad =
        receta.cafe>10? "fuerte":"suave";
        return {
            mensaje: `Cafe listo (INTF) con ${receta.agua}ml de agua y ${receta.cafe}g de cafe + ${receta.azucar}g azucar`,
            intensidad,
        };

    }
    const OnCafe = ()=>{
        const resultado = prepararCafe({agua:200, cafe:15, azucar:5});
        alert(resultado.mensaje + " con intensidad: " + resultado.intensidad);
    };
    const onCafeInterface =()=>{
            const resultado = prepararCafeI({agua:200, cafe:15, azucar:5});
            alert(resultado.mensaje + " con intensidad: " + resultado.intensidad);
    };

    //Intersecciones

    type A={nombre:string}
    type B={edad:number}
    type C={state?:boolean}
    type Persona =A & B & C
    const juanObject:Persona ={nombre:"juan",edad:30, state:true}

    return(
        <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col p-4 gap-4">
            <Link to="/" className="px-4 py-2 bg-amber-600 hover: bg-amber-500 text-white rounded-lg shadow-md">
            Volver a Home</Link>
            <span>Modulo 2 Page</span>
            <button className= "bg-amber-500 text-black rounded-2x1" onClick={OnCafe}>Hacer cafe con Type
            </button>
            
            <button className= "bg-amber-500 text-black rounded-2x1" onClick={onCafeInterface}>Hacer cafe con Interface
            </button>
            <span>state tipados</span>
            {intensidadUI}
            <button onClick={()=>setIntensidadUI("fuerte")}>Cambiar state</button>
            
            <span>Contador</span>
            <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50" 
            onClick={dec}>-</button>
            <span className="min-w-[3ch] text-center text-2x1 font-semibold text-white">{count}</span>
            <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50" 
            onClick={inc}>+</button>
            <h2>Intersecion(&)</h2>
            {juanObject.nombre} - {juanObject.edad}

            <pre>{JSON.stringify(juanObject, null,2)}</pre>
        </div>
    )
}