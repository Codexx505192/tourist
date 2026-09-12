import Link from "next/link";

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer_left">
                <p className="txt_11">MNTN</p>
                <p className="txt_12">
                    Get out there & discover your next <br />
                    slope, mountain & destination!
                </p>

                <p className="txt_13">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
            </div>

            <div className="footer_right">
                <div className="footer_itm">
                    <p className="txt_14">More on The Blog</p>

                    <ul className="footer_list">
                        <li>
                            <Link href="#" className="lnk_f">About MNTN</Link>
                        </li>
                        <li>
                            <Link href="#" className="lnk_f">Contributors & Writers</Link>
                        </li>
                        <li>
                            <Link href="#" className="lnk_f">Write For Us</Link>
                        </li>
                        <li>
                            <Link href="#" className="lnk_f">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="#" className="lnk_f">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer_itm">
                    <p className="txt_14">More on MNTN</p>

                    <ul className="footer_list">
                        <li>
                            <Link href="#" className="lnk_f">The Team</Link>
                        </li>
                        <li>
                            <Link href="#" className="lnk_f">Jobs</Link>
                        </li>
                        <li>
                            <Link href="#" className="lnk_f">Press</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}