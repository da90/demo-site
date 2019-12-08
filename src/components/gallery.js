import React from "react"
import Image from "../components/image"
import {Link} from "gatsby"  

const Gallery = () => <section className="gallery">
    <div className="gallery__card">
        <Image alt="Picture of a building" filename="img1.png" />
        <div>
            <h5>Nemo enim ipsam voluptatem quia voluptas sit</h5>
            <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <Link to="/dashboard" className="button button--secondary">View</Link>
        </div>
    </div>

    <div className="gallery__card">
        <Image alt="Pencils" filename="img2.png" />
        <div>
            <h5>Nemo enim ipsam voluptatem quia voluptas sit</h5>
            <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <Link to="/dashboard" className="button button--secondary">View</Link>
        </div>
    </div>

    <div className="gallery__card">
        <Image alt="Picture of TV" filename="img3.png" />
        <div>
            <h5>Nemo enim ipsam voluptatem quia voluptas sit</h5>
            <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <Link to="/dashboard" className="button button--secondary">View</Link>
        </div>
    </div>

    <div className="gallery__card">
        <Image alt="Buildings picture" filename="img4.png" />
        <span>New</span>
        <div>
            <h5>Nemo enim ipsam voluptatem quia voluptas sit</h5>
            <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <Link to="/dashboard" className="button button--secondary">View</Link>
        </div>
    </div>

    <div className="gallery__card">
        <Image alt="Picture of a watch" filename="img5.png" />
        <div>
            <h5>Nemo enim ipsam voluptatem quia voluptas sit</h5>
            <p>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <Link to="/dashboard" className="button button--secondary">View</Link>
        </div>
    </div>
</section>

export default Gallery