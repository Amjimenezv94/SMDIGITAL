import React from 'react'
import atraerClientes from'../Assets/IMGS/atraerClientes.jpg';
import diseño from '../Assets/IMGS/diseño.jpg';
import ideas from '../Assets/IMGS/ideas.jfif'

const Blog = () => {
    return (
        <div className="container" id="Blog">
            
            <div className="col-md-12">
            <h1> Blog</h1>
            <br/>
            <hr/>
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary"> Atraer Clientes</strong>
                        <h3 className="mb-0">Publicación destacada</h3>
                        <div className="mb-1 text-muted">Jun 12</div>
                        <p className="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi qui ipsam, soluta iusto laudantium minus excepturi dolores quaerat maxime nisi neque dolore alias voluptas corrupti facere voluptatem dignissimos accusantium eos!</p>
                        
                        <a href="#" className="stretched-link">Continuar leyendo</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={atraerClientes} className="bd-placeholder-img" width="200" height="250" />
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary"> Diseño web</strong>
                        <h3 className="mb-0">Página web como carta de presentación</h3>
                        <div className="mb-1 text-muted">May 12</div>
                        <p className="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi qui ipsam, soluta iusto laudantium minus excepturi dolores quaerat maxime nisi neque dolore alias voluptas corrupti facere voluptatem dignissimos accusantium eos!</p>
                        <a href="#" className="stretched-link">Continuar leyendo</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img src={diseño} className="bd-placeholder-img" width="200" height="250" />
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary"> Innovación</strong>
                        <h3 className="mb-0">Innovación como motor de la industria</h3>
                        <div className="mb-1 text-muted">Abr 12</div>
                        <p className="card-text mb-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi qui ipsam, soluta iusto laudantium minus excepturi dolores quaerat maxime nisi neque dolore alias voluptas corrupti facere voluptatem dignissimos accusantium eos!</p>
                        <a href="#" className="stretched-link ">Continuar leyendo</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img src={ideas} className="bd-placeholder-img" width="200" height="250" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Blog
