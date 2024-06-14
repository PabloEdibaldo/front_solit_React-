
const ProductosCategoria = ({ productosPorCategoria }) => {

    return (
        <div>
            {Object.keys(productosPorCategoria).map(categoria => (
                <div key={categoria}>
                    <h2>{categoria}</h2>
                    <ul>
                        {productosPorCategoria[categoria].map(producto => (
                            <li key={producto.nombre}>{producto.nombre}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );


}
export default ProductosCategoria;