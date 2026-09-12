import Header from "@/widjets/Header";
import style from './blog.module.css'

export default function Page(){
    return(
        <main>
            <section className={style.blog_back}>
                <div className="container">
                    <Header/>
                    <div className={style.blog_cont}>

                    </div>
                </div>
            </section>
        </main>
    )
}