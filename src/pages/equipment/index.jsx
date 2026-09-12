import Header from "@/widjets/Header";
import style from './equipment.module.css'

export default function Page(){
    return (
        <main>
           <section className={style.bkk}>
             <div className="container">
                <Header/>
                <div className={style.equipment_block}>

                </div>
            </div>
           </section>
        </main>
    )
}