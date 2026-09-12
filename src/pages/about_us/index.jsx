import Header from "@/widjets/Header";
import style from './about.module.css'

export default function Page(){
    return(
        <main>
            <section className={style.about_back}>
                   <Header/>
                <div className="container">
                   <div className={style.about_block}>
                    <h1>About</h1>
                   </div>
                </div>
            </section>
        </main>
    )
}